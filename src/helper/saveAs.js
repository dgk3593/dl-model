/**
 * Triggers a native browser file download for Blobs or raw source URLs.
 *
 * @param {Blob | File | string} source - The file blob object or absolute URL string to download.
 * @param {string} fileName - The desired name for the downloaded file (e.g., "frames.zip").
 */
export function saveAs(source, fileName) {
  if (!source) return;

  const isBlob = source instanceof Blob || source instanceof File;
  const downloadUrl = isBlob ? window.URL.createObjectURL(source) : source;

  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = fileName || "download";
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  isBlob && setTimeout(() => window.URL.revokeObjectURL(downloadUrl), 100);
}
