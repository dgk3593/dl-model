export default function createLoop(viewer) {
    let timeScale = 1;
    let reverse = false;
    let paused = false;
    const animationLoop = () => {
        viewer.stats.begin();

        viewer.controls.update();
        const effectiveTimeScale = reverse ? -timeScale : timeScale;
        const dt = viewer.clock.getDelta() * effectiveTimeScale;
        if (!paused) {
            viewer.update(dt);
        }
        viewer.render();

        viewer.stats.end();
    };

    let cooldown = false;
    const renderCallback = () => {
        if (cooldown) return;

        viewer.render();
        cooldown = true;
        setTimeout(() => (cooldown = false), 50);
    };

    let state = "";
    const loop = {
        start() {
            if (state === "active") return;

            viewer.renderer.setAnimationLoop(animationLoop);
            viewer.controls.removeEventListener("change", renderCallback);
            state = "active";
        },
        stop() {
            if (state === "inactive") return;

            viewer.renderer.setAnimationLoop(null);
            viewer.controls.addEventListener("change", renderCallback);
            state = "inactive";
        },
        pause() {
            paused = true;
        },
        resume() {
            paused = false;
        },
        get state() {
            return state;
        },
        /**
         * @return {number}
         */
        get timeScale() {
            return timeScale;
        },
        /**
         * @param {number | string} value
         */
        set timeScale(value) {
            const setValue = parseFloat(value);
            timeScale = isNaN(setValue) ? 1 : Math.abs(setValue);
        },
        get reverse() {
            return reverse;
        },
        set reverse(value) {
            reverse = !!value;
        },
        get paused() {
            return paused;
        },
        set paused(value) {
            paused = !!value;
        },
    };

    return loop;
}
