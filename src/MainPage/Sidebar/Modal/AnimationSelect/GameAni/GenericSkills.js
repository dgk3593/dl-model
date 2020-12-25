import { useState } from "react";
import WeaponSelector from "components/selectors/WeaponSelector";

import { aniButtonsFromObject } from "helpers/helpers";
import genericSkills from "data/animationGenericSkills";

import { WEAPON_LIST } from "helpers/consts";
import "./styles/WeaponAni.css";
import "./styles/UniqueByWeapon.css";

function GenericSkills({ handleSelect }) {
    const [weapon, setWeapon] = useState("Sword");

    const disabled = WEAPON_LIST.filter(weapon => !genericSkills[weapon]);

    return (
        <div>
            <div className="UniqueByWeapon-Selectors">
                <WeaponSelector
                    disabled={disabled}
                    value={weapon}
                    onClick={setWeapon}
                />
            </div>
            <div className="WeaponAni-Btns">
                {aniButtonsFromObject(genericSkills[weapon], handleSelect)}
            </div>
        </div>
    );
}

export default GenericSkills;
