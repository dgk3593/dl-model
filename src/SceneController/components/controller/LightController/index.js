export { default } from "./LightController";
import { props } from "./props";

export const lightTypes = Object.keys(props).map(type => {
    const label = type.replace("Light", "");
    return { label, value: label.toLowerCase() };
});
