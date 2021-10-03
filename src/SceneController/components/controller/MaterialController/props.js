import { allMatTypes, gradientMapList, matcapList } from "./data";

const percentageMap = value => `${~~(value * 100)}%`;

/**
 * @type {import("components/Setters/Setters").PropDetails[]}
 */
export const matType = [
    {
        propName: "type",
        label: "Type",
        type: "select",
        options: allMatTypes,
    },
];

/**
 * @type {import("components/Setters/Setters").PropDetails[]}
 */
export const props = [
    { propName: "transparent", label: "Transparent", type: "boolean" },
    {
        propName: "opacity",
        label: "Opacity",
        type: "slider",
        min: 0,
        max: 1,
        valueMap: percentageMap,
    },
    { propName: "showTexture", label: "Texture", type: "boolean" },
    { propName: "color", label: "Color", type: "color" },
    { propName: "wireframe", label: "Wireframe", type: "boolean" },
    { propName: "flatShading", label: "Flat Shading", type: "boolean" },
    { propName: "emissive", label: "Emissive", type: "color" },
    {
        propName: "emissiveIntensity",
        label: "Emissive Intensity",
        type: "slider",
        min: 0,
        max: 1,
        valueMap: percentageMap,
    },
    { propName: "specular", label: "Specular", type: "color" },
    {
        propName: "metalness",
        label: "Metalness",
        type: "slider",
        min: 0,
        max: 1,
        valueMap: percentageMap,
    },
    {
        propName: "roughness",
        label: "Roughness",
        type: "slider",
        min: 0,
        max: 1,
        valueMap: percentageMap,
    },
    {
        propName: "shininess",
        label: "Shininess",
        type: "slider",
        min: 1,
        max: 100,
        step: 1,
    },
    {
        propName: "gradientMap",
        label: "Gradient Map",
        type: "select",
        options: gradientMapList,
    },
    {
        propName: "matcap",
        label: "Matcap",
        type: "select",
        options: matcapList,
    },
];
