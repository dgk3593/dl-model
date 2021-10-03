import DbWorker from "./dbWorker?worker";

export * from "./modelFunction";
export * from "./aniFunction";

/**
 * @typedef {'put' | 'search' | 'get' | 'getByIndex' | 'getAllByIndex' |'getByKeyRange' | 'getMap'} DbMessageType
 */
/**
 * @param {object} message
 * @param {DbMessageType} message.type
 * @param {string} message.store
 * @param {*} [message.value]
 * @param {string} [message.index]
 */
export const dbRequest = message => {
    const worker = new DbWorker();

    return new Promise(resolve => {
        worker.addEventListener("message", event => {
            worker.terminate();
            resolve(event.data);
        });

        worker.postMessage(message);
    });
};
