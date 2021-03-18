import { useState, useEffect } from "react";
import WeaponSelector from "components/selectors/WeaponSelector";

import { listToAniButtons } from "helpers/helpers";
// import genericSkills from "data/aniGenericSkills";

import { WEAPON_LIST } from "helpers/consts";
import "./styles/WeaponAni.css";
import "./styles/UniqueByWeapon.css";

function GenericSkills({ handleSelect }) {
    const [weapon, setWeapon] = useState("Sword");
    const [genericSkills, setGenericSkills] = useState({});
    const isLoading = !Object.keys(genericSkills).length;

    const disabled = WEAPON_LIST.filter(weapon => !genericSkills[weapon]);

    useEffect(() => {
        const fetchData = async () => {
            const { default: data } = await import("data/aniGenericSkills");
            setGenericSkills(data);
        };

        fetchData();
    }, []);

    return (
        <div className="UniqueByWeapon">
            <div className="UniqueByWeapon-Selectors">
                <WeaponSelector
                    disabled={disabled}
                    value={weapon}
                    onClick={setWeapon}
                />
                <hr />
            </div>
            <div className="WeaponAni-Btns">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    listToAniButtons(genericSkills[weapon], handleSelect)
                )}
            </div>
        </div>
    );
}

export default GenericSkills;
