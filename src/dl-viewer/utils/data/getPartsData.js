import { fetchJsonData } from "../fetchJsonData";
import { DATA_SOURCE } from "@/dl-viewer/path";

/**
 * @typedef {object} PartData
 * @property {string} name
 * @property {{ [subpartName: string]: string }} options
 * @property {string} [default]
 *
 * @typedef {{ [partName: string]: PartData} } PartsData
 */
/**
 * @type {{[id: string]: PartsData}}
 */
const partsData = {};

export const initPartsData = async () => {
    const data = await fetchJsonData(`${DATA_SOURCE}/model-parts.json`);
    Object.assign(partsData, data);
};

/**
 * @param {string} id
 */
export const getPartsData = id => partsData[id];
