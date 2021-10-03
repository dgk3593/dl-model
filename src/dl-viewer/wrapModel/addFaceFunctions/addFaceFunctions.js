import { DEFAULT_DRAGON_FACE } from "../../defaultParams";
import { calculateIdxOffset, calculateTextureOffset } from "./helper";
import { capitalize, syncLoadDispTexture } from "../../utils";
import { FBX_SOURCE } from "../../path";
import { createChangeProxy } from "@/dl-viewer/utils/createChangeProxy";

export const eyeRegex = /mEye_[0-9]/m;
export const mouthRegex = /mMouth_[0-9]/m;
const numRegex = /[0-9]{2}/;

/**
 * @type {("eye" | "mouth")[]}
 */
const parts = ["eye", "mouth"];

export default function addFaceFunctions(container) {
    const { type, meshes } = container;
    if (type === "adventurer") return addAdvFace(container);

    const isMeshFace = meshes.some(({ name }) => name.match(/mEye|mMouth/));
    return isMeshFace ? addMeshFace(container) : container;
}

/** Add face functionalities to adventurer model
 * @param {object} container
 * @return {object}
 */
function addAdvFace(container) {
    const { meshes, id } = container;
    /** get the path to an adventurer model's texture file
     * @param {string} id
     */
    const getTexturePath = id => `${FBX_SOURCE}/${id}/${id}.png`;

    const target = meshes.find(({ name }) => name === "mBodyAll");

    const params = {
        eyeIdx: 2,
        eyeBaseIdx: 2,
        mouthIdx: 2,
        mouthBaseIdx: 2,
        eyeTexture: id,
        mouthTexture: id,
    };
    const face = {
        type: "uv",
    };

    /**
     * @param {"eye" | "mouth"} part - part to apply offset
     */
    const applyOffset =
        part =>
        /**
         * @param {xyCoordinate} offset
         */
        ([offsetX, offsetY]) => {
            if (!target) return;

            const matName = `mt${capitalize(part)}CH`;
            const targetGroup = target.geometry.groups?.find(
                group => target.material[group.materialIndex]?.name === matName
            );
            if (!targetGroup) return;

            const { start, count } = targetGroup;
            const end = start + count;
            const uv = target.geometry.attributes.uv;
            for (let i = start; i < end; i++) {
                const u = uv.getX(i) + 0.25 * offsetX;
                const v = uv.getY(i) + 0.25 * offsetY;
                uv.setXY(i, u, v);
            }
            uv.needsUpdate = true;
        };

    /**
     * @param {"eye" | "mouth"} part - part to apply offset
     */
    const applyTexture =
        part =>
        /**
         * @param {string} newTexture
         */
        newTexture => {
            if (!target) return;

            const matName = `mt${capitalize(part)}CH`;
            const targetMaterial = target.material.find?.(
                ({ name }) => name === matName
            );
            if (!targetMaterial) return;

            const texturePath = getTexturePath(newTexture);
            targetMaterial.map.dispose();
            targetMaterial.map = syncLoadDispTexture(texturePath);
            targetMaterial.needsUpdate = true;
        };

    parts.forEach(part => {
        Object.defineProperties(face, {
            [`${part}Idx`]: {
                get() {
                    return params[`${part}Idx`];
                },
                /**
                 * @param {number} newIdx
                 */
                set(value) {
                    const newIdx = parseInt(value);
                    const oldIdx = this[`${part}Idx`];
                    params[`${part}Idx`] = newIdx;

                    const offset = calculateIdxOffset(newIdx, oldIdx);
                    applyOffset(part)(offset);
                },
            },
            [`${part}BaseIdx`]: {
                get() {
                    return params[`${part}BaseIdx`];
                },
                /**
                 * @param {number} newIdx
                 */
                set(value) {
                    params[`${part}BaseIdx`] = value;
                    this[`${part}Idx`] = value;
                },
            },
            [`${part}Texture`]: {
                get() {
                    return params[`${part}Texture`];
                },
                /**
                 * @param {string} newTexture
                 */
                set(newTexture) {
                    const oldTexture = this[`${part}Texture`];
                    params[`${part}Texture`] = newTexture;

                    applyTexture(part)(newTexture);

                    const offset = calculateTextureOffset(
                        newTexture,
                        oldTexture
                    );
                    applyOffset(part)(offset);
                },
            },
        });
    });
    container.face = createChangeProxy(face);

    return container;
}

/** Add face functionalities to model that changes facial expressions by show/hide mesh
 * @param {object} container
 * @return {object}
 */
function addMeshFace(container) {
    const { meshes } = container;
    const [eyeList, mouthList] = getEyeAndMouthMesh(meshes);

    // prevent frustum culling for eyes and mouths
    [...eyeList, ...mouthList].forEach(mesh => (mesh.frustumCulled = false));

    const meshesList = { eye: eyeList, mouth: mouthList };

    const params = {
        eyeIdx: "",
        eyeBaseIdx: "",
        mouthIdx: "",
        mouthBaseIdx: "",
    };

    const face = {
        eyeList,
        mouthList,
        type: "meshes",
    };

    /**
     *  @param { "eye" | "mouth" } part - part to set
     */
    const setFaceIdx =
        part =>
        /**
         * @param {number} idx - index to set
         */
        idx => {
            meshesList[part].forEach(mesh => {
                const { name } = mesh;
                const id = numRegex.exec(name)[0];
                mesh.visible = parseInt(id) === idx;
            });
        };

    parts.forEach(part =>
        Object.defineProperties(face, {
            [`${part}Idx`]: {
                get() {
                    return params[`${part}Idx`];
                },
                set(value) {
                    const idx = parseInt(value);
                    setFaceIdx(part)(idx);
                    params[`${part}Idx`] = `${idx}`;
                },
            },
            [`${part}BaseIdx`]: {
                get() {
                    return params[`${part}BaseIdx`];
                },
                /**
                 * @param {number} newIdx
                 */
                set(value) {
                    params[`${part}BaseIdx`] = value;
                    this[`${part}Idx`] = value;
                },
            },
        })
    );

    face.eyeBaseIdx = DEFAULT_DRAGON_FACE;
    face.mouthBaseIdx = DEFAULT_DRAGON_FACE;

    container.face = createChangeProxy(face);

    return container;
}

/** Get eyes and mouth meshes of the given model
 * @param {THREE.Mesh[]} meshes
 * @returns {[eyes: THREE.Mesh[], mouths: THREE.Mesh[]]}
 */
function getEyeAndMouthMesh(meshes) {
    const eyes = meshes.filter(({ name }) => name.match(eyeRegex));
    const mouths = meshes.filter(({ name }) => name.match(mouthRegex));

    return [eyes, mouths];
}
