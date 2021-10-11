import * as THREE from "three";
import { createAniChain } from "./helper";
import { FPS } from "../../defaultParams";
import eventDispatcher from "../../utils/eventDispatcher";
import { setNestedProp } from "../../utils";

export default function addAnimation(container) {
    const { model, uniqueId, bones, id } = container;
    const mixer = new THREE.AnimationMixer(model);
    const boneList = bones?.list ?? [];

    const animation = {
        ...eventDispatcher,
        mixer,
        chain: {},
        current: {
            chainName: "",
            chainCode: "",
            chainLength: 0,
            aniIdx: 0,
            clipDuration: 0,
            clipTimeScale: 1,
            /**
             * @type {THREE.AnimationAction}
             */
            action: null,
            /**
             * @type {Array}
             */
            aniAction: [], // list of actions for the current clip
            aniActionPointer: 0, // index of next mod action
        },

        toString() {
            const code = this.chain.default?.code;
            return code ? `ani=${code}` : "";
        },

        /** add animation chain
         * @param {string} chainCode
         * @param {object} params
         * @param {string} [params.name]
         * @param {boolean} [params.autoplay]
         */
        async addChain(chainCode, { name = "default", autoplay = true } = {}) {
            if (!chainCode || this.chain[name]?.code === chainCode) return;
            mixer.stopAllAction();

            const chain = await createAniChain(chainCode);
            // change bone name to avoid collision when attaching something with identical bone name
            chain.clips.forEach(clip => {
                clip.tracks = clip.tracks.reduce((acc, track) => {
                    let boneName = track.name.split(".")[0];
                    if (boneName === "c110353_01") {
                        boneName = id;
                        track.name.replace("c110353_01", id);
                    }
                    if (boneList.includes(boneName)) {
                        track.name = `${uniqueId}|${track.name}`;
                        acc.push(track);
                    }

                    return acc;
                }, []);
            });
            this.chain[name] = chain;

            mixer.addEventListener("finished", playNextAni);
            autoplay && this.play(name);
        },

        play(chainName = this.current.chainName || "default") {
            const chain = this.chain[chainName];
            if (!chain) return;

            this.current.chainName = chainName;
            this.current.chainCode = chain.code;
            this.current.chainLength = chain.clips.length;
            this.aniIdx = 0;
        },

        pause() {
            this.current.action && (this.current.action.paused = true);
        },

        resume() {
            this.current.action && (this.current.action.paused = false);
        },

        stop() {
            mixer.stopAllAction();
        },

        /**
         * @param {number} dt
         */
        update(dt) {
            mixer.update(dt);
            const { current } = this;
            const { action, aniAction, clipDuration } = current;

            if (!aniAction[current.aniActionPointer] || !action) return;
            while (
                action?.time >
                (aniAction[current.aniActionPointer]?.time * clipDuration) / 100
            ) {
                this.applyAniAction(aniAction[current.aniActionPointer]);
                this.current.aniActionPointer++;
            }
        },

        applyAniAction(aniAction) {
            container.dispatchEvent({
                type: "aniAction",
                id: uniqueId,
                aniAction,
            });

            const { time, ...actions } = aniAction;
            Object.entries(actions).forEach(([key, value]) => {
                const keyChain = key.split(".");
                setNestedProp(container, keyChain, value);
            });
        },

        nextFrame(nFrames = 1, fps = FPS) {
            if (!this.isPaused) return;

            const {
                clipTimeScale: timeScale,
                clipDuration,
                action,
            } = this.current;

            const dt = (nFrames * timeScale) / fps;
            action.time += dt;

            if (action.time >= clipDuration) {
                const dt = action.time - clipDuration;
                playNextAni();
                this.pause();

                // new values
                this.current.action.time += dt * this.current.clipTimeScale;
            }
        },

        /**
         * go to time t of the current clip
         * @param {number} t
         */
        setTime(t) {
            const { clipDuration, action } = this.current;
            if (!clipDuration || t > clipDuration) return;

            action.time = t;
        },

        get isPaused() {
            return this.current.action?.paused;
        },

        get aniIdx() {
            return this.current.aniIdx;
        },

        set aniIdx(newIdx) {
            if (newIdx >= this.current.chainLength) return;
            this.current.aniIdx = newIdx;
            this.current.aniActionPointer = 0;

            const event = {
                type: newIdx === 0 ? "chainStart" : "chainMove",
                index: newIdx,
                uniqueId,
                chainName: this.current.chainName,
            };

            this.dispatchEvent(event);

            mixer.stopAllAction();
            const currentChain = this.chain[this.current.chainName];
            const mod = currentChain.mod[newIdx];
            const { timeScale, reps, aniAction } = mod;

            const aniClip = currentChain.clips[newIdx];
            const action = mixer.clipAction(aniClip);
            action.timeScale = timeScale ?? 1;
            action.setLoop(THREE.LoopRepeat, reps ?? 1);

            this.current.clipDuration = aniClip.duration;
            this.current.action = action;
            this.current.aniAction = aniAction;
            this.current.aniActionPointer = 0;
            this.current.clipTimeScale = timeScale ?? 1;
            action.play();
        },
    };

    function playNextAni() {
        const { aniIdx: idx, chainLength } = animation.current;
        const newIdx = (idx + 1) % chainLength;

        if (newIdx === 0) {
            animation.dispatchEvent({
                type: "ChainFinished",
                chainName: animation.current.chainName,
            });

            const { face } = container;
            if (face) {
                face.eyeIdx = face.eyeBaseIdx;
                face.mouthIdx = face.mouthBaseIdx;
            }
        }

        animation.aniIdx = newIdx;
    }
    container.animation = animation;
    container.addEventListener("TimeUpdated", ({ dt }) => animation.update(dt));

    return container;
}
