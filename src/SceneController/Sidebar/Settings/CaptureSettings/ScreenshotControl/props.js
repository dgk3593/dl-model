/**
 * @type {import("components/Setters").PropDetails[]}
 */
export const props = [
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
    {
        propName: "frameRate",
        label: "Frame Rate",
        type: "number",
        fullWidth: true,
        min: 1,
        max: 120,
        step: 10,
    },
];
