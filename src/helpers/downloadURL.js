/** download data URL as the given file name
 * @param {string} url - data URI
 * @param {string} fileName
 */
export default function downloadURL(url, fileName) {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = fileName;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
}
