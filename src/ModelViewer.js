import { PureComponent } from "react";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { fbxSource } from "./App";
import { CAM_PARAMS, DEFAULT_FACE_IDX } from "./consts";
import {
    matDirectSetParams,
    matColorParams,
    matCommonParams,
    matExtraParams,
} from "./consts";
import {
    createInvisibleFloor,
    isSimpleViewer,
    isDragon,
    initDragonFace,
    calculateTextureOffset,
    calculateIdxOffset,
    getModelPath,
    analyzeWeaponCode,
    analyzeChainCode,
    loadModel,
    applyEyeTexture,
    applyMouthTexture,
    applyEyeOffset,
    applyMouthOffset,
    disposeItem,
    createOutline,
    applyOutlineSettings,
    changeMaterial,
    createGradientMap,
    getFaceChangesArray,
} from "./viewerHelpers";

import { isBlade } from "./helpers";

const SIDES = ["Right", "Left"];

class ModelViewer extends PureComponent {
    async componentDidMount() {
        window.app = this;
        this.initScene();
        this.props.setIsLoading(true);

        // Load the models
        const [main, weaponRight, weaponLeft] = await this.initLoad();

        // save references to models
        this.models = { main, weaponRight, weaponLeft };

        // basic viewer for incompatible assets
        const modelId = this.props.model.id;
        if (isSimpleViewer(modelId)) {
            if (isBlade(modelId)) {
                const { materialType } = this.props.model;
                const { texturePath } = analyzeWeaponCode(`${modelId}n`);
                changeMaterial(main, { materialType, texturePath });
            }

            this.basicMainProcessing();

            isDragon(modelId) && initDragonFace(main);

            // loading finished
            this.props.setIsLoading(false);
            return;
        }
        this.initModels();

        this.props.setIsLoading(false);

        this.addAnimation();
    }

    async componentDidUpdate(prev) {
        const current = this.props;

        // // print updated props to console
        // console.log("Updated");
        // Object.keys(prev).forEach(key => {
        //     const oldValue = prev[key];
        //     const currentValue = this.props[key];
        //     const subkeys = Object.keys(oldValue);
        //     if (subkeys.length === 0 || typeof oldValue === "string") {
        //         if (oldValue !== currentValue) {
        //             console.log(
        //                 `${key}: ${JSON.stringify(
        //                     oldValue
        //                 )} to ${JSON.stringify(currentValue)}`
        //             );
        //         }
        //     } else {
        //         subkeys.forEach(subkey => {
        //             if (oldValue[subkey] !== currentValue[subkey]) {
        //                 console.log(
        //                     `${key}.${subkey}: ${JSON.stringify(
        //                         oldValue[subkey]
        //                     )} to ${JSON.stringify(currentValue[subkey])}`
        //                 );
        //             }
        //         });
        //     }
        // });

        this.updateViewport(prev.viewport, current.viewport);
        this.updateModel(prev.model, current.model);
        this.updateAnimation(prev.animation, current.animation);
        this.updateOutline(prev.outline, current.outline);
        this.updateMaterial(prev, current);
        this.updateLights(prev.lights, current.lights);
        this.updateAscii(prev.ascii, current.ascii);

        // Update background color
        if (prev.bgColor !== current.bgColor) {
            this.bgColor = current.bgColor;
        }

        // Capture
        if (current.capture.enable && !prev.capture.enable) {
            this.captureAnimation();
        }

        this.AA = current.antiAliasing;
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

    initScene = () => {
        this.models = {};
        this.modelInfo = {
            main: this.props.model.id,
            weaponLeft: analyzeWeaponCode(this.props.model.weaponLeft),
            weaponRight: analyzeWeaponCode(this.props.model.weaponRight),
        };
        this.materials = [];

        // save reference and specifications for outlines
        this.outlines = {};
        this.outlineParams = { ...this.props.outline };

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
        this.canvas = this.finalRenderer.domElement;
        this.finalRenderer.setSize(this.viewport.width, this.viewport.height);
        this.mount.appendChild(this.canvas);

        this.animate();
    };

    set AA(enabled) {
        if (enabled === this._AA) return;

        this._AA = enabled;
        const currentSize = new THREE.Vector2();
        this.renderer.getSize(currentSize);
        this.renderer = enabled ? this.rendererAA : this.rendererNoAA;
        this.renderer.setSize(currentSize.x, currentSize.y);

        if (this.props.ascii.enable) return;

        this.finalRenderer = this.renderer;

        const newCanvas = this.renderer.domElement;
        this.setCanvas(newCanvas);
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

    // Promise to load all models at initialize
    initLoad = () => {
        const modelId = this.modelInfo.main;
        const modelPath = getModelPath(modelId);
        const loadMain = loadModel(modelPath);

        const weaponRight = this.modelInfo.weaponRight?.modelPath;
        const loadWeaponR = loadModel(weaponRight);

        const weaponLeft = this.modelInfo.weaponLeft?.modelPath;
        const loadWeaponL = loadModel(weaponLeft);

        return Promise.all([loadMain, loadWeaponR, loadWeaponL]);
    };

    addToScene = model => this.floor.add(model);

    basicMainProcessing = () => {
        const model = this.models.main;

        this.outlines.main = createOutline(model, this.outlineParams);

        const { materialType } = this.props.model;
        changeMaterial(model, { materialType });

        this.addToScene(model);
    };

    initFace = () => {
        const modelId = this.props.model.id;
        this._eyeIdx = this._mouthIdx = DEFAULT_FACE_IDX;
        const defaultFaceParams = {
            mouthTexture: modelId,
            mouthIdx: DEFAULT_FACE_IDX,
            eyeTexture: modelId,
            eyeIdx: DEFAULT_FACE_IDX,
        };
        this.updateFace(defaultFaceParams, this.props.model);
    };

    initMainModel = () => {
        this.basicMainProcessing();
        this.initFace();
        // Save initial position and rotation
        const model = this.models.main;
        model.initPos = model.position.clone();
        model.initRot = model.rotation.clone();
    };

    initModels = () => {
        this.initMainModel();
        this.initAllWeapons();
        this.attachAllWeapons();
        this.applyMaterialSettings();
    };

    initAllWeapons = () => {
        const { materialType } = this.props.model;
        SIDES.forEach(side => {
            const key = `weapon${side}`;
            const weapon = this.models[key];
            if (!weapon) return;

            const weaponInfo = this.modelInfo[key];
            const { texturePath, flipped } = weaponInfo;
            changeMaterial(weapon, { materialType, texturePath });
            if (flipped) weapon.rotation.y += Math.PI;

            this.outlines[key] = createOutline(weapon, this.outlineParams);
        });
    };

    attachWeapon = (weapon, side) => {
        const boneName = `jWeapon${side[0]}`;
        this.models.main.traverse(child => {
            if (child.name === boneName && child.children.length === 0) {
                child.add(weapon);
            }
        });
    };

    attachAllWeapons = () => {
        SIDES.forEach(side => {
            const key = `weapon${side}`;
            const weapon = this.models[key];
            if (!weapon) return;

            this.attachWeapon(weapon, side);
        });
    };

    detachWeapon = side => {
        const key = `weapon${side}`;
        const model = this.models[key];
        if (!model) return;

        model.parent.remove(model);
    };

    detachAllWeapons = () => SIDES.forEach(side => this.detachWeapon(side));

    playNextAni = () => {
        const { nAni } = this;
        // if capturing and finished recording current chain, stop capturing and set capture flag back to false
        const finishedRecording =
            this.props.capture.enable && this._aniIdx === nAni - 1;
        if (finishedRecording) {
            this.mediaRecorder.stop();
            this.props.toggleCapture();
        }
        const newIdx = (this._aniIdx + 1) % nAni;
        this.aniIdx = newIdx;
    };

    addAnimation = async () => {
        const { code: aniCode, timeScale } = this.props.animation;
        if (!aniCode) return;

        const model = this.models.main;
        const [fileList, animationList] = analyzeChainCode(aniCode);
        this.nAni = animationList.length;

        this.props.setIsLoading(true);

        model.mixer = new THREE.AnimationMixer(model);
        this.mixer = model.mixer;

        this._aniIdx = 0;
        model.mixer.timeScale = timeScale; // Global timeScale
        model.mixer.addEventListener("finished", this.playNextAni);
        this.aniSettings = animationList.map(ani => ({
            timeScale: ani.timeScale,
            repetitions: ani.repetitions,
            faceChanges: ani.faceChanges,
        }));

        // load all animation files
        const batchLoader = fileList.map(file => {
            const path = `${fbxSource}/fbx/${file}.fbx`;
            return loadModel(path);
        });
        const animFiles = await Promise.all(batchLoader);

        this.animations = [];
        animationList.forEach(anim => {
            const { fileIdx, aniName } = anim;
            const animation = aniName
                ? animFiles[fileIdx].animations.find(
                      ani => ani.name === aniName
                  )
                : animFiles[fileIdx].animations[0];
            this.animations.push(animation);
        });
        // play first animation
        this.aniIdx = 0;
        this.props.setIsLoading(false);
    };

    removeAnimation = () => {
        const mainModel = this.models.main;
        mainModel.mixer.stopAllAction();

        // Reset position and rotation to initial value
        const { initPos, initRot } = mainModel;
        mainModel.position.copy(initPos);
        mainModel.rotation.copy(initRot);

        // Reset facial expression
        const { eyeIdx, mouthIdx } = this.props.model;
        this.eyeIdx = eyeIdx;
        this.mouthIdx = mouthIdx;

        this.mixer = null;
        this.animations = [];
    };

    // this.aniIdx = n => play animation with index n
    set aniIdx(newIdx) {
        this._aniIdx = newIdx;
        const { mixer } = this;
        const anim = this.animations[newIdx];
        mixer.stopAllAction();
        const action = mixer.clipAction(anim);
        const currentAniSettings = this.aniSettings[newIdx];
        const { timeScale, repetitions, faceChanges } = currentAniSettings;
        this.faceChanges = getFaceChangesArray(faceChanges, repetitions);
        this.faceChangeTime = this.faceChanges.map(
            change => (this.currentClipDuration * change.time) / 100
        );

        action.setLoop(THREE.LoopRepeat, repetitions);
        action.clampWhenFinished = true;
        action.timeScale = timeScale;
        action.time = 0;

        mixer.setTime(0);
        this.currentClipDuration = anim.duration;
        action.play();
    }

    updateViewport = (prev, current) => {
        const { width, height } = current;
        if (prev.width === width && prev.height === height) return;

        this.finalRenderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    };

    captureAnimation = () => {
        this.chunks = [];
        this.videoStream = this.canvas.captureStream(30);

        if (!this.mediaRecorder) {
            this.mediaRecorder = new MediaRecorder(this.videoStream, {
                mimeType: this.props.capture.codec,
            });
            this.mediaRecorder.ondataavailable = event =>
                this.chunks.push(event.data);
            this.mediaRecorder.onstop = () => {
                this.props.setIsLoading(false);
                const superBuffer = new Blob(this.chunks, {
                    type: "video/webm",
                });
                const url = URL.createObjectURL(superBuffer);
                const a = document.createElement("a");
                a.style = "display: none";
                a.href = url;
                a.download = "animation.webm";
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            };
        }
        // disable user input
        this.props.setIsLoading(true);
        // Reset facial expression
        this.eyeIdx = this.props.model.eyeIdx;
        this.mouthIdx = this.props.model.mouthIdx;
        // play first animation and start capturing
        this.aniIdx = 0;
        this.mediaRecorder.start();
    };

    updateEyeTexture = (prev, current) => {
        const currentTexture = current.eyeTexture;
        const prevTexture = prev.eyeTexture;

        if (currentTexture === prevTexture) return false;

        const { materialType } = current;
        applyEyeTexture(this.models.main, {
            materialType,
            textureId: currentTexture,
        });
        const offset = calculateTextureOffset(currentTexture, prevTexture);
        applyEyeOffset(this.models.main, offset);

        return true;
    };

    set eyeIdx(newIdx) {
        if (!newIdx) return;

        const oldIdx = this._eyeIdx;
        if (newIdx === oldIdx) return;

        const offset = calculateIdxOffset(newIdx, oldIdx);
        applyEyeOffset(this.models.main, offset);

        this._eyeIdx = newIdx;
    }

    updateMouthTexture = (prev, current) => {
        const currentTexture = current.mouthTexture;
        const prevTexture = prev.mouthTexture;

        if (currentTexture === prevTexture) return false;

        const { materialType } = current;
        applyMouthTexture(this.models.main, {
            materialType,
            textureId: currentTexture,
        });
        const offset = calculateTextureOffset(currentTexture, prevTexture);
        applyMouthOffset(this.models.main, offset);

        return true;
    };

    set mouthIdx(newIdx) {
        if (!newIdx) return;

        const oldIdx = this._mouthIdx;
        if (newIdx === oldIdx) return;

        const offset = calculateIdxOffset(newIdx, oldIdx);
        applyMouthOffset(this.models.main, offset);

        this._mouthIdx = newIdx;
    }

    updateFaceTexture = (prev, current) => {
        const eyeUpdated = this.updateEyeTexture(prev, current);
        const mouthUpdated = this.updateMouthTexture(prev, current);
        if (eyeUpdated || mouthUpdated) {
            this.applyMaterialSettings();
        }
    };

    updateFaceOffset = ({ eyeIdx, mouthIdx }) => {
        this.eyeIdx = eyeIdx;
        this.mouthIdx = mouthIdx;
    };

    updateFace = (prev, current) => {
        this.updateFaceTexture(prev, current);
        this.updateFaceOffset(current);
    };

    disposeMainModel = () => {
        const mainModel = this.models.main;
        this.floor.remove(mainModel);
        disposeItem(mainModel);
    };

    updateMainModel = async (prev, current) => {
        const modelId = current.id;
        if (prev.id !== modelId) {
            this.props.setIsLoading(true);
            const modelPath = getModelPath(modelId);
            const model = await loadModel(modelPath);

            this.detachAllWeapons();
            this.disposeMainModel();

            this.models.main = model;

            this.initMainModel();
            this.attachAllWeapons();
            this.applyMaterialSettings();

            this.addAnimation();

            this.props.setIsLoading(false);
            return;
        }
        // Update face when main model not changed
        this.updateFace(prev, current);
    };

    updateWeapons = async (prev, current) => {
        this.props.setIsLoading(true);
        SIDES.forEach(async side => {
            const key = `weapon${side}`;
            if (prev[key] === current[key]) return;

            // remove old weapon
            this.detachWeapon(side);
            disposeItem(this.models[key]); // dispose old weapon

            // if current weapon is empty (weapon removed)
            if (!current[key]) {
                this.models[key] = null;
                this.modelInfo[key] = "";
                // remove reference to outline
                this.outlines[key] = null;
                return;
            }

            // load new weapon
            this.modelInfo[key] = analyzeWeaponCode(this.props.model[key]);
            const { modelPath, texturePath } = this.modelInfo[key];

            // load new model
            const model = await loadModel(modelPath);
            this.models[key] = model;

            // process new weapon
            const { materialType } = current;
            changeMaterial(model, { materialType, texturePath });

            if (this.modelInfo[key].flipped) {
                model.rotation.y += Math.PI;
            }
            this.outlines[key] = createOutline(model, this.outlineParams);
            this.attachWeapon(model, side);
            this.applyMaterialSettings();
        });
        this.props.setIsLoading(false);
    };

    updateModel = async (prev, current) => {
        const updated = Object.keys(prev).some(
            key => prev[key] !== current[key]
        );
        if (!updated) return;

        await this.updateMainModel(prev, current);
        this.updateWeapons(prev, current);
    };

    updateAnimation = (prev, current) => {
        const { code, timeScale } = current;
        if (prev.code !== code) {
            prev.code && this.removeAnimation();
            this.addAnimation();
            return;
        }
        // Update timeScale if animation not changed
        if (prev.timeScale !== timeScale) {
            this.mixer.timeScale = timeScale;
        }
    };

    updateOutlineParams = update => {
        const keys = Object.keys(this.outlines).filter(
            key => this.outlines[key]
        );
        const outlines = keys.map(key => this.outlines[key]).flat();
        outlines.forEach(outline => {
            applyOutlineSettings(outline, update);
        });
    };

    updateOutline = (prev, current) => {
        if (prev === current) return;

        this.outlineParams = current;
        const updatedKeys = Object.keys(current).filter(
            key => prev[key] !== current[key]
        );
        if (updatedKeys.length === 0) return;

        const update = new Map(updatedKeys.map(key => [key, current[key]]));
        this.updateOutlineParams(update);
    };

    saveMaterialReference = () => {
        const mainModel = this.models.main;
        const meshes = [];
        mainModel.traverse(child => {
            if (child.isMesh && child.name !== "outline") meshes.push(child);
        });
        this.materials = meshes.map(mesh => mesh.material).flat();
    };

    forEachMaterial = callback => this.materials.forEach(mat => callback(mat));

    applyMaterialParams = () => {
        const { materialType } = this.props.model;
        const current = this.props.materialParams;
        const paramsList = [
            ...matCommonParams,
            ...matExtraParams[materialType],
        ];
        const hasGradientMap =
            materialType === "Toon" && current.gradientMap !== "none";

        const nTones = hasGradientMap && parseInt(current.gradientMap);
        const gradientMap = hasGradientMap && createGradientMap(nTones);

        this.forEachMaterial(mat => {
            matDirectSetParams.forEach(param => {
                if (paramsList.includes(param)) {
                    mat[param] = current[param];
                }
            });

            matColorParams.forEach(param => {
                if (!paramsList.includes(param)) return;
                const currentColor = current[param];
                mat[param] = new THREE.Color(currentColor);
            });

            if (!current.useTexture) {
                if (mat.map) mat.backupMap = mat.map;
                mat.map = null;
            }

            if (current.flatShading) {
                mat.flatShading = current.flatShading;
                mat.needsUpdate = true;
            }

            if (hasGradientMap) {
                mat.gradientMap = gradientMap;
                mat.needsUpdate = true;
            }
        });
    };

    applyMaterialSettings = () => {
        this.saveMaterialReference();
        this.applyMaterialParams();
    };

    updateMaterialParams = (prev, current) => {
        const { materialType } = this.props.model;
        const { useTexture, flatShading, gradientMap } = current;
        const paramsList = [
            ...matCommonParams,
            ...matExtraParams[materialType],
        ];
        const updatedParams = paramsList.filter(
            param => prev[param] !== current[param]
        );

        const paramFilter = param => updatedParams.includes(param);

        const directSetParams = matDirectSetParams.filter(paramFilter);
        directSetParams.forEach(param => {
            this.forEachMaterial(mat => (mat[param] = current[param]));
        });

        const colorParams = matColorParams.filter(paramFilter);
        colorParams.forEach(param => {
            const currentColor = current[param];
            const color = new THREE.Color(currentColor);
            this.forEachMaterial(mat => (mat[param] = color));
        });

        if (prev.useTexture !== useTexture) {
            this.forEachMaterial(mat => {
                if (!useTexture) {
                    mat.backupMap = mat.map;
                    mat.map = null;
                } else {
                    mat.map = mat.backupMap;
                    delete mat.backupMap;
                }
                mat.needsUpdate = true;
            });
        }

        if (prev.flatShading !== flatShading) {
            this.forEachMaterial(mat => {
                mat.flatShading = flatShading;
                mat.needsUpdate = true;
            });
        }

        if (prev.gradientMap !== gradientMap) {
            let newMap = null;
            if (gradientMap !== "none") {
                const nTones = parseInt(gradientMap);
                newMap = createGradientMap(nTones);
            }

            this.forEachMaterial(mat => {
                mat.gradientMap = newMap;
                mat.needsUpdate = true;
            });
        }
    };

    updateMaterial = (prev, current) => {
        // update material type
        const { materialType } = current.model;
        if (prev.model.materialType !== materialType) {
            changeMaterial(this.models.main, { materialType });

            this.applyMaterialSettings();
            return;
        }
        this.updateMaterialParams(prev.materialParams, current.materialParams);
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
            this.setCanvas(newCanvas);
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
        this.effect.setSize(this.viewport.width, this.viewport.height);

        const newCanvas = this.effect.domElement;
        newCanvas.style.color = color;
        newCanvas.style.background = bgColor;
        this.setCanvas(newCanvas);

        this.finalRenderer = this.effect;
    };

    set bgColor(color) {
        this.scene.background =
            color !== "transparent" ? new THREE.Color(color) : null;
    }

    setCanvas = newCanvas => {
        const { canvas } = this;
        this.mount.removeChild(canvas);
        this.mount.appendChild(newCanvas);
        this.canvas = newCanvas;
    };

    rotateFloor = dt => {
        const { rotateSpeed } = this.props;
        const angle = (rotateSpeed * dt * Math.PI) / 2;
        rotateSpeed && this.floor.rotateY(angle);
    };

    animate = () => {
        this.frameId = requestAnimationFrame(this.animate);

        const dt = this.clock.getDelta();
        this.rotateFloor(dt);
        this.mixer && this.mixer.update(dt);

        if (this.faceChanges && this.faceChanges.length) {
            const elapsedTime = this.mixer.time;
            const nextFaceChangeTime = this.faceChangeTime[0];
            if (elapsedTime >= nextFaceChangeTime) {
                this.faceChangeTime.shift();
                const { eyeIdx, mouthIdx } = this.faceChanges.shift();
                this.eyeIdx = eyeIdx;
                this.mouthIdx = mouthIdx;
            }
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

export default ModelViewer;
