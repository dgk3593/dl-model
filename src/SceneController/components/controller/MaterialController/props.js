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
    {
        propName: "transparent",
        label: "Transparent",
        type: "boolean",
        title: "Whether to allow seeing through the model",
    },
    {
        propName: "opacity",
        label: "Opacity",
        type: "slider",
        title: "The opacity of the material",
        min: 0,
        max: 1,
        valueMap: percentageMap,
    },
    {
        propName: "showTexture",
        label: "Texture",
        type: "boolean",
        title: "Show / hide model texture",
    },
    {
        propName: "color",
        label: "Color",
        type: "color",
        title: "The color of the material. Default is white",
    },
    {
        propName: "wireframe",
        label: "Wireframe",
        type: "boolean",
        title: "Whether to show the model as wireframe. Turn off outline to only see the wireframe",
    },
    {
        propName: "flatShading",
        label: "Flat Shading",
        type: "boolean",
        title: "Whether to use flat shading",
    },
    {
        propName: "emissive",
        label: "Emissive",
        type: "color",
        title: "The emissive color of the material, essentially a solid color unaffected by other lighting. Default is black",
    },
    {
        propName: "emissiveIntensity",
        label: "Emissive Intensity",
        type: "slider",
        title: "The intensity of the emissive light. Default is 1",
        min: 0,
        max: 1,
        valueMap: percentageMap,
    },
    { propName: "specular", label: "Specular", type: "color" },
    {
        propName: "metalness",
        label: "Metalness",
        type: "slider",
        title: "How much the material is like a metal. Default is 0",
        min: 0,
        max: 1,
        valueMap: percentageMap,
    },
    {
        propName: "roughness",
        label: "Roughness",
        type: "slider",
        title: "How rough the material is, 0 means a smooth mirror reflection, 1 means fully diffuse. Default is 1",
        min: 0,
        max: 1,
        valueMap: percentageMap,
    },
    {
        propName: "shininess",
        label: "Shininess",
        type: "slider",
        title: "How shiny the specular highlight is, a higher value gives a sharper highlight. Default is 30",
        min: 1,
        max: 100,
        step: 1,
    },
    {
        propName: "gradientMap",
        label: "Gradient Map",
        type: "select",
        title: "The gradient map to use",
        options: gradientMapList,
    },
    {
        propName: "matcap",
        label: "Matcap",
        type: "select",
        title: "The matcap to use",
        options: matcapList,
    },
    {
        propName: "transmission",
        label: "Transmission",
        type: "slider",
        title: "The amount of light passing through the material. Default is 0",
        min: 0,
        max: 1,
        valueMap: percentageMap,
    },
    {
        propName: "thickness",
        label: "Thickness",
        type: "slider",
        title: "The thickness of the material. Default is 0",
        min: 0,
        max: 10,
    },
    {
        propName: "ior",
        label: "Index of Refraction",
        type: "slider",
        title: "The index of refraction of the material. Default is 1.5",
        min: 1,
        max: 2.333,
    },
];
