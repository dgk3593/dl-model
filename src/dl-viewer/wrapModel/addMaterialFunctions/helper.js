import { MATCAP_SOURCE } from "../../path";
import * as THREE from "three";
import { createColor, getBool, isHex, syncLoadDispTexture } from "../../utils";
import { MMDToonMaterial } from "./MMDToonMaterial";

export const colorProps = ["color", "emissive", "specular"];
export const otherProps = [
    "wireframe",
    "metalness",
    "opacity",
    "roughness",
    "shininess",
    "transparent",
    "emissiveIntensity",
    "transmission",
    "thickness",
    "ior",
];

export const spProps = [
    "type",
    "flatShading",
    "showTexture",
    "gradientMap",
    "matcap",
];

export const matProps = [...colorProps, ...otherProps, ...spProps];

const matCommonParams = [
    "transparent",
    "opacity",
    "wireframe",
    "showTexture",
    "color",
];

const matExtraParams = {
    Basic: [],
    Toon: ["emissive", "emissiveIntensity", "gradientMap"],
    Lambert: ["emissive", "emissiveIntensity"],
    Phong: [
        "emissive",
        "emissiveIntensity",
        "specular",
        "shininess",
        "flatShading",
    ],
    Standard: [
        "emissive",
        "emissiveIntensity",
        "metalness",
        "roughness",
        "flatShading",
    ],
    Physical: [
        "emissive",
        "emissiveIntensity",
        "metalness",
        "roughness",
        "flatShading",
        "transmission",
        "thickness",
        "ior",
    ],
    Matcap: ["flatShading", "matcap"],
    MMDToon: [
        "emissive",
        "emissiveIntensity",
        "specular",
        "shininess",
        "matcap",
        "gradientMap",
        "flatShading",
    ],
};

const toString = v => `${v}`;

/**
 * @param {string} code
 */
const toFullColorCode = code =>
    isHex(code) ? `${code.startsWith("#") ? "" : "#"}${code}` : code;

/**
 * @param {number[] | string} gradientMap
 */
const gradientMapToString = gradientMap => {
    if (Array.isArray(gradientMap)) return gradientMap.join(",");
    return gradientMap;
};

export const matParamsDetails = {
    wireframe: {
        name: "Wireframe",
        type: "boolean",
        default: false,
        valueMap: getBool,
        toString,
    },
    showTexture: {
        name: "Texture",
        type: "boolean",
        default: true,
        valueMap: getBool,
        toString,
    },
    transparent: {
        name: "Transparent",
        type: "boolean",
        default: false,
        valueMap: getBool,
        toString,
    },
    flatShading: {
        name: "Flat Shading",
        type: "boolean",
        default: false,
        valueMap: getBool,
        toString,
    },
    color: {
        name: "Color",
        type: "color",
        default: "#ffffff",
        valueMap: createColor,
        toString: toFullColorCode,
    },
    emissive: {
        name: "Emissive",
        type: "color",
        default: "#000000",
        valueMap: createColor,
        toString: toFullColorCode,
    },
    opacity: {
        name: "Opacity",
        type: "percentage",
        default: 1,
        min: 0,
        max: 1,
        valueMap: parseFloat,
        toString,
    },
    emissiveIntensity: {
        name: "Emissive Intensity",
        type: "percentage",
        default: 1,
        min: 0,
        max: 1,
        valueMap: parseFloat,
        toString,
    },
    specular: {
        name: "Specular",
        type: "color",
        default: "#111111",
        valueMap: createColor,
        toString: toFullColorCode,
    },
    metalness: {
        name: "Metalness",
        type: "percentage",
        default: 0,
        min: 0,
        max: 1,
        valueMap: parseFloat,
        toString,
    },
    roughness: {
        name: "Roughness",
        type: "percentage",
        default: 1,
        min: 0,
        max: 1,
        valueMap: parseFloat,
        toString,
    },
    shininess: {
        name: "Shininess",
        type: "number",
        default: 30,
        min: 1,
        max: 100,
        valueMap: parseFloat,
        toString,
    },
    gradientMap: {
        name: "Gradient Map",
        type: "select",
        default: "none",
        valueMap: createGradientMap,
        toString: gradientMapToString, // todo
    },
    matcap: {
        name: "Matcap",
        type: "select",
        default: "matcap_fresnel.jpg",
        valueMap: loadMatcap,
        toString,
    },
    transmission: {
        name: "Transmission",
        type: "number",
        default: 1,
        min: 0,
        max: 1,
        valueMap: parseFloat,
        toString,
    },
    thickness: {
        name: "Thickness",
        type: "number",
        default: 0.01,
        min: 0,
        max: 10,
        valueMap: parseFloat,
        toString,
    },
    ior: {
        name: "Index-of-refraction",
        type: "number",
        default: 1.5,
        min: 1,
        max: 2.333,
        valueMap: parseFloat,
        toString,
    },
};

export const defaultMatValue = Object.fromEntries(
    Object.entries(matParamsDetails).map(([key, { default: v }]) => [key, v])
);

export const DEFAULT_MAT_PARAMS = { ...defaultMatValue, type: "Basic" };

export const valueMap = Object.fromEntries(
    Object.entries(matParamsDetails).map(([key, { valueMap }]) => [
        key,
        valueMap,
    ])
);

export const valueToString = Object.fromEntries(
    Object.entries(matParamsDetails).map(([key, { toString }]) => [
        key,
        toString,
    ])
);

/** get list of properties of a given material type
 * @param {string} matType
 * @return {string[]}
 * */
export const getMatPropList = matType => {
    return [...matCommonParams, ...matExtraParams[matType]];
};

const createNewMaterial = (materialType, params = {}) => {
    if (materialType === "MMDToon") return new MMDToonMaterial(params);

    const matType = `Mesh${materialType}Material`;
    return new THREE[matType](params);
};

/** change the material type of all provided meshes
 * @param {THREE.Mesh[]} meshList
 * @param { object } params
 * @param {MaterialType} [params.matType]
 * @param {string} [params.texturePath]
 * @param {boolean} [params.force]
 */
export const changeMaterial = (
    meshList,
    { matType = "Basic", texturePath = "", force = false } = {}
) => {
    meshList.forEach(mesh => {
        const materials = [mesh.material].flat();
        const matIsArray = Array.isArray(mesh.material);

        if (!force && !texturePath) {
            const checkParam = `isMesh${matType}Material`;
            const needToChange = materials.some(mat => !mat[checkParam]);
            if (!needToChange) return;
        }

        materials.forEach((oldMat, i) => {
            /**
             * @type {THREE.Texture}
             */
            const texture = texturePath
                ? new THREE.TextureLoader().load(texturePath)
                : materials[i].map;

            texturePath && (texture.colorSpace = THREE.SRGBColorSpace);

            const newMat = createNewMaterial(matType);
            newMat.name = oldMat.name;
            newMat.map = texture;
            newMat.userData.backupMap = oldMat.userData.backupMap;

            if (texturePath) {
                oldMat.map?.dispose?.();
                oldMat.userData.backupMap?.dispose?.();
            }
            oldMat.dispose();

            if (matIsArray) {
                mesh.material[i] = newMat;
                return;
            }

            mesh.material = newMat;
        });
    });
};

/** get gradient map thresholds
 * @param {number[] | string} levels - cut-off levels
 * @return {number[]}
 */
const getThresholds = levels =>
    Array.isArray(levels) ? levels : levels.split(",").map(n => parseInt(n));

/** create gradient map for toon material
 * @param {number[] | string} levels - cut-offs
 */
export function createGradientMap(levels) {
    const thresholds = getThresholds(levels);
    const nLevels = thresholds.length;
    if (nLevels < 2) return null;

    const colors = Uint8Array.from(thresholds);
    const map = new THREE.DataTexture(
        colors,
        nLevels,
        1,
        THREE.LuminanceFormat
    );
    map.minFilter = map.magFilter = THREE.NearestFilter;
    map.generateMipmaps = false;

    return map;
}

/**
 * @param {string} matcap
 */
const getMatcapPath = matcap => {
    return matcap.includes("/") || matcap.includes(":")
        ? matcap
        : `${MATCAP_SOURCE}/${matcap}`;
};

/** load matcap texture
 * @param {string} matcap - file name or url
 * @return {null | THREE.Texture }
 */
export function loadMatcap(matcap) {
    const path = getMatcapPath(matcap);
    return path ? syncLoadDispTexture(path) : null;
}
