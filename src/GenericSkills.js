import { useState } from "react";
import WeaponSelector from "./WeaponSelector";

import { aniButtonsFromObject } from "./helpers";
import genericSkills from "./data/animationGenericSkills";

import { WEAPON_LIST } from "./consts";
import "./styles/WeaponAni.css";
import "./styles/UniqueByWeapon.css";

function GenericSkills({ handleSelect }) {
    const [weapon, setWeapon] = useState("Sword");

    const handleClick = event => {
        setWeapon(event.currentTarget.dataset.value);
    };
    const disabled = WEAPON_LIST.filter(weapon => !genericSkills[weapon]);

    return (
        <div>
            <div className="UniqueByWeapon-Selectors">
                <WeaponSelector
                    disabled={disabled}
                    value={weapon}
                    handleClick={handleClick}
                />
            </div>
            <div className="WeaponAni-Btns">
                {aniButtonsFromObject(genericSkills[weapon], handleSelect)}
            </div>
        </div>
    );
}

export default GenericSkills;
