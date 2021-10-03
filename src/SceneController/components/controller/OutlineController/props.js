/**
 * @type {import("components/Setters/Setters").PropDetails[]}
 */
export const props = [
    {
        propName: "enabled",
        label: "Enabled",
        type: "boolean",
    },
    {
        propName: "size",
        label: "Size",
        type: "slider",
        min: 1,
        max: 20,
        step: 1,
    },
    {
        propName: "opacity",
        label: "Opacity",
        type: "slider",
        step: 0.1,
        valueMap: value => `${~~(value * 100)}%`,
    },
    {
        propName: "color",
        label: "Color",
        type: "color",
    },
];
