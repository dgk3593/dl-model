import { fetchJsonData } from "../fetchJsonData";
import { DATA_SOURCE } from "@/dl-viewer/path";

/**
 * @type {{[key: string]: xyCoordinate}}
 */
const offset = {};

export const initFaceOffset = async () => {
    const data = await fetchJsonData(`${DATA_SOURCE}/face-offset.json`);
    Object.assign(offset, data);
};

/**
 * @param {string} texture
 */
export const getFaceOffset = texture => offset[texture] || [0, 0];
