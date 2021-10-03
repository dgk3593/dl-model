import {
    ELEMENTS,
    RARITIES,
    WEAPON_TYPES,
    FULL_ELEMENTS,
    FULL_RARITIES,
} from "../lists";

/**
 * @type {FilterConfig}
 */
export const chara = [
    {
        name: "weapon",
        type: "icon",
        options: WEAPON_TYPES,
    },
    {
        name: "rarity",
        type: "icon",
        options: RARITIES,
    },
    {
        name: "element",
        type: "icon",
        options: ELEMENTS,
    },
];

export const dragon = [
    {
        name: "rarity",
        type: "icon",
        options: RARITIES,
    },
    {
        name: "element",
        type: "icon",
        options: ELEMENTS,
    },
];

export const weapon = [
    {
        name: "weapon",
        type: "icon",
        options: WEAPON_TYPES,
    },
    {
        name: "rarity",
        type: "icon",
        options: FULL_RARITIES,
    },
    {
        name: "element",
        type: "icon",
        options: FULL_ELEMENTS,
    },
];
