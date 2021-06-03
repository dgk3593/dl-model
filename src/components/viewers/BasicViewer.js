import { PureComponent } from "react";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { CAM_PARAMS } from "helpers/consts";
import { isBlade, filterObject, getDefaultTexture } from "helpers/helpers";
import {
    createLight,
    analyzeWeaponCode,
    getModelPath,
    loadModel,
    dispose3dObject,
    createOutline,
    applyOutlineSettings,
    getParamsList,
    changeMaterial,
    updateMatParams,
    removeEffects,
    disableFrustumCulling,
    replaceTexture,
    applyMod,
    logUpdate,
} from "helpers/viewerHelpers";

import downloadURL from "helpers/downloadURL";
import { getDateTimeString } from "helpers/helpers";
import fscreen from "fscreen";

import { fbxSource } from "App";

/** Basic Viewer that supports adding / updating:
 *   - 1 main model
 *   - auto rotate
 *   - viewport
 *   - material
 *   - background color
 *   - lighting
 *   - anti aliasing
 *   - ASCII mode
 * @typedef {ViewerProps} Props
 * @extends PureComponent<Props>
 */
class BasicViewer extends PureComponent {
    async componentDidMount() {
        window.app = this;

        // const { fbx2json } = await import("helpers/fbx2json");
        // await fbx2json();

        // const { processSummonClips } = await import(
        //     "helpers/processSummonClips"
        // );
        // await processSummonClips();

        await this.initialize();
        this.finishedInit = true;

        this.addFullScreenListener();
    }

    /**
     * @param {ViewerProps} prev
     */
    componentDidUpdate(prev) {
        if (!this.finishedInit) return;
        /**
         * @type {ViewerProps}
         */
        const current = this.props;

        // print updated props to console
        console.log("Updated");
        logUpdate(prev, current);

        this.updateViewer(prev, current);
    }

    componentWillUnmount() {
        this.cameraStream?.getVideoTracks()[0].stop();
        this.removeFullScreenListener?.();
        cancelAnimationFrame(this.frameId);
        dispose3dObject(this.scene);
        this.renderer = null;
        this.rendererAA.renderLists?.dispose();
        this.rendererAA.dispose();
        this.rendererAA = null;
        this.rendererNoAA.renderLists?.dispose();
        this.rendererNoAA.dispose();
        this.rendererNoAA = null;
        this.mixer = null;
        this.clock = null;
        this.scene = null;
    }

    addFullScreenListener = () => {
        if (!fscreen.fullscreenEnabled) return;

        const toggleFullScreen = () => {
            if (!fscreen.fullscreenElement) {
                fscreen.requestFullscreen(this.mount);
                return;
            }

            fscreen.exitFullscreen();
        };
        this.mount?.addEventListener("dblclick", () => toggleFullScreen());
        this.removeFullScreenListener = () =>
            this.mount?.removeEventListener("dblclick", () =>
                toggleFullScreen()
            );
    };

    /** disable input and display a message, default is "Loading..."
     * @param {string} [msg]
     */
    disableInput = msg => this.props.setLoadingMsg(msg || "Loading...");

    /** remove loading message */
    enableInput = () => this.props.setLoadingMsg("");

    /** called when viewer is mounted to initialize the scene */
    initialize = async () => {
        this.disableInput();

        this.initScene();

        this.outlines = {};
        this.models = {};
        this.modelInfo = {};
        await this.loadMainModel();
        await this.afterMainModelLoad();

        this.enableInput();
    };

    /** Called after main model is loaded and added to scene */
    afterMainModelLoad = () => void 0;

    /** initialize scene, display size, floor, clock, light, camera, controls, and renderers */
    initScene = () => {
        // viewport
        this.viewport = this.props.viewport || {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        // clock
        this.clock = new THREE.Clock();

        // Scene
        this.scene = new THREE.Scene();
        this.background = this.props.background;

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            CAM_PARAMS.angle,
            this.viewport.width / this.viewport.height,
            CAM_PARAMS.near,
            CAM_PARAMS.far
        );
        /**
         * @type {xyzCoordinate}
         */
        this.cameraPosition = this.props.cameraPosition || [2, 0, 10];
        this.camera.position.set(...this.cameraPosition);
        this.camera.updateProjectionMatrix();

        // Light
        const { lights } = this.props;
        this.addAllLights(lights);

        // Renderer
        const { pixelRatio } = this.props;
        this.rendererAA = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            // logarithmicDepthBuffer: true,
        });
        this.rendererAA.outputEncoding = THREE.sRGBEncoding;
        this.rendererAA.setPixelRatio(pixelRatio);

        this.rendererNoAA = new THREE.WebGLRenderer({
            antialias: false,
            alpha: true,
            // logarithmicDepthBuffer: true,
        });
        this.rendererNoAA.outputEncoding = THREE.sRGBEncoding;
        this.rendererNoAA.setPixelRatio(pixelRatio);

        const AAEnabled = this.props.antiAliasing;
        this._AA = AAEnabled;

        this.renderer = AAEnabled ? this.rendererAA : this.rendererNoAA;

        this.finalRenderer = this.renderer;
        const { width, height } = this.props.viewport;
        this.finalRenderer.setSize(width, height);

        const canvas = this.finalRenderer.domElement;
        this.canvas = canvas;

        // Controls
        this.controls = new OrbitControls(this.camera, this.mount);
        /**
         * @type {xyzCoordinate}
         */
        this.controlsPosition = this.props.controlsPosition || [0, 0, 0];
        this.controls.target.set(...this.controlsPosition);
        this.controls.update();

        this.animate();
    };

    /** load, and perform basic processing on main model */
    loadMainModel = async () => {
        const modelId = this.props.model.id;
        this.modelInfo.main = modelId;

        const modelPath = getModelPath(modelId);
        const model = await loadModel(modelPath);
        this.models.main = model;

        await this.basicMainProcessing();
        return;
    };

    /** enable / disable Anti Aliasing
     * @param {Boolean} enabled
     */
    set AA(enabled) {
        if (enabled === this._AA) return;

        this._AA = enabled;
        this.renderer = enabled ? this.rendererAA : this.rendererNoAA;
        const { width, height } = this.viewport;
        this.renderer.setSize(width, height);

        if (this.props.ascii.enable) return;

        this.finalRenderer = this.renderer;

        const newCanvas = this.renderer.domElement;
        this.canvas = newCanvas;
    }

    /** add light to scene
     * @param {LightParam} light
     */
    addLight = light => {
        const { id, enable, ...params } = light;
        if (!enable) return;

        const newLight = createLight(params);

        this.scene.add(newLight);
        this.lights.push(newLight);
    };

    /** add lights to scene
     * @param {LightParam[]} lights
     */
    addAllLights = lights => {
        /**
         * @type {THREE.Light[]}
         */
        this.lights = [];
        lights.forEach(this.addLight);
    };

    /** remove light from scene
     * @param {THREE.Light} light
     */
    removeLight = light => this.scene.remove(light);

    /** remove all lights in the scene */
    removeAllLights = () => this.lights.forEach(this.removeLight);

    /** add model to scene
     * @param {THREE.Object3D} model
     */
    addToScene = model => this.scene?.add(model);

    /** change main model's texture if specified */
    initTexture = async () => {
        const { id: modelId, texture } = this.props.model;
        if (!texture || texture === ">") return;

        const defaultTexture = getDefaultTexture(modelId);
        const [source, name] = texture.split(">");
        const textureSource = source || modelId;
        const textureName = name || getDefaultTexture(textureSource);

        const texturePath = `${fbxSource}/fbx/${textureSource}/${textureName}.png`;
        const mainModel = this.models.main;
        await replaceTexture(mainModel, {
            oldTexture: defaultTexture,
            texturePath,
        });
    };

    /** apply modifier code to main model */
    applyModelMod = () => {
        const modCode = this.props.model.mod;
        modCode && applyMod(this.models.main, modCode);
    };

    /** main model basic processing:
     * remove effects, change material, change texture, add outline, then add to scene
     */
    basicMainProcessing = async () => {
        const model = this.models.main;

        removeEffects(model);
        disableFrustumCulling(model);

        const materialType = this.matType;
        const modelId = this.props.model.id;
        if (isBlade(modelId)) {
            const { texturePath } = analyzeWeaponCode(`${modelId}n`);
            changeMaterial(model, { materialType, texturePath });
        } else {
            changeMaterial(model, { materialType, forced: true });
        }

        await this.initTexture();
        this.applyModelMod();

        this.applyNewModelMat(model);

        const outlineParams = this.props.outline;
        this.outlines.main = await createOutline(model, outlineParams);

        this.addToScene(model);
    };

    /** update viewer's display
     * @param {ViewerProps} prev
     * @param {ViewerProps} current
     */
    updateViewer = async (prev, current) => {
        await this.updateExport(prev.export, current.export);
        this.updateCommon(prev, current);
        this.updateModel(prev, current);
        this.otherUpdate(prev, current);
    };

    /** update settings other than model and environment
     * @param {ViewerProps} prev
     * @param {ViewerProps} current
     */
    otherUpdate = (prev, current) => void 0;

    /** update viewport, outline, material, lighting, ASCII,
     * camera, control, background, and Anti Aliasing
     * @param {ViewerProps} prev
     * @param {ViewerProps} current
     */
    updateCommon = (prev, current) => {
        this.updateViewport(prev.viewport, current.viewport);
        this.updateOutline(prev.outline, current.outline);
        this.updateMaterial(prev.material, current.material);
        this.updateLights(prev.lights, current.lights);
        this.updateAscii(prev.ascii, current.ascii);
        this.updateCamera(prev.cameraPosition, current.cameraPosition);
        this.updateControl(prev.controlsPosition, current.controlsPosition);
        this.updatePixelRatio(prev.pixelRatio, current.pixelRatio);

        // Update background color
        if (prev.background !== current.background) {
            this.background = current.background;
        }

        this.AA = current.antiAliasing;
    };

    /** update model settings
     * @param {ViewerProps} prev
     * @param {ViewerProps} current
     */
    updateModel = (prev, current) => {
        this.updateMainModel(prev.model, current.model);
    };

    /** update viewport
     * @param {ViewerProps["viewport"]} prev
     * @param {ViewerProps["viewport"]} current
     */
    updateViewport = (prev, current) => {
        const { width, height } = current;
        if (prev.width === width && prev.height === height) return;

        this.viewport.width = width;
        this.viewport.height = height;

        this.finalRenderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.props.background === "camera" && this.setVideoBackgroundSize();
    };

    /** remove from scene and dispose main model */
    disposeMainModel = () => {
        const mainModel = this.models.main;
        this.scene?.remove(mainModel);
        dispose3dObject(mainModel);
    };

    /** replace main model */
    replaceMainModel = async () => {
        this.disableInput();

        this.disposeMainModel();
        await this.loadMainModel();
        this.applyNewModelMat(this.models.main);

        this.enableInput();
    };

    /** update main model
     * @param {ViewerProps["model"]} prev
     * @param {ViewerProps["model"]} current
     */
    updateMainModel = async (prev, current) => {
        const modelId = current.id;
        const idChanged = prev.id !== modelId;
        const modChanged = prev.mod !== current.mod;

        modChanged && this.applyModelMod();

        if (!idChanged) return;

        this.beforeMainModelUpdate();
        await this.replaceMainModel();
        this.afterMainModelUpdate();
    };

    /** called before main model is updated */
    beforeMainModelUpdate = () => void 0;

    /** called after main model is updated */
    afterMainModelUpdate = () => void 0;

    /** update outline parameters
     * @param {Map<string, *>} update
     */
    updateOutlineParams = update => {
        const outlines = Object.values(this.outlines).flat();
        outlines.forEach(outline => {
            applyOutlineSettings(outline, update);
        });
    };

    /** update outline settings
     * @param {AppOutlineState} prev - previous settings
     * @param {AppOutlineState} current - current settings
     */
    updateOutline = (prev, current) => {
        if (prev === current) return;

        const updatedKeys = Object.keys(current).filter(
            key => prev[key] !== current[key]
        );
        if (updatedKeys.length === 0) return;

        const update = new Map(updatedKeys.map(key => [key, current[key]]));
        this.updateOutlineParams(update);
    };

    /** get relevant parameters for the current material type */
    get matParams() {
        const { type: materialType, ...allParams } = this.props.material;
        const paramList = getParamsList(materialType);
        return filterObject(allParams, paramList);
    }

    /** get the current material type */
    get matType() {
        return this.props.material.type;
    }

    /** apply material setting to a newly loaded model */
    applyNewModelMat = model => {
        const params = this.matParams;
        const defaultParams = { useTexture: true };
        updateMatParams(model, { prevParams: defaultParams, params });
    };

    /** update material settings */
    updateMaterial = (prev, current) => {
        if (prev === current) return;

        const materialType = this.matType;
        const mainModel = this.models.main;

        const matTypeChanged = prev.type !== materialType;
        if (matTypeChanged) {
            changeMaterial(this.models.main, { materialType });
        }

        const prevParams = matTypeChanged
            ? { useTexture: prev.useTexture }
            : prev;
        const params = this.matParams;
        updateMatParams(mainModel, { prevParams, params });
    };

    /** update lighting
     * @param {LightParam[]} prev
     * @param {LightParam[]} current
     */
    updateLights = (prev, current) => {
        if (prev !== current) {
            this.removeAllLights();
            this.addAllLights(current);
        }
    };

    /** Update ASCII settings
     * @param {ViewerProps["ascii"]} prev
     * @param {ViewerProps["ascii"]} current
     */
    updateAscii = async (prev, current) => {
        const updated = Object.keys(prev).some(
            key => prev[key] !== current[key]
        );
        if (!updated) return;

        const { enable } = current;
        if (!enable) {
            this.finalRenderer = this.renderer;

            const { width, height } = this.viewport;
            this.renderer.setSize(width, height);

            const canvas = this.renderer.domElement;
            this.canvas = canvas;

            return;
        }

        this.showAscii();
    };

    /** render scene as ASCII */
    showAscii = async () => {
        const { charSet, color, bgColor, invert } = this.props.ascii;
        const { AsciiEffect } = await import(
            /* webpackChunkName: "AsciiEffect" */
            "three/examples/jsm/effects/AsciiEffect"
        );

        this.effect = new AsciiEffect(this.renderer, charSet, { invert });

        const { width, height } = this.viewport;
        this.effect.setSize(width, height);

        const canvas = this.effect.domElement;
        canvas.style.color = color;
        canvas.style.background = bgColor;
        this.canvas = canvas;

        this.finalRenderer = this.effect;
    };

    /**
     * @param {xyzCoordinate} prev
     * @param {xyzCoordinate} current
     */
    updateCamera = (prev, current) => {
        if (prev === current) return;

        this.camera.position.set(...current);
        this.camera.updateProjectionMatrix();
    };

    /**
     * @param {xyzCoordinate} prev
     * @param {xyzCoordinate} current
     */
    updateControl = (prev, current) => {
        if (prev === current) return;

        this.controls.target.set(...current);
        this.controls.update();
    };

    /** update renderer's pixel ratio
     * @param {number} prev
     * @param {number} current
     */
    updatePixelRatio = (prev, current) => {
        if (prev === current) return;

        this.rendererAA.setPixelRatio(current);
        this.rendererNoAA.setPixelRatio(current);
    };

    /**
     * @param {ViewerProps["export"]} prev
     * @param {ViewerProps["export"]} current
     */
    updateExport = async (prev, current) => {
        if (!current.enable || prev.enable) return;
        this.disableInput("Exporting");

        const { exportModel } = await import(
            /* webpackChunkName: "exporter" */ "helpers/exportModel"
        );
        await exportModel(this.models.main, current);
        this.props.onExportFinish();

        this.enableInput();
    };

    /**
     * @param {ColorCode | 'transparent' | 'camera'} bg
     */
    set background(bg) {
        switch (bg) {
            case "transparent":
                this.scene.background = null;
                return;
            case "camera":
                this.useCameraAsBackground();
                return;
            default:
                this.cameraStream?.getVideoTracks()[0].stop();
                this.scene.background = new THREE.Color(bg);
        }
    }

    setVideoBackgroundSize = () => {
        if (!this.cameraStream) return;

        const { width: screenWidth, height: screenHeight } = this.viewport;
        const screenAspectRatio = screenWidth / screenHeight;

        const { width: camWidth, aspectRatio: camAspectRatio } =
            this.cameraStream.getVideoTracks()[0].getSettings();

        const videoWidth =
            camAspectRatio > screenAspectRatio ? screenWidth : camWidth;
        const videoAspectRatio =
            camAspectRatio > screenAspectRatio
                ? screenAspectRatio
                : camAspectRatio;
        const videoHeight = videoWidth / videoAspectRatio;

        this.video.width = videoWidth;
        this.video.height = videoHeight;
    };

    /** use hardware camera as background, rear facing is prioritized */
    useCameraAsBackground = async () => {
        if (!navigator.mediaDevices?.getUserMedia) return;

        const rearCameraStream = await navigator.mediaDevices?.getUserMedia({
            audio: false,
            video: { facingMode: "environment" },
        });

        this.cameraStream =
            rearCameraStream ||
            (await navigator.mediaDevices?.getUserMedia({
                audio: false,
                video: { facingMode: "user" },
            }));

        if (!this.cameraStream) return;

        this.video = document.createElement("video");

        Object.assign(this.video, {
            srcObject: this.cameraStream,
            autoplay: true,
            playsinline: true,
        });

        const videoTexture = new THREE.VideoTexture(this.video);
        videoTexture.minFilter = THREE.LinearFilter;
        this.scene.background = videoTexture;

        // this.setVideoBackgroundSize();
    };

    /** set display canvas */
    set canvas(canvas) {
        const oldCanvas = this._canvas;
        oldCanvas && this.mount.removeChild(oldCanvas);
        this.mount.appendChild(canvas);
        this._canvas = canvas;
    }

    /** get currently displayed canvas */
    get canvas() {
        return this._canvas;
    }

    /** rotate model
     * @param {number} dt - time difference
     */
    rotateModel = dt => {
        const { rotateSpeed } = this.props;
        if (!rotateSpeed) return;

        const angle = (rotateSpeed * dt * Math.PI) / 2;
        this.models.main.rotateY(angle);
    };

    /** called during every animation frame
     * @param {number} dt - time difference since last call
     */
    updateScene = dt => void 0;

    getScreenshot = () => {
        const canvas = document.querySelector("canvas");
        const screenshot = canvas.toDataURL("image/png");

        downloadURL(screenshot, `screenshot_${getDateTimeString()}.png`);
    };

    /** render loop */
    animate = () => {
        this.frameId = requestAnimationFrame(this.animate);

        const dt = this.clock.getDelta();
        if (document.visibilityState === "hidden") return;

        this.rotateModel(dt);

        this.updateScene(dt);

        this.finalRenderer.render(this.scene, this.camera);
        if (window.getScreenshot) {
            const tmp = this.scene.background;
            this.scene.background = null;

            this.finalRenderer.render(this.scene, this.camera);
            this.getScreenshot();

            this.scene.background = tmp;
            window.getScreenshot = false;
            return;
        }

        this.finalRenderer.render(this.scene, this.camera);
    };

    render() {
        return (
            <div
                ref={el => {
                    this.mount = el;
                }}
            />
        );
    }
}

export default BasicViewer;
