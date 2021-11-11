import { useAppState, useActiveModel } from "@/state";
import { pngUrlToZip } from "@/dl-viewer/utils/createZip";
import { saveAs } from "file-saver";

import viewer from "@/viewer";

const { setLoadingMsg } = useAppState.getState();

export const programs = [
    {
        value: "rotate",
        label: "Rotate",
        frames: getRotateFrames,
        clip: getRotateClip,
    },
    {
        value: "speedDraw",
        label: "Speed Draw",
        frames: getSpeedDrawFrames,
        clip: getSpeedDrawClip,
    },
];

function getRotateFrames() {
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
            viewer.update(1 / frameRate);

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
}

function getRotateClip() {
    setLoadingMsg("Recording...");
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
}

/**
 * @param {THREE.Mesh} mesh
 * @return {{ geometry: THREE.BufferGeometry, count: number }}
 */
const getPointCount = mesh => {
    const { geometry } = mesh;
    const { start, count } = geometry.groups.at(-1);
    return { geometry, count: start + count };
};

/**
 * @param {DLModel} model
 * @return {{ geometry: THREE.BufferGeometry, count: number }[]}[]
 */
const getPointCounts = model => model.meshes.visible.map(getPointCount);

function getSpeedDrawFrames() {
    const model = useActiveModel.getState().activeModel;
    setLoadingMsg("Generating frames...");
    const list = getPointCounts(model).sort((a, b) => b.count - a.count);
    const count = list.map(({ count }) => count);
    const threshold = count.map((_, i) =>
        count.slice(0, i + 1).reduce((a, b) => a + b, 0)
    );
    threshold.unshift(0);
    const totalPoints = threshold.at(-1);

    setTimeout(async () => {
        const { frameRate = 30, duration = 5 } =
            viewer.userData.specialCapture ?? {};

        let tmp = viewer.scene.background;
        viewer.scene.background = null;

        const nFrames = duration * frameRate;
        const frames = [];
        let meshIndex = 0,
            currentPoints = 0;
        list.forEach(({ geometry }) => (geometry.drawRange.count = 0));

        for (let i = 0; i <= nFrames; i++) {
            model.update(1 / frameRate);

            currentPoints = Math.ceil((totalPoints * i) / nFrames);
            list[meshIndex].geometry.drawRange.count =
                currentPoints - threshold[meshIndex];

            const overshoot = currentPoints - threshold[meshIndex + 1];
            if (overshoot >= 0) {
                list[meshIndex++].geometry.drawRange.count = Infinity;
                if (meshIndex < list.length)
                    list[meshIndex].geometry.drawRange.count = overshoot;
            }

            viewer.render();
            const frame = viewer.canvas.toDataURL();
            frames.push(frame);
        }
        viewer.scene.background = tmp;
        setLoadingMsg("Creating zip...");
        const fileName = "frames";
        const zip = await pngUrlToZip(frames, fileName);

        setLoadingMsg("Finished");
        saveAs(zip, `${fileName}.zip`);
        setTimeout(() => setLoadingMsg(""), 1000);
    });
}

function getSpeedDrawClip() {
    const model = useActiveModel.getState().activeModel;
    setLoadingMsg("Recording...");
    const list = getPointCounts(model).sort((a, b) => b.count - a.count);
    const count = list.map(({ count }) => count);
    const threshold = count.map((_, i) =>
        count.slice(0, i + 1).reduce((a, b) => a + b, 0)
    );
    threshold.unshift(0);
    const totalPoints = threshold.at(-1);

    const { frameRate = 30, duration = 5 } =
        viewer.userData.specialCapture ?? {};
    const isPaused = viewer.loop.paused;

    // overwrite record settings
    const tmp = viewer.record.settings.frameRate;
    viewer.record.settings.frameRate = frameRate;

    let meshIndex = 0,
        currentPoints = 0;
    list.forEach(({ geometry }) => (geometry.drawRange.count = 0));

    const { ceil, max } = Math;
    const listener = viewer.addEventListener("timeUpdate", ({ dt }) => {
        const dpoints = ceil((totalPoints * dt) / duration);
        currentPoints += max(dpoints, 1);
        list[meshIndex].geometry.drawRange.count =
            currentPoints - threshold[meshIndex];

        const overshoot = currentPoints - threshold[meshIndex + 1];
        if (overshoot >= 0) {
            list[meshIndex++].geometry.drawRange.count = Infinity;
            if (meshIndex >= list.length) {
                viewer.removeEventListener("timeUpdate", listener);
                setTimeout(() => {
                    setLoadingMsg("");
                    viewer.record.stop();

                    isPaused && viewer.loop.pause();
                    viewer.record.settings.frameRate = tmp; // restore old settings
                }, 1000);
            }
        }
    });
    isPaused && viewer.loop.resume();
    viewer.record.start();
}
