/**
 * @param {DLModel} target
 */
export function initAniSelectState(target) {
    if (!target?.userData) return;

    const { type, id } = target;
    const { name } = target.userData;
    target.userData.aniSelectState = {
        category: type === "adventurer" ? "Adv" : "Personal",
        personalAni: {
            source: id,
            sourceName: name,
        },
    };
}
