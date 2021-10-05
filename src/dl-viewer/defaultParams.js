export { DEFAULT_MAT_PARAMS } from "./wrapModel/addMaterialFunctions/helper";

export const defaultRendererParams = {
    alpha: true,
    antialias: true,
};

export const DEFAULT_BACKGROUND = "#cccccc";

/**
 * @type {PerspectiveCamParams}
 */
export const PERSPECTIVE_CAM = {
    type: "Perspective",
    fov: 45,
    aspect: 1,
    far: 300,
    near: 0.01,
};

export const DEFAULT_MODEL = "c100001_01";

export const DEFAULT_ADV_ANI = "CMN_MWM_03";

/**
 * @type {OutlineParams}
 */
export const DEFAULT_OUTLINE = {
    enabled: true,
    size: 5,
    color: "#000000",
    opacity: 1,
};

export const DEFAULT_SCREENSHOT_SETTINGS = {
    noBackground: true,
    fileName: "screenshot",
    frameRate: 30,
};

export const DEFAULT_DRAGON_FACE = 1;

export const FPS = 30;

export const DEFAULT_LIGHT_PARAMS = {
    directional: {
        color: "#ffffff",
        intensity: 0.8,
        position: [1, 0, 2],
    },
    ambient: {
        color: "#444444",
        intensity: 1,
    },
    point: {
        color: "#ffffff",
        intensity: 1,
    },
};
