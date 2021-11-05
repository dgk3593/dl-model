/**
 * @param {{[name: string]: Uint8Array | [Uint8Array, object]}} zipObj
 * @return {Promise<Blob>}
 */
const makeZip = async zipObj => {
    const { zip } = await import("fflate");
    return new Promise(resolve =>
        zip(zipObj, {}, (err, out) => resolve(new Blob([out])))
    );
};
/**
 * get base64 from data url
 * @param {string} str
 * @return {string}
 */
const getBase64 = str => {
    const index = str.indexOf(",");
    return str.slice(index + 1, Infinity);
};

/**
 * @param {string | Blob | ArrayBuffer} data
 * @return {Promise<Uint8Array>}
 */
const createBuffer = async data => {
    data = await data;
    if (data instanceof Blob) data = await data.arrayBuffer();
    if (data instanceof ArrayBuffer) return new Uint8Array(data);

    if (typeof data === "string") {
        const b64 = getBase64(data);
        const bin = window.atob(b64);
        return Uint8Array.from(bin, c => c.charCodeAt(0));
    }
};
/**
 * create a zip file from a list of files
 * @param {{name: String, data: string | Blob | ArrayBuffer}[]} list
 * @return {Promise<Blob>}
 */
export async function createZip(list) {
    const buffer = await Promise.all(
        list.map(({ data }) => createBuffer(data))
    );
    /**
     * @type {{[name: string]: [Uint8Array, object]}}
     */
    const zipObj = Object.fromEntries(
        list.map(({ name }, i) => [name, [buffer[i], { level: 0 }]])
    );
    return makeZip(zipObj);
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

    const list = urls.map((data, i) => {
        const number = i.toString().padStart(nDigits, "0");
        const name = `${baseName || "ss"}_${number}.png`;
        return { name, data };
    });
    return createZip(list);
}
