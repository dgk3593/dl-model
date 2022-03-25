import { createZip } from "@/dl-viewer/utils/createZip";
import { useActiveModel, useAppState } from "@/state";
import viewer from "@/viewer";
import { saveAs } from "file-saver";
import { encode as makeApng } from "upng-js";

function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText,
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText,
            });
        };
        xhr.send();
    });
}

const httpGet = url => makeRequest("GET", url);

const getFileList = async id => {
    const url = `https://api.github.com/repos/dgk3593/dl-model/contents/public/fbx/${id}`;
    const response = await httpGet(url);
    const json = JSON.parse(response);
    return json.map(item => item.name);
};

/**
 * download from url as ArrayBuffer
 * @param {string} url
 * @return {Promise<ArrayBuffer>}
 */
const downloadFile = async url => {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return buffer;
};

export const downloadModel = async id => {
    const fileList = await getFileList(id);
    const list = fileList.map(name => {
        const url = `https://dgk3593.github.io/dl-model/fbx/${id}/${name}`;
        const data = downloadFile(url);
        return { name, data };
    });
    const zip = await createZip(list);
    saveAs(zip, `${id}.zip`);
};

export const quickGif = () => {
    const { activeModel } = useActiveModel.getState();
    const { setLoadingMsg } = useAppState.getState();
    const { screenshot } = viewer;
    if (!activeModel) {
        setLoadingMsg("No model");
        setTimeout(() => setLoadingMsg(""), 2000);
        return;
    }

    setLoadingMsg("Generating frames...");
    setTimeout(async () => {
        const frames = screenshot.getAllFrames(activeModel);

        if (!frames) {
            setLoadingMsg("Invalid animation");
            setTimeout(() => setLoadingMsg(""), 2000);
            return;
        }

        setLoadingMsg(`Creating gif from ${frames.length} frames...`);
        const { frameRate } = screenshot.settings;
        const { makeGif } = await import("@/helper/makeGif");
        const gif = await makeGif({
            frames,
            width: viewer.viewport.width,
            height: viewer.viewport.height,
            delay: Math.ceil(1000 / frameRate),
        });

        setLoadingMsg("Finished");
        const fileName = activeModel.userData.name ?? activeModel.id ?? "ani";
        saveAs(gif, `${fileName}.gif`);
        setTimeout(() => setLoadingMsg(""), 1000);
    });
};

export const quickApng = () => {
    const { activeModel } = useActiveModel.getState();
    const { setLoadingMsg } = useAppState.getState();
    const { screenshot } = viewer;
    if (!activeModel) {
        setLoadingMsg("No model");
        setTimeout(() => setLoadingMsg(""), 2000);
        return;
    }

    setLoadingMsg("Generating frames...");
    setTimeout(async () => {
        const buffer = screenshot.getAllFramesAsArrayBuffer(activeModel);

        if (!buffer) {
            setLoadingMsg("Invalid animation");
            setTimeout(() => setLoadingMsg(""), 2000);
            return;
        }

        setLoadingMsg(`Creating apng from ${buffer.length} frames...`);
        const { frameRate } = screenshot.settings;
        const delay = Math.ceil(1000 / frameRate);
        const dels = Array(buffer.length - 1).fill(delay);
        const { width, height } = viewer.viewport;
        const apngBuffer = makeApng(buffer, width, height, 0, dels);
        const apng = new Blob([apngBuffer], { type: "image/apng" });

        setLoadingMsg("Finished");
        const fileName = activeModel.userData.name ?? activeModel.id ?? "ani";
        saveAs(apng, `${fileName}.png`);
        setTimeout(() => setLoadingMsg(""), 1000);
    });
};

window.quickApng = quickApng;
