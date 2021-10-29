import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
// import { FBXLoader } from "./FBXLoader";

/** load a 3D model from an FBX file
 * @param {string} path
 * @return { Promise<THREE.Group> }
 */
export const loadFBXModel = path => {
    return (
        path &&
        new Promise(resolve => {
            new FBXLoader().load(path, resolve);
        })
    );
};

/** Load a texture
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

const skyboxFiles = [
    "px.png",
    "nx.png",
    "py.png",
    "ny.png",
    "pz.png",
    "nz.png",
];

/**
 * @param {string} path
 */
export const loadSkybox = path => {
    return (
        path &&
        new Promise(resolve => {
            new THREE.CubeTextureLoader()
                .setPath(`${path}/`)
                .load(skyboxFiles, resolve);
        })
    );
};
