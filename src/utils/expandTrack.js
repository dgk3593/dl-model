function expandTrack(track, rep) {
    const { name, times, values } = track;
    const endTime = times.at(-1);
    const padTimes = times.slice(1);
    const extendedTimes = new Array(rep - 1)
        .fill()
        .map((_, i) => [...padTimes].map(e => e + endTime * (i + 1)));
    track.times = [times, extendedTimes].flat(Infinity);

    const padValues = name.includes("quaternion")
        ? values.slice(4)
        : values.slice(3);
    const extendedValues = new Array(rep - 1).fill(padValues);
    track.values = [values, extendedValues].flat(Infinity);
}
