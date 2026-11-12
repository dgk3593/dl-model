import { useAppState, useActiveModel } from "@/state";
import { pngUrlToZip } from "@/dl-viewer/utils/createZip";
import { saveAs } from "@/helper/saveAs";
import viewer from "@/viewer";
import { encodeAnimatedFrames } from "@/helper/encodeAnimatedFrames";

const { setLoadingMsg } = useAppState.getState();

/**
 * get frames function
 * @param {()=> Promise<Array<string>>} getFrames
 * @return {() => void}
 */
const downloadFrames = getFrames => () => {
  setLoadingMsg("Generating frames...");
  setTimeout(async () => {
    const frames = await getFrames();

    setLoadingMsg("Creating zip...");
    const fileName = "frames";
    const zip = await pngUrlToZip(frames, fileName);

    setLoadingMsg("Finished");
    saveAs(zip, `${fileName}.zip`);
    setTimeout(() => setLoadingMsg(""), 1000);
  });
};

/**
 * get frames function
 * @param {()=> Promise<Array<string>>} getFrames
 * @return {() => void}
 */
const getGif = getFrames => async () => {
  setLoadingMsg("Generating frames...");
  const { frameRate } = viewer.screenshot.settings;
  setTimeout(async () => {
    const frames = await getFrames();

    setLoadingMsg("Creating gif...");
    const { makeGif } = await import("@/helper/makeGif");
    const gif = await makeGif({
      frames,
      width: viewer.viewport.width,
      height: viewer.viewport.height,
      delay: Math.ceil(1000 / frameRate),
    });

    setLoadingMsg("Finished");
    saveAs(gif, "spCapture.gif");
    setTimeout(() => setLoadingMsg(""), 1000);
  });
};

const getApng = getFrames => () => {
  setLoadingMsg("Generating frames...");
  setTimeout(async () => {
    try {
      const frames = await getFrames(true);
      if (!frames?.length) throw new Error("No frames were captured.");
      setLoadingMsg(`Creating APNG from ${frames.length} frames...`);
      const { frameRate = 30 } = viewer.userData.specialCapture ?? {};
      const delay = Math.ceil(1000 / frameRate);
      const apng = await encodeAnimatedFrames(
        "apng",
        frames,
        viewer.canvas.width,
        viewer.canvas.height,
        delay,
      );

      setLoadingMsg("Finished");
      saveAs(apng, "spCapture.png");
      setTimeout(() => setLoadingMsg(""), 1000);
    } catch (error) {
      console.error("Failed to create special capture APNG:", error);
      setLoadingMsg("Failed to create APNG");
      setTimeout(() => setLoadingMsg(""), 3000);
    }
  });
};

const getWebp = getFrames => () => {
  setLoadingMsg("Generating frames...");
  setTimeout(async () => {
    try {
      const frames = await getFrames(true);
      if (!frames?.length) throw new Error("No frames were captured.");
      setLoadingMsg(`Creating WebP from ${frames.length} frames...`);
      const { frameRate = 30 } = viewer.userData.specialCapture ?? {};
      const webp = await encodeAnimatedFrames(
        "webp",
        frames,
        viewer.canvas.width,
        viewer.canvas.height,
        Math.ceil(1000 / frameRate),
      );

      setLoadingMsg("Finished");
      saveAs(webp, "spCapture.webp");
      setTimeout(() => setLoadingMsg(""), 1000);
    } catch (error) {
      console.error("Failed to create special capture WebP:", error);
      setLoadingMsg("Failed to create WebP");
      setTimeout(() => setLoadingMsg(""), 3000);
    }
  });
};

export const programs = [
  {
    value: "rotate",
    label: "Rotate",
    frames: downloadFrames(getRotateFrames),
    gif: getGif(getRotateFrames),
    apng: getApng(raw => getRotateFrames(raw)),
    webp: getWebp(raw => getRotateFrames(raw)),
    clip: getRotateClip,
    preview: previewRotate,
  },
  {
    value: "speedDraw",
    label: "Speed Draw",
    frames: downloadFrames(getSpeedDrawFrames),
    gif: getGif(getSpeedDrawFrames),
    apng: getApng(raw => getSpeedDrawFrames(raw)),
    webp: getWebp(raw => getSpeedDrawFrames(raw)),
    clip: getSpeedDrawClip,
    preview: previewSpeedDraw,
  },
];

function getCanvasPixels() {
  const { width, height } = viewer.canvas;
  const context = viewer.renderer.getContext();
  const pixels = new Uint8Array(width * height * 4);
  context.readPixels(
    0,
    0,
    width,
    height,
    context.RGBA,
    context.UNSIGNED_BYTE,
    pixels,
  );

  const bytesPerRow = width * 4;
  const row = new Uint8Array(bytesPerRow);
  for (let y = 0, halfHeight = height >> 1; y < halfHeight; y++) {
    const top = y * bytesPerRow;
    const bottom = (height - y - 1) * bytesPerRow;
    row.set(pixels.subarray(top, top + bytesPerRow));
    pixels.copyWithin(top, bottom, bottom + bytesPerRow);
    pixels.set(row, bottom);
  }
  return pixels.buffer;
}

async function getRotateFrames(raw = false) {
  const { frameRate = 30, duration = 5 } = viewer.userData.specialCapture ?? {};

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
    frames.push(raw ? getCanvasPixels() : viewer.canvas.toDataURL());

    phi += dphi;
  }

  viewer.scene.background = tmp;
  return frames;
}

function getRotateClip() {
  setLoadingMsg("Recording...");
  const { frameRate = 30, duration = 5 } = viewer.userData.specialCapture ?? {};
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

function previewRotate() {
  const { duration = 5 } = viewer.userData.specialCapture ?? {};
  const isPaused = viewer.loop.paused;

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
      viewer.removeEventListener("timeUpdate", listener);
      isPaused && viewer.loop.pause();
    }
    x = xT + r * sin(phi);
    z = zT + r * cos(phi);
    viewer.camera.position.set(x, y, z);
    phi += angularVelocity * dt;
  });
  isPaused && viewer.loop.resume();
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
const getPointCounts = model => {
  const modelMeshes = model.meshes.visible;
  const attachmentMeshes = model.attachment.list.flatMap(a => a.meshes.visible);
  return [...modelMeshes, ...attachmentMeshes].map(getPointCount);
};

async function getSpeedDrawFrames(raw = false) {
  const model = useActiveModel.getState().activeModel;
  const list = getPointCounts(model).sort((a, b) => b.count - a.count);
  const count = list.map(({ count }) => count);
  const threshold = count.map((_, i) =>
    count.slice(0, i + 1).reduce((a, b) => a + b, 0),
  );
  threshold.unshift(0);
  const totalPoints = threshold.at(-1);

  const { frameRate = 30, duration = 5 } = viewer.userData.specialCapture ?? {};

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
    frames.push(raw ? getCanvasPixels() : viewer.canvas.toDataURL());
  }
  viewer.scene.background = tmp;
  return frames;
}

function getSpeedDrawClip() {
  const model = useActiveModel.getState().activeModel;
  setLoadingMsg("Recording...");
  const list = getPointCounts(model).sort((a, b) => b.count - a.count);
  const count = list.map(({ count }) => count);
  const threshold = count.map((_, i) =>
    count.slice(0, i + 1).reduce((a, b) => a + b, 0),
  );
  threshold.unshift(0);
  const totalPoints = threshold.at(-1);

  const { frameRate = 30, duration = 5 } = viewer.userData.specialCapture ?? {};
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

function previewSpeedDraw() {
  const model = useActiveModel.getState().activeModel;
  const list = getPointCounts(model).sort((a, b) => b.count - a.count);
  const count = list.map(({ count }) => count);
  const threshold = count.map((_, i) =>
    count.slice(0, i + 1).reduce((a, b) => a + b, 0),
  );
  threshold.unshift(0);
  const totalPoints = threshold.at(-1);

  const { duration = 5 } = viewer.userData.specialCapture ?? {};
  const isPaused = viewer.loop.paused;

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
          isPaused && viewer.loop.pause();
        }, 1000);
      }
    }
  });
  isPaused && viewer.loop.resume();
}
