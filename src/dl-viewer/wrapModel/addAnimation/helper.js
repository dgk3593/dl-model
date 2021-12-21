import * as THREE from "three";
import { loadFBXModel } from "../../utils/loader";
import { ANIMATION_SOURCE, FBX_SOURCE } from "../../path";
import { extractPair } from "../../utils";
import { FPS } from "../../defaultParams";
import { ArrayWithEvent } from "@/dl-viewer/utils/ArrayWithEvent";

export const defaultCurrent = {
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
};

/**
 * @param {string} chainCode
 */
export function analyzeChainCode(chainCode) {
    const aniCodes = chainCode.split(">");
    const aniList = aniCodes.map(codeToListItem);

    return aniList;
}

/**
 * @param {string} aniCode
 */
function codeToListItem(aniCode) {
    const [aniName, ...mods] = aniCode.split("&");
    const modifier = analyzeMods(mods);

    return { aniName, ...modifier };
}

/**
 * @param {string[]} modList
 * @return {AniMod}
 */
function analyzeMods(modList) {
    /**
     * @type {AniMod}
     */
    const output = {};
    const aniAction = [];

    const modMap = {
        r: { name: "reps", map: parseInt },
        ts: { name: "timeScale", map: parseFloat },
        dur: { name: "duration", map: parseDuration },
    };

    modList.forEach(mod => {
        const [key, value] = extractPair(mod);
        if (key.startsWith("@")) {
            const action = createAction(value.replace(/[()]/g, ""));
            action.time = parseFloat(key.slice(1));

            aniAction.push(action);
            return;
        }
        if (!modMap[key]) return;

        const { name, map } = modMap[key];
        output[name] = map(value);
    });

    output.aniAction = aniAction
        .filter(({ time }) => time <= 100 && time >= 0)
        .sort((a, b) => a.time - b.time);

    return output;
}

/**
 * parse a duration string
 * @example '10-80' -> [10, 80]
 * @example '70' -> [0, 70]
 * @param {`${number}-${number}` | `${number}`} dur
 * @return {[start: number, end: number]}
 */
function parseDuration(dur) {
    if (!dur) return [0, 100];

    const timestamps = dur.split("-").slice(0, 2).map(parseFloat);
    const output = timestamps.length === 2 ? timestamps : [0, timestamps[0]];
    // if time outside of [0-100] or end > start
    if (output.some(t => t > 100 || t < 0) || output[0] > output[1])
        return [0, 100];
    // @ts-ignore
    return output;
}

/**
 * @param {string} actionCode
 * @return {AniAction}
 */
function createAction(actionCode) {
    /**
     * @type {AniAction}
     */
    const action = actionCode.split("/").reduce((acc, v) => {
        const [key, value] = extractPair(v);
        return { ...acc, ...analyzeActionPair(key, value) };
    }, {});

    return action;
}

const actionMap = {
    ei: { name: "face.eyeIdx", valueMap: parseInt },
    mi: { name: "face.mouthIdx", valueMap: parseInt },
    et: { name: "face.eyeTexture" },
    mt: { name: "face.mouthTexture" },
};

/**
 * @param {string} key - short key
 * @param {string} value
 * @return {{ [fullKey: string]: * }} - full key value pair
 */
function analyzeActionPair(key, value) {
    if (key in actionMap) {
        const { name, valueMap } = actionMap[key];
        return { [name]: valueMap?.(value) ?? value };
    }

    let fullKey = key;
    /**
     * @type {*}
     */
    let fullValue = value;
    if (key.startsWith("att")) {
        fullKey.replace("att", "attachment");
    }
    if (key.startsWith("parts")) {
        fullKey += "index";
        fullValue = parseInt(value);
    }

    return { [fullKey]: fullValue };
}

/**
 * @param {string} name
 */
const getAniPath = name => `${ANIMATION_SOURCE}/${name}.json`;

/**
 * @param {string} name
 */
const getFbxPath = name =>
    `${FBX_SOURCE}/${name}${name.endsWith(".fbx") ? "" : ".fbx"}`;

/** load 1 animation clip
 * @param {string} code
 * @param {ArrayWithEvent} exSource
 * @return {Promise<THREE.AnimationClip>}
 */
export function loadAniClip(code, exSource) {
    // @ts-ignore
    if (code.startsWith("fbx:")) return loadFbxAni(code);
    if (code.startsWith("ex:")) {
        const [, uuid] = code.split(":");
        const clip = exSource?.find(({ uuid: uuid2 }) => uuid === uuid2);
        return Promise.resolve(clip.clone());
    }

    const path = getAniPath(code);
    return new Promise(resolve =>
        fetch(path)
            .then(response => response.json())
            .then(json => THREE.AnimationClip.parse(json))
            .then(resolve)
    );
}

/**
 * @param {`fbx:${string}`} clipCode
 */
async function loadFbxAni(clipCode) {
    const code = clipCode.replace("fbx:", "");
    const [filePath, aniName] = code.split("+");

    const { animations } = await loadFBXModel(filePath);
    return aniName
        ? animations.find(({ name }) => name === aniName)
        : animations[0];
}

/** load animation clips from a name list
 * @param {string[]} clipList
 * @return {Promise<THREE.AnimationClip[]>}
 */
export function loadAniFromList(clipList, exSource = null) {
    return Promise.all(clipList.map(code => loadAniClip(code, exSource)));
}

/**
 * @param {THREE.AnimationClip[]} rawClips
 * @param {[start: number, end: number][]} duration
 */
function createSubClips(rawClips, duration = []) {
    return rawClips.map((clip, i) => {
        const dur = duration[i];
        if (!dur) return clip;

        if (dur[0] === 0 && dur[1] === 100) return clip;

        const frameCount = clip.duration * FPS;
        const [startFrame, endFrame] = dur.map(t =>
            Math.round((t * frameCount) / 100)
        );

        return THREE.AnimationUtils.subclip(
            clip,
            clip.name,
            startFrame,
            endFrame,
            FPS
        );
    });
}

/**
 * @param {string} chainCode
 */
export async function createAniChain(chainCode, exSource = null) {
    const list = analyzeChainCode(chainCode);

    const clipNames = list.map(({ aniName }) => aniName);
    const durations = list.map(({ duration }) => duration);
    const mod = list.map(({ aniName, duration, ...others }) => ({ ...others }));

    const rawClips = await loadAniFromList(clipNames, exSource);
    const clips = createSubClips(rawClips, durations);

    const aniChain = {
        code: chainCode,
        clips,
        mod,

        get duration() {
            if (mod.some(({ timeScale }) => timeScale === 0)) return Infinity;

            const clipDurations = clips.map(
                (clip, i) =>
                    (clip.duration / Math.abs(mod[i].timeScale ?? 1)) *
                    (mod[i].reps ?? 1)
            );
            return clipDurations.reduce(
                (total, duration) => total + duration,
                0
            );
        },
    };

    return aniChain;
}
