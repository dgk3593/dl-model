import * as THREE from "three";
import { fbxSource } from "./App";
import { v4 as uuid } from "uuid";

import { idxOffsets } from "./consts";
import textureOffsets from "./data/face_offset";

import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { callbackOnPotentialArray, isSheath } from "./helpers";

export const loadModel = url => {
    return (
        url &&
        new Promise(resolve => {
            new FBXLoader().load(url, resolve);
        })
    );
};

export const loadTexture = url => {
    return (
        url &&
        new Promise(resolve => {
            new THREE.TextureLoader().load(url, resolve);
        })
    );
};

export const getModelPath = id => `${fbxSource}/fbx/${id}/${id}.fbx`;

export const getTexturePath = id => `${fbxSource}/fbx/${id}/${id}.png`;

export const analyzeWeaponCode = code => {
    if (!code) return "";
    const flipped = code.endsWith("b");
    const weaponCode = code.substring(0, code.length - 1);
    const modelPath = getModelPath(weaponCode);
    const texturePath = getTexturePath(weaponCode);

    return {
        modelPath,
        texturePath,
        flipped,
        isSheath: isSheath(weaponCode),
    };
};

export const disposeItem = item => {
    if (!item) return;

    const disposedList = new Set();

    const notDisposed = object => !disposedList.has(object.uuid);

    const needToDispose = object => object && notDisposed(object);

    const disposeObject = object => {
        disposedList.add(object.uuid);
        object.dispose();
    };

    const dispose = object => {
        if (needToDispose(object)) disposeObject(object);
    };

    item.traverse(child => {
        if (!child.isMesh) return;

        // dispose material
        callbackOnPotentialArray(child.material, mat => {
            if (mat.map) dispose(mat.map);
            if (mat.backupMap) dispose(mat.backupMap);

            dispose(mat);
        });
        // dispose geometry
        dispose(child.geometry);
    });
};

const createNewMaterial = (materialType, params) => {
    const matType = `Mesh${materialType}Material`;
    return new THREE[matType](params);
};

export const changeMaterial = ({
    target,
    materialType = "Basic",
    texturePath,
}) => {
    if (!target) return;
    target.traverse(child => {
        if (!child.isMesh || child.name === "outline") return;

        const checkParam = `isMesh${materialType}Material`;
        const material = child.material;

        if (Array.isArray(material)) {
            if (material.every(mat => mat[checkParam]) && !texturePath) return;

            material.forEach((mat, i) => {
                const texture = texturePath
                    ? new THREE.TextureLoader().load(texturePath)
                    : material[i].map;

                if (texturePath) texture.encoding = THREE.sRGBEncoding;

                const materialParams = {
                    map: texture,
                    skinning: true,
                };
                const newMaterial = createNewMaterial(
                    materialType,
                    materialParams
                );
                newMaterial.name = mat.name;
                if (mat.backupMap) newMaterial.backupMap = mat.backupMap;

                if (texturePath && material[i].map) {
                    material[i].map.dispose();
                }
                material[i].dispose();
                child.material[i] = newMaterial;
            });
        } else {
            if (material[checkParam] && !texturePath) return;
            const texture = texturePath
                ? new THREE.TextureLoader().load(texturePath)
                : material.map;

            if (texturePath) texture.encoding = THREE.sRGBEncoding;
            const materialParams = {
                map: texture,
                skinning: true,
            };
            const newMaterial = createNewMaterial(materialType, materialParams);

            newMaterial.name = material.name;

            if (material.backupMap) newMaterial.backupMap = material.backupMap;

            if (texturePath && material.map) {
                material.map.dispose();
            }
            material.dispose();

            child.material = newMaterial;
        }
    });
};

const createOutlineMaterial = ({ size, color, opacity }) => {
    const newMaterial = new THREE.MeshToonMaterial({
        color,
        opacity,
        side: THREE.BackSide,
        transparent: true,
        skinning: true,
    });
    newMaterial.onBeforeCompile = shader => {
        const token = "#include <begin_vertex>";
        const customTransform = `
            vec3 transformed = position + objectNormal*${size * 0.0005};
        `;
        shader.vertexShader = shader.vertexShader.replace(
            token,
            customTransform
        );
    };
    return newMaterial;
};

// replace material of an object
const replaceMaterial = (object, newMaterial) => {
    // dispose old material
    callbackOnPotentialArray(object.material, obj => {
        // obj.map?.dispose?.()
        if (obj.map) obj.map.dispose();
        obj.dispose();
    });
    // apply new material
    if (Array.isArray(object.material)) {
        object.material = new Array(object.material.length).fill(newMaterial);
    } else {
        object.material = newMaterial;
    }
};

// change opacity of an object
export const changeOpacity = ({ material }, opacity) => {
    callbackOnPotentialArray(material, obj => {
        obj.opacity = opacity;
    });
};

// update outline shader to change size
const updateOutlineShader = (material, size) => {
    // Hacky way to force shader recompilation, needs fixing !!!!!!!!!!!!!!!!!!
    material.fog = !material.fog;
    material.needsUpdate = true;

    material.onBeforeCompile = shader => {
        const token = "#include <begin_vertex>";
        const customTransform = `
                vec3 transformed = position + objectNormal*${size * 0.0005};
            `;
        shader.vertexShader = shader.vertexShader.replace(
            token,
            customTransform
        );
    };
    setTimeout(() => {
        material.fog = !material.fog;
        material.needsUpdate = true;
    }, 100); // Sometimes doesn't work with 0 delay
};

// change size of outline
export const changeOutlineSize = ({ material }, size) => {
    if (Array.isArray(material)) {
        const updated = new Set();
        material.forEach(m => {
            if (updated.has(m.uuid)) return;

            updateOutlineShader(m, size);
            updated.add(m.uuid);
        });
    } else {
        updateOutlineShader(material, size);
    }
};

// Change color of outline
export const changeOutlineColor = ({ material }, color) => {
    if (Array.isArray(material)) {
        const updated = new Set();
        material.forEach(m => {
            if (updated.has(m.uuid)) return;

            m.color = new THREE.Color(color);
            updated.add(m.uuid);
        });
    } else {
        material.color = new THREE.Color(color);
    }
};

// Add outline to object and return reference to outlines
export const createOutline = (object, params) => {
    if (!object) return;
    const outlines = []; // return value
    object.traverse(child => {
        if (!child.isMesh) return;

        const outline = child.clone();
        outline.name = "outline";
        outline.visible = params.enable;

        outlines.push(outline);
        const newMaterial = createOutlineMaterial(params);
        replaceMaterial(outline, newMaterial);

        if (child.isSkinnedMesh) {
            outline.bind(child.skeleton, child.bindMatrix);
        }
        child.parent.add(outline);
    });
    return outlines;
};

export const calculateTextureOffset = (currentTexture, prevTexture) => {
    const offset = { x: 0, y: 0 };
    if (currentTexture !== prevTexture) {
        const prevOffset = textureOffsets[prevTexture] || {
            x: 0,
            y: 0,
        };
        const currentOffset = textureOffsets[currentTexture] || { x: 0, y: 0 };

        offset.x = currentOffset.x - prevOffset.x;
        offset.y = currentOffset.y - prevOffset.y;
    }
    return offset;
};

export const calculateIdxOffset = (currentIdx, prevIdx) => {
    const offset = { x: 0, y: 0 };
    if (currentIdx !== prevIdx) {
        const prevOffset = idxOffsets[`face${prevIdx}`];
        const currentOffset = idxOffsets[`face${currentIdx}`];

        offset.x = currentOffset.x - prevOffset.x;
        offset.y = currentOffset.y - prevOffset.y;
    }
    return offset;
};

const applyOffset = part => ({ target, offset }) => {
    target.traverse(child => {
        if (child.name !== "mBodyAll" || child.geometry.groups.length !== 3)
            return;

        const targetGroup = child.geometry.groups.find(
            group => child.material[group.materialIndex].name === `mt${part}CH`
        );
        if (!targetGroup) return;

        const { start, count } = targetGroup;
        const end = start + count;
        const uv = child.geometry.attributes.uv;
        for (let i = start; i < end; i++) {
            const u = uv.getX(i) + 0.25 * offset.x;
            const v = uv.getY(i) + 0.25 * offset.y;
            uv.setXY(i, u, v);
        }
        uv.needsUpdate = true;
    });
};

export const applyEyeOffset = applyOffset("Eye");
export const applyMouthOffset = applyOffset("Mouth");
// export const applyBodyOffset = applyOffset("BodyAll");

const applyTexture = part => ({
    target,
    materialType = "Basic",
    textureId,
}) => {
    const texturePath = getTexturePath(textureId);
    const texture = new THREE.TextureLoader().load(texturePath);
    texture.encoding = THREE.sRGBEncoding;

    const materialParams = {
        map: texture,
        skinning: true,
    };
    const newMaterial = createNewMaterial(materialType, materialParams);
    target.traverse(child => {
        if (child.name !== "mBodyAll" || child.geometry.groups.length !== 3)
            return;
        const targetGroup = child.geometry.groups.find(
            group => child.material[group.materialIndex].name === `mt${part}CH`
        );
        if (!targetGroup) return;

        const { materialIndex } = targetGroup;
        newMaterial.name = child.material[materialIndex].name;

        child.material[materialIndex] = newMaterial;
    });
};

export const applyEyeTexture = applyTexture("Eye");
export const applyMouthTexture = applyTexture("Mouth");
// export const applyBodyTexture = applyTexture("BodyAll");

// Chain Code is invalid if starts with the character "+"
export const analyzeChainCode = code => {
    if (!code) return ["", ""];
    const aniCodes = code.split(">");
    const nAni = aniCodes.length;
    const fileList = [];
    const animationList = [];
    for (let i = 0; i < nAni; i++) {
        let timeScale = 1,
            repetitions = 1,
            fileIdx = null,
            aniName = null,
            fileName = null,
            details,
            currentAni = {};
        const currentParts = aniCodes[i].split("+");
        const fromModelFile = currentParts.length === 1;
        if (fromModelFile) {
            details = currentParts[0];
        } else {
            [fileName, details] = currentParts;
            fileIdx = fileList.length - 1;
        }
        if (fileName) {
            fileIdx = fileList.length;
            fileList.push(fileName);
        }
        if (details.includes("&")) {
            const [name, ...settings] = details.split("&");
            aniName = name;
            for (let setting of settings) {
                const [key, value] = setting.split("=");
                if (key === "ts") {
                    timeScale = parseFloat(value);
                }
                if (key === "r") {
                    repetitions = value === "inf" ? Infinity : parseInt(value);
                }
            }
        } else {
            aniName = details;
        }
        currentAni = {
            fileIdx,
            aniName,
            timeScale,
            repetitions,
        };
        animationList.push(currentAni);
    }
    return [fileList, animationList];
};

export const chainCodeToList = (code, name) => {
    const [fileList, animationList] = analyzeChainCode(code);
    const length = animationList.length;
    const output = animationList.map((ani, i) => {
        const { fileIdx, aniName, timeScale, repetitions } = ani;
        const partName = name.concat(length > 1 ? `#${i + 1}` : "");
        return {
            name: partName,
            fileName: fileList[fileIdx],
            aniName,
            timeScale,
            repetitions,
            id: uuid(),
        };
    });
    return output;
};

export const createGradientMap = nTones => {
    const colors = new Uint8Array(nTones).map((_, i) => (i * 256) / nTones);
    const map = new THREE.DataTexture(colors, nTones, 1, THREE.LuminanceFormat);
    map.minFilter = THREE.NearestFilter;
    map.magFilter = THREE.NearestFilter;
    map.generateMipmaps = false;

    return map;
};
