import { setNestedProp } from "..";
import { parseCode } from "../parseCode";
import { modelProps } from "./modelProps";

/**
 * @param {string} code
 */
export async function loadModelFromCode(code) {
    const params = parseCode(code);
    const settings = Object.fromEntries(params);

    const { id } = settings;

    const newModel = await this.loadDLModel(id);
    applyModelSettings(newModel, settings);

    return newModel;
}

function applyModelSettings(model, settings) {
    const { ani, ...others } = settings;

    // animation
    ani && model.animation.addChain(ani);

    Object.entries(others).forEach(([opCode, value]) => {
        const propData = modelProps[opCode];
        if (!propData) return;

        const { keys, valueMap } = propData;
        const setValue = valueMap?.(value) ?? value;
        setNestedProp(model, keys, setValue);
    });
    // // material
    // mat && (model.material.code = mat.slice(1, -1));
    // // outline
    // ol && (model.outline.code = ol.slice(1, -1));
    // // scale
    // scl && (model.scale = scl);
}
