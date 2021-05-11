import { isDragon, isCharaWithAni } from "../helpers";
import { DEFAULT_ADV_ANI, incompatibleModels } from "../consts";

/** get the default animation code base on model ID
 * @param {string} modelId
 * @return {Promise<string | undefined>}
 */
export const getDefaultAni = async modelId => {
    if (isDragon(modelId)) return getDefaultDragonAni(modelId);

    if (modelId.startsWith("h") || incompatibleModels.has(modelId))
        return getDefaultEnemyAni(modelId);

    if (isCharaWithAni(modelId)) return DEFAULT_ADV_ANI;

    return "";
};

/**
 * @param {string} modelId
 * @return {Promise<string | undefined>}
 */
const getDefaultDragonAni = async modelId => {
    const { default: dragonAni } = await import(
        /* webpackChunkName: "aniDragon" */
        "data/aniDragon"
    );

    return dragonAni[modelId]?.[0].code;
};

/**
 * @param {string} modelId
 * @return {Promise<string | undefined>}
 */
const getDefaultEnemyAni = async modelId => {
    const { default: enemyAni } = await import(
        /* webpackChunkName: "aniEnemies" */
        "data/aniEnemies"
    );

    return enemyAni[modelId]?.[0].code;
};

export default getDefaultAni;
