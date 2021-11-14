import { textureList } from "./textureList";

/**
 * @type {import("components/Setters/Setters").PropDetails[]}
 */
export const props = [
    {
        propName: "visible",
        label: "Visible",
        type: "boolean",
    },
    {
        propName: "speed",
        label: "Speed",
        type: "slider",
        title: "How fast the aura rises",
        min: 0,
        max: 10,
        step: 0.5,
    },
    {
        propName: "auraSize",
        label: "Aura Size",
        type: "number",
        title: "How big the aura is",
        min: 0,
        step: 10,
    },
    {
        propName: "auraOpacity",
        label: "Aura Opacity",
        type: "slider",
        title: "How opaque the aura is",
        min: 0,
        max: 1,
        step: 0.05,
    },
    {
        propName: "particleSize",
        label: "Particle Size",
        type: "number",
        title: "How big the particles are",
        min: 0,
        step: 1,
    },
    {
        propName: "particleOpacity",
        label: "Particle Opacity",
        type: "slider",
        title: "How opaque the particles are",
        min: 0,
        max: 1,
        step: 0.05,
    },
    {
        propName: "spread",
        label: "Spread",
        type: "number",
        title: "Distance from the model",
        min: 0,
        step: 1,
    },
    {
        propName: "threshold",
        label: "Threshold",
        type: "slider",
        title: "Higher value means less aura, more particles",
        min: 0,
        max: 1,
        step: 0.05,
    },
    {
        propName: "color",
        label: "Color",
        type: "color",
    },
    {
        propName: "color2",
        label: "Color 2",
        type: "color",
    },
    {
        propName: "texture",
        label: "Texture",
        type: "select",
        options: textureList,
    },
];
