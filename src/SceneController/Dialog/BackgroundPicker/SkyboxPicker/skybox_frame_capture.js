viewer.disposeAllModels();
viewer.pixelRatio = 1;
viewer.setViewport(256, 256);
viewer.loop.stop();
viewer.controls.autoRotateSpeed = 32;
viewer.controls.autoRotate = true;

viewer.screenshot.settings.noBackground = false;

for (let i = 0; i < 112; i++) {
    viewer.screenshot.settings.fileName = `frame_${i
        .toString()
        .padStart(3, "0")}.png`;
    viewer.screenshot.get();
    await new Promise(resolve => setTimeout(resolve, 100));
    viewer.controls.update();
}
