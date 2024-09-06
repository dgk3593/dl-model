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

/**
 * Freeze an object and all its sub-objects recursively
 * @param {object} obj - the object to freeze
 * @return {object} the frozen object
 */
export function deepFreeze(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    if (Object.isFrozen(obj)) {
        return obj;
    }

    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === "object") {
            obj[key] = deepFreeze(obj[key]);
        }
    });

    return Object.freeze(obj);
}
