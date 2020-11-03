export const DRAWER_WIDTH = "16rem";
export const DRAWER_BGCOLOR = "#330000";

export const baseUrl = "https://dgk3593.github.io/dl-model/#/";

const defaultAni = "MWM_CMN+CMN_MWM_03";

export const matParamsDetails = {
    wireframe: {
        name: "Wireframe",
        type: "boolean",
        default: false,
    },
    useTexture: {
        name: "Texture",
        type: "boolean",
        default: true,
    },
    transparent: {
        name: "Transparent",
        type: "boolean",
        default: false,
    },
    flatShading: {
        name: "Flat Shading",
        type: "boolean",
        default: false,
    },
    color: {
        name: "Color",
        type: "color",
        default: "#ffffff",
    },
    emissive: {
        name: "Emissive",
        type: "color",
        default: "#000000",
    },
    opacity: {
        name: "Opacity",
        type: "percentage",
        default: 1,
        min: 0,
        max: 1,
        step: 0.05,
    },
    emissiveIntensity: {
        name: "Emissive Intensity",
        type: "percentage",
        default: 1,
        min: 0,
        max: 1,
        step: 0.05,
    },
    specular: {
        name: "Specular",
        type: "color",
        default: "#111111",
    },
    metalness: {
        name: "Metalness",
        type: "percentage",
        default: 0,
        min: 0,
        max: 1,
        step: 0.05,
    },
    roughness: {
        name: "Roughness",
        type: "percentage",
        default: 1,
        min: 0,
        max: 1,
        step: 0.05,
    },
    shininess: {
        name: "Shininess",
        type: "number",
        default: 30,
        min: 1,
        max: 100,
        step: 1,
    },
    gradientMap: {
        name: "Gradient Map",
        type: "select",
        default: "none",
        options: ["none", "2 Tones", "3 Tones", "4 Tones", "5 Tones"],
    },
};

export const directSetMatParams = [
    "transparent",
    "opacity",
    "wireframe",
    "emissiveIntensity",
    "metalness",
    "roughness",
    "shininess",
];

export const matColorParams = ["color", "emissive", "specular"];

const defaultMatParams = {};
Object.keys(matParamsDetails).forEach(key => {
    defaultMatParams[key] = matParamsDetails[key].default;
});

const defaultLights = [
    {
        lightId: 0,
        type: "Directional",
        color: "#ffffff",
        enable: true,
        position: [50, 0, 100],
        intensity: 0.8,
    },
    {
        lightId: 1,
        type: "Ambient",
        color: "#444444",
        enable: true,
        intensity: 1,
    },
];

export const defaultSettings = {
    model: {
        materialType: "Basic",
        id: "c100001_01",
        texture: "c100001_01",
        faceTexture: "c100001_01",
        face: 2,
        weaponRight: "",
        weaponLeft: "",
    },
    materialParams: { ...defaultMatParams },
    scene: {
        rotateSpeed: 0,
        background: "#cccccc",
        initCameraPosition: null,
        lights: defaultLights,
    },
    animation: {
        code: defaultAni,
        timeScale: 1,
    },
    app: {
        sideContent: "settings",
        showSettings: true,
        showAniControl: true,
        antiAliasing: false,
    },
    outline: {
        enable: true,
        size: 5, // 1 -> 10
        color: "#000000",
        opacity: 1, // 0.1 -> 10%, 1-> 100%
    },
    capture: {
        enable: false,
        supportedCodecs: [],
        codec: "",
    },
};

export const initKey = {
    id: { group: "model", key: "id" },
    ft: { group: "model", key: "faceTexture" },
    f: { group: "model", key: "face" },
    wr: { group: "model", key: "weaponRight" },
    wl: { group: "model", key: "weaponLeft" },
    bg: { group: "scene", key: "background" },
    cam: { group: "scene", key: "initCameraPosition" },
    ts: { group: "animation", key: "timeScale" },
    showAC: { group: "app", key: "showAniControl" },
    showSettings: { group: "app", key: "showSettings" },
    showOutline: { group: "outline", key: "enable" },
    AA: { group: "app", key: "antiAliasing" },
    rot: { group: "scene", key: "rotateSpeed" },
    cc: { group: "animation", key: "code" },
};

export const MATERIALS = ["Basic", "Toon", "Lambert", "Phong", "Standard"];

export const materialCommonParams = [
    "transparent",
    "opacity",
    "wireframe",
    "useTexture",
    "color",
];

export const materialExtraParams = {
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
};

export const WEAPON_CODE = {
    Sword: "SWD",
    Blade: "KAT",
    Dagger: "DAG",
    Axe: "AXE",
    Lance: "LAN",
    Bow: "BOW",
    Wand: "ROD",
    Staff: "CAN",
    Manacaster: "GUN",
};

export const WEAPON_LIST = [
    "Sword",
    "Blade",
    "Dagger",
    "Axe",
    "Lance",
    "Bow",
    "Wand",
    "Staff",
    "Manacaster",
];

export const GENDER_CODE = {
    Male: 21,
    Female: 23,
};

export const COMBO_LENGTH = {
    Axe: 5,
    Bow: 6,
    Staff: 5,
    Dagger: 6,
    Blade: 5,
    Lance: 5,
    Wand: 5,
    Sword: 5,
};

export const FS_LENGTH = {
    Axe: 3,
    Bow: 3,
    Staff: 5,
    Dagger: 3,
    Blade: 3,
    Lance: 4,
    Wand: 3,
    Sword: 3,
};

export const FILTERS = {
    rarity: ["3", "4", "5"],
    element: ["Flame", "Water", "Wind", "Light", "Shadow"],
    weapon: [
        "Sword",
        "Blade",
        "Dagger",
        "Axe",
        "Lance",
        "Bow",
        "Wand",
        "Staff",
        "Manacaster",
    ],
};

export const WEAPON_FILTERS = {
    rarity: ["1", "2", "3", "4", "5", "6"],
    element: ["Flame", "Water", "Wind", "Light", "Shadow", "None"],
    weapon: [
        "Sword",
        "Blade",
        "Dagger",
        "Axe",
        "Lance",
        "Bow",
        "Wand",
        "Staff",
        "Manacaster",
    ],
};

export const spFaceTextures = {
    c110300_01: "ec110300_01",
};

export const incompatibleModels = new Set([
    "c100007_01",
    "c100007_05",
    "c100007_09",
    "c100034_01",
    "c100036_01",
    "c100037_01",
    "c100041_01",
]);

export const commonBG = {
    green: "#00ff00",
    black: "#000000",
    grey: "#cccccc",
    white: "#ffffff",
};

export const CAM_PARAMS = {
    angle: 45,
    far: 300,
    near: 0.01,
};

export const cameraPositions = {
    c: [0, 0.5, 1.5],
    d: [3, 0.5, 6],
    w: [2, 0, 0],
    b: [1, 0.5, 6],
    e: [1, 1, 4],
    h: [1, 0.5, 3],
    o: [0, 0.5, 8],
    r: [3, 3, 20],

    c100034_01: [0, 0.5, 1.75],
    d210078_01: [3, 3, 20],
    d210114_01: [3, 3, 20],
    h0010001: [6, 0.5, 8],
    h0010001_02: [2, 0, 0],
    h0040101: [1, 0.5, 4],
    r0070401: [30, 30, 100],
    r0080401: [1, 2, 5],

    smith: [1, 1, 2],
};

export const controlsPositions = {
    c: [0, 0.5, 0],
    d: [0, 1, 0],
    w: [0, 0, 0],
    b: [0, 1, 0],
    e: [0, 0.5, 0],
    h: [0, 1, 0],
    o: [0, 0, 0],
    r: [0, 3, 0],

    d210078_01: [0, 3, 0],
    d210114_01: [0, 3, 0],
    h0010001_02: [0, 3, 0],
    r0070401: [0, 20, 0],
    r0080401: [0, 2, 0],

    smith: [0, 0.5, 0],
};

export const faceOffsets = {
    face1: { x: 2, y: 1 },
    face2: { x: 0, y: 0 },
    face3: { x: 1, y: 0 },
    face4: { x: 2, y: 0 },
    face5: { x: 3, y: 0 },
    face6: { x: 0, y: -1 },
    face7: { x: 1, y: -1 },
    face8: { x: 2, y: -1 },
    face9: { x: 3, y: -1 },
};

export const videoCodecs = [
    "video/webm;codecs=h264",
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
];

export const asciiSet = [
    " .:-=+*#%@",
    " .'`^\",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
];
