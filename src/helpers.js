import Button from "@material-ui/core/Button";

import { initSettings } from "./context/SettingsContext";
import {
    initKey,
    WEAPON_CODE,
    GENDER_CODE,
    COMBO_LENGTH,
    FS_LENGTH,
    aniModList,
    incompatibleModels,
} from "./consts";

import { chainCodeToList } from "./viewerHelpers";
import dragonAni from "./data/animationDragon";

export const isBlade = code => code.startsWith("w302");

export const isSheath = code => isBlade(code) && code.endsWith("02");

export const isIncompatible = modelId =>
    !modelId.startsWith("c") ||
    modelId.endsWith("_h") ||
    incompatibleModels.has(modelId);

const isCharaWithAni = modelId =>
    modelId.startsWith("c") &&
    !modelId.endsWith("_h") &&
    !incompatibleModels.has(modelId);

const isDragon = modelId => modelId.startsWith("d") || modelId === "smith";

export const getViewerType = modelId => {
    if (isDragon(modelId)) return "dragon";

    if (isCharaWithAni(modelId)) return "chara";

    return "base";
};

export const getDefaultAni = modelId => {
    if (isDragon(modelId)) return dragonAni[modelId]?.[0].code;

    if (isCharaWithAni(modelId)) return "MWM_CMN+CMN_MWM_03";

    return "";
};

const getDefaultFace = modelId => {
    if (isDragon(modelId)) return 1;

    return 2;
};

export const callbackOnEach = (list, callback) => {
    if (Array.isArray(list)) {
        list.forEach(child => callback(child));
        return;
    }
    callback(list);
};

export const setInitialSettings = params => {
    if (params.length === 0) return;
    const defined = new Set();
    params.forEach(param => {
        if (!param) return;

        const [keycode, ...value] = param.split("="); // animation code can have "=" inside
        // if no value given, skip
        if (!value[0]) return;

        let setValue = value.length === 1 ? value[0] : value.join("=");

        switch (keycode) {
            case "et":
                defined.add("eyeTexture");
                break;
            case "mt":
                defined.add("mouthTexture");
                break;
            case "ei":
                defined.add("eyeIdx");
                break;
            case "mi":
                defined.add("mouthIdx");
                break;
            case "cc":
                defined.add("animation");
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
        const { group, key } = initKey[keycode];

        const isBooleanValue = setValue === "true" || setValue === "false";

        initSettings[group][key] = isBooleanValue
            ? Boolean(setValue === "true")
            : setValue;
    });

    const modelId = initSettings["model"]["id"];
    initSettings["model"]["texture"] = modelId;

    if (!defined.has("eyeTexture")) {
        initSettings["model"]["eyeTexture"] = modelId;
    }
    if (!defined.has("mouthTexture")) {
        initSettings["model"]["mouthTexture"] = modelId;
    }
    if (!defined.has("eyeIdx")) {
        initSettings["model"]["eyeIdx"] = getDefaultFace(modelId);
    }
    if (!defined.has("mouthIdx")) {
        initSettings["model"]["mouthIdx"] = getDefaultFace(modelId);
    }
    if (!defined.has("animation")) {
        initSettings["animation"]["code"] = getDefaultAni(modelId);
    }
};

export const generateChainCode = chain => {
    const length = chain.length;
    let output = "";
    chain.forEach((ani, i) => {
        const { fileName, aniName, faceChanges } = ani;
        if (fileName) {
            if (i === 0) {
                output = output.concat(fileName);
            } else {
                output = output.concat(
                    fileName !== chain[i - 1].fileName ? fileName : ""
                );
            }
            output = output.concat("+");
        }
        output = output.concat(aniName);

        // Add modifiers
        const modCode = generateAniModCode(ani);
        output = output.concat(modCode);
        const faceCode = generateFaceCode(faceChanges);
        output = output.concat(faceCode);

        if (i < length - 1) {
            output = output.concat(">");
        }
    });
    return output;
};

const generateAniModCode = ani => {
    let output = "";
    Object.keys(aniModList).forEach(modKey => {
        const { key, defaultValue } = aniModList[modKey];
        if (ani[key] !== defaultValue) {
            output = output.concat(`&${modKey}=${ani[key]}`);
        }
    });
    return output;
};

const generateFaceCode = faceChanges => {
    if (!faceChanges) return "";
    let output = "";
    faceChanges.forEach(change => {
        const { time, eyeIdx, mouthIdx } = change;
        if (!time) return;
        if (eyeIdx) {
            output = output.concat(`&e-${time}=${eyeIdx}`);
        }
        if (mouthIdx) {
            output = output.concat(`&m-${time}=${mouthIdx}`);
        }
    });
    return output;
};

export const collectFilter = toggleState => {
    let collected = {};
    Object.keys(toggleState).forEach(key => {
        let tmp = [];
        Object.keys(toggleState[key]).forEach(k => {
            if (toggleState[key][k]) {
                tmp.push(k);
            }
        });
        collected[key] = tmp;
    });
    return collected;
};

export const multiCondFilter = (input, filters) => {
    const filterKeys = Object.keys(filters);

    return input.filter(el => {
        return filterKeys.every(key => {
            if (!filters[key].length) return true;
            return filters[key].includes(el[key]);
        });
    });
};

export const complementaryColor = color => {
    const hexColor = color.replace("#", "0x");

    return `#${("000000" + ("0xffffff" ^ hexColor).toString(16)).slice(-6)}`;
};

const hexToRgb = hex => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
};

export const getBrightness = ({ r, g, b }) =>
    (r * 299 + g * 587 + b * 114) / 1000;

export const getTextColor = color => {
    const rgb = hexToRgb(color);
    return getBrightness(rgb) > 128 ? "#000000" : "#ffffff";
};

export const aniButtonsFromObject = (object, handleSelect, groupName) => {
    if (!object) return null;
    const style = { maxWidth: "13.5rem" };
    return Object.keys(object).map(key => (
        <Button
            variant="contained"
            key={key}
            data-value={object[key]}
            data-name={`${groupName ? `${groupName} ` : ""}${key}`}
            onClick={handleSelect}
            style={style}
        >
            {key}
        </Button>
    ));
};

// Animation chain code generator
export const getStandbyCode = (weapon, gender) =>
    `LOB_${WEAPON_CODE[weapon]}+${WEAPON_CODE[weapon]}_ONT_${GENDER_CODE[gender]}`;

export const getVictoryCode = weapon =>
    `WIN_${WEAPON_CODE[weapon]}+${WEAPON_CODE[weapon]}_WIN_01>+${WEAPON_CODE[weapon]}_WIN_02`;

export const getDashAtkCode = weapon => `DAS+${WEAPON_CODE[weapon]}_DAS_02`;

export const getRollCode = weapon => `ROL+${WEAPON_CODE[weapon]}_ROL_01`;

export const getComboCode = weapon => {
    const comboLength = COMBO_LENGTH[weapon];
    const code = WEAPON_CODE[weapon];
    let result = `CMB_${code}`;
    for (let i = 1; i <= comboLength; i++) {
        result = result.concat(`+${code}_CMB_0${i}>`);
    }
    result = result.slice(0, -1); // Remove last '>' character
    return result;
};

// Force Strike chain code
export const getFSCode = weapon => {
    const fsAniLength = FS_LENGTH[weapon];
    const code = WEAPON_CODE[weapon];
    let result = `FS_${code}`;
    // Weapon combo has 5 animations each
    for (let i = 1; i <= fsAniLength; i++) {
        result = result.concat(`+${code}_CHR_0${i}>`);
    }
    result = result.slice(0, -1); // Remove last '>' character
    return result;
};

// Join Lobby chain code
export const getLobbyCode = (weapon, gender) => {
    const code = WEAPON_CODE[weapon];
    if (gender === "Male")
        return `LOB_${code}+${code}_ONT_05&ts=-0.5>+${code}_ONT_02>+${code}_ONT_07>+${code}_ONT_08>+${code}_ONT_21`;
    // Female
    return `LOB_${code}+${code}_ONT_06&ts=-0.5>+${code}_ONT_04>+${code}_ONT_09>+${code}_ONT_10>+${code}_ONT_23`;
};
