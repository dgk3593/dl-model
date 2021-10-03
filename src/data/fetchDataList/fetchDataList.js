import FetchWorker from "./fetchWorker?worker";

/**
 * @param {string[]} list - list of name of data to fetch
 * @return { Promise<{ [name: string]: Array }> }
 */
export const fetchDataList = list => {
    const worker = new FetchWorker();

    return new Promise(resolve => {
        worker.addEventListener("message", event => {
            worker.terminate();
            resolve(event.data);
        });

        worker.postMessage(list);
    });
};
