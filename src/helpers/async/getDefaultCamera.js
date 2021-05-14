/** get default camera
 * @param {string} modelId
 */
export const getDefaultCamera = async modelId => {
    const type = modelId[0];

    const { default: cameraPositions } = await import(
        /* webpackChunkName: "cameraPositions" */
        "data/cameraPositions"
    );

    return cameraPositions[modelId] || cameraPositions[type];
};

export default getDefaultCamera;
