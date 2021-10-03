import * as THREE from "three";
import { PERSPECTIVE_CAM, defaultRendererParams } from "../defaultParams";
import { loadSkybox, loadTexture } from "./loader";
import { spAdventurer } from "./spAdventurer";

export { fetchJsonData } from "./fetchJsonData";

/**
 * @param  {...function} fns
 */
export const pipe =
    (...fns) =>
    x =>
        fns.reduce((y, f) => f(y), x);

/**
 * @param {...function} afns - async functions
 */
export const asyncPipe = (...afns) =>
    afns.reduce((f, g) => x => f(x).then?.(g));

/**
 * return unique elements of an array
 * @param {array} arr
 */
export const getUnique = arr => [...new Set(arr)];

/**
 * @param {boolean | string} value
 */
export const getBool = value => (value === "false" ? false : !!value);

/** set a nested property of an object
 * @param {object} object
 * @param {string[]} keys - list of keys
 * @param {*} value
 */
export const setNestedProp = (object, keys, value) => {
    if (!keys.length) return;

    const lastKey = keys.pop();
    const nestedObject = keys.reduce((obj, key) => obj?.[key], object);
    nestedObject && (nestedObject[lastKey] = value);
};

/** set a nested property of an object
 * @param {object} object
 * @param {string[]} keys - list of keys
 */
export const getNestedProp = (object, keys) =>
    keys.reduce((obj, key) => obj?.[key], object);

/**
 * @param {string} code
 */
export function isHex(code) {
    const regex = /[0-9A-Fa-f]{6}/;
    return !!regex.test(code);
}

/**
 * create a THREE.Color
 * @param {string} color
 */
export function createColor(color) {
    if (isHex(color) && !color.startsWith("#"))
        return new THREE.Color(`#${color}`);

    return new THREE.Color(color);
}

/** wait ms milliseconds */
export async function wait(ms = 100) {
    return await new Promise(resolve => setTimeout(resolve, ms));
}

/** Extract string of the form "name_separator_value", e.g. name=value, to [name, value]
 * @param {string} code
 * @param {string} separator
 * @return {[name:string, value:string]}
 */
export function extractPair(code, separator = "=") {
    const [name, ...valuePart] = code.split(separator);
    const value = valuePart.join(separator);

    return [name, value];
}

/** check if an ID is a blade
 * @param {string} modelId - id to check
 */
export const isBlade = modelId => modelId.startsWith("w302");

/** capitalize first letter of tring
 * @param {string} input
 */
export const capitalize = ([first, ...rest]) =>
    `${first.toUpperCase()}${rest.join("")}`;

/** get model type of a given DL model id
 * @param {string} id
 * @return {DLModelType}
 */
export function getModelType(id) {
    if (id === "smith") return "dragon";
    if (id.endsWith("h")) return "story";
    if (spAdventurer.includes(id)) return "spAdventurer";

    const types = {
        c: "adventurer",
        b: "boss",
        d: "dragon",
        e: "enemy",
        h: "high boss",
        o: "object",
        r: "raid boss",
        w: "weapon",
    };
    return types[id[0]] ?? "other";
}

/**
 * @param {{}} params
 * @return {THREE.WebGLRenderer}
 */
export function createRenderer(params = defaultRendererParams) {
    const renderer = new THREE.WebGLRenderer(params);
    renderer.outputEncoding = THREE.sRGBEncoding;

    return renderer;
}

/**
 * @param {PerspectiveCamParams} [params]
 * @return {THREE.PerspectiveCamera}
 */
export function createCamera(params = {}) {
    const { fov, aspect, near, far } = { ...PERSPECTIVE_CAM, ...params };
    return new THREE.PerspectiveCamera(fov, aspect, near, far);
}

/**
 * @param {string} bg
 */
export async function createBackground(bg) {
    if (bg.startsWith("img:")) {
        const path = bg.replace("img:", "");
        const background = await loadTexture(path);
        background.encoding = THREE.sRGBEncoding;
        background.center.set(0.5, 0);
        return background;
    }

    if (bg.startsWith("sky:")) {
        const path = bg.replace("sky:", "");
        const background = await loadSkybox(path);
        background.encoding = THREE.sRGBEncoding;
        return background;
    }

    if (bg === "transparent") return null;

    if (isHex(bg)) {
        const code = bg.startsWith("#") ? bg : `#${bg}`;
        return new THREE.Color(code);
    }
}

/**
 * @param {THREE.Material} material
 */
export function disposeMaterial(material) {
    material.map?.dispose?.();
    material.userData.backupMap?.dispose?.();
    material.dispose();
}

/**
 * @param {string} path
 */
export const syncLoadDispTexture = path => {
    const texture = new THREE.TextureLoader().load(path);
    texture.encoding = THREE.sRGBEncoding;
    return texture;
};

/** Get all meshes and bones of a 3d object
 * @param {THREE.Group} object
 * @returns {[THREE.Mesh[], THREE.Bone[]]}
 */
export function getMeshesAndBones(object) {
    const meshes = [];
    const bones = [];
    object.traverse(child => {
        if (child.isMesh) meshes.push(child);
        if (child.isBone) bones.push(child);
    });

    return [meshes, bones];
}

/**
 * @param {THREE.Mesh} mesh
 */
export function disposeMesh(mesh) {
    if (!mesh) return;

    const material = [mesh.material].flat();
    material.forEach(mat => {
        mat.map?.dispose?.();
        mat.userData?.backupMap?.dispose?.();
        mat.dispose?.();
    });
    mesh.geometry?.dispose?.();
}

export function createRenderTarget(method = "SMAA") {
    const RenderTargetClass =
        method === "SMAA"
            ? THREE.WebGLRenderTarget
            : THREE.WebGLMultisampleRenderTarget;
    return new RenderTargetClass(800, 600, {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        encoding: THREE.sRGBEncoding,
    });
}

/** generate date time string */
export const getDateTimeString = () => {
    const date = new Date();
    const dateStr = date.toDateString().replace(/ /g, "_");
    const timeStr = date
        .toLocaleTimeString()
        .replace(/:/g, "-")
        .replace(/ /g, "");
    return `${dateStr}_${timeStr}`;
};

/**
 * turn a code in the form key1=value1/key2=value2/ to an object with corresponding key and value
 * @param {string} code
 * @return {{[key: string]: string}}
 */
export const analyzeCode = code => {
    if (!code) return {};
    const parts = code.split("/");
    return parts.reduce((acc, part) => {
        const [key, value] = part.split("=");
        if (key && value) {
            acc[key] = value;
        }
        return acc;
    }, {});
};
