import viewer from "@/viewer";

/**
 * @type {import("components/Setters").PropDetails[]}
 */
export const cameraProp = [
    {
        propName: "near",
        label: "Near",
        type: "number",
        min: 0.01,
        step: 0.01,
        onChange: () => viewer.camera.updateProjectionMatrix(),
    },
    {
        propName: "far",
        label: "Far",
        type: "number",
        min: 0.01,
        step: 20,
        onChange: () => viewer.camera.updateProjectionMatrix(),
    },
    {
        propName: "fov",
        label: "FOV",
        type: "slider",
        title: "Field of View",
        min: 5,
        max: 175,
        step: 5,
        onChange: () => viewer.camera.updateProjectionMatrix(),
    },
    {
        propName: "position",
        label: "Position",
        type: "vector",
        title: "Where the camera is",
        step: 0.1,
        onChange: () => viewer.camera.updateProjectionMatrix(),
    },
];

export const controlProp = [
    {
        propName: "target",
        label: "Target",
        type: "vector",
        title: "Camera target, where the camera looks at",
        step: 0.1,
        onChange: () => viewer.controls.update(),
    },
];
