/** download a blob as the given file name
 * @param {Blob} blob
 * @param {string} fileName
 */
export default function downloadBlob(blob, fileName) {
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
