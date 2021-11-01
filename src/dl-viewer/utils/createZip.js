/**
 * create a zip file from a list of files
 * @param {{name: String, data: string}[]} list
 */
export async function createZip(list) {
    const JSZip = await import("jszip").then(module => module.default);
    const zip = JSZip();
    list.forEach(({ name, data }) => zip.file(name, data));
    return zip.generateAsync({ type: "blob" });
}

/**
 * turn an array of png blobs to a zip blob
 * @param {string[]} blobs
 * @param {string} baseName
 */
export function pngBlobToZip(blobs, baseName = "ss") {
    const nDigits = blobs.length.toString().length;

    const list = blobs.map((blob, i) => {
        const number = i.toString().padStart(nDigits, "0");
        const fileName = `${baseName}_${number}.png`;
        return { name: fileName, data: blob };
    });
    return createZip(list);
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
