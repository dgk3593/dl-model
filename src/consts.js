export const DRAWER_WIDTH = "15rem";
export const DRAWER_BGCOLOR = "#330000";

export const baseUrl = "https://dgk3593.github.io/dl-model/#/";

export const defaultSettings = {
    model: {
        id: "c100001_01",
        texture: "c100001_01",
        faceTexture: "c100001_01",
        face: 2,
        weaponRight: "",
        weaponLeft: "",
    },
    scene: { background: "#cccccc" },
    animation: { code: "MWM_CMN+CMN_MWM_03", timeScale: 1 },
    app: { showSettings: true, showAniControl: true },
};

export const initKey = {
    id: { group: "model", key: "id" },
    ft: { group: "model", key: "faceTexture" },
    f: { group: "model", key: "face" },
    wr: { group: "model", key: "weaponRight" },
    wl: { group: "model", key: "weaponLeft" },
    bg: { group: "scene", key: "background" },
    cam: { group: "scene", key: "initCameraPosition" },
    cc: { group: "animation", key: "code" },
    ts: { group: "animation", key: "timeScale" },
    showAC: { group: "app", key: "showAniControl" },
    showSettings: { group: "app", key: "showSettings" },
    AA: { group: "app", key: "antiAliasing" },
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

// export const cameraPositions = {
//     c: { x: 0, y: 0.5, z: 1.5 },
//     d: { x: 3, y: 0.5, z: 6 },

//     c100034_01: { x: 0, y: 0.5, z: 1.75 },
//     d210078_01: { x: 3, y: 3, z: 20 },
//     d210114_01: { x: 3, y: 3, z: 20 },

//     smith: { x: 1, y: 1, z: 2 },
// };
export const cameraPositions = {
    c: [0, 0.5, 1.5],
    d: [3, 0.5, 6],

    c100034_01: [0, 0.5, 1.75],
    d210078_01: [3, 3, 20],
    d210114_01: [3, 3, 20],

    smith: [1, 1, 2],
};

export const controlsPositions = {
    c: { x: 0, y: 0.5, z: 0 },
    d: { x: 0, y: 1, z: 0 },

    d210078_01: { x: 0, y: 3, z: 0 },
    d210114_01: { x: 0, y: 3, z: 0 },

    smith: { x: 0, y: 0.5, z: 0 },
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
