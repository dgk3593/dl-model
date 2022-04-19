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
        propName: "appendDate",
        label: "Append Date",
        type: "boolean",
    },
    {
        propName: "frameRate",
        label: "Frame Rate",
        type: "slider",
        min: 10,
        max: 60,
        step: 5,
    },
];
