import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

/** load a 3D model
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
