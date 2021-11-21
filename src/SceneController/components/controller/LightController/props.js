/**
 * @type {{ [type: string]: import("components/Setters").PropDetails[]}}
 */
export const props = {
    DirectionalLight: [
        {
            propName: "visible",
            label: "Enabled",
            type: "boolean",
        },
        {
            propName: "showHelper",
            label: "Show Helper",
            type: "boolean",
        },
        {
            propName: "intensity",
            label: "Intensity",
            type: "slider",
            min: 0,
            max: 1,
            step: 0.05,
        },
        {
            propName: "colorCode",
            label: "Color",
            type: "color",
        },
        {
            propName: "position",
            label: "Position",
            type: "vector",
            step: 0.05,
        },
    ],
    AmbientLight: [
        {
            propName: "visible",
            label: "Enabled",
            type: "boolean",
        },
        {
            propName: "intensity",
            label: "Intensity",
            type: "slider",
            min: 0,
            max: 1,
            step: 0.05,
        },
        {
            propName: "colorCode",
            label: "Color",
            type: "color",
        },
    ],
    PointLight: [
        {
            propName: "visible",
            label: "Enabled",
            type: "boolean",
        },
        {
            propName: "showHelper",
            label: "Show Helper",
            type: "boolean",
        },
        {
            propName: "intensity",
            label: "Intensity",
            type: "slider",
            min: 0,
            max: 1,
            step: 0.05,
        },
        {
            propName: "colorCode",
            label: "Color",
            type: "color",
        },
        {
            propName: "decay",
            label: "Dacay",
            type: "slider",
            min: 1,
            max: 2,
            step: 0.05,
        },
        {
            propName: "position",
            label: "Position",
            type: "vector",
            step: 0.05,
        },
    ],
};
