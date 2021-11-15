import { fetchJsonData } from "@/dl-viewer/utils";

/**
 * @param {string} name
 */
const getDataPath = name => `data/${name}.json`;

/**
 * @param {string[]} list
 */
export const fetchDataFromList = async list => {
    const fetchPromises = list.map(getDataPath).map(fetchJsonData);
    const data = await Promise.all(fetchPromises);

    const entries = list.map((listItem, i) => [listItem, data[i]]);

    return Object.fromEntries(entries);
};
