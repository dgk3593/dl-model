import { saveAs } from "file-saver";
import { pngBlobToZip, pngUrlToZip } from "./createZip";

export function downloadBlob(blob, fileName) {
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

/** download data URL as the given file name
 * @param {string} url - data URL
 * @param {string} fileName
 */
export function downloadURL(url, fileName) {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = fileName;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
}

/**
 * batch download image url
 * @param {string[]} urls
 * @param {string} baseName
 */
export async function batchDownloadPNG(urls, baseName = "frames") {
    const file = await pngUrlToZip(urls, baseName);
    saveAs(file, `${baseName}.zip`);
}

/**
 * batch download png blobs as zip
 * @param {string[]} blobs
 * @param {string} baseName
 */
export async function downloadBlobsAsZip(blobs, baseName) {
    const file = await pngBlobToZip(blobs, baseName);
    saveAs(file, `${baseName}.zip`);
}
