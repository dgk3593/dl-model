/**
 * @typedef {{ r:number, g:number, b:number }} RGBTriplet
 *
 *
 * @typedef {object} BreadcrumbCategory
 * @property {string} value
 * @property {string} label
 * @property {string} [icon]
 * @property {BreadcrumbCategory[]} [options]
 *
 * @typedef {"1" | "2" | "3" | "4" | "5" | "6"} Rarity
 *
 * @typedef {"Flame" | "Water" | "Wind" | "Light" | "Shadow" | "None"} DLElement
 *
 * @typedef {"Sword" | "Blade" | "Dagger" | "Axe" | "Lance" | "Bow" | "Wand" | "Staff" | "Manacaster"} WeaponType
 *
 * @typedef {object} FilterGroupConfig
 * @property {string} name - group name
 * @property {'icon' | 'text'} type - filter type
 * @property {string[]} options - options to toggle
 *
 * @typedef {FilterGroupConfig[]} FilterConfig
 *
 * @typedef {{ [key: string]: boolean }} FilterGroupState
 *
 * @typedef {{ [groupName: string]: FilterGroupState }} FilterState
 *
 * @typedef { Array< [propName: string, valueList: string[]] > } FilterConditions
 *
 * @typedef {object} ModelData
 * @property {string} id
 * @property {string} name
 * @property {string} [title]
 * @property {DLElement} [element]
 * @property {Rarity} [rarity]
 * @property {WeaponType} [weapon]
 * @property {true} [noIcon]
 * @property {true} [noIPortrait]
 *
 * @typedef {object} DbAniData
 * @property {string} fullName - key to search
 * @property {string} name
 * @property {string} code
 * @property {string} [user]
 * @property {string} [icon]
 * @property {string} [subtitle]
 */
