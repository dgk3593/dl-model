/**
 * get default controls
 * @param {string} modelId
 */
export const getDefaultControls = async modelId => {
    const type = modelId[0];

    const { default: controlsPositions } = await import(
        /* webpackChunkName: "controlsPositions" */
        "data/controlsPositions"
    );

    return controlsPositions[modelId] || controlsPositions[type];
};

export default getDefaultControls;
