/**
 * @param {string} modelId
 * @return {Promise<ModelMod | undefined>}
 */
export const getDefaultModelMod = async modelId => {
    const { default: modelMod } = await import(
        /* webpackChunkName: "ModelMod" */
        "data/modelMod"
    );
    return modelMod[modelId]?.[0];
};

/**
 * @param {string} id
 * @param {string} modName
 * @return {Promise<ModelMod>}
 */
export const getModelModByName = async (id, modName) => {
    const { default: modelMod } = await import(
        /* webpackChunkName: "ModelMod" */
        "data/modelMod"
    );
    const result = modelMod[id]?.find(
        ({ name }) => name.replace(" ", "") === modName
    );

    return result || { name: "", code: "" };
};
