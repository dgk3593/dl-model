/**
 * get list of animations associated with a given source id
 * @param {string} sourceId
 * @return {Promise<AnimationList>}
 */
export const getNonHumanAniList = async sourceId => {
    const { default: data } =
        sourceId.startsWith("h") || sourceId.startsWith("c")
            ? await import("data/aniEnemies")
            : await import("data/aniDragon");

    return data[sourceId];
};

export default getNonHumanAniList;
