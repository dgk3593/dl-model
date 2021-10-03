import SetVector from "./SetVector";
import SetNumber from "./SetNumber";
import SetString from "./SetString";
import SetBoolean from "./SetBoolean";
import SetColor from "./SetColor";
import SetFromList from "./SetFromList";

export { default as SetWithSlider } from "./SetWithSlider";
export { default as SetNumbers } from "./SetNumbers";
export { SetBoolean, SetNumber, SetString, SetVector, SetColor, SetFromList };

export const setterMap = {
    boolean: SetBoolean,
    number: SetNumber,
    string: SetString,
    color: SetColor,
    select: SetFromList,
};

export { default } from "./Setters";
