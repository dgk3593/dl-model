import "./gif";

/**
 * create HTMLImageElement from data url
 * @param {string} dataUrl
 * @return {Promise<HTMLImageElement>}
 */
const createImg = dataUrl =>
    new Promise(resolve => {
        const img = new Image();
        img.src = dataUrl;
        img.onload = () => resolve(img);
    });

/**
 *
 * @param {object} params
 * @param {string[]} params.frames - frames in data URL format
 * @param {number} [params.width]
 * @param {number} [params.height]
 * @param {number} [params.delay]
 * @return {Promise<Blob>}
 */
export const makeGif = ({
    frames,
    width = window.innerWidth,
    height = window.innerHeight,
    delay = 30,
}) =>
    new Promise(async resolve => {
        const gif = new GIF({
            workerScript: "assets/gif.worker.js",
            workers: 2,
            quality: 10,
            repeat: 0,
            width,
            height,
            transparent: "#0000",
        });
        for (let i = 0; i < frames.length; i++) {
            const img = await createImg(frames[i]);
            gif.addFrame(img, { delay });
        }
        gif.on("finished", blob => {
            gif.freeWorkers.forEach(worker => worker.terminate());
            resolve(blob);
        });
        gif.render();
        console.info(`Render gif from ${gif.frames.length} frames`);
    });
