import fbxList from "./fileList";
import { saveAs } from "file-saver";
import { ANIMATION_SOURCE } from "@/dl-viewer/path";
import * as THREE from "three";

const dir = `${ANIMATION_SOURCE}/todo`;
const DOWNLOAD_LIMIT = 10;

const extraTranslate = new Float32Array([0, 0, 0]);
const rotateYbyPI = new THREE.Quaternion(0, 1, 0, 0);

const setScale = false;
const scale = 1;

export async function processSummonClips() {
    const clips = await Promise.all(fbxList.map(loadClip));
    const processed = clips.map(processClip);
    exportAllAni(processed);
}

const exportAni = async ani => {
    const fileName = `${ani.name}.json`;
    const content = JSON.stringify(ani.toJSON());

    const blob = new Blob([content], { type: "text/plain" });

    saveAs(blob, fileName);
};

const exportAllAni = async animations => {
    let counter = 0;
    for (const ani of animations) {
        await exportAni(ani);

        counter = ++counter % DOWNLOAD_LIMIT;
        if (!counter) await pause(1000);
    }
};

/**
 * translate clip so that the end position will be 0, 0, 0
 * @param {THREE.AnimationClip} clip
 * @return {THREE.AnimationClip}
 */
const processClip = clip => {
    const { tracks } = clip;
    /**
     * @param {string} trackName
     */
    const findFirstTrack = trackName =>
        tracks.find(({ name }) => name.includes(trackName));

    const rootPosition =
        findFirstTrack("jGameRoot.position") || findFirstTrack("position");

    if (!rootPosition) {
        console.error(`Failed ${clip.name}`);
        return clip;
    }

    const endPosition = rootPosition.values.slice(-3).map(v => -v);
    translateTrack(rootPosition, endPosition);
    rotatePositionY(rootPosition);
    translateTrack(rootPosition, extraTranslate);

    const rootQuaternion =
        findFirstTrack("jGameRoot.quaternion") || findFirstTrack("quaternion");
    rotateTrackY(rootQuaternion);

    if (setScale) {
        const scaleTrack =
            findFirstTrack("jGameRoot.scale") || findFirstTrack("scale");
        const { values } = scaleTrack;
        values.forEach((_, i) => (values[i] = scale));
    }

    return clip;
};

/**
 * resolved in msec ms
 * @param {number} msec
 */
const pause = async msec => {
    return new Promise(resolve => setTimeout(resolve, msec));
};

/** get the path to the animation file
 * @param {string} name
 */
const getAniPath = name =>
    `${dir}/${name}${name.endsWith(".json") ? "" : ".json"}`;

/** load a single animation
 * @param {string} name
 * @return {Promise<THREE.AnimationClip>}
 */
const loadClip = name => {
    const path = getAniPath(name);
    return new Promise(resolve =>
        fetch(path)
            .then(response => response.json())
            .then(json => THREE.AnimationClip.parse(json))
            .then(resolve)
    );
};

/**
 *
 * @param {THREE.KeyframeTrack} track
 * @param {Float32Array} offset
 */
const translateTrack = (track, [x, y, z]) => {
    const nKeyFrames = track.times.length;
    const { values } = track;
    for (let i = 0; i < nKeyFrames; i++) {
        values[i * 3] += x;
        values[i * 3 + 1] += y;
        values[i * 3 + 2] += z;
    }
};

/**
 * flip position around y axis
 * @param {THREE.VectorKeyframeTrack} track
 */
const rotatePositionY = track => {
    const nKeyFrames = track.times.length;
    const { values } = track;
    for (let i = 0; i < nKeyFrames; i++) {
        values[i * 3] *= -1;
        values[i * 3 + 2] *= -1;
    }
};

// /**
//  * rotate animation by 180 degrees on y axis
//  * @param {THREE.QuaternionKeyframeTrack} track
//  */
// const rotateTrackY = track => {
//     const nKeyFrames = track.times.length;
//     const { values } = track;
//     for (let i = 0; i < nKeyFrames; i++) {
//         values[i * 4 + 1] -= 1;
//     }
// };
/**
 * rotate animation by 180 degrees on y axis
 * @param {THREE.QuaternionKeyframeTrack} track
 */
const rotateTrackY = track => {
    const nKeyFrames = track.times.length;
    const { values } = track;
    for (let i = 0; i < nKeyFrames; i++) {
        const currentQ = new THREE.Quaternion(
            ...values.slice(i * 4, i * 4 + 4)
        );
        const newQ = currentQ.multiply(rotateYbyPI);
        values[i * 4] = newQ.x;
        values[i * 4 + 1] = newQ.y;
        values[i * 4 + 2] = newQ.z;
        values[i * 4 + 3] = newQ.w;
    }
};
