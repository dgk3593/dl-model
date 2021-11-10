import { useAppState } from "@/state";
import { pngUrlToZip } from "@/dl-viewer/utils/createZip";
import { saveAs } from "file-saver";

import viewer from "@/viewer";

const { setLoadingMsg } = useAppState.getState();

export const getRotateFrames = () => {
    setLoadingMsg("Generating frames...");
    setTimeout(async () => {
        const { frameRate = 30, duration = 5 } =
            viewer.userData.specialCapture ?? {};

        let tmp = viewer.scene.background;
        viewer.scene.background = null;

        const { sqrt, sin, cos, atan, PI } = Math;
        let { x, y, z } = viewer.camera.position;
        const { x: xT, z: zT } = viewer.controls.target;
        const r = sqrt((x - xT) ** 2 + (z - zT) ** 2);
        if (r === 0) {
            setLoadingMsg("Invalid camera settings");
            setTimeout(() => setLoadingMsg(""), 1000);
            return;
        }

        const nFrames = duration * frameRate;
        const dphi = (2 * PI) / nFrames;
        const phi0 = z === zT ? PI / 4 : atan((x - xT) / (z - zT));
        const frames = [];

        let phi = phi0;
        for (let i = 0; i < nFrames; i++) {
            x = xT + r * sin(phi);
            z = zT + r * cos(phi);
            viewer.camera.position.set(x, y, z);
            viewer.controls.update();
            viewer.render();
            const frame = viewer.canvas.toDataURL();
            frames.push(frame);
            phi += dphi;
        }

        viewer.scene.background = tmp;
        setLoadingMsg("Creating zip...");
        const fileName = "frames";
        const zip = await pngUrlToZip(frames, fileName);

        setLoadingMsg("Finished");
        saveAs(zip, `${fileName}.zip`);
        setTimeout(() => setLoadingMsg(""), 1000);
    });
};

export const getRotateClip = () => {
    setLoadingMsg("Recording...");
    setTimeout(async () => {
        const { frameRate = 30, duration = 5 } =
            viewer.userData.specialCapture ?? {};
        const isPaused = viewer.loop.paused;

        // overwrite record settings
        const tmp = viewer.record.settings.frameRate;
        viewer.record.settings.frameRate = frameRate;

        let elapsedTime = 0;

        const { sqrt, sin, cos, atan, PI } = Math;
        let { x, y, z } = viewer.camera.position;
        const { x: xT, z: zT } = viewer.controls.target;
        const r = sqrt((x - xT) ** 2 + (z - zT) ** 2);
        if (r === 0) {
            setLoadingMsg("Invalid camera settings");
            setTimeout(() => setLoadingMsg(""), 1000);
            return;
        }

        const angularVelocity = (2 * PI) / duration;
        const phi0 = z === zT ? PI / 4 : atan((x - xT) / (z - zT));
        let phi = phi0;
        const listener = viewer.addEventListener("timeUpdate", ({ dt }) => {
            elapsedTime += dt;
            if (elapsedTime > duration) {
                viewer.record.stop();
                setTimeout(() => setLoadingMsg(""), 1000);

                viewer.removeEventListener("timeUpdate", listener);
                isPaused && viewer.loop.pause();
                viewer.record.settings.frameRate = tmp; // restore old settings
            }
            x = xT + r * sin(phi);
            z = zT + r * cos(phi);
            viewer.camera.position.set(x, y, z);
            phi += angularVelocity * dt;
        });
        isPaused && viewer.loop.resume();
        viewer.record.start();
    });
};
