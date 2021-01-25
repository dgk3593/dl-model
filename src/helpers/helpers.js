import Button from "@material-ui/core/Button";

import { initSettings } from "context/SettingsContext";
import {
    initKeyMap,
    WEAPON_CODE,
    GENDER_CODE,
    COMBO_LENGTH,
    FS_LENGTH,
    aniModList,
    incompatibleModels,
} from "./consts";

import { chainCodeToList } from "./viewerHelpers";
import dragonAni from "data/aniDragon";

/**
 * capitalize first letter of tring
 * @param {string} input
 */
export const capitalize = ([first, ...rest]) =>
    `${first.toUpperCase()}${rest.join("")}`;

/**
 * get the default texture file of a model from id
 * @param {string} id - model id
 */
export const getDefaultTexture = id =>
    id.match(/_[0-9]{2}/) ? id : `${id}_01`;

/**
 * create a new object whose entries with key listed in keys are copied from the input object
 * @param {{ }} object - object to filter
 * @param { string[] } keys - list of keys to filter
 * @return {{ }}
 */
export const filterObject = (object, keys) => {
    const entries = Object.entries(object);
    const filtered = entries.filter(([key, _]) => keys.includes(key));
    return Object.fromEntries(filtered);
};

/**
 * Get the difference between 2 object
 * @param {{ }} prev - previous value
 * @param {{ }} current - current value
 * @returns { Array<[updatedKey: string, value: *]> } array of updated key and value pairs
 */
export const getUpdated = (prev, current) => {
    const updated = Object.entries(current).filter(
        ([key, value]) => value !== prev[key]
    );
    return updated;
};

/**
 * check if an ID is a blade
 * @param {string} modelId - id to check
 */
export const isBlade = modelId => modelId.startsWith("w302");

/**
 * check if an ID is a sheath
 * @param {string} modelId - id to check
 */
export const isSheath = modelId => isBlade(modelId) && modelId.endsWith("02");

/**
 * check if model is incompatible with AdvViewer
 * @param {string} modelId
 */
export const isIncompatible = modelId =>
    !modelId.startsWith("c") ||
    modelId.endsWith("_h") ||
    incompatibleModels.has(modelId);

/**
 * check if model is compatible with AdvViewer
 * @param {string} modelId
 */
const isCharaWithAni = modelId =>
    modelId.startsWith("c") &&
    !modelId.endsWith("_h") &&
    !incompatibleModels.has(modelId);

/**
 * check if a model is a dragon
 * @param {string} modelId
 */
const isDragon = modelId => modelId.startsWith("d") || modelId === "smith";

/**
 * get the suitable viewer type base on ID
 * @param {string} modelId
 */
export const getViewerType = modelId => {
    if (isDragon(modelId)) return "dragon";

    if (isCharaWithAni(modelId)) return "adv";

    return "basic";
};

/**
 * get the default animation code base on model ID
 * @param {string} modelId
 * @return {string | undefined}
 */
export const getDefaultAni = modelId => {
    if (isDragon(modelId)) return dragonAni[modelId]?.[0].code;

    if (isCharaWithAni(modelId)) return "CMN_MWM_03";

    return "";
};

/**
 * get default eye and mouth index
 * @param {string} modelId
 */
const getDefaultFace = modelId => (isDragon(modelId) ? "1" : "2");

/**
 * apply callback on each element of list or on list if list is not an array
 * @param {* | Array} list - list of objects to apply callback
 * @param {function} callback - callback to apply
 */
export const callbackOnEach = (list, callback) => {
    if (Array.isArray(list)) {
        list.forEach(child => callback(child));
        return;
    }
    callback(list);
};

/**
 * initialize settings using array of params
 * @param {Array<string>} params
 */
export const setInitialSettings = params => {
    if (params.length === 0) return;

    const definedParams = new Set();
    params.forEach(param => {
        if (!param) return;

        const [keycode, ...value] = param.split("="); // animation code can have "=" inside
        // skip if no value given
        if (!value[0] || !initKeyMap[keycode]) return;

        /**
         * @type {string | Array<number>}
         */
        let setValue = value.length === 1 ? value[0] : value.join("=");

        switch (keycode) {
            case "tx":
                definedParams.add("texture");
                break;
            case "et":
                definedParams.add("eyeTexture");
                break;
            case "mt":
                definedParams.add("mouthTexture");
                break;
            case "ei":
                definedParams.add("eyeIdx");
                break;
            case "mi":
                definedParams.add("mouthIdx");
                break;
            case "cc":
                definedParams.add("animation");
                // initialize chain maker chain
                const chainList = chainCodeToList(setValue, "Animation");
                initSettings["chainMaker"]["chain"] = chainList;
                break;
            case "bg":
                if (setValue !== "transparent") {
                    setValue = `#${setValue}`;
                }
                break;
            case "cam": // parameters in form x, y, z
                setValue = setValue.split(",").map(n => parseFloat(n));
                break;
            default:
        }
        const { group, key } = initKeyMap[keycode];

        const isBooleanValue = setValue === "true" || setValue === "false";

        initSettings[group][key] = isBooleanValue
            ? Boolean(setValue === "true")
            : setValue;
    });

    const notDefined = param => !definedParams.has(param);

    const modelId = initSettings["model"]["id"];
    initSettings["app"]["viewerType"] = getViewerType(modelId);

    if (notDefined("eyeTexture")) {
        initSettings["model"]["eyeTexture"] = modelId;
    }
    if (notDefined("mouthTexture")) {
        initSettings["model"]["mouthTexture"] = modelId;
    }
    if (notDefined("eyeIdx")) {
        initSettings["model"]["eyeIdx"] = getDefaultFace(modelId);
    }
    if (notDefined("mouthIdx")) {
        initSettings["model"]["mouthIdx"] = getDefaultFace(modelId);
    }
    if (notDefined("animation")) {
        initSettings["animation"]["code"] = getDefaultAni(modelId);
    }
};

/**
 * generate animation chain code from AnimationChain
 * @param {AnimationChain} chain
 */
export const generateChainCode = chain => {
    const aniCode = chain.map(aniToCode);
    return aniCode.join(">");
};

/**
 * convert 1 animation chain item to single animation code
 * @param {AniListItem} ani
 */
const aniToCode = ani => {
    const { aniName, faceChanges } = ani;
    const modCode = generateAniModCode(ani);
    const faceCode = generateFaceCode(faceChanges);
    return `${aniName}${modCode}${faceCode}`;
};

/**
 * generate animation modifier code
 * @param {AniListItem} ani
 */
const generateAniModCode = ani => {
    const modCodes = [];
    Object.keys(aniModList).forEach(modKey => {
        const { key, defaultValue } = aniModList[modKey];
        if (ani[key] !== defaultValue) {
            modCodes.push(`&${modKey}=${ani[key]}`);
        }
    });
    return modCodes.join("");
};

/**
 * create face change code
 * @param {FaceChangeArray} faceChanges
 */
const generateFaceCode = faceChanges => {
    if (!faceChanges) return "";

    const faceCodes = [];
    faceChanges.forEach(change => {
        const { time, eyeIdx, mouthIdx } = change;
        if (!time) return;

        eyeIdx && faceCodes.push(`&e-${time}=${eyeIdx}`);

        mouthIdx && faceCodes.push(`&m-${time}=${mouthIdx}`);
    });
    return faceCodes.join("");
};

/**
 * @param {FilterState} filterState
 * @return {FilterConditions}
 */
export const collectFilter = filterState => {
    const stateEntries = Object.entries(filterState);
    /**
     * @type {FilterConditions}
     */
    const filterConditions = stateEntries.map(([groupName, groupData]) => [
        groupName,
        Object.keys(groupData).filter(key => groupData[key]),
    ]);
    return filterConditions.filter(([, valueList]) => valueList.length);
};

/**
 * Multiconditional filter
 * @param {ModelData[]} input
 * @param {FilterConditions} filterConditions
 */
export const multiCondFilter = (input, filterConditions) => {
    return input.filter(el =>
        filterConditions.every(([propName, valueList]) =>
            valueList.includes(el[propName])
        )
    );
};

/**
 * convert hex color code to rgb triplet
 * @param {ColorCode} hex
 * @return {RGBTriplet}
 */
const hexToRgb = hex => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
};

/**
 * @param {RGBTriplet} color
 */
export const getBrightness = ({ r, g, b }) =>
    (r * 299 + g * 587 + b * 114) / 1000;

/**
 * get the suitable text color for a given background color
 * @param {ColorCode} color
 */
export const getTextColor = color => {
    const rgb = hexToRgb(color);
    return getBrightness(rgb) > 128 ? "#000000" : "#ffffff";
};

/**
 * turn a list of animation data to buttons
 * @param {AnimationList} list
 * @param {*} handleSelect
 * @param {string} [groupName]
 */
export const listToAniButtons = (list, handleSelect, groupName = "") => {
    if (!list) return;

    const style = { maxWidth: "13.5rem" };
    return list.map(({ name, code }) => (
        <Button
            variant="contained"
            key={name}
            data-value={code}
            data-name={`${groupName ? `${groupName} ` : ""}${name}`}
            onClick={handleSelect}
            style={style}
        >
            {name}
        </Button>
    ));
};

// Animation chain code generator
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

/**
 * Combo chain code
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

/**
 * Force Strike chain code
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

/**
 * Join Lobby chain code
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
