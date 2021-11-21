/**
 * @type {import("components/Setters").PropDetails[]}
 */
export const props = [
    {
        propName: "autoRotate",
        label: "Enabled",
        type: "boolean",
    },
    {
        propName: "autoRotateSpeed",
        label: "Speed",
        type: "slider",
        min: -10,
        max: 10,
        step: 1,
    },
];
