import React, { Component } from "react";
import * as THREE from "three";
import { fbxSource } from "./App";
import { CAM_PARAMS } from "./consts";
import faceOffset from "./data/face_offset";
import {
    changeMaterialToBasic,
    analyzeWeaponCode,
    loadModel,
    applyFace,
    disposeItem,
    analyzeChainCode,
} from "./viewerHelpers";

let OrbitControls = require("three-orbit-controls")(THREE);

class ModelViewer extends Component {
    animate = () => {
        this.frameId = requestAnimationFrame(this.animate);
        if (this.mixers.length > 0) {
            const dt = this.clock.getDelta();
            this.mixers.forEach(mixer => mixer.update(dt));
        }
        this.renderer.render(this.scene, this.camera);
    };

    // set up initial scene
    init = () => {
        this.models = {};
        this.modelInfo = {
            main: this.props.modelId,
            weaponLeft: this.props.weaponLeft
                ? analyzeWeaponCode(this.props.weaponLeft)
                : "",
            weaponRight: this.props.weaponRight
                ? analyzeWeaponCode(this.props.weaponRight)
                : "",
        };

        // viewport
        this.viewport = this.props.viewport || {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        // mixers
        this.mixers = [];
        this.clock = new THREE.Clock();

        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(this.props.bgColor);

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            CAM_PARAMS.angle,
            this.viewport.width / this.viewport.height,
            CAM_PARAMS.near,
            CAM_PARAMS.far
        );
        this.cameraPosition = this.props.cameraPosition || {
            x: 2,
            y: 0,
            z: 10,
        };
        this.camera.position.set(
            this.cameraPosition.x,
            this.cameraPosition.y,
            this.cameraPosition.z
        );
        this.camera.updateProjectionMatrix();

        // Controls
        this.controls = new OrbitControls(this.camera, this.mount);
        this.controlsPosition = this.props.controlsPosition || {
            x: 0,
            y: 0,
            z: 0,
        };
        this.controls.target.set(
            this.controlsPosition.x,
            this.controlsPosition.y,
            this.controlsPosition.z
        );
        this.controls.update();

        // Light
        let light = new THREE.DirectionalLight(0xffffff);
        light.position.set(0, 200, 0);
        this.scene.add(light);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias: false,
            alpha: true,
        });
        this.renderer.setClearColor(0x000000, 0);
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.mount.appendChild(this.renderer.domElement);
        this.animate();
    };

    playNextAni = () => {
        const newIdx = (this._aniIdx + 1) % this.nAni;
        this.aniIdx = newIdx;
    };

    // add Animation Chain
    addAnimationChain = (object, animationChain, timeScale) => {
        if (!animationChain) return; // If no Animation, return

        const [fileList, animationList] = analyzeChainCode(animationChain);
        this.nAni = animationList.length;

        this.props.setIsLoading(true);

        object.mixer = new THREE.AnimationMixer(object);
        if (object.mixer) {
            this.mixers.push(object.mixer);
        }
        this._aniIdx = 0;
        object.mixer.timeScale = timeScale; // Global timeScale
        if (this.nAni > 1) {
            object.mixer.addEventListener("finished", this.playNextAni);
        }
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

        Promise.all(batchLoader).then(animFiles => {
            const animations = [];

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
            this.aniIdx = 0;
            this.props.setIsLoading(false);
        });
    };

    set aniIdx(newIdx) {
        this._aniIdx = newIdx;
        const anim = this.animations[newIdx];
        const mixer = this.models.main.mixer;
        mixer.stopAllAction();
        const action = mixer.clipAction(anim);
        const { timeScale, repetitions } = this.aniSettings[newIdx];
        // Repeat infinitely if only 1 animation and repetition = 1
        if (this.nAni > 1 || repetitions > 1) {
            action.clampWhenFinished = true;
            action.setLoop(THREE.LoopRepeat, repetitions);
        }
        action.timeScale = timeScale;
        action.fadeIn(0.1);
        action.time = 0;
        action.play();
    }

    // Load all models at initialize
    initLoad = () => {
        const modelPath = `${fbxSource}/fbx/${this.props.model}/${this.props.model}.fbx`;
        const loadMain = loadModel(modelPath);

        const weaponRight = this.props.weaponRight
            ? this.modelInfo.weaponRight.model
            : "";
        const loadWeaponR = loadModel(weaponRight);

        const weaponLeft = this.props.weaponLeft
            ? this.modelInfo.weaponLeft.model
            : "";
        const loadWeaponL = loadModel(weaponLeft);

        return Promise.all([loadMain, loadWeaponR, loadWeaponL]);
    };

    addWeapon = (weapon, side) => {
        const boneName = `jWeapon${side[0]}`;
        this.models.main.traverse(child => {
            if (child.name === boneName && child.children.length === 0) {
                child.add(weapon);
            }
        });
    };

    removeWeapon = side => {
        const boneName = `jWeapon${side[0]}`;
        this.models.main.traverse(child => {
            if (child.name === boneName && child.children.length === 1) {
                if (child.children[0].type === "Group") {
                    child.remove(this.models[`weapon${side}`]);
                }
            }
        });
    };

    componentDidMount() {
        this.init();
        this.props.setIsLoading(true);

        this.initLoad().then(models => {
            const [main, weaponRight, weaponLeft] = models;
            // save references
            this.models = {
                main,
                weaponRight,
                weaponLeft,
            };

            // Save initial position and rotation
            main.initPos = main.position.clone();
            main.initRot = main.rotation.clone();

            // change the materials to MeshBasicMaterial
            changeMaterialToBasic(main);

            // process weapons
            ["Right", "Left"].forEach(side => {
                const key = `weapon${side}`;
                if (this.props[key]) {
                    const texture = this.modelInfo[key].texture;
                    changeMaterialToBasic(this.models[key], texture);
                    if (this.modelInfo[key].flipped) {
                        this.models[key].rotation.y = Math.PI;
                    }
                }
            });

            // Apply face settings
            const faceOverride = this.props.texture !== this.props.faceTexture;
            if (
                this.props.faceOffset.x !== 0 ||
                this.props.faceOffset.y !== 0 ||
                faceOverride
            ) {
                let offsetFix = { x: 0, y: 0 };
                if (faceOverride) {
                    const offsetFixBase = faceOffset[this.props.texture] || {
                        x: 0,
                        y: 0,
                    };
                    const offsetFixOverride = faceOffset[
                        this.props.faceTexture
                    ] || {
                        x: 0,
                        y: 0,
                    };
                    offsetFix = {
                        x: offsetFixOverride.x - offsetFixBase.x,
                        y: offsetFixOverride.y - offsetFixBase.y,
                    };
                }
                const offset = {
                    x: this.props.faceOffset.x + offsetFix.x,
                    y: this.props.faceOffset.y + offsetFix.y,
                };
                applyFace(main, this.props.faceTexture, offset);
            }

            // Add character to scene
            this.scene.add(main);

            // Add weapons
            ["Right", "Left"].forEach(side => {
                const key = `weapon${side}`;
                if (this.props[key]) {
                    this.addWeapon(this.models[`weapon${side}`], side);
                }
            });

            this.props.setIsLoading(false);

            // Add animation
            this.addAnimationChain(
                main,
                this.props.aniCode,
                this.props.timeScale
            );
        });
    }

    componentDidUpdate(prevProps) {
        // console.log("component did update");

        // // print updated props to console
        // Object.keys(prevProps).forEach(key => {
        //     if (prevProps[key] !== this.props[key]) {
        //         console.log(
        //             `${key}: ${JSON.stringify(
        //                 prevProps[key]
        //             )} to ${JSON.stringify(this.props[key])}`
        //         );
        //     }
        // });

        // Update viewport
        if (
            prevProps.viewport.width !== this.props.viewport.width ||
            prevProps.viewport.height !== this.props.viewport.height
        ) {
            const { width, height } = this.props.viewport;
            this.renderer.setSize(width, height);
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
        }

        // Update main model
        if (prevProps.model !== this.props.model) {
            this.props.setIsLoading(true);
            const modelPath = `${fbxSource}/fbx/${this.props.model}/${this.props.model}.fbx`;
            loadModel(modelPath).then(model => {
                changeMaterialToBasic(model);

                // remove weapons from old model if they exist
                ["Right", "Left"].forEach(side => {
                    const key = `weapon${side}`;
                    if (prevProps[key]) {
                        this.removeWeapon(side);
                    }
                });
                this.scene.remove(this.models.main); // remove old model
                disposeItem(this.models.main); // dispose old model
                this.models.main = model;

                // Save initial position and rotation
                model.initPos = model.position.clone();
                model.initRot = model.rotation.clone();

                // Add new model to scene
                this.scene.add(model);

                // Apply face to new model
                const faceOverride =
                    this.props.texture !== this.props.faceTexture;
                if (
                    this.props.faceOffset.x !== 0 ||
                    this.props.faceOffset.y !== 0 ||
                    faceOverride
                ) {
                    applyFace(
                        model,
                        this.props.faceTexture,
                        this.props.faceOffset
                    );
                }

                // Add weapons to new model
                ["Right", "Left"].forEach(side => {
                    const key = `weapon${side}`;
                    if (this.models[key]) {
                        this.addWeapon(this.models[key], side);
                    }
                });

                // Add animation to new model
                this.addAnimationChain(
                    model,
                    this.props.aniCode,
                    this.props.timeScale
                );

                this.props.setIsLoading(false);
            });
        } else {
            // Update face
            const faceTextureChanged =
                prevProps.faceTexture !== this.props.faceTexture;
            if (
                prevProps.faceOffset !== this.props.faceOffset ||
                faceTextureChanged
            ) {
                const dx = this.props.faceOffset.x - prevProps.faceOffset.x;
                const dy = this.props.faceOffset.y - prevProps.faceOffset.y;
                let faceOffsetFix = { x: 0, y: 0 };
                if (faceTextureChanged) {
                    const oldFaceOffsetFix = faceOffset[
                        prevProps.faceTexture
                    ] || {
                        x: 0,
                        y: 0,
                    };
                    const currentFaceOffsetFix = faceOffset[
                        this.props.faceTexture
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
                applyFace(this.models.main, this.props.faceTexture, offset);
            }
        }

        // Update Weapons
        ["Right", "Left"].forEach(side => {
            const key = `weapon${side}`;
            if (prevProps[key] !== this.props[key]) {
                // remove old weapon
                if (!this.props[key]) {
                    this.removeWeapon(side); // remove old weapon
                    disposeItem(this.models[key]); // dispose old weapon
                    this.models[key] = null;
                    this.modelInfo[key] = "";
                    return;
                }
                this.props.setIsLoading(true);
                this.modelInfo[key] = analyzeWeaponCode(this.props[key]);
                const { model: modelPath, texture } = this.modelInfo[key];

                loadModel(modelPath).then(model => {
                    this.removeWeapon(side); // remove old weapon
                    disposeItem(this.models[key]); // dispose old weapon
                    this.models[key] = model;
                    // process new weapon
                    changeMaterialToBasic(this.models[key], texture);
                    if (this.modelInfo[key].flipped) {
                        this.models[key].rotation.y = Math.PI;
                    }
                    this.addWeapon(model, side); // add new Weapon
                    this.props.setIsLoading(false);
                });
            }
        });

        // Update animation
        if (prevProps.aniCode !== this.props.aniCode) {
            if (prevProps.aniCode) {
                this.models.main.mixer.stopAllAction();

                // Reset position and rotation to initial value
                const { initPos, initRot } = this.models.main;
                this.models.main.position.copy(initPos);
                this.models.main.rotation.copy(initRot);

                this.mixers = [];
                this.animations = [];
            }
            this.addAnimationChain(
                this.models.main,
                this.props.aniCode,
                this.props.timeScale
            );
        }

        //Update timeScale
        if (prevProps.timeScale !== this.props.timeScale) {
            if (this.mixers.length > 0) {
                this.mixers.forEach(
                    mixer => (mixer.timeScale = this.props.timeScale)
                );
            }
        }

        // Update background color
        if (prevProps.bgColor !== this.props.bgColor) {
            this.scene.background = new THREE.Color(this.props.bgColor);
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
