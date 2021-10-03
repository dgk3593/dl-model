import { fetchJson } from "@/dl-viewer/utils/fetchJsonData";

/**
 * @param {string} url
 * @return {Promise}
 */
export const fetchJsonData = async url => {
    const json = await fetchJson(url);

    return json.data;
};

const BASE_URL = import.meta.env.DEV
    ? "http://localhost:3002/dl-model-test"
    : "https://dgk3593.github.io/dl-model-test";

/**
 * @param {string} name
 */
const getDataPath = name => `${BASE_URL}/data/${name}.json`;

/**
 * @param {string[]} pathList
 */
const fetchList = pathList => {
    const promises = pathList.map(fetchJsonData);
    return Promise.all(promises);
};

addEventListener("message", async event => {
    /**
     * @type {Array<string>} - list of name of data to fetch
     */
    const list = event.data;
    const pathList = list.map(getDataPath);
    const rawData = await fetchList(pathList);

    const entries = list.map((listItem, i) => [listItem, rawData[i]]);
    const output = Object.fromEntries(entries);
    postMessage(output);
});
