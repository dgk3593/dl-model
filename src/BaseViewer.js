/* 
################################################
# Base Viewer that supports adding / updating:
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

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { CAM_PARAMS } from "./consts";
import {
    createInvisibleFloor,
    getUpdated,
    filterObject,
    getModelPath,
    loadModel,
    getMaterial,
    disposeItem,
    createOutline,
    applyOutlineSettings,
    getParamsList,
    changeMaterial,
    updateMatParams,
} from "./viewerHelpers";

class BaseViewer extends PureComponent {
    componentDidMount() {
        window.app = this;
        this.initialize();
    }

    async componentDidUpdate(prev) {
        const current = this.props;

        // print updated props to console
        console.log("Updated");
        const updated = getUpdated(prev, current);
        updated.forEach(([key, value]) => {
            const oldValue = prev[key];
            const subkeys = Object.keys(value);
            if (subkeys.length === 0 || typeof value === "string") {
                console.log(
                    `${key}: ${JSON.stringify(oldValue)} to ${JSON.stringify(
                        value
                    )}`
                );
            } else {
                subkeys.forEach(subkey => {
                    if (oldValue[subkey] !== value[subkey]) {
                        console.log(
                            `${key}.${subkey}: ${JSON.stringify(
                                oldValue[subkey]
                            )} to ${JSON.stringify(value[subkey])}`
                        );
                    }
                });
            }
        });

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
        this.rendererAA.renderLists.dispose();
        this.rendererAA.dispose();
        this.rendererAA = null;
        this.rendererNoAA.renderLists.dispose();
        this.rendererNoAA.dispose();
        this.rendererNoAA = null;
    }

    disableInput = () => this.props.setIsLoading(true);

    enableInput = () => this.props.setIsLoading(false);

    initialize = async () => {
        this.disableInput();

        this.initScene();
        this.updateMatParamList();

        this.materials = [];
        this.outlines = {};
        this.models = {};
        this.modelInfo = {};
        await this.loadMainModel();
        this.afterMainModelLoad?.();

        this.enableInput();
    };

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
        this.cameraPosition = this.props.cameraPosition || [2, 0, 10];
        this.camera.position.set(...this.cameraPosition);
        this.camera.updateProjectionMatrix();

        // Controls
        this.controls = new OrbitControls(this.camera, this.mount);
        this.controlsPosition = this.props.controlsPosition || [0, 0, 0];
        this.controls.target.set(...this.controlsPosition);
        this.controls.update();

        // Light
        const { lights } = this.props;
        this.addLights(lights);

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

        this.basicMainProcessing(model);
        return;
    };

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

    addLights = lights => {
        this.lights = [];
        lights.forEach(({ enable, type, color, intensity, ...params }) => {
            if (!enable) return;
            const constructor = `${type}Light`;
            const light = new THREE[constructor](color, intensity);

            for (const [key, value] of Object.entries(params)) {
                switch (key) {
                    case "position":
                        const setValue = value.map(v => v || 0);
                        light.position.set(...setValue);
                        break;
                    default:
                        light[key] = value;
                }
            }
            this.scene.add(light);
            this.lights.push(light);
        });
    };

    removeLights = () => this.lights.forEach(light => this.scene.remove(light));

    addToScene = model => this.floor.add(model);

    basicMainProcessing = () => {
        const model = this.models.main;

        const outlineParams = this.props.outline;
        this.outlines.main = createOutline(model, outlineParams);

        const { materialType } = this.props.model;
        changeMaterial(model, { materialType, forced: true });

        this.addToScene(model);
    };

    updateViewer = (prev, current) => {
        this.updateViewerCommon(prev, current);
        this.updateViewerExtra?.(prev, current);
    };

    updateViewerCommon = (prev, current) => {
        this.updateViewport(prev.viewport, current.viewport);
        this.updateMainModel(prev.model, current.model);
        this.updateOutline(prev.outline, current.outline);
        this.updateMaterial(prev, current);
        this.updateLights(prev.lights, current.lights);
        this.updateAscii(prev.ascii, current.ascii);

        // Update background color
        if (prev.bgColor !== current.bgColor) {
            this.bgColor = current.bgColor;
        }

        this.AA = current.antiAliasing;
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

        this.beforeMainModelUpdate?.();
        await this.replaceMainModel();
        this.afterMainModelUpdate?.();
    };

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

    updateMatParamList = () => {
        const { materialType } = this.props.model;
        this.matParamsList = getParamsList(materialType);
    };

    saveMaterialReference = () => {
        const mainModel = this.models.main;
        this.materials = getMaterial(mainModel);
    };

    getRelevantMatParams = () => {
        const currentParams = this.props.materialParams;
        const { matParamsList: paramList } = this;
        return filterObject(currentParams, paramList);
    };

    applyNewModelMat = model => {
        const params = this.getRelevantMatParams();
        const defaultParams = { useTexture: true };
        updateMatParams(model, { prevParams: defaultParams, params });
    };

    updateMaterial = (prev, current) => {
        if (prev === current) return;
        // update material type
        const { materialType } = current.model;
        const mainModel = this.models.main;
        const prevParams = prev.materialParams;
        if (prev.model.materialType !== materialType) {
            changeMaterial(this.models.main, { materialType });
            this.updateMatParamList();
        }
        const params = this.getRelevantMatParams();
        updateMatParams(mainModel, { prevParams, params });
    };

    updateLights = (prev, current) => {
        if (prev !== current) {
            this.removeLights();
            this.addLights(current);
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

export default BaseViewer;
