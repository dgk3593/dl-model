import { fetchJsonData } from "../fetchJsonData";
import { DATA_SOURCE } from "@/dl-viewer/path";

/**
 * @type {{[key: string]: xyzCoordinate}}
 */
const controlPosition = {};

export const initControlData = async () => {
    const data = await fetchJsonData(`${DATA_SOURCE}/control-position.json`);
    Object.assign(controlPosition, data);
};

/**
 * @param {string} id
 */
export const getDefaultControl = id =>
    controlPosition[id] ?? controlPosition[id[0]];
