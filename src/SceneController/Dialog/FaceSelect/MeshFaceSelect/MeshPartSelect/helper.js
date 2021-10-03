const getMinMax = list => {
    let min = list[0],
        max = list[0];
    list.forEach(value => {
        min = value < min ? value : min;
        max = value > max ? value : max;
    });
    return [min, max];
};

export const getUvRange = meshes => {
    return meshes.map(mesh => {
        const uv = mesh.geometry.attributes.uv.array;
        const u = uv.filter((_, i) => i % 2 === 0);
        const v = uv.filter((_, i) => i % 2 === 1);
        const [uMin, uMax] = getMinMax(u);
        const [vMin, vMax] = getMinMax(v);
        return { u: [uMin, uMax], v: [vMin, vMax] };
    });
};
