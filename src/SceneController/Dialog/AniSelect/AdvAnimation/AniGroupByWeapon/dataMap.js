const victoryMap = ani => ({ ...ani, fullName: `${ani.name} Victory` });
const comboMap = ani => ({
    ...ani,
    fullName: `${ani.name} ${ani.subtitle || ""} Combo`,
});
const fsMap = ani => ({
    ...ani,
    fullName: `${ani.name} ${ani.subtitle || ""} Force Strike`,
});
const skillMap = ani => ({
    ...ani,
    fullName: ani.subtitle ? `${ani.subtitle} ${ani.name}` : ani.name,
});

export const dataMap = {
    uniqueCombo: comboMap,
    uniqueFS: fsMap,
    uniqueVictory: victoryMap,
    uniqueSkill: skillMap,
};
