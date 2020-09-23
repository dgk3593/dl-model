import React from "react";
import Button from "@material-ui/core/Button";

import { initSettings } from "./context/SettingsContext";
import {
    initKey,
    WEAPON_CODE,
    GENDER_CODE,
    COMBO_LENGTH,
    FS_LENGTH,
} from "./consts";

export const setInitialSettings = params => {
    if (params.length === 0) return;
    let faceTextureDefined = false;
    params.forEach(param => {
        // if no string given, skip
        if (!param) return;

        const [keycode, ...value] = param.split("="); // animation code can have "=" inside
        // if no value given, skip
        if (!value[0]) return;

        let setValue = value.length === 1 ? value[0] : value.join("=");

        if (keycode === "ft") {
            faceTextureDefined = true;
        }
        const { group, key } = initKey[keycode];

        const isBooleanValue = setValue === "true" || setValue === "false";

        initSettings[group][key] = isBooleanValue
            ? Boolean(setValue === "true")
            : setValue;
    });

    initSettings["model"]["texture"] = initSettings["model"]["id"];

    if (!faceTextureDefined) {
        initSettings["model"]["faceTexture"] = initSettings["model"]["id"];
    }
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

export const aniButtonsFromObject = (object, handleSelect) => {
    if (!object) return null;
    return Object.keys(object).map(key => (
        <Button
            variant="contained"
            key={key}
            data-value={object[key]}
            onClick={handleSelect}
            style={{ maxWidth: "13.5rem" }}
        >
            {key}
        </Button>
    ));
};

// Animation chain code generator
export const getStandbyCode = (weapon, gender) =>
    `LOB_${WEAPON_CODE[weapon]}+${WEAPON_CODE[weapon]}_ONT_${GENDER_CODE[gender]}`;

export const getVictoryCode = weapon => `WIN+${WEAPON_CODE[weapon]}_WIN_01`;

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
    else
        return `LOB_${code}+${code}_ONT_06&ts=-0.5>+${code}_ONT_04>+${code}_ONT_09>+${code}_ONT_10>+${code}_ONT_23`;
};
