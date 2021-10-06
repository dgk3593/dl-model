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
    await applyModelSettings(newModel, settings);

    return newModel;
}

async function applyModelSettings(model, settings) {
    const { ani, ...others } = settings;

    Object.entries(others).forEach(([opCode, value]) => {
        const propData = modelProps[opCode];
        if (!propData) return;

        const { keys, valueMap } = propData;
        const setValue = valueMap?.(value) ?? value;
        setNestedProp(model, keys, setValue);
    });

    // animation
    ani && (await model.animation.addChain(ani));
}
