import { saveAs } from "file-saver";

/**
 * wait ms milliseconds
 * @param {number} ms
 */
const wait = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

// browser download limit
const DOWNLOAD_LIMIT = 10;

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
 * turn an array of png data urls to a zip blob
 * @param {string[]} urls
 * @param {string} baseName
 */
export async function pngUrlToZip(urls, baseName) {
    const nDigits = urls.length.toString().length;

    const JSZip = await import("jszip").then(module => module.default);
    const zip = JSZip();
    urls.forEach((url, i) => {
        const number = i.toString().padStart(nDigits, "0");
        const fileName = `${baseName || "ss"}_${number}.png`;
        const sliceStart = "data:image/png;base64,".length;

        zip.file(fileName, url.slice(sliceStart, Infinity), { base64: true });
    });
    return zip.generateAsync({ type: "blob" });
}

/**
 * batch download image url
 * @param {string[]} urls
 * @param {string} baseName
 */
export async function batchDownloadPNG(urls, baseName) {
    const file = await pngUrlToZip(urls, baseName);
    saveAs(file, `${baseName}.zip`);
}

/**
 * turn an array of png blobs to a zip blob
 * @param {string[]} blobs
 * @param {string} baseName
 */
export async function pngBlobToZip(blobs, baseName) {
    const nDigits = blobs.length.toString().length;

    const JSZip = await import("jszip").then(module => module.default);
    const zip = JSZip();
    blobs.forEach((blob, i) => {
        const number = i.toString().padStart(nDigits, "0");
        const fileName = `${baseName || "ss"}_${number}.png`;
        zip.file(fileName, blob);
    });
    return zip.generateAsync({ type: "blob" });
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
