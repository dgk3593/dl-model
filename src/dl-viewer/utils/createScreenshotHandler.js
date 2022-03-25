import { DEFAULT_SCREENSHOT_SETTINGS } from "../defaultParams";
import { downloadURL, batchDownloadPNG } from "./downloader";

/**
 * @param {import('@/dl-viewer/DLViewer').DLViewer} viewer
 */
export default function createScreenshotHandler(viewer) {
    const { canvas, scene } = viewer;

    const screenshotHandler = {
        settings: DEFAULT_SCREENSHOT_SETTINGS,

        /**
         * get screenshots
         * @param {number} nFrames - number of frames to capture if animation loop is active
         */
        downloadFrame(nFrames = 1) {
            const { noBackground, fileName } = this.settings;
            const removeBG = noBackground && !viewer.postProcessing.enabled;

            let tmp = null;
            const swapBackground = () =>
                ([scene.background, tmp] = [tmp, scene.background]);
            if (viewer.loop.state === "inactive" || nFrames === 1) {
                if (removeBG) swapBackground();

                viewer.render();
                const ss = canvas.toDataURL();

                if (removeBG) swapBackground();

                downloadURL(ss, `${fileName}.png`);
                viewer.render();
                return;
            }

            let counter = 0;
            const ssList = [];
            removeBG &&
                viewer.addCountedEventListener("beforeRender", swapBackground);

            function getScreenshot() {
                const screenshot = canvas.toDataURL("image/png");
                ssList.push(screenshot);
                if (++counter !== nFrames) return;

                removeBG &&
                    viewer.addCountedEventListener(
                        "beforeRender",
                        swapBackground
                    );
                batchDownloadPNG(ssList, fileName);
            }
            viewer.addCountedEventListener(
                "afterRender",
                getScreenshot,
                nFrames
            );
        },

        getFrame() {
            let url;
            const { noBackground } = this.settings;
            const removeBG = noBackground && !viewer.postProcessing.enabled;
            if (removeBG) {
                let tmp = null;
                [scene.background, tmp] = [tmp, scene.background]; // remove background and get screenshot

                viewer.render();
                url = canvas.toDataURL("image/png");

                [scene.background, tmp] = [tmp, scene.background]; // restore background
                viewer.render();
            } else {
                viewer.render();
                url = canvas.toDataURL("image/png");
            }
            return url;
        },

        // Will block main thread
        getAllFrames(model) {
            const currenChain = model?.animation.current.chainName;
            if (!currenChain) return;

            const duration = model.animation.chain[currenChain].duration;
            if (duration === Infinity) return;

            console.info("main thread locked");

            const loopState = viewer.loop.state;
            viewer.loop.stop();
            model.animation.stop();

            const frames = [];
            const { frameRate, noBackground } = this.settings;
            const frameTime = 1 / (frameRate || 30);
            let tmp = null,
                capturing = true;

            if (noBackground) [scene.background, tmp] = [tmp, scene.background];
            // stop capturing when chain finishes
            model.animation.addCountedEventListener(
                "chainFinished",
                () => (capturing = false)
            );

            model.animation.play();
            while (capturing) {
                viewer.update(frameTime);
                const frame = canvas.toDataURL();
                frames.push(frame);
            }

            console.info("main thread unlocked");

            if (noBackground) [scene.background, tmp] = [tmp, scene.background];
            if (loopState === "active") viewer.loop.start();
            return frames;
        },

        downloadAllFrames(modelIndex = 0) {
            const model = viewer.model[modelIndex];
            const frames = this.getAllFrames(model);

            const { fileName } = this.settings;
            batchDownloadPNG(frames, fileName);
        },

        // Will block main thread
        getAllFramesAsArrayBuffer(model) {
            const currenChain = model?.animation.current.chainName;
            if (!currenChain) return;

            const duration = model.animation.chain[currenChain].duration;
            if (duration === Infinity) return;

            console.info("main thread locked");

            const ctx = viewer.renderer.getContext();
            const loopState = viewer.loop.state;
            viewer.loop.stop();
            model.animation.stop();

            const bufferList = [];
            const { frameRate, noBackground } = this.settings;
            const frameTime = 1 / (frameRate || 30);
            const { width, height } = canvas;
            const pxCount = width * height;
            const bufferSize = pxCount * 4;

            let tmp = null,
                capturing = true;

            if (noBackground) [scene.background, tmp] = [tmp, scene.background];
            // stop capturing when chain finishes
            model.animation.addCountedEventListener(
                "chainFinished",
                () => (capturing = false)
            );

            model.animation.play();
            while (capturing) {
                viewer.update(frameTime);
                const pixels = new Uint8Array(bufferSize);
                ctx.readPixels(
                    0,
                    0,
                    width,
                    height,
                    ctx.RGBA,
                    ctx.UNSIGNED_BYTE,
                    pixels
                );
                const data = flipPixels(pixels, { width, height });
                bufferList.push(data.buffer);
            }

            console.info("main thread unlocked");

            if (noBackground) [scene.background, tmp] = [tmp, scene.background];
            if (loopState === "active") viewer.loop.start();
            return bufferList;
        },
    };

    return screenshotHandler;
}

/**
 * flip image stored in buffer vertically, mutate the buffer
 * @param {Uint8Array} pixels
 */
function flipPixels(pixels, { width, height }) {
    const halfHeight = (height / 2) | 0; // the | 0 keeps the result an int
    const bytesPerRow = width * 4;

    // make a temp buffer to hold one row
    const temp = new Uint8Array(width * 4);
    for (let i = 0; i < halfHeight; ++i) {
        const topOffset = i * bytesPerRow;
        const bottomOffset = (height - i - 1) * bytesPerRow;

        // make copy of a row on the top half
        temp.set(pixels.subarray(topOffset, topOffset + bytesPerRow));

        // copy a row from the bottom half to the top
        pixels.copyWithin(topOffset, bottomOffset, bottomOffset + bytesPerRow);

        // copy the copy of the top half row to the bottom half
        pixels.set(temp, bottomOffset);
    }
    return pixels;
}
