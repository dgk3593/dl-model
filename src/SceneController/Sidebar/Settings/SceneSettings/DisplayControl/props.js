import toneMappings from "@/dl-viewer/utils/toneMappings";

const toneMappingOptions = Object.keys(toneMappings).map(label => ({
    value: label,
    label,
}));
/**
 * @type {import("components/Setters/Setters").PropDetails[]}
 */
export const displayProp = [
    {
        propName: "pixelRatio",
        label: "Pixel Ratio",
        type: "slider",
        title: "Pixel Ratio, used to increase image quality on high DPI screens",
        min: 0.1,
        max: window.devicePixelRatio,
        step: 0.1,
    },
    {
        propName: "toneMapping",
        label: "Tone Mapping",
        type: "select",
        options: toneMappingOptions,
    },
];
