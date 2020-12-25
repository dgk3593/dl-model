import { useState } from "react";

import GenderSelector from "components/selectors/GenderSelector";
import WeaponSelector from "components/selectors/WeaponSelector";
import GunModeSelector from "components/selectors/GunModeSelector";

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
} from "helpers/helpers";
import weaponExtra, { gunModeExtra } from "data/animationWeaponExtra";

import "./styles/WeaponAni.css";

function WeaponAni({ handleSelect }) {
    const [params, setParams] = useState({
        weapon: "Sword",
        gender: "Male",
        gunMode: "Long Range",
    });
    const { weapon, gender, gunMode } = params;

    const set = key => value => {
        setParams(oldParams => ({ ...oldParams, [key]: value }));
    };

    return (
        <div className="WeaponAni">
            <div className="WeaponAni-Selectors">
                <WeaponSelector value={weapon} onClick={set("weapon")} />
                <GenderSelector value={gender} onClick={set("gender")} />
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
                            value={gunMode}
                            onClick={set("gunMode")}
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
