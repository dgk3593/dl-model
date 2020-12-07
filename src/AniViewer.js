/* 
################################################
# Extension of Base Viewer that adds:
#    - Animation
#    - Recording Animation
################################################  
*/

import BaseViewer from "./BaseViewer";

import * as THREE from "three";
import { fbxSource } from "./App";
import {
    analyzeChainCode,
    loadModel,
    getFaceChangesArray,
} from "./viewerHelpers";

export class AniViewer extends BaseViewer {
    constructor() {
        super();
        this.aniSource = `${fbxSource}/fbx`;
    }

    afterMainModelLoad = () => {
        this.saveMainModelInitState();
        this.addAnimation();
    };

    afterMainModelUpdate = () => {
        this.saveMainModelInitState();
        this.addAnimation();
    };

    updateModel = async (prev, current) => {
        await this.updateMainModel(prev.model, current.model);
        this.updateAnimation(prev.animation, current.animation);
    };

    otherUpdate = (prev, current) => {
        // Capture
        if (current.capture.enable && !prev.capture.enable) {
            this.captureAnimation();
        }
    };

    saveMainModelInitState = () => {
        const model = this.models.main;
        model.initPos = model.position.clone();
        model.initRot = model.rotation.clone();
    };

    set aniIdx(newIdx) {
        this._aniIdx = newIdx;

        const { mixer } = this;
        mixer.stopAllAction();

        const anim = this.animations[newIdx];
        const action = mixer.clipAction(anim);
        const currentAniSettings = this.aniSettings[newIdx];
        const { timeScale, repetitions, faceChanges } = currentAniSettings;

        action.setLoop(THREE.LoopRepeat, repetitions);
        action.clampWhenFinished = true;
        action.timeScale = timeScale;
        action.time = 0;

        this.faceChanges = getFaceChangesArray(faceChanges, repetitions);
        this.faceChangeTime = this.faceChanges.map(
            change => (this.currentClipDuration * change.time) / 100
        );

        mixer.setTime(0);
        this.currentClipDuration = anim.duration;
        action.play();
    }

    resetFace = () => {
        const { eyeIdx, mouthIdx } = this.props.model;
        this.eyeIdx = eyeIdx;
        this.mouthIdx = mouthIdx;
    };

    beforeAddAni = () => {
        this.resetFace();
    };

    addAnimation = async () => {
        this.beforeAddAni?.();

        const { code: aniCode, timeScale } = this.props.animation;
        if (!aniCode) return;

        this.disableInput();

        const mainModel = this.models.main;
        const [fileList, animationList] = analyzeChainCode(aniCode);
        this.nAni = animationList.length;

        mainModel.mixer = new THREE.AnimationMixer(mainModel);
        this.mixer = mainModel.mixer;

        this._aniIdx = 0;
        mainModel.mixer.timeScale = timeScale; // Global timeScale
        mainModel.mixer.addEventListener("finished", this.playNextAni);
        this.aniSettings = animationList.map(ani => ({
            timeScale: ani.timeScale,
            repetitions: ani.repetitions,
            faceChanges: ani.faceChanges,
        }));

        // load all animation files
        const batchLoader = fileList.map(file => {
            const path = `${this.aniSource}/${file}.fbx`;
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
        this.enableInput();
    };

    removeAnimation = () => {
        const mainModel = this.models.main;
        mainModel.mixer?.stopAllAction?.();

        // Reset position and rotation to initial value
        const { initPos, initRot } = mainModel;
        mainModel.position.copy(initPos);
        mainModel.rotation.copy(initRot);

        this.mixer = null;
        this.animations = [];
        this.aniSettings = [];
    };

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

    updateAnimation = (prev, current) => {
        const { code, timeScale } = current;
        if (prev.code !== code) {
            this.removeAnimation();
            this.addAnimation();
            return;
        }
        // Update timeScale if animation not changed
        if (prev.timeScale !== timeScale) {
            this.mixer.timeScale = timeScale;
        }
    };

    captureAnimation = () => {
        this.chunks = [];
        this.videoStream = this.canvas.captureStream(30);

        if (!this.mediaRecorder) {
            const { codec } = this.props.capture;
            this.mediaRecorder = new MediaRecorder(this.videoStream, {
                mimeType: codec,
            });
            this.mediaRecorder.ondataavailable = event =>
                this.chunks.push(event.data);
            this.mediaRecorder.onstop = () => {
                this.enableInput();
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
        this.disableInput();
        this.beforeCaptureAnimation?.();
        // play first animation and start capturing
        this.aniIdx = 0;
        this.mediaRecorder.start();
    };

    everyAnimate = () => {
        const dt = this.clock.getDelta();
        this.rotateFloor(dt);
        this.mixer?.update(dt);

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
    };
}

export default AniViewer;
