import * as THREE from "three";
import { fbxSource } from "./App";
import { v4 as uuid } from "uuid";

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

        // If material is already of desired type and no texture specified, return
        if (Array.isArray(material)) {
            if (child.material.every(mat => mat[checkParam]) && !texturePath)
                return;
        } else {
            if (material[checkParam] && !texturePath) return;
        }

        const texture = texturePath
            ? new THREE.TextureLoader().load(texturePath)
            : Array.isArray(material)
            ? material[0].map
            : material.map;

        // correct texture gamma
        texture.encoding = THREE.sRGBEncoding;
        // define new material
        const materialParams = {
            map: texture,
            skinning: true,
        };
        const newMaterial = createNewMaterial(materialType, materialParams);

        // dispose old material
        callbackOnPotentialArray(material, mat => {
            if (texturePath && mat.map) mat.map.dispose();
            mat.dispose();
        });
        // apply new material
        if (Array.isArray(material)) {
            child.material = new Array(material.length).fill(newMaterial);
        } else {
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
        // child is mesh
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

export const applyFaceOffset = ({ target, offset }) => {
    target.traverse(child => {
        if (child.name !== "mBodyAll" || child.geometry.groups.length !== 3)
            return;

        const faceGroups = child.geometry.groups.filter(k => k.count < 1000);
        if (faceGroups.length !== 2) return;

        if (offset.x !== 0 || offset.y !== 0) {
            const start = Math.min(faceGroups[0].start, faceGroups[1].start);
            const end = Math.max(
                faceGroups[0].start + faceGroups[0].count,
                faceGroups[1].start + faceGroups[1].count
            );

            const uv = child.geometry.attributes.uv;
            for (let i = start; i < end; i++) {
                const u = uv.getX(i) + 0.25 * offset.x;
                const v = uv.getY(i) + 0.25 * offset.y;
                uv.setXY(i, u, v);
            }
            uv.needsUpdate = true;
        }
    });
};

export const applyFaceTexture = ({
    target,
    materialType = "Basic",
    faceTexture,
}) => {
    const faceTexturePath = getTexturePath(faceTexture);
    const texture = new THREE.TextureLoader().load(faceTexturePath);
    texture.encoding = THREE.sRGBEncoding;
    const materialParams = {
        map: texture,
        skinning: true,
    };
    const faceMaterial = createNewMaterial(materialType, materialParams);
    target.traverse(child => {
        if (child.name !== "mBodyAll" || child.geometry.groups.length !== 3)
            return;

        const faceGroups = child.geometry.groups.filter(k => k.count < 1000);
        if (faceGroups.length !== 2) return;

        const materialIndexes = faceGroups.map(group => group.materialIndex);
        materialIndexes.forEach(i => (child.material[i] = faceMaterial));
    });
};

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
