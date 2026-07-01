import { GIF } from "./gif.js";

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
    const workerUrl = new URL("/assets/gif.worker.js", import.meta.url).href;

    const gif = new GIF({
      workerScript: workerUrl,
      workerOptions: { type: "module" },
      workers: navigator.hardwareConcurrency || 4,
      quality: 10,
      repeat: 0,
      width,
      height,
      transparent: 0x000000,
      background: null,
    });

    try {
      const decodedImages = await Promise.all(frames.map(createImg));

      for (let i = 0; i < decodedImages.length; i++) {
        gif.addFrame(decodedImages[i], { delay });
      }
    } catch (error) {
      console.error("Error preprocessing frames in parallel:", error);
    }

    gif.on("finished", resolve);

    gif.render();
    console.info(`Render gif from ${gif.frames.length} frames`);
  });
