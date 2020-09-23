import React, { useState, useEffect } from "react";

import WeaponSelector from "./WeaponSelector";
import ButtonWithIcons from "./ButtonWithIcons";

import { WEAPON_LIST } from "./consts";

import "./styles/UniqueByWeapon.css";

function UniqueByWeapon({ data, handleSelect }) {
    const [weapon, setWeapon] = useState("Sword");

    const handleClick = event => {
        setWeapon(event.currentTarget.dataset.value);
    };

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
                    handleClick={handleClick}
                />
            </div>
            <hr />
            <div className="UniqueByWeapon-btns">{buttons}</div>
        </div>
    );
}

export default UniqueByWeapon;
