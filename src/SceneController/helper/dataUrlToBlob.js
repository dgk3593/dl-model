export const dataUrlToBlob = dataUrl => {
    const [head, data] = dataUrl.split(",");
    const mime = head.split(";")[0].split(":")[1];

    const byteChars = window.atob(data);
    const byteLength = byteChars.length;
    const byteNumbers = new Array(byteLength)
        .fill()
        .map((_, i) => byteChars.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);

    return new Blob([byteArray], { type: mime });
};
