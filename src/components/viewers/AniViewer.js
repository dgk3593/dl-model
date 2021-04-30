import BasicViewer from "./BasicViewer";

import * as THREE from "three";
import {
    analyzeChainCode,
    loadAnimations,
    getFaceChangesQueue,
} from "helpers/viewerHelpers";

import { getDateTimeString } from "helpers/helpers";

import downloadBlob from "helpers/downloadBlob";

/**
 *  Extension of Base Viewer that adds:
 *    - Animation
 *    - Recording Animation
 */
export class AniViewer extends BasicViewer {
    afterMainModelLoad = () => {
        this.saveMainModelInitState();
        this.addAnimation();
    };

    afterMainModelUpdate = () => {
        this.saveMainModelInitState();
        this.addAnimation();
    };

    /**
     * @param {ViewerProps} prev
     * @param {ViewerProps} current
     */
    updateModel = async (prev, current) => {
        await this.updateMainModel(prev.model, current.model);
        this.updateAnimation(prev.animation, current.animation);
    };

    /**
     * @param {ViewerProps} prev
     * @param {ViewerProps} current
     */
    otherUpdate = (prev, current) => {
        // Capture
        if (current.capture.enable && !prev.capture.enable) {
            this.captureAnimation();
        }
    };

    /**
     * save main model's initial position and rotation
     */
    saveMainModelInitState = () => {
        const model = this.models.main;
        model.userData.initPos = model.position.clone();
        model.userData.initRot = model.rotation.clone();
    };

    /**
     * play animation stored in this.animations[newIdx]
     * @param {number} newIdx
     */
    set aniIdx(newIdx) {
        this._aniIdx = newIdx;

        const { mixer } = this;
        mixer.stopAllAction();

        const ani = this.animations[newIdx];
        const action = mixer.clipAction(ani);
        const currentAniSettings = this.aniSettings[newIdx];
        const { timeScale, repetitions, faceChanges } = currentAniSettings;
        const currentClipDuration = ani.duration;

        action.setLoop(THREE.LoopRepeat, repetitions);
        action.timeScale = timeScale;
        action.time = 0;

        this.faceChanges = getFaceChangesQueue(faceChanges, repetitions);
        this.faceChangeTime = this.faceChanges.map(
            change => (currentClipDuration * change.time) / 100
        );

        mixer.setTime(0);
        action.play();
    }

    /**
     * reset model's face to the ones specified in model setting
     */
    resetFace = () => {
        const { eyeIdx, mouthIdx } = this.props.model;
        this.eyeIdx = eyeIdx;
        this.mouthIdx = mouthIdx;
    };

    /**
     * @param {number} newIdx
     */
    set eyeIdx(newIdx) {}

    /**
     * @param {number} newIdx
     */
    set mouthIdx(newIdx) {}

    /**
     * called before animation is attached
     */
    beforeAddAni = () => {
        this.resetFace();
    };

    /**
     * load and attach animations
     */
    addAnimation = async () => {
        this.beforeAddAni();

        const { code: aniCode, timeScale } = this.props.animation;
        if (!aniCode) return;

        this.disableInput();

        const mainModel = this.models.main;
        const aniList = analyzeChainCode(aniCode);
        /**
         * number of currently loaded animations
         */
        this.nAni = aniList.length;

        mainModel.mixer = new THREE.AnimationMixer(mainModel);
        /**
         * @type {THREE.AnimationMixer}
         */
        this.mixer = mainModel.mixer;

        this._aniIdx = 0;
        mainModel.mixer.timeScale = timeScale; // Global timeScale
        mainModel.mixer.addEventListener("finished", this.playNextAni);
        this.aniSettings = aniList;

        /**
         * @type {THREE.AnimationClip[]}
         */
        this.animations = await loadAnimations(aniList);

        // play first animation
        this.aniIdx = 0;
        this.enableInput();
    };

    /**
     * remove all loaded animation
     */
    removeAnimation = () => {
        const mainModel = this.models.main;
        mainModel.mixer?.stopAllAction?.();

        // Reset position and rotation to initial value
        const { initPos, initRot } = mainModel.userData;
        mainModel.position.copy(initPos);
        mainModel.rotation.copy(initRot);

        this.mixer = null;
        this.animations = [];
        this.aniSettings = [];
    };

    /**
     * play the next animation stored in this.animations
     */
    playNextAni = () => {
        const { nAni } = this;
        // if capturing and finished recording current chain, stop capturing and set capture flag back to false
        const finishedRecording =
            this.props.capture.enable && this._aniIdx === nAni - 1;
        if (finishedRecording) {
            this.mediaRecorder.stop();
            this.props.onCaptureFinish();
        }
        const newIdx = (this._aniIdx + 1) % nAni;
        this.aniIdx = newIdx;
    };

    /**
     * update animation and global time scale
     * @param {ViewerProps["animation"]} prev
     * @param {ViewerProps["animation"]} current
     */
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

    /**
     * capture current animation and save as video
     */
    captureAnimation = () => {
        /**
         * @type {Blob[]}
         */
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

                const { format } = this.props.capture;

                const superBuffer = new Blob(this.chunks, {
                    type: `video/${format}`,
                });

                const fileName = `ani_${getDateTimeString()}.${format}`;

                downloadBlob(superBuffer, fileName);
            };
        }
        this.disableInput("Recording");
        this.beforeCaptureAnimation();
        // play first animation and start capturing
        this.aniIdx = 0;
        this.mediaRecorder.start();
    };

    /**
     * called before animation capture
     */
    beforeCaptureAnimation = () => void 0;

    updateScene = dt => {
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
