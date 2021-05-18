/** map weapon type to weapon code
 * @type {{ [weaponName: string]: string }}
 */
export const WEAPON_CODE = {
    Sword: "SWD",
    Blade: "KAT",
    Dagger: "DAG",
    Axe: "AXE",
    Lance: "LAN",
    Bow: "BOW",
    Wand: "ROD",
    Staff: "CAN",
    Manacaster: "GUN",
};

const GENDER_CODE = {
    Male: 21,
    Female: 23,
};

export const COMBO_LENGTH = {
    Axe: 5,
    Bow: 6,
    Staff: 5,
    Dagger: 6,
    Blade: 5,
    Lance: 5,
    Wand: 5,
    Sword: 5,
};

export const FS_LENGTH = {
    Axe: 3,
    Bow: 3,
    Staff: 5,
    Dagger: 3,
    Blade: 3,
    Lance: 4,
    Wand: 3,
    Sword: 3,
};

/**
 * @param {WeaponType} weapon
 * @param {"Male" | "Female"} gender
 */
export const getStandbyCode = (weapon, gender) =>
    `${WEAPON_CODE[weapon]}_ONT_${GENDER_CODE[gender]}`;

/**
 * @param {WeaponType} weapon
 */
export const getVictoryCode = weapon =>
    `${WEAPON_CODE[weapon]}_WIN_01>${WEAPON_CODE[weapon]}_WIN_02`;

/**
 * @param {WeaponType} weapon
 */
export const getDashAtkCode = weapon => `${WEAPON_CODE[weapon]}_DAS_02`;

/**
 * @param {WeaponType} weapon
 */
export const getRollCode = weapon => `${WEAPON_CODE[weapon]}_ROL_01`;

/** Combo chain code
 * @param {WeaponType} weapon
 */
export const getComboCode = weapon => {
    const comboLength = COMBO_LENGTH[weapon];
    const code = WEAPON_CODE[weapon];

    const parts = Array(comboLength)
        .fill()
        .map((_, i) => `${code}_CMB_0${i + 1}`);

    return parts.join(">");
};

/** Force Strike chain code
 * @param {WeaponType} weapon
 */
export const getFSCode = weapon => {
    const fsAniLength = FS_LENGTH[weapon];
    const code = WEAPON_CODE[weapon];
    const parts = Array(fsAniLength)
        .fill()
        .map((_, i) => `${code}_CHR_0${i + 1}`);

    return parts.join(">");
};

/** Join Lobby chain code
 * @param {WeaponType} weapon
 * @param {"Male" | "Female"} gender
 */
export const getLobbyCode = (weapon, gender) => {
    const code = WEAPON_CODE[weapon];
    if (gender === "Male")
        return `${code}_ONT_05&ts=-0.5>${code}_ONT_02>${code}_ONT_07>${code}_ONT_08>${code}_ONT_21`;
    // Female
    return `${code}_ONT_06&ts=-0.5>${code}_ONT_04>${code}_ONT_09>${code}_ONT_10>${code}_ONT_23`;
};
