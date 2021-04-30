/**
 * download data URI as the given file name
 * @param {string} uri - data URI
 * @param {string} fileName
 */
export default function downloadURL(uri, fileName) {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = uri;
    a.download = fileName;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
}
