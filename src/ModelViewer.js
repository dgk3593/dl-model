import React, { PureComponent } from "react";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { fbxSource } from "./App";
import { CAM_PARAMS, faceOffsets } from "./consts";
import faceOffsetFixList from "./data/face_offset";
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
    animate = () => {
        this.frameId = requestAnimationFrame(this.animate);
        const dt = this.clock.getDelta();
        // Rotate the floor
        this.floor.rotateY((this.props.rotateSpeed * dt * Math.PI) / 2);

        if (this.mixers.length > 0) {
            this.mixers.forEach(mixer => mixer.update(dt));
        }
        this.renderer.render(this.scene, this.camera);
    };

    // set up initial scene
    init = () => {
        this.models = {};
        this.modelInfo = {
            main: this.props.model.id,
            weaponLeft: this.props.model.weaponLeft
                ? analyzeWeaponCode(this.props.model.weaponLeft)
                : "",
            weaponRight: this.props.model.weaponRight
                ? analyzeWeaponCode(this.props.model.weaponRight)
                : "",
        };

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

    playNextAni = () => {
        // if capturing and finished recording current chain, stop capturing and set capture flag back to false
        if (this.props.capture.enable && this._aniIdx === this.nAni - 1) {
            this.mediaRecorder.stop();
            this.props.toggleCapture();
        }
        const newIdx = (this._aniIdx + 1) % this.nAni;
        this.aniIdx = newIdx;
    };

    // add Animation Chain
    addAnimationChain = async (object, animationChain, timeScale) => {
        if (!animationChain) return; // If no Animation, return

        const [fileList, animationList] = analyzeChainCode(animationChain);
        this.nAni = animationList.length;

        this.props.setIsLoading(true);

        object.mixer = new THREE.AnimationMixer(object);
        this.mixers.push(object.mixer);

        this._aniIdx = 0;
        object.mixer.timeScale = timeScale; // Global timeScale
        object.mixer.addEventListener("finished", this.playNextAni);
        this.aniSettings = animationList.map(ani => {
            return {
                timeScale: ani.timeScale,
                repetitions: ani.repetitions,
            };
        });
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

    // Promise to load all models at initialize
    initLoad = () => {
        const modelId = this.modelInfo.main;
        const modelPath = getModelPath(modelId);
        const loadMain = loadModel(modelPath);

        const weaponRight = this.props.model.weaponRight
            ? this.modelInfo.weaponRight.modelPath
            : "";
        const loadWeaponR = loadModel(weaponRight);

        const weaponLeft = this.props.model.weaponLeft
            ? this.modelInfo.weaponLeft.modelPath
            : "";
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

    async componentDidMount() {
        this.init();
        this.props.setIsLoading(true);

        // Load the models
        const [main, weaponRight, weaponLeft] = await this.initLoad();

        // save references
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
            // add weapon to main body
            this.attachWeapon(this.models[`weapon${side}`], side);
        });

        // Apply face settings
        const { texture, faceTexture } = this.props.model;
        const faceOverride = texture !== faceTexture;
        const faceNumber = `face${this.props.model.face}`;
        const { x: faceOffsetX, y: faceOffsetY } = faceOffsets[faceNumber];
        if (faceOffsetX !== 0 || faceOffsetY !== 0) {
            let offsetFix = { x: 0, y: 0 };
            if (faceOverride) {
                applyFaceTexture({ target: main, materialType, faceTexture });

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

        // Add character to scene
        this.floor.add(main);
        // main model loading finished
        this.props.setIsLoading(false);

        // Add animation
        const { code: aniCode, timeScale } = this.props.animation;
        this.addAnimationChain(main, aniCode, timeScale);
    }

    async componentDidUpdate(prevProps) {
        // console.log("component did update");

        // // print updated props to console
        // Object.keys(prevProps).forEach(key => {
        //     const oldValue = prevProps[key];
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

        // Update viewport
        const viewport = this.props.viewport;
        if (
            prevProps.viewport.width !== viewport.width ||
            prevProps.viewport.height !== viewport.height
        ) {
            const { width, height } = viewport;
            this.renderer.setSize(width, height);
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
        }

        // Capture
        if (
            this.props.capture.enable &&
            prevProps.capture.enable !== this.props.capture.enable
        ) {
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
        }

        // update anti aliasing setting
        if (prevProps.antiAliasing !== this.props.antiAliasing) {
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
        }

        // Update main model
        const { texture, faceTexture } = this.props.model;
        const faceNumber = `face${this.props.model.face}`;
        const faceOffset = faceOffsets[faceNumber];
        if (prevProps.model.id !== this.props.model.id) {
            this.props.setIsLoading(true);
            const modelPath = getModelPath(this.props.model.id);
            // load new model
            const model = await loadModel(modelPath);
            const { materialType } = this.props.model;
            changeMaterial({ target: model, materialType });
            // add outline
            this.outlines.main = createOutline(model, this.outlineParams);

            // remove weapons from old model if they exist
            ["Right", "Left"].forEach(side => {
                const key = `weapon${side}`;
                if (prevProps.model[key]) {
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
            if (texture !== faceTexture) {
                applyFaceTexture({ target: model, materialType, faceTexture });
            }

            if (faceOffset.x !== 0 || faceOffset.y !== 0) {
                applyFaceOffset({ target: model, offset: faceOffset });
            }

            // Add weapons to new model
            ["Right", "Left"].forEach(side => {
                const key = `weapon${side}`;
                const weaponModel = this.models[key];
                // if no weapon, return
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

            this.props.setIsLoading(false);
        } else {
            // Update face when main model not changed
            const faceTextureChanged =
                prevProps.model.faceTexture !== faceTexture;
            const faceChanged = prevProps.model.face !== this.props.model.face;
            if (faceChanged || faceTextureChanged) {
                const oldFaceNumber = `face${prevProps.model.face}`;
                const faceNumber = `face${this.props.model.face}`;

                const currentOffset = faceOffsets[faceNumber];
                const oldOffset = faceOffsets[oldFaceNumber];

                const dx = currentOffset.x - oldOffset.x;
                const dy = currentOffset.y - oldOffset.y;

                let faceOffsetFix = { x: 0, y: 0 };
                if (faceTextureChanged) {
                    const { materialType } = this.props.model;
                    applyFaceTexture({
                        target: this.models.main,
                        materialType,
                        faceTexture,
                    });
                    const oldFaceOffsetFix = faceOffsetFixList[
                        prevProps.model.faceTexture
                    ] || { x: 0, y: 0 };

                    const currentFaceOffsetFix = faceOffsetFixList[
                        faceTexture
                    ] || { x: 0, y: 0 };

                    faceOffsetFix = {
                        x: currentFaceOffsetFix.x - oldFaceOffsetFix.x,
                        y: currentFaceOffsetFix.y - oldFaceOffsetFix.y,
                    };
                }
                const offset = {
                    x: dx + faceOffsetFix.x,
                    y: dy + faceOffsetFix.y,
                };

                applyFaceOffset({ target: this.models.main, offset });
            }
        }

        // Update Weapons
        ["Right", "Left"].forEach(async side => {
            const key = `weapon${side}`;
            // if not changed, return
            if (prevProps.model[key] === this.props.model[key]) return;
            // Update weapon
            this.detachWeapon(side); // remove old weapon
            disposeItem(this.models[key]); // dispose old weapon
            // if current weapon is empty (weapon removed)
            if (!this.props.model[key]) {
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
            const { materialType } = this.props.model;
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
            // add new weapon to main model
            this.attachWeapon(model, side);

            this.props.setIsLoading(false);
        });

        // Update material
        if (prevProps.model.materialType !== this.props.model.materialType) {
            const { materialType } = this.props.model;
            changeMaterial({ target: this.models.main, materialType });
        }

        // Update animation
        const { code: aniCode, timeScale } = this.props.animation;
        if (prevProps.animation.code !== aniCode) {
            if (prevProps.animation.code) {
                this.models.main.mixer.stopAllAction();

                // Reset position and rotation to initial value
                const { initPos, initRot } = this.models.main;
                this.models.main.position.copy(initPos);
                this.models.main.rotation.copy(initRot);

                this.mixers = [];
                this.animations = [];
            }
            // Add new animation
            this.addAnimationChain(this.models.main, aniCode, timeScale);
        }
        //Update timeScale
        else if (prevProps.animation.timeScale !== timeScale) {
            if (this.mixers.length > 0) {
                this.mixers.forEach(mixer => (mixer.timeScale = timeScale));
            }
        }

        // Update background color
        if (prevProps.bgColor !== this.props.bgColor) {
            this.scene.background =
                this.props.bgColor !== "transparent"
                    ? new THREE.Color(this.props.bgColor)
                    : null;
        }

        // Update outline
        const {
            enable: showOutline,
            color: outlineColor,
            size: outlineSize,
            opacity: outlineOpacity,
        } = this.props.outline;
        // Update outline visibility
        if (prevProps.outline.enable !== showOutline) {
            this.outlineParams.enable = showOutline;

            Object.keys(this.outlines).forEach(key => {
                if (!this.outlines[key]) return;
                this.outlines[key].forEach(
                    outline => (outline.visible = showOutline)
                );
            });
        }

        // Update outline size
        if (prevProps.outline.size !== outlineSize) {
            this.outlineParams.size = outlineSize;

            Object.keys(this.outlines).forEach(key => {
                if (!this.outlines[key]) return;
                this.outlines[key].forEach(outline =>
                    changeOutlineSize(outline, outlineSize)
                );
            });
        }

        // Update outline opacity
        if (prevProps.outline.opacity !== outlineOpacity) {
            this.outlineParams.opacity = outlineOpacity;

            Object.keys(this.outlines).forEach(key => {
                if (!this.outlines[key]) return;
                this.outlines[key].forEach(outline =>
                    changeOpacity(outline, outlineOpacity)
                );
            });
        }

        // Update outline color
        if (prevProps.outline.color !== outlineColor) {
            this.outlineParams.color = outlineColor;
            Object.keys(this.outlines).forEach(key => {
                if (!this.outlines[key]) return;
                this.outlines[key].forEach(outline =>
                    changeOutlineColor(outline, outlineColor)
                );
            });
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
