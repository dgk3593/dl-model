// @ts-nocheck
import { DLViewer } from "./dl-viewer";
import fscreen from "fscreen";
import { batchDownloadPNG } from "./dl-viewer/utils/downloader";
import { saveAs } from "file-saver";

const viewer = new DLViewer();
viewer.initData();
viewer.setViewport();
viewer.userData.specialCapture = {
    frameRate: 30,
    duration: 5,
    program: "rotate",
};

window.addEventListener("resize", () => viewer.setViewport());
viewer.canvas.addEventListener("dblclick", toggleFullScreen);

export default viewer;

// for console / bookmarklet
window.viewer = viewer;
window.model = viewer.model;
window.getFrame = viewer.screenshot.getFrame;
window.downloadFrames = batchDownloadPNG;
window.saveAs = saveAs;
window.makeGif = async params => {
    const { makeGif } = await import("./helper/makeGif");
    return await makeGif(params);
};

function toggleFullScreen() {
    if (!fscreen.fullscreenEnabled) return;

    if (!fscreen.fullscreenElement) {
        fscreen.requestFullscreen(viewer.canvas);
        return;
    }

    fscreen.exitFullscreen();
}

if (import.meta.env.DEV) {
    window.fbx2json = async (...list) => {
        const { fbx2json } = await import("./utils/fbx2json");
        fbx2json(list);
    };

    window.processSummonClips = async () => {
        const { processSummonClips } = await import(
            "./utils/processSummonClips"
        );
        processSummonClips();
    };
}
