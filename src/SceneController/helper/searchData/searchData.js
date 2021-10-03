import NameSearchWorker from "./searchWorker?worker";

/**
 * @param {{[name: string]: string}} fullList
 * @param {string} query
 * @param {string[]} [keys] - list of keys of list item to search for
 */
export async function searchData(fullList, query = "", keys = ["name"]) {
    if (!query || !keys.length) return fullList;

    const searchWorker = new NameSearchWorker();
    return new Promise(resolve => {
        searchWorker.addEventListener("message", event => {
            searchWorker.terminate();
            resolve(event.data);
        });

        searchWorker.postMessage({ fullList, query, keys });
    });
}
