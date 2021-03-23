export const DRAWER_WIDTH = "16rem";
export const DRAWER_BGCOLOR = "#330000";

export const DEFAULT_MODEL_ID = "c100001_01";
export const DEFAULT_FACE_IDX = 2;
export const DEFAULT_DRAGON_FACE_IDX = 1;

export const baseUrl = "https://dgk3593.github.io/dl-model/#";

export const DEFAULT_ADV_ANI = "CMN_MWM_03";

/**
 * @type WeaponType[]
 */
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

/**
 * @type {{ [paramName: string]: MatParamDetails }}
 */
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

/**
 *  list of parameters that can be set directly
 */
export const matDirectSetParams = [
    "transparent",
    "opacity",
    "wireframe",
    "emissiveIntensity",
    "metalness",
    "roughness",
    "shininess",
];

/**
 * list of parameters whose value is a color code
 */
export const matColorParams = ["color", "emissive", "specular"];

/**
 * @type { Array< [paramName: string, details: MatParamDetails] > }
 */
const matParamsEntries = Object.entries(matParamsDetails);
/**
 * default values of material parameters
 * @type {{ [paramName: string]: * }}
 */
const defaultMatParams = Object.fromEntries(
    matParamsEntries.map(([paramName, details]) => [paramName, details.default])
);

/**
 * list of parameters that need to set needsUpdate = true to be updated
 */
export const needsUpdateParams = ["gradientMap", "flatShading", "useTexture"];

/**
 * default light setting
 * @type { Array <LightParam> }
 */
export const defaultLights = [
    {
        id: "0",
        type: "Ambient",
        color: "#444444",
        enable: true,
        intensity: 1,
    },
    {
        id: "1",
        type: "Directional",
        color: "#ffffff",
        enable: true,
        position: [50, 0, 100],
        intensity: 0.8,
    },
];

/**
 * ASCII sets used to create ASCII art
 */
export const asciiSet = [
    " .:-=+*#%@",
    " .'`^\",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
];

/**
 * used to initialize global state
 * @type {ApplicationState}
 */
export const defaultSettings = {
    model: {
        id: "",
        texture: "",
        eyeTexture: "",
        eyeIdx: NaN,
        mouthTexture: "",
        mouthIdx: NaN,
        weaponRight: "",
        weaponLeft: "",
    },
    // @ts-ignore
    material: {
        type: "Basic",
        ...defaultMatParams,
    },
    scene: {
        rotateSpeed: 0,
        background: "#cccccc",
        initCameraPosition: null,
    },
    lights: defaultLights,
    animation: {
        code: "",
        timeScale: 1,
    },
    chainMaker: { chain: null },
    app: {
        sidebarContent: "settings",
        showSettings: true,
        showAniControl: true,
        antiAliasing: false,
        pixelRatio: 1,
        viewerType: "",
    },
    outline: {
        enable: true,
        size: 5,
        color: "#000000",
        opacity: 1,
    },
    capture: {
        enable: false,
        supportedCodecs: [],
        codec: "",
        format: "",
    },
    export: {
        enable: false,
        format: "stl",
        binary: true,
    },
    ascii: {
        enable: false,
        charSet: asciiSet[1],
        invert: false,
        color: "#00ff00",
        bgColor: "#000000",
    },
};

/**
 * map an init key to corresponding group and key in the global state
 * @type {{ [initKey: string]: {group: string, key: string, type: string} }}
 */
export const initKeyMap = {
    id: { group: "model", key: "id", type: "string" },
    modName: { group: "model", key: "modName", type: "string" },
    tx: { group: "model", key: "texture", type: "string" },
    et: { group: "model", key: "eyeTexture", type: "string" },
    ei: { group: "model", key: "eyeIdx", type: "int" },
    mt: { group: "model", key: "mouthTexture", type: "string" },
    mi: { group: "model", key: "mouthIdx", type: "int" },
    wr: { group: "model", key: "weaponRight", type: "string" },
    wl: { group: "model", key: "weaponLeft", type: "string" },
    bg: { group: "scene", key: "background", type: "bg" },
    cam: { group: "scene", key: "initCameraPosition", type: "xyz" },
    showAC: { group: "app", key: "showAniControl", type: "boolean" },
    showSettings: { group: "app", key: "showSettings", type: "boolean" },
    showOutline: { group: "outline", key: "enable", type: "boolean" },
    AA: { group: "app", key: "antiAliasing", type: "boolean" },
    rot: { group: "scene", key: "rotateSpeed", type: "float" },
    ts: { group: "animation", key: "timeScale", type: "float" },
    cc: { group: "animation", key: "code", type: "string" },
};

const commonInitKeys = [
    "id",
    "modName",
    "bg",
    "cam",
    "showOutline",
    "AA",
    "rot",
];

const aniInitKeys = ["ts", "cc"];

/**
 * list of init keys corresponding to viewer type
 * @type {{ [viewerType: string]: Array<string> }}
 */
export const initKeys = {
    adv: [
        "et",
        "ei",
        "mt",
        "mi",
        "wr",
        "wl",
        ...commonInitKeys,
        ...aniInitKeys,
    ],
    dragon: ["ei", "mi", ...commonInitKeys, ...aniInitKeys],
    ani: [...commonInitKeys, ...aniInitKeys],
    basic: [...commonInitKeys],
};

/**
 * list of supported materials
 */
export const MATERIALS = ["Basic", "Toon", "Lambert", "Phong", "Standard"];

/**
 * parameters that all material has
 */
export const matCommonParams = [
    "transparent",
    "opacity",
    "wireframe",
    "useTexture",
    "color",
];

/**
 * parameters specific to each type of materials
 * @type {{ [materialName: string]: Array<string> }}
 */
export const matExtraParams = {
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

export const spFaceTextures = {
    c110300_01: "ec110300_01",
};

/**
 * Set of ids of models incompatible with AdvViewer
 */
export const incompatibleModels = new Set([
    "c100007_01",
    "c100007_05",
    "c100007_09",
    "c100034_01",
    "c100036_01",
    "c100037_01",
    "c100041_01",
]);

/**
 * @type {{[colorName: string]: ColorCode}}
 */
export const commonColors = {
    green: "#00ff00",
    black: "#000000",
    grey: "#cccccc",
    white: "#ffffff",
};

export const CAM_PARAMS = {
    angle: 45,
    far: 100,
    near: 0.01,
};

export const aniModList = {
    ts: { key: "timeScale", defaultValue: 1 },
    r: { key: "repetitions", defaultValue: 1 },
};

/**
 * list of video codecs to check for
 */
export const videoCodecs = [
    "video/mp4;codecs=h264",
    "video/webm;codecs=h264",
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
];
