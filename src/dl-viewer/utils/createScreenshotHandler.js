import { DEFAULT_SCREENSHOT_SETTINGS } from "../defaultParams";
import { downloadURL, batchDownloadPNG } from "./downloader";

/**
 * @param {import('@/dl-viewer/DLViewer').DLViewer} viewer
 */
export default function createScreenshotHandler(viewer) {
    const { canvas, scene } = viewer;

    const screenshot = {
        settings: DEFAULT_SCREENSHOT_SETTINGS,
        /**
         * get screenshots
         * @param {number} nFrames - number of frames to capture if animation loop is active
         */
        get(nFrames = 1) {
            const { noBackground, fileName } = this.settings;
            const removeBG = noBackground && !viewer.postProcessing.enabled;

            let tmp;
            if (viewer.loop.state === "inactive" || nFrames === 1) {
                if (removeBG)
                    [scene.background, tmp] = [null, scene.background];

                viewer.render();
                const ss = canvas.toDataURL();

                if (removeBG) scene.background = tmp;

                downloadURL(ss, `${fileName}.png`);
                viewer.render();
                return;
            }

            let counter = 0;
            const ssList = [];
            removeBG &&
                viewer.addCountedEventListener(
                    "beforeRender",
                    () => ([tmp, scene.background] = [scene.background, null])
                );

            function getScreenshot() {
                const screenshot = canvas.toDataURL("image/png");
                ssList.push(screenshot);

                if (++counter === nFrames) {
                    removeBG &&
                        viewer.addCountedEventListener(
                            "beforeRender",
                            () => ([tmp, scene.background] = [null, tmp])
                        );
                    batchDownloadPNG(ssList, fileName);
                }
            }
            viewer.addCountedEventListener(
                "afterRender",
                getScreenshot,
                nFrames
            );
        },

        // Main thread block
        getAllFrames(model) {
            const currenChain = model?.animation.current.chainName;
            if (!currenChain) return;

            const duration = model.animation.chain[currenChain].duration;
            if (duration === Infinity) return;

            console.log("main thread locked");

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

            console.log("main thread unlocked");

            if (noBackground) [scene.background, tmp] = [tmp, scene.background];
            if (loopState === "active") viewer.loop.start();
            return frames;
        },

        downloadAllFrames(modelIndex = 0) {
            const { fileName } = this.settings;
            const frames = this.getAllFrames(modelIndex);
            batchDownloadPNG(frames, fileName);
        },
    };

    return screenshot;
}
