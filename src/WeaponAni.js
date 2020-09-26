import React, { useState } from "react";

import GenderSelector from "./GenderSelector";
import WeaponSelector from "./WeaponSelector";
import GunModeSelector from "./GunModeSelector";

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
import weaponExtra, { gunModeExtra } from "./data/animationWeaponExtra";

import "./styles/WeaponAni.css";

function WeaponAni({ handleSelect }) {
    const [params, setParams] = useState({
        weapon: "Sword",
        gender: "Male",
        gunMode: "A",
    });
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
                    data-name={`${gender} ${weapon} Lobby`}
                    onClick={handleSelect}
                >
                    Join Lobby
                </Button>
                <Button
                    variant="contained"
                    data-value={getStandbyCode(weapon, gender)}
                    data-name={`${gender} ${weapon} Standby`}
                    onClick={handleSelect}
                >
                    Standby
                </Button>
                <Button
                    variant="contained"
                    data-value={getVictoryCode(weapon)}
                    data-name={`${weapon} Victory`}
                    onClick={handleSelect}
                >
                    Victory
                </Button>
                {weapon !== "Manacaster" && ( // Don't display combo button for manacaster
                    <>
                        <Button
                            variant="contained"
                            data-value={getComboCode(weapon)}
                            data-name={`${weapon} Combo`}
                            onClick={handleSelect}
                        >
                            Combo Chain
                        </Button>

                        <Button
                            variant="contained"
                            data-value={getFSCode(weapon)}
                            data-name={`${weapon} Force Strike`}
                            onClick={handleSelect}
                        >
                            Force Strike
                        </Button>
                    </>
                )}
                <Button
                    variant="contained"
                    data-value={getDashAtkCode(weapon)}
                    data-name={`${weapon} Dash Attack`}
                    onClick={handleSelect}
                >
                    Dash Attack
                </Button>
                <Button
                    variant="contained"
                    data-value={getRollCode(weapon)}
                    data-name={`${weapon} Roll`}
                    onClick={handleSelect}
                >
                    Roll
                </Button>
            </div>
            <div className="WeaponAni-Btns">
                {aniButtonsFromObject(weaponExtra[weapon], handleSelect)}
            </div>
            {weapon === "Manacaster" && (
                <>
                    <div className="WeaponAni-Selectors">
                        <GunModeSelector
                            value={params.gunMode}
                            handleClick={handleClick}
                        />
                    </div>
                    <div className="WeaponAni-Btns">
                        {aniButtonsFromObject(
                            gunModeExtra[params.gunMode],
                            handleSelect
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default WeaponAni;
