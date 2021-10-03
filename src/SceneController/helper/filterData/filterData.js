import DataFilterWorker from "./filterWorker?worker";

export function filterData(fullList, conditions) {
    if (!conditions.length) return fullList;

    const dataFilter = new DataFilterWorker();
    return new Promise(resolve => {
        dataFilter.addEventListener("message", event => {
            dataFilter.terminate();
            resolve(event.data);
        });

        dataFilter.postMessage({ fullList, conditions });
    });
}
