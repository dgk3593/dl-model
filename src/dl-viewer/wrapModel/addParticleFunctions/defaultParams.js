import * as THREE from "three";

/**
 * @type {UniformParam[]}
 */
export const DEFAULT_AURA_PARAMS = [
    {
        name: "time",
        uName: "uTime",
        defaultValue: 0,
        valueMap: Number,
    },
    {
        name: "speed",
        uName: "uSpeed",
        defaultValue: 1,
        valueMap: Number,
    },
    {
        name: "particleOpacity",
        uName: "uParticleOpacity",
        defaultValue: 0.3,
        valueMap: Number,
    },
    {
        name: "auraOpacity",
        uName: "uAuraOpacity",
        defaultValue: 0.3,
        valueMap: Number,
    },
    {
        name: "particleSize",
        uName: "uParticleSize",
        defaultValue: 10,
        valueMap: Number,
    },
    {
        name: "auraSize",
        uName: "uAuraSize",
        defaultValue: 100,
        valueMap: Number,
    },
    {
        name: "spread",
        uName: "uSpread",
        defaultValue: 5,
        valueMap: Number,
    },
    {
        name: "threshold",
        uName: "uThreshold",
        defaultValue: 0.3,
        valueMap: Number,
    },
    {
        name: "texture",
        uName: "uTexture",
        defaultValue: "img/textures/particle/cloud.png",
        valueMap: path => new THREE.TextureLoader().load(path),
    },
    {
        name: "color",
        uName: "uColor",
        defaultValue: "#ffffff",
        valueMap: v => new THREE.Color(v),
    },
    {
        name: "color2",
        uName: "uColor2",
        defaultValue: "#33ffff",
        valueMap: v => new THREE.Color(v),
    },
];

export const PROP_LIST = {
    aura: ["visible", ...DEFAULT_AURA_PARAMS.slice(1).map(({ name }) => name)],
};
