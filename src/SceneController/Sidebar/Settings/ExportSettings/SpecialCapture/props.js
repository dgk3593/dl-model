import { programs } from "./helper";

export const commonProps = [
    {
        propName: "program",
        label: "Program",
        type: "select",
        options: programs,
    },
    {
        propName: "frameRate",
        label: "Frame Rate",
        type: "slider",
        min: 10,
        max: 60,
        step: 10,
    },
    {
        propName: "duration",
        label: "Duration (s)",
        type: "number",
        min: 1,
        max: 60,
        step: 0.5,
    },
];
