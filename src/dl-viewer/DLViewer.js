import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
    DEFAULT_BACKGROUND,
    DEFAULT_MODEL,
    DEFAULT_MAT_PARAMS,
    DEFAULT_OUTLINE,
} from "./defaultParams";

import { createBackground, createCamera, createRenderer, wait } from "./utils";
import toneMappings from "./utils/toneMappings";
import eventDispatcher from "./utils/eventDispatcher";
import { createDLModel } from "./wrapModel";
import { FBX_SOURCE, ANIMATION_SOURCE } from "./path";
import { loadFBXModel } from "./utils/loader";
import {
    createEffectComposer,
    createPass,
    createPassController,
} from "./utils/postProcessing";
import Stats from "stats.js";
import createRecorder from "./utils/createRecorder";
import createLoop from "./utils/createLoop";
import createScreenshotHandler from "./utils/createScreenshotHandler";
import { ArrayWithEvent } from "./utils/ArrayWithEvent";
import { initViewerData } from "./utils/data/initData";
import { createLightHandler } from "./utils/createLightHandler";
import { loadModelFromCode } from "./utils/loadCode";

export class DLViewer {
    constructor() {
        // event dispatcher functionalities
        Object.assign(this, eventDispatcher);

        // Scene
        const scene = new THREE.Scene();
        this.scene = scene;
        this.background = DEFAULT_BACKGROUND;

        // Clock
        this.clock = new THREE.Clock();

        // Camera
        const camera = createCamera();
        this.camera = camera;

        // Light
        const light = createLightHandler(this);
        light.add("directional");
        light.add("ambient");
        this.light = light;

        // Renderer
        const renderer = createRenderer();
        this.renderer = renderer;
        this.canvas = renderer.domElement;

        // screenshot
        this.screenshot = createScreenshotHandler(this);

        // media recorder
        this.record = createRecorder(this.canvas);

        // Controls
        this.controls = new OrbitControls(this.camera, this.canvas);

        // post-processing
        this.postProcessing = {
            enabled: false,
            passes: new ArrayWithEvent(),
            composer: createEffectComposer({
                renderer,
                scene,
                camera,
            }),

            async addPass(type, params = {}) {
                const pass = await createPass(type, {
                    ...params,
                    renderer,
                    scene,
                    camera,
                });
                this.composer.addPass(pass);
                const controller = createPassController(pass);
                const { passes } = this;
                const current = this;
                controller.remove = () => {
                    passes.remove(controller);
                    current.refresh();
                };

                passes.push(controller);
                return pass;
            },

            async refresh() {
                this.composer = createEffectComposer({
                    renderer,
                    scene,
                    camera,
                });
                const passList = this.passes.map(({ type, params }) => ({
                    type,
                    params: Object.entries(params),
                }));
                this.passes.length = 0;

                const { length } = passList;
                for (let i = 0; i < length; i++) {
                    const { type, params } = passList[i];
                    const newPass = await this.addPass(type);
                    params.forEach(
                        ([prop, value]) => void (newPass[prop] = value)
                    );
                }
            },

            updatePasses(passes) {
                this.passes.length = 0;
                this.passes.splice(0, 0, ...passes);
                this.refresh();
            },
        };

        // Stats
        this.stats = new Stats();

        // Set up loop
        this.loop = createLoop(this);
        this.loop.start();

        console.info(
            "%cDragalia Lost Model Viewer",
            "color:yellow;background-color:black;font-size:1.5rem;text-shadow: 0 0 0.5rem white"
        );
    }

    // data
    userData = { ani: new ArrayWithEvent() };
    dataLoaded = false;
    initData = async () => {
        await initViewerData();
        this.dataLoaded = true;
        this.dispatchEvent({ type: "dataLoaded" });
    };

    /**Background
     * @type {string}
     */
    _background = "";

    get background() {
        return this._background;
    }

    /**
     * @param {string} bg - background to set
     */
    set background(bg) {
        if (this._background === bg) return;

        this._background = "loading";
        this.scene.background?.dispose?.();
        const viewer = this;

        (async function loadNewBackground() {
            viewer.scene.background = await createBackground(bg);
            viewer._background = bg;

            // update aspect ratio if new bg is an image
            if (bg.startsWith("img:")) viewer.updateBgAspectRatio();
        })();
    }

    // tone mapping
    get toneMapping() {
        const { toneMapping } = this.renderer;
        return (
            Object.entries(toneMappings).find(
                ([, value]) => value === toneMapping
            )?.[0] ?? "Unknown"
        );
    }

    set toneMapping(value) {
        const key = toneMappings[value] ? value : "No Mapping";
        this.renderer.toneMapping = toneMappings[key];
    }

    get pixelRatio() {
        return this.renderer.getPixelRatio();
    }

    // pixel ratio
    set pixelRatio(value) {
        this.renderer.setPixelRatio(value);
        this.postProcessing.composer.setPixelRatio(value);
    }

    // Model
    /**
     * @type {DLModel[]}
     */
    model = new ArrayWithEvent();

    /**
     * @type {DLModel[]}
     */
    loadedModel = new ArrayWithEvent();

    get unusedModel() {
        return this.loadedModel.filter(model => !this.model.includes(model));
    }

    /** Load Dragalia Lost model with specified id
     * @param {string} id - id of DL model to load
     * @return {Promise<DLModel>}
     */
    async loadDLModel(id = DEFAULT_MODEL) {
        if (!this.dataLoaded)
            await new Promise(resolve =>
                this.addCountedEventListener("dataLoaded", resolve)
            );

        const fbxPath = DLViewer.getModelPath(id);
        const model = await loadFBXModel(fbxPath);
        model.name = id;

        const wrapParams = {
            id,
            outline: this.settings.outline,
            material: this.settings.material,
            viewer: this,
        };
        const dlModel = createDLModel(model, wrapParams);

        this.loadedModel.push(dlModel);
        dlModel.addEventListener("dispose", () =>
            this.loadedModel.remove(dlModel)
        );

        return dlModel;
    }

    // /** !! TODO
    //  * load non-DL model
    //  * @param {string} path
    //  * @returns
    //  */
    // async loadModel(path = "") {
    //     if (!path) return;
    // }

    /**
     * !! TODO
     * load from hash code
     * @param {string} code
     */
    loadModelFromCode = loadModelFromCode;

    /** add an object to scene
     * @param { object } object
     */
    add(object) {
        object.detach?.();
        this.model.push(object);
        this.scene.add(object.model);
        object.parent = this;
    }

    /** remove an object from scene
     * @param { object } object
     */
    remove(object) {
        this.model.remove(object);
        this.scene.remove(object.model);
    }

    disposeAllModels() {
        this.loadedModel.forEach(model => model.dispose?.());
        this.model.length = 0;
    }

    // Sources
    static source = {
        fbx: FBX_SOURCE,
        ani: ANIMATION_SOURCE,
    };

    // default settings for new models
    settings = {
        outline: DEFAULT_OUTLINE,
        material: DEFAULT_MAT_PARAMS,
    };

    // Methods
    /**
     * @param {string} id
     * @return {string}
     */
    static getModelPath(id) {
        return `${this.source.fbx}/${id}/${id}.fbx`;
    }

    viewport = {
        width: 0,
        height: 0,
        /**
         * @param {number} width
         * @param {number} height
         */
        set(width, height) {
            this.width = width;
            this.height = height;
        },
    };

    /**
     * set viewport size, default is the entire viewport
     * @param {number} [w] - width
     * @param {number} [h] - height
     */
    async setViewport(w, h) {
        await wait(200);

        const width = w ?? window.innerWidth;
        const height = h ?? window.innerHeight;
        this.viewport.set(width, height);
        this.renderer.setSize(width, height);

        const aspect = width / height;
        this.camera.aspect = aspect;
        this.camera.updateProjectionMatrix();

        this.postProcessing.composer?.setSize(width, height);

        // change background image's aspect ratio if needed
        if (this.background.startsWith("img:")) this.updateBgAspectRatio();

        return this;
    }

    updateBgAspectRatio() {
        if (!this.background.startsWith("img:")) return;

        const { width, height } = this.viewport;
        const aspect = width / height;
        const { background } = this.scene;
        const { naturalWidth, naturalHeight } = background.image;
        const naturalAspect = naturalWidth / naturalHeight;
        const ratio = aspect / naturalAspect;
        const repeat = aspect > naturalAspect ? [1, 1 / ratio] : [ratio, 1];
        background.repeat.set(...repeat);
    }

    /**
     * @param {number} dt
     */
    update(dt) {
        this.animation?.update(dt);
        this.model.forEach(model => model.update?.(dt));
        this.loop.state === "inactive" && this.render();
        this.dispatchEvent({ type: "timeUpdate", dt });
    }

    stopAll() {
        this.model.forEach(model => model.animation?.stop?.());
    }

    playAll() {
        this.model.forEach(model => model.animation?.play?.());
    }

    render() {
        this.dispatchEvent({ type: "beforeRender" });

        this.postProcessing.enabled
            ? this.postProcessing.composer.render()
            : this.renderer.render(this.scene, this.camera);

        this.dispatchEvent({ type: "afterRender" });
    }

    toString() {
        return "Dragalia Lost Model Viewer";
    }

    dispose() {
        this.model.forEach(model => model.dispose());
        this.scene.background?.dispose?.();
        this.renderer.renderLists?.dispose();
        this.renderer.dispose();
    }
}
