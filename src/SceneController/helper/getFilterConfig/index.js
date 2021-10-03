import * as config from "./filterConfig";

const map = {
    "chara-regular": config.chara,
    "dragon-regular": config.dragon,
    "weapon-regular": config.weapon,
};

/**
 * @param {string} content
 */
export const getFilterConfig = content => map[content];

export default getFilterConfig;
