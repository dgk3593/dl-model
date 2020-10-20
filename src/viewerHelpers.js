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

export const analyzeWeaponCode = code => {
    const flipped = code.endsWith("b");
    const weaponCode = code.substring(0, code.length - 1);
    const model = `${fbxSource}/fbx/${weaponCode}/${weaponCode}.fbx`;
    const texture = `${fbxSource}/fbx/${weaponCode}/${weaponCode}.png`;

    return { model, texture, flipped, isSheath: isSheath(weaponCode) };
};

export const disposeItem = item => {
    if (!item) return;

    // keep track of disposed objects
    const disposedList = new Set();
    // true if object's uuid is not in disposedList
    const notDisposed = object => !disposedList.has(object.uuid);
    // true if object exists and not disposed yet
    const needToDispose = object => object && notDisposed(object);
    // add object's uuid to disposedList and call object's dispose method
    const disposeObject = object => {
        disposedList.add(object.uuid);
        object.dispose();
    };
    // dispose an object if need to
    const dispose = object => {
        if (needToDispose(object)) disposeObject(object);
    };

    item.traverse(child => {
        if (!child.isMesh) return;
        // child is mesh
        // dispose material
        callbackOnPotentialArray(child.material, obj => {
            dispose(obj.map);
            dispose(obj);
        });
        // dispose geometry
        dispose(child.geometry);
    });
};

const createNewMaterial = ({ type, params }) => {
    const matType = `Mesh${type}Material`;
    return new THREE[matType](params);
};

export const changeMaterialToBasic = (object, texturePath) => {
    if (!object) return;
    object.traverse(child => {
        if (!child.isMesh || child.name === "outline") return;
        // child is mesh and is not outline
        const material = child.material;
        let texture;
        if (texturePath) {
            texture = new THREE.TextureLoader().load(texturePath);
        } else {
            texture = Array.isArray(child.material)
                ? material[0].map
                : material.map;
        }
        // correct texture gamma
        texture.encoding = THREE.sRGBEncoding;
        // define new material
        const newMaterial = createNewMaterial({
            type: "Basic",
            params: { map: texture, skinning: true },
        });

        // dispose old material
        callbackOnPotentialArray(material, obj => {
            if (texturePath && obj.map) obj.map.dispose();
            obj.dispose();
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
export const addOutline = (object, details) => {
    if (!object) return;
    const outlines = []; // return value
    object.traverse(child => {
        if (!child.isMesh) return;
        // child is mesh
        const outline = child.clone();
        outline.name = "outline";
        outline.visible = details.enable;

        outlines.push(outline);
        const newMaterial = createOutlineMaterial(details);
        replaceMaterial(outline, newMaterial);

        if (child.isSkinnedMesh) {
            outline.bind(child.skeleton, child.bindMatrix);
        }
        child.parent.add(outline);
    });
    return outlines;
};

export const applyFace = (object, faceTexture, faceOffset) => {
    const faceTexturePath = `${fbxSource}/fbx/${faceTexture}/${faceTexture}.png`;
    const texture = new THREE.TextureLoader().load(faceTexturePath);
    texture.encoding = THREE.sRGBEncoding;
    const faceMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        skinning: true,
    });

    object.traverse(child => {
        if (child.name === "mBodyAll" && child.geometry.groups.length === 3) {
            const faceGroups = child.geometry.groups.filter(
                k => k.count < 1000
            );
            if (faceGroups.length === 2) {
                const materialIndexes = faceGroups.map(
                    group => group.materialIndex
                );
                materialIndexes.forEach(
                    i => (child.material[i] = faceMaterial)
                );
                if (faceOffset.x !== 0 || faceOffset.y !== 0) {
                    const start = Math.min(
                        faceGroups[0].start,
                        faceGroups[1].start
                    );
                    const end = Math.max(
                        faceGroups[0].start + faceGroups[0].count,
                        faceGroups[1].start + faceGroups[1].count
                    );

                    const uv = child.geometry.attributes.uv;
                    for (let i = start; i < end; i++) {
                        const u = uv.getX(i) + 0.25 * faceOffset.x;
                        const v = uv.getY(i) + 0.25 * faceOffset.y;
                        uv.setXY(i, u, v);
                    }
                    uv.needsUpdate = true;
                }
            }
        }
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
