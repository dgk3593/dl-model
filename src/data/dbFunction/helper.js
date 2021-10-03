import DbWorker from "./dbWorker?worker";

/**
 * @param {Array} items - items to put inside object store
 * @param {string} store - store name
 */
export const putItems = (items, store) => {
    const worker = new DbWorker();

    return new Promise(resolve => {
        worker.addEventListener("message", () => {
            resolve();
            worker.terminate();
        });

        worker.postMessage({ type: "put", store, value: items });
    });
};
