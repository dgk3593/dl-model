import * as THREE from "three";
import { fbxSource } from "./App";
import { v4 as uuid } from "uuid";

import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

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
    const flipped = code[code.length - 1] === "b";
    const weaponCode = code.substring(0, code.length - 1);
    const model = `${fbxSource}/fbx/${weaponCode}/${weaponCode}.fbx`;
    const texture = `${fbxSource}/fbx/${weaponCode}/${weaponCode}.png`;

    return { model, texture, flipped };
};

export const disposeItem = item => {
    if (!item) return;
    item.traverse(child => {
        if (child.isMesh) {
            if (Array.isArray(child.material)) {
                child.material.forEach(mat => {
                    mat.map.dispose();
                    mat.dispose();
                });
            } else {
                child.material.map.dispose();
                child.material.dispose();
            }
            child.geometry.dispose();
        }
    });
};

export const changeMaterialToBasic = (object, texturePath) => {
    if (!object) return;
    object.traverse(child => {
        if (child.isMesh) {
            const material = child.material;
            let texture;
            if (texturePath) {
                texture = new THREE.TextureLoader().load(texturePath);
            } else {
                texture = Array.isArray(child.material)
                    ? material[0].map
                    : material.map;
            }
            const newMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                skinning: true,
            });
            if (Array.isArray(child.material)) {
                const size = child.material.length;

                child.material = child.material.forEach(e => {
                    if (texturePath) {
                        e.map.dispose();
                    }
                    e.dispose();
                });
                child.material = new Array(size).fill(newMaterial);
            } else {
                if (texturePath && child.material.map) {
                    child.material.map.dispose();
                }
                child.material.dispose();
                child.material = newMaterial;
            }
        }
    });
};

export const applyFace = (object, faceTexture, faceOffset) => {
    const faceTexturePath = `${fbxSource}/fbx/${faceTexture}/${faceTexture}.png`;
    const texture = new THREE.TextureLoader().load(faceTexturePath);
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
        let timeScale = 1;
        let repetitions = 1;
        let fileIdx = null;
        let aniName = null;
        let fileName = null;
        let details;
        let currentAni = {};
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
