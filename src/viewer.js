// @ts-nocheck
import { DLViewer } from "./dl-viewer";
import fscreen from "fscreen";

const viewer = new DLViewer();
viewer.initData();
viewer.setViewport();

window.addEventListener("resize", () => viewer.setViewport());
viewer.canvas.addEventListener("dblclick", toggleFullScreen);

window.viewer = viewer;
window.model = viewer.model;

export default viewer;

function toggleFullScreen() {
    if (!fscreen.fullscreenEnabled) return;

    if (!fscreen.fullscreenElement) {
        fscreen.requestFullscreen(viewer.canvas);
        return;
    }

    fscreen.exitFullscreen();
}

if (import.meta.env.DEV) {
    window.fbx2json = async list => {
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
