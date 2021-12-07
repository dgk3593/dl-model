const modelIdRegex = /[cdw][0-9]{6}_[0-9]{2}|[a-z][0-9]{7}/;

/**
 * process animation from mixamo
 * @param {THREE.AnimationClip} clip
 */
export const processMixamoClip = clip => {
    const output = clip.clone();
    output.tracks = output.tracks.filter(t => !t.name.includes("jGameRoot"));
    output.tracks.forEach(track => {
        track.name = track.name.replace(modelIdRegex, "jGameRoot");
    });
    return output;
};
