/*
################################################
# Basic Viewer that supports adding / updating:
#    - 1 main model
#    - auto rotate
#    - viewport
#    - material
#    - background color
#    - lighting
#    - anti aliasing
#    - ASCII mode
################################################
*/
import { PureComponent } from "react";
import "helpers/typedef";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { CAM_PARAMS } from "helpers/consts";
import { isBlade, filterObject, getDefaultTexture } from "helpers/helpers";
import {
    createInvisibleFloor,
    createLight,
    analyzeWeaponCode,
    getModelPath,
    loadModel,
    getMaterial,
    disposeItem,
    createOutline,
    applyOutlineSettings,
    getParamsList,
    changeMaterial,
    updateMatParams,
    removeEffects,
    replaceTexture,
    logUpdate,
} from "helpers/viewerHelpers";
import { fbxSource } from "App";

class BasicViewer extends PureComponent {
    async componentDidMount() {
        // window.app = this;

        // const { fbx2json } = await import("helpers/fbx2json");
        // await fbx2json();

        await this.initialize();
        this.finishedInit = true;
    }

    componentDidUpdate(prev) {
        if (!this.finishedInit) return;
        const current = this.props;

        // print updated props to console
        console.log("Updated");
        logUpdate(prev, current);

        this.updateViewer(prev, current);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.frameId);
        disposeItem(this.scene);
        this.mixer = null;
        this.clock = null;
        this.camera = null;
        this.controls = null;
        this.scene = null;
        this.renderer = null;
        this.rendererAA.renderLists?.dispose();
        this.rendererAA.dispose();
        this.rendererAA = null;
        this.rendererNoAA.renderLists?.dispose();
        this.rendererNoAA.dispose();
        this.rendererNoAA = null;
    }

    /**
     * disable input and display a message, default is "Loading..."
     * @param {string} [msg]
     */
    disableInput = msg => this.props.setLoadingMsg(msg || "Loading...");

    enableInput = () => this.props.setLoadingMsg("");

    initialize = async () => {
        this.disableInput();

        this.initScene();

        this.materials = [];
        this.outlines = {};
        this.models = {};
        this.modelInfo = {};
        await this.loadMainModel();
        await this.afterMainModelLoad();

        this.enableInput();
    };

    afterMainModelLoad = () => void 0;

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
        this.bgColor = this.props.bgColor;

        // Floor for auto rotate
        this.floor = createInvisibleFloor();
        this.scene.add(this.floor);

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

        // Controls
        this.controls = new OrbitControls(this.camera, this.mount);
        /**
         * @type {xyzCoordinate}
         */
        this.controlsPosition = this.props.controlsPosition || [0, 0, 0];
        this.controls.target.set(...this.controlsPosition);
        this.controls.update();

        // Light
        const { lights } = this.props;
        this.addAllLights(lights);

        // effects
        this.loadedFX = new Map();

        // Renderer
        this.rendererAA = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.rendererAA.outputEncoding = THREE.sRGBEncoding;

        this.rendererNoAA = new THREE.WebGLRenderer({
            antialias: false,
            alpha: true,
        });
        this.rendererNoAA.outputEncoding = THREE.sRGBEncoding;

        const AAEnabled = this.props.antiAliasing;
        this._AA = AAEnabled;

        this.renderer = AAEnabled ? this.rendererAA : this.rendererNoAA;

        this.finalRenderer = this.renderer;
        const { width, height } = this.props.viewport;
        this.finalRenderer.setSize(width, height);

        const canvas = this.finalRenderer.domElement;
        this.canvas = canvas;

        this.animate();
    };

    loadMainModel = async () => {
        const modelId = this.props.model.id;
        this.modelInfo.main = modelId;

        const modelPath = getModelPath(modelId);
        const model = await loadModel(modelPath);
        this.models.main = model;

        await this.basicMainProcessing();
        return;
    };

    /**
     * enable / disable Anti Aliasing
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

    /**
     * add light to scene
     * @param {LightParam} light
     */
    addLight = light => {
        const { id, enable, ...params } = light;
        if (!enable) return;

        const newLight = createLight(params);

        this.scene.add(newLight);
        this.lights.push(newLight);
    };

    /**
     * add lights to scene
     * @param {LightParam[]} lights
     */
    addAllLights = lights => {
        /**
         * @type {THREE.Light[]}
         */
        this.lights = [];
        lights.forEach(this.addLight);
    };

    /**
     * remove light from scene
     * @param {THREE.Light} light
     */
    removeLight = light => this.scene.remove(light);

    removeAllLights = () => this.lights.forEach(this.removeLight);

    /**
     * add model to scene
     * @param {THREE.Object3D} model
     */
    addToScene = model => this.floor.add(model);

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

    basicMainProcessing = async () => {
        const model = this.models.main;

        removeEffects(model);

        const materialType = this.matType;
        const modelId = this.props.model.id;
        if (isBlade(modelId)) {
            const { texturePath } = analyzeWeaponCode(`${modelId}n`);
            changeMaterial(model, { materialType, texturePath });
        } else {
            changeMaterial(model, { materialType, forced: true });
        }

        await this.initTexture();

        this.applyNewModelMat(model);

        const outlineParams = this.props.outline;
        this.outlines.main = createOutline(model, outlineParams);

        this.addToScene(model);
    };

    updateViewer = (prev, current) => {
        this.updateEnvironment(prev, current);
        this.updateModel(prev, current);
        this.otherUpdate(prev, current);
    };

    otherUpdate = (prev, current) => void 0;

    updateEnvironment = (prev, current) => {
        this.updateViewport(prev.viewport, current.viewport);
        this.updateOutline(prev.outline, current.outline);
        this.updateMaterial(prev.material, current.material);
        this.updateLights(prev.lights, current.lights);
        this.updateAscii(prev.ascii, current.ascii);
        this.updateCamera(prev.cameraPosition, current.cameraPosition);
        this.updateControl(prev.controlsPosition, current.controlsPosition);

        // Update background color
        if (prev.bgColor !== current.bgColor) {
            this.bgColor = current.bgColor;
        }

        this.AA = current.antiAliasing;
    };

    updateModel = (prev, current) => {
        this.updateMainModel(prev.model, current.model);
    };

    updateViewport = (prev, current) => {
        const { width, height } = current;
        if (prev.width === width && prev.height === height) return;

        this.viewport.width = width;
        this.viewport.height = height;

        this.finalRenderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    };

    disposeMainModel = () => {
        const mainModel = this.models.main;
        this.floor.remove(mainModel);
        disposeItem(mainModel);
    };

    replaceMainModel = async () => {
        this.disableInput();

        this.disposeMainModel();
        await this.loadMainModel();
        this.applyNewModelMat(this.models.main);

        this.enableInput();
    };

    updateMainModel = async (prev, current) => {
        const modelId = current.id;
        const mainUpdated = prev.id !== modelId;
        if (!mainUpdated) return;

        this.beforeMainModelUpdate();
        await this.replaceMainModel();
        this.afterMainModelUpdate();
    };

    beforeMainModelUpdate = () => void 0;

    afterMainModelUpdate = () => void 0;

    updateOutlineParams = update => {
        const outlines = Object.values(this.outlines).flat();
        outlines.forEach(outline => {
            applyOutlineSettings(outline, update);
        });
    };

    updateOutline = (prev, current) => {
        if (prev === current) return;

        const updatedKeys = Object.keys(current).filter(
            key => prev[key] !== current[key]
        );
        if (updatedKeys.length === 0) return;

        const update = new Map(updatedKeys.map(key => [key, current[key]]));
        this.updateOutlineParams(update);
    };

    saveMaterialReference = () => {
        const mainModel = this.models.main;
        this.materials = getMaterial(mainModel);
    };

    get matParams() {
        const { type: materialType, ...allParams } = this.props.material;
        const paramList = getParamsList(materialType);
        return filterObject(allParams, paramList);
    }

    get matType() {
        return this.props.material.type;
    }

    applyNewModelMat = model => {
        const params = this.matParams;
        const defaultParams = { useTexture: true };
        updateMatParams(model, { prevParams: defaultParams, params });
    };

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

    updateLights = (prev, current) => {
        if (prev !== current) {
            this.removeAllLights();
            this.addAllLights(current);
        }
    };

    updateAscii = async (prev, current) => {
        const updated = Object.keys(prev).some(
            key => prev[key] !== current[key]
        );
        if (!updated) return;

        const { enable } = current;
        if (!enable) {
            this.finalRenderer = this.renderer;
            const newCanvas = this.renderer.domElement;
            this.canvas = newCanvas;
            return;
        }

        if (!this.loadedFX.has("ascii")) {
            const { AsciiEffect } = await import(
                "three/examples/jsm/effects/AsciiEffect"
            );
            this.loadedFX.set("ascii", AsciiEffect);
            this.showAscii();
        } else this.showAscii();

        this.finalRenderer.setSize(this.viewport.width, this.viewport.height);
    };

    showAscii = () => {
        const { charSet, color, bgColor, invert } = this.props.ascii;
        const AsciiEffect = this.loadedFX.get("ascii");

        this.effect = new AsciiEffect(this.renderer, charSet, { invert });

        const { width, height } = this.viewport;
        this.effect.setSize(width, height);

        const newCanvas = this.effect.domElement;
        newCanvas.style.color = color;
        newCanvas.style.background = bgColor;
        this.canvas = newCanvas;

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

    /**
     * @param {ColorCode | 'transparent'} color
     */
    set bgColor(color) {
        this.scene.background =
            color !== "transparent" ? new THREE.Color(color) : null;
    }

    set canvas(canvas) {
        const oldCanvas = this._canvas;
        oldCanvas && this.mount.removeChild(oldCanvas);
        this.mount.appendChild(canvas);
        this._canvas = canvas;
    }

    get canvas() {
        return this._canvas;
    }

    rotateFloor = dt => {
        const { rotateSpeed } = this.props;
        if (!rotateSpeed) return;

        const angle = (rotateSpeed * dt * Math.PI) / 2;
        this.floor.rotateY(angle);
    };

    everyAnimate = () => {
        const dt = this.clock.getDelta();
        this.rotateFloor(dt);
    };

    animate = () => {
        this.frameId = requestAnimationFrame(this.animate);

        this.everyAnimate();

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
