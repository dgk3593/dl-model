import { isBlade } from "../utils";
import { loadTexture } from "../utils/loader";
import * as THREE from "three";
import { DLViewer } from "../../dl-viewer";

export default function addTextureFunctions(container) {
    const { material, id } = container;
    const fbxSource = DLViewer.source.fbx;

    const defaultTexture = getDefaultTexture(id);

    if (isBlade(id)) {
        (async function () {
            const texturePath = getTexturePath(defaultTexture);
            const texture = new THREE.TextureLoader().load(texturePath);
            texture.encoding = THREE.sRGBEncoding;
            texture.name = defaultTexture;
            material.list.forEach(mat => (mat.map = mat.map ?? texture));
        })();
    }

    let texture = defaultTexture;
    Object.defineProperty(container, "texture", {
        get() {
            return texture;
        },

        /**
         * @param {string} newTexture
         */
        set(newTexture) {
            if (!newTexture) {
                this.texture = defaultTexture;
                return;
            }
            if (newTexture === texture) return;

            const texturePath = getTexturePath(newTexture);
            const [, newTextureName] = analyzeTextureStr(newTexture);
            const [, oldTextureName] = analyzeTextureStr(this.texture);

            const matList = material.list.filter(
                mat =>
                    mat.map?.name?.includes(oldTextureName) ||
                    mat.userData.backupMap?.name?.includes(oldTextureName)
            );

            if (!matList.length) return;

            (async function () {
                const newTexture = await loadTexture(texturePath);
                newTexture.name = newTextureName;

                matList.forEach(mat => {
                    if (mat.map) {
                        mat.map.dispose?.();
                        mat.map = newTexture;
                    }

                    if (mat.userData.backupMap) {
                        mat.userData.backupMap.dispose?.();
                        mat.userData.backupMap = newTexture;
                    }
                });
            })();

            texture = newTexture;
        },
    });

    /**
     * analyze a texture string
     * @param {string} textureStr
     * @return {[source: string, name: string]}
     */
    function analyzeTextureStr(textureStr) {
        const [source, name] = textureStr.split(">");
        const textureSource = source || id;
        const textureName = name || getDefaultTexture(textureSource);
        return [textureSource, textureName];
    }

    /** get the texture path
     * @param {string} texture
     */
    function getTexturePath(texture) {
        const [source, name] = analyzeTextureStr(texture);

        return `${fbxSource}/${source}/${name}.png`;
    }

    return container;
}

/** get the name of the default texture file of a model from id
 * @param {string} id - model id
 */
export const getDefaultTexture = id =>
    id.match(/_[0-9]{2}/) || id.startsWith("h") ? id : `${id}_01`;
