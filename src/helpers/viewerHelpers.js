import * as THREE from "three";
import { fbxSource } from "App";
import { v4 as uuid } from "uuid";

import { idxOffsets } from "helpers/consts";
import textureOffsets from "data/face_offset";

import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { callbackOnEach, getUpdated } from "helpers/helpers";
import {
    matCommonParams,
    matExtraParams,
    matColorParams,
    needsUpdateParams,
} from "helpers/consts";

import outlineFragShader from "shader/outlineFragShader";
import outlineVertShader from "shader/outlineVertShader";

/**
 * load a 3D model
 * @param {string} url
 * @return { ?Promise<THREE.Group>}
 */
export const loadModel = url => {
    return (
        url &&
        new Promise(resolve => {
            new FBXLoader().load(url, resolve);
        })
    );
};

/**
 * Load a texture
 * @param {string} url
 * @return {Promise<THREE.Texture>}
 */
export const loadTexture = url => {
    return (
        url &&
        new Promise(resolve => {
            new THREE.TextureLoader().load(url, resolve);
        })
    );
};

/**
 * get the path to the animation file
 * @param {string} name
 */
const getAniPath = name => `${fbxSource}/animations/${name}.json`;

/**
 * load a single animation
 * @param {AniListItem} aniListItem
 * @return {Promise<THREE.AnimationClip>}
 */
const loadSingleAni = ({ aniName }) => {
    const path = getAniPath(aniName);
    return new Promise(resolve =>
        fetch(path)
            .then(response => response.json())
            .then(json => THREE.AnimationClip.parse(json))
            .then(resolve)
    );
};

/**
 * Load all animations in a list of animation
 * @param {AniList} aniList
 */
export const loadAnimations = aniList =>
    Promise.all(aniList.map(loadSingleAni));

/**
 * create an invisible floor for auto rotate feature
 */
export const createInvisibleFloor = () => {
    const floorGeometry = new THREE.PlaneBufferGeometry(0.1, 0.1);
    floorGeometry.rotateX(Math.PI / 2);

    const floorMaterial = new THREE.MeshBasicMaterial();
    floorMaterial.visible = false;

    return new THREE.Mesh(floorGeometry, floorMaterial);
};

/**
 * get all meshes of a 3D object
 * @param {THREE.Group} object
 * @param {Boolean} getOutline - whether to include outline meshes
 * @returns {Array}
 */
export const getMeshes = (object, getOutline = false) => {
    if (!object) return [];

    const meshes = [];
    object.traverse(child => {
        // @ts-ignore
        if (!child.isMesh) return;
        if (!getOutline && child.name === "outline") return;

        meshes.unshift(child);
    });
    return meshes;
};

/**
 * get all materials of a 3D object
 * @param {THREE.Group} object
 */
export const getMaterial = object => {
    if (!object) return [];

    const meshes = getMeshes(object);
    const materials = meshes.flatMap(mesh => mesh.material);
    return materials;
};

/**
 * get the path to the model's fbx file
 * @param {string} id
 */
export const getModelPath = id => `${fbxSource}/fbx/${id}/${id}.fbx`;

/**
 * get the path to the model's texture file
 * @param {string} id
 */
export const getTexturePath = id => `${fbxSource}/fbx/${id}/${id}.png`;

/**
 * get weapon data from weapon code
 * @param {string} code
 * @return {AdvWeaponData}
 */
export const analyzeWeaponCode = code => {
    if (!code) return null;

    const flipped = code.endsWith("b");
    const weaponCode = code.substring(0, code.length - 1);
    const modelPath = getModelPath(weaponCode);
    const texturePath = getTexturePath(weaponCode);

    return { modelPath, texturePath, flipped };
};

/**
 * dispose a 3D object
 */
export const dispose3dObject = object => {
    if (!object) return;

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
            dispose(mat.userData.backupMap);
            dispose(mat);
        });
    };

    const disposeMesh = mesh => {
        disposeMaterial(mesh);
        dispose(mesh.geometry);
    };

    const meshes = getMeshes(object, true);
    meshes.forEach(disposeMesh);
};

/**
 * get list of parameter names relevant to a material type
 * @param {string} matType
 */
export const getParamsList = matType => [
    ...matCommonParams,
    ...matExtraParams[matType],
];

/**
 * check if an ID is a dragon
 * @param {string} modelId
 */
export const isDragon = modelId =>
    modelId.startsWith("d") || modelId === "smith";

/**
 * Hide all eye and mouth that's not mEye_01 or mMouth_01
 */
export const initDragonFace = model => {
    const nameRegex = /m[A-Z].*_[0-9]/m;
    model.traverse(child => {
        if (!child.isMesh) return;

        const { name } = child;
        if (nameRegex.test(name)) {
            child.visible = name.includes("01");
        }
    });
};

/**
 * get all eye meshes of a dragon model
 */
export const getDragonEye = model => {
    const eyes = [];
    const nameRegex = /mEye_[0-9]/m;
    model.traverse(child => {
        if (!child.isMesh) return;

        const { name } = child;
        if (nameRegex.test(name)) {
            eyes.push(child);
        }
    });
    return eyes;
};

/**
 * get all mouth meshes of a dragon model
 */
export const getDragonMouth = model => {
    const mouths = [];
    const nameRegex = /mMouth_[0-9]/m;
    model.traverse(child => {
        if (!child.isMesh) return;

        const { name } = child;
        if (nameRegex.test(name)) {
            mouths.push(child);
        }
    });
    return mouths;
};

/**
 * make all effect meshes of the model invisible
 * @param {THREE.Group} model
 */
export const removeEffects = model => {
    const meshes = getMeshes(model);
    meshes.forEach(mesh => (mesh.visible = !mesh.name.includes("Eff")));
};

/**
 * create a new material
 * @param {string} materialType - type of material to create
 * @param {Object} params
 * @param {THREE.Texture} params.map - texture for new material
 * @param {Boolean} params.skinning
 * @return {THREE.Material}
 */
const createNewMaterial = (materialType, params) => {
    const matType = `Mesh${materialType}Material`;
    return new THREE[matType](params);
};

/**
 * change material and optionally the texture of a 3D object
 * @param {THREE.Group} target - object to apply change to
 * @param {object} params - parameters
 * @param {string} params.materialType - type of material to change to
 * @param {string} [params.texturePath] - path to texture file
 * @param {boolean} [params.forced] - force material change
 */
export const changeMaterial = (
    target,
    { materialType, texturePath = "", forced = false }
) => {
    if (!target) return;

    const meshes = getMeshes(target);
    meshes.forEach(mesh => {
        const materials = [mesh.material].flat();
        const matIsArray = Array.isArray(mesh.material);

        if (!forced && !texturePath) {
            const checkParam = `isMesh${materialType}Material`;
            const needToChange = materials.some(mat => !mat[checkParam]);
            if (!needToChange) return;
        }

        materials.forEach((mat, i) => {
            /**
             * @type {THREE.Texture}
             */
            const texture = texturePath
                ? new THREE.TextureLoader().load(texturePath)
                : materials[i].map;

            if (texturePath) texture.encoding = THREE.sRGBEncoding;

            const initParams = {
                map: texture,
                skinning: true,
            };
            const newMaterial = createNewMaterial(materialType, initParams);
            newMaterial.name = mat.name;
            if (mat.userData.backupMap) {
                newMaterial.userData.backupMap = mat.userData.backupMap;
            }

            if (texturePath) {
                mat.map?.dispose?.();
                mat.userData.backupMap?.dispose?.();
            }
            mat.dispose();

            if (matIsArray) {
                mesh.material[i] = newMaterial;
            } else {
                mesh.material = newMaterial;
            }
        });
    });
};

/**
 * Add outline to object and return reference to outlines
 * @param {THREE.Group} object
 * @param {OutlineParams} params
 */
export const createOutline = (object, params) => {
    if (!object) return;

    const outlines = [];

    /**
     * if a mesh's name includes any word in this list, skip
     */
    const skipList = ["Eff", "Extension"];
    const meshes = getMeshes(object);
    meshes.forEach(mesh => {
        const { name } = mesh;
        if (skipList.some(word => name.includes(word))) return;

        const outline = mesh.clone();
        outlines.push(outline);

        const newMaterial = createOutlineMaterial(params);
        replaceMaterial(outline, newMaterial);
        outline.visible = params.enable;
        outline.name = "outline";

        if (mesh.isSkinnedMesh) {
            outline.bind(mesh.skeleton, mesh.bindMatrix);
        }
        mesh.parent.add(outline);
    });
    return outlines;
};

/**
 * create outline material
 * @param {OutlineParams} params
 */
const createOutlineMaterial = ({ size, color, opacity }) => {
    const uniforms = {
        size: { type: "float", value: size },
        color: { tyle: "vec3", value: new THREE.Color(color) },
        opacity: { type: "float", value: opacity },
    };

    return new THREE.ShaderMaterial({
        skinning: true,
        side: THREE.BackSide,
        transparent: true,
        uniforms,
        fragmentShader: outlineFragShader,
        vertexShader: outlineVertShader,
    });
};

/**
 * apply settings to an outline mesh
 * @param {THREE.Mesh} outline
 * @param {Map<string, *>} settings
 */
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

/**
 * replace material of an object
 */
const replaceMaterial = (object, newMaterial) => {
    const { material } = object;
    // dispose old material
    callbackOnEach(material, mat => {
        mat.map?.dispose?.();
        mat.userData.backupMap?.dispose?.();
        mat.dispose();
    });
    // apply new material
    const matIsArray = Array.isArray(object.material);
    object.material = matIsArray
        ? new Array(object.material.length).fill(newMaterial)
        : newMaterial;
};

/**
 * calculate the difference between 2 face texture files
 * @param {string} currentTexture
 * @param {string} prevTexture
 * @return {xyCoordinate}
 */
export const calculateTextureOffset = (currentTexture, prevTexture) => {
    const offset = { x: 0, y: 0 };
    if (currentTexture !== prevTexture) {
        const [prevOffsetX, prevOffsetY] = textureOffsets[prevTexture] || [
            0,
            0,
        ];
        const [currentOffsetX, currentOffsetY] = textureOffsets[
            currentTexture
        ] || [0, 0];

        offset.x = currentOffsetX - prevOffsetX;
        offset.y = currentOffsetY - prevOffsetY;
    }
    return [offset.x, offset.y];
};

/**
 * calculate the difference between 2 face index
 * @param {number} currentIdx
 * @param {number} prevIdx
 * @return {xyCoordinate}
 */
export const calculateIdxOffset = (currentIdx, prevIdx) => {
    const offset = { x: 0, y: 0 };
    if (currentIdx !== prevIdx) {
        const [prevOffsetX, prevOffsetY] = idxOffsets[`face${prevIdx}`];
        const [currentOffsetX, currentOffsetY] = idxOffsets[
            `face${currentIdx}`
        ];

        offset.x = currentOffsetX - prevOffsetX;
        offset.y = currentOffsetY - prevOffsetY;
    }
    return [offset.x, offset.y];
};

/**
 * generate offset applying functions
 * @param {string} part - part to apply offset
 */
const applyOffset = part => (target, offset) => {
    const [offsetX, offsetY] = offset;
    target.traverse(child => {
        if (!child.isMesh) return;

        const targetGroup = child.geometry.groups?.find(
            group => child.material[group.materialIndex]?.name === `mt${part}CH`
        );
        if (!targetGroup) return;

        const { start, count } = targetGroup;
        const end = start + count;
        const uv = child.geometry.attributes.uv;
        for (let i = start; i < end; i++) {
            const u = uv.getX(i) + 0.25 * offsetX;
            const v = uv.getY(i) + 0.25 * offsetY;
            uv.setXY(i, u, v);
        }
        uv.needsUpdate = true;
    });
};

export const applyEyeOffset = applyOffset("Eye");
export const applyMouthOffset = applyOffset("Mouth");
// export const applyBodyOffset = applyOffset("BodyAll");

/**
 * generate texture applying functions
 * @param {string} part - part to apply offset
 */
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
        const oldMaterial = child.material[materialIndex];
        newMaterial.name = oldMaterial.name;

        child.material[materialIndex] = newMaterial;
    });
};

export const applyEyeTexture = applyTexture("Eye");
export const applyMouthTexture = applyTexture("Mouth");
// export const applyBodyTexture = applyTexture("BodyAll");

/**
 * get animation modifiers from a list of modifiers
 * @param {Array<string>} modList
 * @return {AniModifier} object containing values to modify animation
 */
const getAniModifiers = modList => {
    /**
     * @type {FaceChangeArray}
     */
    const faceChanges = [];
    let timeScale = 1,
        repetitions = 1;

    modList.forEach(mod => {
        const [key, value] = mod.split("=");
        if (key === "ts") {
            timeScale = parseFloat(value);
        }
        if (key === "r") {
            repetitions = parseInt(value);
        }
        if (key.includes("-")) {
            const [part, time] = key.split("-");
            const faceMod = { time: parseFloat(time) };
            const indexName = `${part === "e" ? "eye" : "mouth"}Idx`;
            faceMod[indexName] = value;
            faceChanges.push(faceMod);
        }
    });

    return {
        timeScale,
        repetitions,
        faceChanges: processFaceChanges(faceChanges),
    };
};

/**
 * get animation data from single animation code
 * @param {string} code - single animation code
 * @return {AniListItem}
 */
const getAniData = code => {
    const [aniName, ...modList] = code.split("&");
    const modifiers = getAniModifiers(modList);
    return { aniName, ...modifiers };
};

/**
 * turn chain animation code to a list of animation name and modifiers
 * @param {string} code
 * @return {AniList}
 */
export const analyzeChainCode = code => {
    if (!code) return [];

    const aniCodes = code.split(">");
    const aniList = aniCodes.map(getAniData);

    return aniList;
};

/**
 * simplify and sort a face change array
 * @param {FaceChangeArray} faceChanges
 * @return {FaceChangeArray} simplified and sorted face change array
 */
export const processFaceChanges = faceChanges => {
    if (!faceChanges.length) return faceChanges;

    const sorted = faceChanges.sort((a, b) => a.time - b.time);
    const timeStamps = new Set(faceChanges.map(change => change.time));
    if (faceChanges.length === timeStamps.size) {
        sorted.forEach(change => {
            change.id = uuid();
        });
        return sorted;
    }

    /**
     * @type {FaceChangeArray}
     */
    const simplified = [];
    timeStamps.forEach(time => {
        let output = { time, id: uuid(), eyeIdx: NaN, mouthIdx: NaN };
        const changes = sorted.filter(change => change.time === time);
        changes.forEach(change => (output = Object.assign(output, change)));
        simplified.push(output);
    });
    return simplified;
};

/**
 * extend face change array if repetitions > 1
 * @param {FaceChangeArray} faceChanges - face change array
 * @param {number} repetitions - number of repetitions
 * @return {FaceChangeArray} extended face change array
 */
export const getFaceChangesArray = (faceChanges, repetitions) => {
    if (!faceChanges) return [];
    if (repetitions === 1) return [...faceChanges];
    // [0, 100, 200,...]
    const timeOffset = new Array(repetitions).fill().map((_, i) => i * 100);

    /**
     * offset the time of the whole face change array
     * @param {number} offset
     * @return {FaceChangeArray} offsetted array
     */
    const offsetFaceChanges = offset =>
        faceChanges.map(({ time, id, ...others }) => ({
            ...others,
            time: time + offset,
        }));

    return timeOffset.flatMap(offsetFaceChanges);
};

/**
 * convert animation chain code to AnimationChain
 * @param {string} code - animation chain code
 * @param {string} name - animation name
 * @return {AnimationChain}
 */
export const chainCodeToList = (code, name) => {
    const aniList = analyzeChainCode(code);
    const length = aniList.length;
    const output = aniList.map((ani, i) => {
        const { aniName, timeScale, repetitions, faceChanges } = ani;
        const partName = name.concat(length > 1 ? `#${i + 1}` : "");
        /**
         * @type {AniChainItem}
         */
        const listItem = {
            name: partName,
            id: uuid(),
            aniName,
            timeScale,
            repetitions,
            faceChanges,
        };
        return listItem;
    });
    return output;
};

/**
 * create gradient map for toon material
 * @param {number} nTones - number of tones
 */
export const createGradientMap = nTones => {
    const colors = new Uint8Array(nTones).map((_, i) => (i * 256) / nTones);
    const map = new THREE.DataTexture(colors, nTones, 1, THREE.LuminanceFormat);
    map.minFilter = THREE.NearestFilter;
    map.magFilter = THREE.NearestFilter;
    map.generateMipmaps = false;

    return map;
};

/**
 * apply a parameter change to all material of input array
 * @param {Array} materials - array of materials
 * @param {[paramName: string, value:*]} param parameters to apply
 */
export const applyMaterialParam = (materials, param) => {
    const [key, value] = param;
    let handler;
    const needsUpdate = needsUpdateParams.includes(key);

    switch (key) {
        case "gradientMap":
            const nTones = parseInt(value);
            const newMap = nTones ? createGradientMap(nTones) : null;
            handler = mat => (mat.gradientMap = newMap);
            break;
        case "useTexture":
            handler = value
                ? mat => {
                      mat.map = mat.userData.backupMap;
                      mat.userData.backupMap = null;
                  }
                : mat => {
                      if (mat.map) mat.userData.backupMap = mat.map;
                      mat.map = null;
                  };
            break;
        default:
            const isColor = matColorParams.includes(key);
            handler = mat =>
                (mat[key] = isColor ? new THREE.Color(value) : value);
    }

    materials.forEach(mat => {
        handler(mat);
        mat.needsUpdate = needsUpdate;
    });
};

/**
 * update model's material parameters
 * @param {THREE.Group} model
 * @param {{ prevParams?: {}, params: {} }} data
 */
export const updateMatParams = (model, { prevParams = {}, params }) => {
    const materials = getMaterial(model);
    const updated = getUpdated(prevParams, params);
    updated.forEach(update => applyMaterialParam(materials, update));
};

/**
 * create light from params
 * @param {LightParam} params
 * @return {THREE.Light}
 */
export const createLight = params => {
    const { type, color, intensity, ...others } = params;

    const constructor = `${type}Light`;
    const light = new THREE[constructor](color, intensity);

    for (const [key, value] of Object.entries(others)) {
        if (key === "position") {
            const setValue = value.map(v => v || 0);
            light.position.set(...setValue);
            continue;
        }
        light[key] = value;
    }

    return light;
};

/**
 * replace model's old texture with a new texture from provided path
 * @param {THREE.Group} target - object to replace texture
 * @param {Object} params
 * @param {string} params.oldTexture - name of texture to be replaced
 * @param {string} params.texturePath - path to new texture file
 */
export const replaceTexture = async (target, { oldTexture, texturePath }) => {
    const newTexture = await loadTexture(texturePath);
    newTexture.encoding = THREE.sRGBEncoding;

    const material = getMaterial(target);
    material.forEach(mat => {
        const textureName = mat.map?.name;
        if (textureName?.includes(oldTexture)) {
            mat.map?.dispose?.();
            mat.map = newTexture;
        }
    });
};

/**
 * log the updated values to console
 * @param {{ }} prev - previous state
 * @param {{ }} current - current state
 */
export const logUpdate = (prev, current) => {
    const updated = getUpdated(prev, current);
    updated.forEach(([key, value]) => {
        const oldValue = prev[key];
        const subkeys = Object.keys(value);

        const isSingleValue = subkeys.length === 0 || typeof value === "string";
        if (isSingleValue) {
            console.log(
                `${key}: ${JSON.stringify(oldValue)} to ${JSON.stringify(
                    value
                )}`
            );
            return;
        }
        subkeys.forEach(subkey => {
            if (oldValue[subkey] === value[subkey]) return;

            console.log(
                `${key}.${subkey}: ${JSON.stringify(
                    oldValue[subkey]
                )} to ${JSON.stringify(value[subkey])}`
            );
        });
    });
};
