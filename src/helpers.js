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

export const filterObject = (object, keys) => {
    const entries = Object.entries(object);
    const filtered = entries.filter(([key, _]) => keys.includes(key));
    return Object.fromEntries(filtered);
};

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

    if (isCharaWithAni(modelId)) return "CMN_MWM_03";

    return "";
};

const getDefaultFace = modelId => (isDragon(modelId) ? 1 : 2);

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
    const aniCode = chain.map(aniToCode);
    return aniCode.join(">");
};

const aniToCode = ani => {
    const { aniName, faceChanges } = ani;
    const modCode = generateAniModCode(ani);
    const faceCode = generateFaceCode(faceChanges);
    return `${aniName}${modCode}${faceCode}`;
};

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

export const collectFilter = toggleState => {
    const collected = {};
    Object.keys(toggleState).forEach(key => {
        const tmp = [];
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
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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
    `${WEAPON_CODE[weapon]}_ONT_${GENDER_CODE[gender]}`;

export const getVictoryCode = weapon =>
    `${WEAPON_CODE[weapon]}_WIN_01>${WEAPON_CODE[weapon]}_WIN_02`;

export const getDashAtkCode = weapon => `${WEAPON_CODE[weapon]}_DAS_02`;

export const getRollCode = weapon => `${WEAPON_CODE[weapon]}_ROL_01`;

export const getComboCode = weapon => {
    const comboLength = COMBO_LENGTH[weapon];
    const code = WEAPON_CODE[weapon];

    const parts = Array(comboLength)
        .fill()
        .map((_, i) => `${code}_CMB_0${i + 1}`);

    return parts.join(">");
};

// Force Strike chain code
export const getFSCode = weapon => {
    const fsAniLength = FS_LENGTH[weapon];
    const code = WEAPON_CODE[weapon];
    const parts = Array(fsAniLength)
        .fill()
        .map((_, i) => `${code}_CHR_0${i + 1}`);

    return parts.join(">");
};

// Join Lobby chain code
export const getLobbyCode = (weapon, gender) => {
    const code = WEAPON_CODE[weapon];
    if (gender === "Male")
        return `${code}_ONT_05&ts=-0.5>${code}_ONT_02>${code}_ONT_07>${code}_ONT_08>${code}_ONT_21`;
    // Female
    return `${code}_ONT_06&ts=-0.5>${code}_ONT_04>${code}_ONT_09>${code}_ONT_10>${code}_ONT_23`;
};
