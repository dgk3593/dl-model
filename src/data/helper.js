import { fetchJsonData } from "@/dl-viewer/utils";

export { fetchJsonData };

/**
 * @param {string} name
 */
const getRelativeDataPath = name => `data/${name}.json`;

/**
 * @param {string[]} list
 */
export const fetchDataFromList = async list => {
    const fetchPromises = list.map(getRelativeDataPath).map(fetchJsonData);
    const data = await Promise.all(fetchPromises);

    const entries = list.map((listItem, i) => [listItem, data[i]]);

    return Object.fromEntries(entries);
};
