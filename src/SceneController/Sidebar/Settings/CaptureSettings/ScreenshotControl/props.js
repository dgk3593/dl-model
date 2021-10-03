/**
 * @type {import("components/Setters/Setters").PropDetails[]}
 */
export const basic = [
    {
        propName: "fileName",
        label: "File Name",
        type: "string",
        fullWidth: true,
    },
    {
        propName: "noBackground",
        label: "Remove BG",
        type: "boolean",
    },
];

/**
 * @type {import("components/Setters/Setters").PropDetails[]}
 */
export const allFrames = [
    {
        propName: "frameRate",
        label: "Frame Rate",
        type: "number",
        fullWidth: true,
        min: 1,
        step: 10,
    },
];
