import { fetchJsonData } from "../fetchJsonData";
import { DATA_SOURCE } from "@/dl-viewer/path";

/**
 * @type {{[key: string]: xyzCoordinate}}
 */
const cameraPosition = {};

export const initCameraData = async () => {
    const data = await fetchJsonData(`${DATA_SOURCE}/camera-position.json`);
    Object.assign(cameraPosition, data);
};

/**
 * @param {string} id
 */
export const getDefaultCamera = id =>
    cameraPosition[id] ?? cameraPosition[id[0]];
