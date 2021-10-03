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
        min: 0,
        max: 10,
        step: 0.5,
    },
    {
        propName: "auraSize",
        label: "Aura Size",
        type: "number",
        min: 0,
        step: 10,
    },
    {
        propName: "auraOpacity",
        label: "Aura Opacity",
        type: "slider",
        min: 0,
        max: 1,
        step: 0.05,
    },
    {
        propName: "particleSize",
        label: "Particle Size",
        type: "number",
        min: 0,
        step: 1,
    },
    {
        propName: "particleOpacity",
        label: "Particle Opacity",
        type: "slider",
        min: 0,
        max: 1,
        step: 0.05,
    },
    {
        propName: "spread",
        label: "Spread",
        type: "number",
        min: 0,
        step: 1,
    },
    {
        propName: "threshold",
        label: "Threshold",
        type: "slider",
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
