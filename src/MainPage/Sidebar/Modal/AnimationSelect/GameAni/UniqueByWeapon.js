import { useState, useEffect } from "react";

import WeaponSelector from "components/selectors/WeaponSelector";
import ButtonWithIcons from "components/ButtonWithIcons";

import { WEAPON_LIST } from "helpers/consts";

import "./styles/UniqueByWeapon.css";

function UniqueByWeapon({ data, groupName, handleSelect }) {
    const [weapon, setWeapon] = useState("Sword");

    useEffect(() => {
        const initWeapon = Object.keys(data)[0];
        setWeapon(initWeapon);
    }, [data]);

    const disabled = WEAPON_LIST.filter(weapon => !data[weapon]);

    const buttons = data[weapon] ? (
        data[weapon].map(item => (
            <ButtonWithIcons
                key={`${item.name}-${item.subtitle}`}
                data={item}
                groupName={groupName}
                handleClick={handleSelect}
            />
        ))
    ) : (
        <div>none</div>
    );

    return (
        <div className="UniqueByWeapon">
            <div className="UniqueByWeapon-Selectors">
                <WeaponSelector
                    disabled={disabled}
                    value={weapon}
                    onClick={setWeapon}
                />
            </div>
            <hr />
            <div className="UniqueByWeapon-btns">{buttons}</div>
        </div>
    );
}

export default UniqueByWeapon;
