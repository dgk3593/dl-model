import AniProcessWorker from "./aniWorker?worker";

export const processAniData = async aniData => {
    const worker = new AniProcessWorker();
    return new Promise(resolve => {
        worker.addEventListener("message", event => {
            worker.terminate();
            resolve(event.data);
        });

        worker.postMessage({ ...aniData });
    });
};
