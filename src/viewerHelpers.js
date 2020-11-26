import * as THREE from "three";
import { fbxSource } from "./App";
import { v4 as uuid } from "uuid";

import { idxOffsets, incompatibleModels } from "./consts";
import textureOffsets from "./data/face_offset";

import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { callbackOnEach } from "./helpers";

import outlineFragShader from "./shader/outlineFragShader";
import outlineVertShader from "./shader/outlineVertShader";

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

export const createInvisibleFloor = () => {
    const floorGeometry = new THREE.PlaneBufferGeometry(0.1, 0.1);
    floorGeometry.rotateX(Math.PI / 2);
    const floorMaterial = new THREE.MeshBasicMaterial();
    floorMaterial.visible = false;
    return new THREE.Mesh(floorGeometry, floorMaterial);
};

export const getModelPath = id => `${fbxSource}/fbx/${id}/${id}.fbx`;

export const getTexturePath = id => `${fbxSource}/fbx/${id}/${id}.png`;

export const analyzeWeaponCode = code => {
    if (!code) return "";
    const flipped = code.endsWith("b");
    const weaponCode = code.substring(0, code.length - 1);
    const modelPath = getModelPath(weaponCode);
    const texturePath = getTexturePath(weaponCode);

    return { modelPath, texturePath, flipped };
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
    const disposeMaterial = object => {
        callbackOnEach(object.material, mat => {
            dispose(mat.map);
            dispose(mat.backupMap);
            dispose(mat);
        });
    };

    const meshes = [];
    item.traverse(child => child.isMesh && meshes.shift(child));

    meshes.forEach(mesh => {
        disposeMaterial(mesh);
        dispose(mesh.geometry);
    });
};

export const isSimpleViewer = modelId =>
    !modelId.startsWith("c") ||
    modelId.endsWith("_h") ||
    incompatibleModels.has(modelId);

export const isDragon = modelId =>
    modelId.startsWith("d") || modelId === "smith";

// Hide all eye and mouth that's not mEye_01 or mMouth_01
export const initDragonFace = model => {
    model.traverse(child => {
        if (!child.isMesh) return;

        const nameRegex = /m[A-Z].*_/m;
        const { name } = child;
        if (nameRegex.test(name)) {
            child.visible = name.includes("01");
        }
    });
};

const createNewMaterial = (materialType, params) => {
    const matType = `Mesh${materialType}Material`;
    return new THREE[matType](params);
};

export const changeMaterial = (target, { materialType, texturePath }) => {
    if (!target) return;
    target.traverse(child => {
        if (!child.isMesh || child.name === "outline") return;

        const checkParam = `isMesh${materialType}Material`;
        const materials = [child.material].flat();
        const matIsArray = Array.isArray(child.material);

        if (materials.every(mat => mat[checkParam]) && !texturePath) return;

        materials.forEach((mat, i) => {
            const texture = texturePath
                ? new THREE.TextureLoader().load(texturePath)
                : materials[i].map;

            if (texturePath) texture.encoding = THREE.sRGBEncoding;

            const materialParams = {
                map: texture,
                skinning: true,
            };
            const newMaterial = createNewMaterial(materialType, materialParams);
            newMaterial.name = mat.name;
            if (mat.backupMap) newMaterial.backupMap = mat.backupMap;

            if (texturePath && materials[i].map) {
                materials[i].map.dispose();
            }
            materials[i].dispose();

            if (matIsArray) {
                child.material[i] = newMaterial;
            } else {
                child.material = newMaterial;
            }
        });
    });
};

// Add outline to object and return reference to outlines
export const createOutline = (object, params) => {
    if (!object) return;
    const outlines = []; // return value
    object.traverse(child => {
        if (!child.isMesh) return;

        const outline = child.clone();
        outlines.push(outline);

        const newMaterial = createOutlineMaterial(params);
        replaceMaterial(outline, newMaterial);
        outline.visible = params.enable;
        outline.name = "outline";

        if (child.isSkinnedMesh) {
            outline.bind(child.skeleton, child.bindMatrix);
        }
        child.parent.add(outline);
    });
    return outlines;
};

const createOutlineMaterial = ({ size, color, opacity }) => {
    const uniforms = {
        size: { type: "float", value: size },
        color: { tyle: "vec3", value: new THREE.Color(color) },
        opacity: { type: "float", value: opacity },
    };

    const material = new THREE.ShaderMaterial({
        skinning: true,
        side: THREE.BackSide,
        transparent: true,
        uniforms,
        fragmentShader: outlineFragShader,
        vertexShader: outlineVertShader,
    });
    return material;
};

export const applyOutlineSettings = (outline, settings) => {
    if (!outline || !settings) return;

    const { material } = outline;
    settings.forEach((value, key) => {
        switch (key) {
            case "enable":
                outline.visible = value;
                break;
            case "color":
                callbackOnEach(
                    material,
                    mat => (mat.uniforms.color.value = new THREE.Color(value))
                );
                break;
            default:
                callbackOnEach(
                    material,
                    mat => (mat.uniforms[key].value = value)
                );
        }
    });
};

// replace material of an object
const replaceMaterial = (object, newMaterial) => {
    const { material } = object;
    // dispose old material
    callbackOnEach(material, mat => {
        // obj.map?.dispose?.()
        if (mat.map) mat.map.dispose();
        mat.dispose();
    });
    // apply new material
    const matIsArray = Array.isArray(object.material);
    object.material = matIsArray
        ? new Array(object.material.length).fill(newMaterial)
        : newMaterial;
};

export const calculateTextureOffset = (currentTexture, prevTexture) => {
    const offset = { x: 0, y: 0 };
    if (currentTexture !== prevTexture) {
        const prevOffset = textureOffsets[prevTexture] || { x: 0, y: 0 };
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

const applyOffset = part => (target, offset) => {
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

const applyTexture = part => (target, { materialType, textureId }) => {
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
            currentAni = {},
            faceChanges = [];
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
                if (key.includes("-")) {
                    const [part, time] = key.split("-");
                    const faceMod = { time: parseFloat(time) };
                    const indexName = `${part === "e" ? "eye" : "mouth"}Idx`;
                    faceMod[indexName] = value;
                    faceChanges.push(faceMod);
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
            faceChanges: processFaceChanges(faceChanges),
        };
        animationList.push(currentAni);
    }
    return [fileList, animationList];
};

export const processFaceChanges = faceChanges => {
    if (!faceChanges.length) return faceChanges;

    const sorted = faceChanges.sort(change => change.time);
    const timeStamps = new Set(faceChanges.map(change => change.time));
    if (faceChanges.length === timeStamps.size) {
        sorted.forEach(change => {
            change.id = uuid();
        });
        return sorted;
    }

    const simplified = [];
    timeStamps.forEach(time => {
        let output = { time, id: uuid(), eyeIdx: "", mouthIdx: "" };
        const changes = sorted.filter(change => change.time === time);
        changes.forEach(change => (output = Object.assign(output, change)));
        simplified.push(output);
    });
    return simplified;
};

export const getFaceChangesArray = (faceChanges, repetitions) => {
    if (!faceChanges) return [];
    if (repetitions === 1) return [...faceChanges];
    // [0, 100, 200,...]
    const timeOffset = new Array(repetitions).fill().map((_, i) => i * 100);

    const offsetFaceChanges = offset =>
        faceChanges.map(({ time, id, ...others }) => ({
            ...others,
            time: time + offset,
        }));

    return timeOffset.map(offsetFaceChanges).flat();
};

export const chainCodeToList = (code, name) => {
    const [fileList, animationList] = analyzeChainCode(code);
    const length = animationList.length;
    const output = animationList.map((ani, i) => {
        const { fileIdx, aniName, timeScale, repetitions, faceChanges } = ani;
        const partName = name.concat(length > 1 ? `#${i + 1}` : "");
        const listItem = {
            name: partName,
            fileName: fileList[fileIdx],
            aniName,
            timeScale,
            repetitions,
            faceChanges,
            id: uuid(),
        };
        return listItem;
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
