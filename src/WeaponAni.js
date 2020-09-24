import React, { useState } from "react";

import GenderSelector from "./GenderSelector";
import WeaponSelector from "./WeaponSelector";

import Button from "@material-ui/core/Button";

import {
    getStandbyCode,
    getVictoryCode,
    getComboCode,
    getFSCode,
    getLobbyCode,
    getDashAtkCode,
    getRollCode,
    aniButtonsFromObject,
} from "./helpers";
import weaponExtra from "./data/animationWeaponExtra";

import "./styles/WeaponAni.css";

function WeaponAni({ handleSelect }) {
    const [params, setParams] = useState({ weapon: "Sword", gender: "Male" });
    const { weapon, gender } = params;

    const handleClick = event => {
        const { name, value } = event.currentTarget.dataset;
        setParams(oldParams => {
            return { ...oldParams, [name]: value };
        });
    };

    return (
        <div className="WeaponAni">
            <div className="WeaponAni-Selectors">
                <WeaponSelector value={weapon} handleClick={handleClick} />
                <GenderSelector value={gender} handleClick={handleClick} />
            </div>
            <hr />
            <div className="WeaponAni-Btns">
                <Button
                    variant="contained"
                    data-value={getLobbyCode(weapon, gender)}
                    onClick={handleSelect}
                >
                    Join Lobby
                </Button>
                <Button
                    variant="contained"
                    data-value={getStandbyCode(weapon, gender)}
                    onClick={handleSelect}
                >
                    Standby
                </Button>
                <Button
                    variant="contained"
                    data-value={getVictoryCode(weapon)}
                    onClick={handleSelect}
                >
                    Victory
                </Button>
                <Button
                    variant="contained"
                    data-value={getComboCode(weapon)}
                    onClick={handleSelect}
                >
                    Combo Chain
                </Button>
                <Button
                    variant="contained"
                    data-value={getFSCode(weapon)}
                    onClick={handleSelect}
                >
                    Force Strike
                </Button>
                <Button
                    variant="contained"
                    data-value={getDashAtkCode(weapon)}
                    onClick={handleSelect}
                >
                    Dash Attack
                </Button>
                <Button
                    variant="contained"
                    data-value={getRollCode(weapon)}
                    onClick={handleSelect}
                >
                    Roll
                </Button>
            </div>
            <div className="WeaponAni-Btns">
                {aniButtonsFromObject(weaponExtra[weapon], handleSelect)}
            </div>
        </div>
    );
}

export default WeaponAni;
