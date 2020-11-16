import Button from "@material-ui/core/Button";

import { initSettings } from "./context/SettingsContext";
import {
    initKey,
    WEAPON_CODE,
    GENDER_CODE,
    COMBO_LENGTH,
    FS_LENGTH,
    aniModList,
} from "./consts";

import { chainCodeToList } from "./viewerHelpers";

export const isBlade = code => code.startsWith("w302");

export const isSheath = code => isBlade(code) && code.endsWith("02");

// if object is an array, apply callback on each element of object, otherwise, apply call back on the object
export const callbackOnPotentialArray = (object, callback) => {
    if (Array.isArray(object)) {
        object.forEach(child => callback(child));
        return;
    }
    callback(object);
};

export const setInitialSettings = params => {
    if (params.length === 0) return;
    let eyeTextureDefined = false;
    let mouthTextureDefined = false;
    params.forEach(param => {
        if (!param) return;

        const [keycode, ...value] = param.split("="); // animation code can have "=" inside
        // if no value given, skip
        if (!value[0]) return;

        let setValue = value.length === 1 ? value[0] : value.join("=");

        switch (keycode) {
            case "et":
                eyeTextureDefined = true;
                break;
            case "mt":
                mouthTextureDefined = true;
                break;
            case "cc":
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

    initSettings["model"]["texture"] = initSettings["model"]["id"];

    if (!eyeTextureDefined) {
        initSettings["model"]["eyeTexture"] = initSettings["model"]["id"];
    }
    if (!mouthTextureDefined) {
        initSettings["model"]["mouthTexture"] = initSettings["model"]["id"];
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
    // Weapon combo has 5 animations each
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
