import { createZip } from "@/dl-viewer/utils/createZip";
import { saveAs } from "file-saver";

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
