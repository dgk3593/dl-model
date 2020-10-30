import { PureComponent } from "react";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { fbxSource } from "./App";
import { CAM_PARAMS, faceOffsets } from "./consts";
import faceOffsetFixList from "./data/face_offset";
import {
    directSetMatParams,
    matColorParams,
    materialCommonParams,
    materialExtraParams,
} from "./consts";
import {
    getModelPath,
    analyzeWeaponCode,
    analyzeChainCode,
    loadModel,
    applyFaceTexture,
    applyFaceOffset,
    disposeItem,
    createOutline,
    changeMaterial,
    changeOpacity,
    changeOutlineSize,
    changeOutlineColor,
} from "./viewerHelpers";

class ModelViewer extends PureComponent {
    async componentDidMount() {
        window.app = this;
        this.initScene();
        this.props.setIsLoading(true);

        // Load the models
        const [main, weaponRight, weaponLeft] = await this.initLoad();

        // save references to models
        this.models = {
            main,
            weaponRight,
            weaponLeft,
        };

        // add outline to main model and save reference
        this.outlines.main = createOutline(main, this.outlineParams);

        // Save initial position and rotation
        main.initPos = main.position.clone();
        main.initRot = main.rotation.clone();

        // change the material

        const { materialType } = this.props.model;
        changeMaterial({ target: main, materialType });

        // process weapons
        ["Right", "Left"].forEach(side => {
            const key = `weapon${side}`;
            // if weapon not specified, return
            if (!this.props.model[key]) return;
            // add weapon
            const weaponInfo = this.modelInfo[key];
            const weaponModel = this.models[key];
            const { texturePath } = weaponInfo;
            changeMaterial({
                target: weaponModel,
                materialType,
                texturePath,
            });
            // flip weapon if needed
            weaponModel.rotation.y += weaponInfo.flipped ? Math.PI : 0;
            // add outline to weapon and save reference
            this.outlines[key] = createOutline(weaponModel, this.outlineParams);
            // attach weapon to main body
            this.attachWeapon(this.models[`weapon${side}`], side);
        });

        // Apply face settings
        const { texture, faceTexture } = this.props.model;
        const faceOverride = texture !== faceTexture;
        const faceNumber = `face${this.props.model.face}`;
        const { x: faceOffsetX, y: faceOffsetY } = faceOffsets[faceNumber];
        if (faceOffsetX !== 0 || faceOffsetY !== 0 || faceOverride) {
            let offsetFix = { x: 0, y: 0 };
            if (faceOverride) {
                applyFaceTexture({
                    target: main,
                    materialType,
                    textureId: faceTexture,
                });

                const offsetFixBase = faceOffsetFixList[texture] || {
                    x: 0,
                    y: 0,
                };
                const offsetFixOverride = faceOffsetFixList[faceTexture] || {
                    x: 0,
                    y: 0,
                };
                offsetFix = {
                    x: offsetFixOverride.x - offsetFixBase.x,
                    y: offsetFixOverride.y - offsetFixBase.y,
                };
            }
            const offset = {
                x: faceOffsetX + offsetFix.x,
                y: faceOffsetY + offsetFix.y,
            };
            applyFaceOffset({ target: main, offset });
        }

        this.saveMaterialReference();
        this.applyMaterialParams();

        // Add character to scene
        this.floor.add(main);
        // main model loading finished
        this.props.setIsLoading(false);

        // Add animation
        const { code: aniCode, timeScale } = this.props.animation;
        this.addAnimationChain(main, aniCode, timeScale);
    }

    async componentDidUpdate(prev) {
        const current = this.props;

        // print updated props to console
        console.log("Updated");
        Object.keys(prev).forEach(key => {
            const oldValue = prev[key];
            const currentValue = this.props[key];
            const subkeys = Object.keys(oldValue);
            if (subkeys.length === 0 || typeof oldValue === "string") {
                if (oldValue !== currentValue) {
                    console.log(
                        `${key}: ${JSON.stringify(
                            oldValue
                        )} to ${JSON.stringify(currentValue)}`
                    );
                }
            } else {
                subkeys.forEach(subkey => {
                    if (oldValue[subkey] !== currentValue[subkey]) {
                        console.log(
                            `${key}.${subkey}: ${JSON.stringify(
                                oldValue[subkey]
                            )} to ${JSON.stringify(currentValue[subkey])}`
                        );
                    }
                });
            }
        });

        this.updateViewport(prev.viewport, current.viewport);

        this.updateModel(prev.model, current.model);

        this.updateAnimation(prev.animation, current.animation);

        this.updateOutline(prev.outline, current.outline);

        this.updateMaterial(prev, current);

        // Update background color
        if (prev.bgColor !== current.bgColor) {
            this.setBackground(current.bgColor);
        }

        // Capture
        if (current.capture.enable && !prev.capture.enable) {
            this.captureAnimation();
        }

        // Update Anti Aliasinng
        if (prev.antiAliasing !== current.antiAliasing) {
            this.updateAA();
        }
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.frameId);
        disposeItem(this.scene);
        this.mixers = null;
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

    // set up initial scene
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

        // mixers
        this.mixers = [];

        // clock
        this.clock = new THREE.Clock();

        // Scene
        this.scene = new THREE.Scene();
        this.scene.background =
            this.props.bgColor !== "transparent"
                ? new THREE.Color(this.props.bgColor)
                : null;

        // Create an invisible floor to add the models on (for auto rotate)
        const floorGeometry = new THREE.PlaneBufferGeometry(0.1, 0.1);
        floorGeometry.rotateX(Math.PI / 2);
        const floorMaterial = new THREE.MeshBasicMaterial();
        floorMaterial.visible = false;
        this.floor = new THREE.Mesh(floorGeometry, floorMaterial);
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
        let light = new THREE.DirectionalLight(0xffffff);
        light.position.set(0, 200, 100);
        light.intensity = 0.5;
        this.scene.add(light);
        light = new THREE.AmbientLight(0xaaaaaa);
        this.scene.add(light);

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

        this.renderer = this.props.antiAliasing
            ? this.rendererAA
            : this.rendererNoAA;
        this.canvas = this.renderer.domElement;
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.mount.appendChild(this.canvas);

        this.animate();
    };

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

    attachWeapon = (weapon, side) => {
        const boneName = `jWeapon${side[0]}`;
        this.models.main.traverse(child => {
            if (child.name === boneName && child.children.length === 0) {
                child.add(weapon);
            }
        });
    };

    detachWeapon = side => {
        const boneName = `jWeapon${side[0]}`;
        this.models.main.traverse(child => {
            if (child.children.length === 1 && child.name === boneName) {
                if (child.children[0].type === "Group") {
                    child.remove(this.models[`weapon${side}`]);
                }
            }
        });
    };

    saveMaterialReference = () => {
        this.materials = [];
        const mainModel = this.models.main;
        mainModel.traverse(child => {
            if (!child.isMesh || child.name === "outline") return;

            const { material } = child;

            if (Array.isArray(material)) {
                this.materials = this.materials.concat(material);
            } else {
                this.materials.push(material);
            }
        });
    };

    playNextAni = () => {
        // if capturing and finished recording current chain, stop capturing and set capture flag back to false
        if (this.props.capture.enable && this._aniIdx === this.nAni - 1) {
            this.mediaRecorder.stop();
            this.props.toggleCapture();
        }
        const newIdx = (this._aniIdx + 1) % this.nAni;
        this.aniIdx = newIdx;
    };

    addAnimationChain = async (object, animationChain, timeScale) => {
        if (!animationChain) return;

        const [fileList, animationList] = analyzeChainCode(animationChain);
        this.nAni = animationList.length;

        this.props.setIsLoading(true);

        object.mixer = new THREE.AnimationMixer(object);
        this.mixers.push(object.mixer);

        this._aniIdx = 0;
        object.mixer.timeScale = timeScale; // Global timeScale
        object.mixer.addEventListener("finished", this.playNextAni);
        this.aniSettings = animationList.map(ani => ({
            timeScale: ani.timeScale,
            repetitions: ani.repetitions,
        }));
        const batchLoader = fileList.map(file => {
            const path = `${fbxSource}/fbx/${file}.fbx`;
            return loadModel(path);
        });

        const animations = [];
        // load all animation files
        const animFiles = await Promise.all(batchLoader);

        animationList.forEach(anim => {
            const { fileIdx, aniName } = anim;
            const animation = aniName
                ? animFiles[fileIdx].animations.find(
                      ani => ani.name === aniName
                  )
                : animFiles[fileIdx].animations[0];
            animations.push(animation);
        });
        this.animations = animations;
        // play first animation
        this.aniIdx = 0;
        this.props.setIsLoading(false);
    };

    // this.aniIdx = n => play animation with index n
    set aniIdx(newIdx) {
        this._aniIdx = newIdx;
        const anim = this.animations[newIdx];
        const mixer = this.models.main.mixer;
        mixer.stopAllAction();
        const action = mixer.clipAction(anim);
        const { timeScale, repetitions } = this.aniSettings[newIdx];

        action.setLoop(THREE.LoopRepeat, repetitions);
        action.clampWhenFinished = true;
        action.timeScale = timeScale;
        action.time = 0;
        action.play();
    }

    updateViewport = (prev, current) => {
        const { width, height } = current;
        if (prev.width !== width || prev.height !== height) {
            this.renderer.setSize(width, height);
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
        }
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
                var url = URL.createObjectURL(superBuffer);
                var a = document.createElement("a");
                document.body.appendChild(a);
                a.style = "display: none";
                a.href = url;
                a.download = "animation.webm";
                a.click();
                window.URL.revokeObjectURL(url);
            };
        }
        // disable user input
        this.props.setIsLoading(true);
        // play first animation and start capturing
        this.aniIdx = 0;
        this.mediaRecorder.start();
    };

    updateAA = () => {
        // get current viewport size
        const currentSize = new THREE.Vector2();
        this.renderer.getSize(currentSize);
        // switch renderer
        this.renderer = this.props.antiAliasing
            ? this.rendererAA
            : this.rendererNoAA;
        this.renderer.setSize(currentSize.x, currentSize.y);
        // remove old canvas
        this.mount.removeChild(this.canvas);
        // Add new canvas
        this.canvas = this.renderer.domElement;
        this.mount.appendChild(this.canvas);
    };

    updateMainModel = async (prev, current) => {
        const { texture, faceTexture } = current;
        const faceOverride = texture !== faceTexture;
        const faceNumber = `face${current.face}`;
        const faceOffset = faceOffsets[faceNumber];
        if (prev.id !== current.id) {
            this.props.setIsLoading(true);
            const modelPath = getModelPath(current.id);
            // load new model
            const model = await loadModel(modelPath);
            const { materialType } = current;
            changeMaterial({ target: model, materialType });
            // add outline
            this.outlines.main = createOutline(model, this.outlineParams);

            // detach weapons from old model if they exist
            ["Right", "Left"].forEach(side => {
                const key = `weapon${side}`;
                if (prev[key]) {
                    this.detachWeapon(side);
                }
            });
            // remove and dispose old model
            this.floor.remove(this.models.main);
            disposeItem(this.models.main);
            // add reference
            this.models.main = model;

            // Save initial position and rotation
            model.initPos = model.position.clone();
            model.initRot = model.rotation.clone();

            // Add new model to scene
            this.floor.add(model);

            // Apply face to new model
            if (faceOverride) {
                applyFaceTexture({
                    target: model,
                    materialType,
                    textureId: faceTexture,
                });
            }

            if (faceOffset.x !== 0 || faceOffset.y !== 0) {
                applyFaceOffset({ target: model, offset: faceOffset });
            }

            // Attach weapons to new model
            ["Right", "Left"].forEach(side => {
                const key = `weapon${side}`;
                const weaponModel = this.models[key];

                if (!weaponModel) return;
                this.attachWeapon(weaponModel, side);
                // add outline if not exist
                if (!this.outlines[key]) {
                    this.outlines[key] = createOutline(
                        weaponModel,
                        this.outlineParams
                    );
                }
            });

            // Add animation to new model
            const { code: aniCode, timeScale } = this.props.animation;
            this.addAnimationChain(model, aniCode, timeScale);

            this.saveMaterialReference();
            this.applyMaterialParams();

            this.props.setIsLoading(false);
        } else {
            // Update face when main model not changed
            const faceTextureChanged = prev.faceTexture !== faceTexture;
            const faceChanged = prev.face !== current.face;
            if (faceChanged || faceTextureChanged) {
                const oldFaceNumber = `face${prev.face}`;
                const faceNumber = `face${current.face}`;

                const oldOffset = faceOffsets[oldFaceNumber];
                const currentOffset = faceOffsets[faceNumber];

                const dx = currentOffset.x - oldOffset.x;
                const dy = currentOffset.y - oldOffset.y;

                let faceOffsetFix = { x: 0, y: 0 };
                if (faceTextureChanged) {
                    const { materialType } = current;
                    applyFaceTexture({
                        target: this.models.main,
                        materialType,
                        textureId: faceTexture,
                    });
                    const oldFaceOffsetFix = faceOffsetFixList[
                        prev.faceTexture
                    ] || { x: 0, y: 0 };

                    const currentFaceOffsetFix = faceOffsetFixList[
                        faceTexture
                    ] || { x: 0, y: 0 };

                    faceOffsetFix = {
                        x: currentFaceOffsetFix.x - oldFaceOffsetFix.x,
                        y: currentFaceOffsetFix.y - oldFaceOffsetFix.y,
                    };

                    this.saveMaterialReference();
                    this.applyMaterialParams();
                }
                const offset = {
                    x: dx + faceOffsetFix.x,
                    y: dy + faceOffsetFix.y,
                };

                applyFaceOffset({ target: this.models.main, offset });
            }
        }
    };

    updateWeapons = async (prev, current) => {
        ["Right", "Left"].forEach(async side => {
            const key = `weapon${side}`;
            // if not changed, return
            if (prev[key] === current[key]) return;
            // Update weapon
            this.detachWeapon(side); // remove old weapon
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
            this.props.setIsLoading(true);

            this.modelInfo[key] = analyzeWeaponCode(this.props.model[key]);
            const { modelPath, texturePath } = this.modelInfo[key];

            // load new model
            const model = await loadModel(modelPath);
            this.models[key] = model;

            // process new weapon
            const { materialType } = current;
            changeMaterial({
                target: this.models[key],
                materialType,
                texturePath,
            });

            if (this.modelInfo[key].flipped) {
                this.models[key].rotation.y = Math.PI;
            }
            // add outline to new weapon
            this.outlines[key] = createOutline(model, this.outlineParams);
            // attach new weapon to main model
            this.attachWeapon(model, side);

            this.saveMaterialReference();
            this.applyMaterialParams();

            this.props.setIsLoading(false);
        });
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
            const mainModel = this.models.main;
            if (prev.code) {
                mainModel.mixer.stopAllAction();

                // Reset position and rotation to initial value
                const { initPos, initRot } = mainModel;
                mainModel.position.copy(initPos);
                mainModel.rotation.copy(initRot);

                this.mixers = [];
                this.animations = [];
            }
            // Add new animation
            this.addAnimationChain(mainModel, code, timeScale);
        }
        //Update timeScale
        else if (prev.timeScale !== timeScale) {
            this.mixers.forEach(mixer => (mixer.timeScale = timeScale));
        }
    };

    updateOutline = (prev, current) => {
        this.outlineParams = { ...current };
        const updatedParams = Object.keys(current).filter(
            key => prev[key] !== current[key]
        );
        if (updatedParams.length === 0) return;
        const { enable, size, opacity, color } = current;
        const outlineList = Object.keys(this.outlines);
        outlineList.forEach(outlineName => {
            const outlineGroup = this.outlines[outlineName];
            if (!outlineGroup) return;
            outlineGroup.forEach(outline => {
                if (updatedParams.includes("enable")) {
                    outline.visible = enable;
                }
                if (updatedParams.includes("size")) {
                    changeOutlineSize(outline, size);
                }
                if (updatedParams.includes("opacity")) {
                    changeOpacity(outline, opacity);
                }
                if (updatedParams.includes("color")) {
                    changeOutlineColor(outline, color);
                }
            });
        });
    };

    applyMaterialParams = () => {
        const { materialType } = this.props.model;
        const current = this.props.materialParams;
        const { materials } = this;
        const paramsList = [
            ...materialCommonParams,
            ...materialExtraParams[materialType],
        ];

        materials.forEach(mat => {
            directSetMatParams.forEach(param => {
                if (!paramsList.includes(param)) return;
                mat[param] = current[param];
            });

            matColorParams.forEach(param => {
                if (!paramsList.includes(param)) return;
                const currentColor = current[param];
                const matColor = new THREE.Color(currentColor);
                mat[param] = matColor;
            });

            if (!current.useTexture) {
                if (mat.map) mat.backupMap = mat.map;
                mat.map = null;
            }
            if (current.flatShading) {
                mat.flatShading = current.flatShading;
                mat.needsUpdate = true;
            }
        });
    };

    updateMaterialParams = (prev, current) => {
        const { materialType } = this.props.model;
        const { useTexture, flatShading } = current;
        const { materials } = this;
        const paramsList = [
            ...materialCommonParams,
            ...materialExtraParams[materialType],
        ];
        directSetMatParams.forEach(param => {
            if (!paramsList.includes(param) || prev[param] === current[param])
                return;
            materials.forEach(mat => (mat[param] = current[param]));
        });

        matColorParams.forEach(param => {
            if (!paramsList.includes(param) || prev[param] === current[param])
                return;
            const currentColor = current[param];
            const matColor = new THREE.Color(currentColor);
            materials.forEach(mat => (mat[param] = matColor));
        });

        if (prev.useTexture !== useTexture) {
            if (!useTexture) {
                materials.forEach(mat => {
                    mat.backupMap = mat.map;
                    mat.map = null;
                    mat.needsUpdate = true;
                });
            } else {
                materials.forEach(mat => {
                    mat.map = mat.backupMap;
                    delete mat.backupMap;
                    mat.needsUpdate = true;
                });
            }
        }

        if (prev.flatShading !== flatShading) {
            materials.forEach(mat => {
                mat.flatShading = flatShading;
                mat.needsUpdate = true;
            });
        }
    };

    updateMaterial = (prev, current) => {
        // update material type
        if (prev.model.materialType !== current.model.materialType) {
            const { materialType } = current.model;

            changeMaterial({ target: this.models.main, materialType });
            this.saveMaterialReference();

            this.applyMaterialParams();
            return;
        }

        this.updateMaterialParams(prev.materialParams, current.materialParams);
    };

    setBackground = bgColor => {
        this.scene.background =
            bgColor !== "transparent" ? new THREE.Color(bgColor) : null;
    };

    animate = () => {
        this.frameId = requestAnimationFrame(this.animate);
        const dt = this.clock.getDelta();
        // Rotate the floor
        this.floor.rotateY((this.props.rotateSpeed * dt * Math.PI) / 2);

        this.mixers.forEach(mixer => mixer.update(dt));

        this.renderer.render(this.scene, this.camera);
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
