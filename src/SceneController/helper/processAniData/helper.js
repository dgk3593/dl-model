/**
 * @typedef {object} SimpleAniData
 * @property {string} name
 * @property {string} code
 */

/**
 * @param {Array <SimpleAniData>} data
 * @return {Array <DbAniData>}
 */
export const processSimpleAni = data => {
    return data.map(ani => ({ ...ani, fullName: ani.name }));
};

/**
 * @param {object} data
 * @param {Array< SimpleAniData >} data.common
 * @param {Array< SimpleAniData >} data.Male
 * @param {Array< SimpleAniData >} data.Female
 * @return {Array <DbAniData>}
 */
export const processHomeAni = data => {
    const common = processSimpleAni(data.common);
    const maleAni = data.Male.map(ani => ({
        ...ani,
        fullName: `Male ${ani.name}`,
    }));
    const femaleAni = data.Female.map(ani => ({
        ...ani,
        fullName: `Female ${ani.name}`,
    }));

    return [...common, ...maleAni, ...femaleAni];
};

export const processWeaponAni = data => {
    const output = Object.entries(data).flatMap(([type, aniList]) =>
        aniList.map(ani => ({
            ...ani,
            fullName: `${type} ${ani.name}`,
            icon: `weapon_${type}`,
        }))
    );

    return output;
};

export const gunMode = {
    Long: "Long Range",
    Close: "Close Range",
    Rapid: "Rapid Fire",
};
export const processGunAni = data => {
    const output = Object.entries(data).flatMap(([type, aniList]) =>
        aniList.map(ani => ({
            ...ani,
            fullName: `${gunMode[type]} Manacaster ${ani.name}`,
            icon: `gun_${type}`,
        }))
    );

    return output;
};

export const processVictoryAni = data => {
    const output = Object.values(data)
        .flat()
        .map(ani => ({
            ...ani,
            userName: ani.name,
            fullName: `${ani.name} Victory`,
            name: "Victory",
        }));
    return output;
};

export const processFsAni = data => {
    const output = Object.values(data)
        .flat()
        .map(ani => ({
            ...ani,
            userName: ani.name,
            fullName: `${ani.name} ${ani.subtitle || ""} Force Strike`,
            name: "Force Strike",
        }));
    return output;
};

export const processComboAni = data => {
    const output = Object.values(data)
        .flat()
        .map(ani => ({
            ...ani,
            userName: ani.name,
            fullName: `${ani.name} ${ani.subtitle || ""} Combo`,
            name: "Combo",
        }));
    return output;
};

export const processSkill = data => {
    const output = Object.values(data)
        .flat()
        .map(ani => ({
            ...ani,
            fullName: ani.subtitle ? `${ani.subtitle} ${ani.name}` : ani.name,
        }));
    return output;
};

export const processOtherUnique = data => {
    const output = Object.values(data)
        .flat()
        .flatMap(({ user, name, animations }) =>
            animations.map(ani => ({
                ...ani,
                user,
                fullName: `${name} ${ani.name}`,
            }))
        );
    return output;
};

export const processExtraAni = data => {
    const output = Object.values(data)
        .flat()
        .map(ani => ({ ...ani, fullName: ani.name }));
    return output;
};
