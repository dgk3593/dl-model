const halftoneShape = [
    { value: 1, label: "Dot" },
    { value: 2, label: "Ellipse" },
    { value: 3, label: "Line" },
    { value: 4, label: "Square" },
];

/**
 * @type {{ [type: string]: import("components/Setters/Setters").PropDetails[]}}
 */
export const props = {
    bloom: [
        {
            propName: "enabled",
            label: "Enabled",
            type: "boolean",
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
            propName: "strength",
            label: "Strength",
            type: "slider",
            min: 0,
            max: 2,
            step: 0.05,
        },
        {
            propName: "radius",
            label: "Radius",
            type: "number",
            step: 0.5,
        },
    ],
    pixel: [
        {
            propName: "enabled",
            label: "Enabled",
            type: "boolean",
        },
        {
            propName: "pixelSize",
            label: "Pixel Size",
            type: "number",
            min: 1,
            step: 1,
        },
    ],
    afterimage: [
        {
            propName: "enabled",
            label: "Enabled",
            type: "boolean",
        },
        {
            propName: "damp",
            label: "Damp",
            type: "slider",
            min: 0.01,
            max: 0.99,
            step: 0.01,
        },
    ],
    smaa: [
        {
            propName: "enabled",
            label: "Enabled",
            type: "boolean",
        },
    ],
    sobel: [
        {
            propName: "enabled",
            label: "Enabled",
            type: "boolean",
        },
    ],
    halftone: [
        {
            propName: "enabled",
            label: "Enabled",
            type: "boolean",
        },
        {
            propName: "greyscale",
            label: "Grayscale",
            type: "boolean",
        },
        {
            propName: "radius",
            label: "Radius",
            type: "number",
            min: 1,
            step: 0.2,
        },
        {
            propName: "scatter",
            label: "Scatter",
            type: "slider",
            min: 0,
            max: 5,
            step: 0.1,
        },
        {
            propName: "shape",
            label: "Shape",
            type: "select",
            options: halftoneShape,
        },
    ],
    dotscreen: [
        {
            propName: "enabled",
            label: "Enabled",
            type: "boolean",
        },
        {
            propName: "scale",
            label: "Scale",
            type: "number",
            min: 1,
            step: 0.5,
        },
    ],
    bokeh: [
        {
            propName: "enabled",
            label: "Enabled",
            type: "boolean",
        },
        {
            propName: "focus",
            label: "Focus",
            type: "number",
            step: 0.1,
        },
        {
            propName: "aperture",
            label: "Aperture",
            type: "number",
            step: 0.01,
        },
    ],
};
