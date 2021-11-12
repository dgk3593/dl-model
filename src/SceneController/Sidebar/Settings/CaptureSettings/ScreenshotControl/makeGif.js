import "./gif";

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
    new Promise(resolve => {
        const gif = new GIF({
            workerScript: "assets/gif.worker.js",
            workers: 2,
            quality: 10,
            repeat: 0,
            width,
            height,
            transparent: "#00000000",
        });
        frames.forEach(frame => {
            const img = new Image();
            img.src = frame;
            gif.addFrame(img, { delay });
        });
        gif.on("finished", resolve);
        gif.render();
        console.log(`Rendering gif from ${gif.frames.length} frames`);
    });
