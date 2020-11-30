import { Fragment, useState } from "react";

import WeaponSelector from "./WeaponSelector";
import Button from "@material-ui/core/Button";

import otherUnique from "./data/animationOtherUnique";
import { WEAPON_LIST } from "./consts";

import "./styles/OtherUnique.css";

function OtherUnique({ handleSelect }) {
    const [weapon, setWeapon] = useState("Sword");

    const handleClick = event => {
        setWeapon(event.currentTarget.dataset.value);
    };

    const disabled = WEAPON_LIST.filter(weapon => !otherUnique[weapon]);

    const charaList = Object.keys(otherUnique[weapon]);
    const content = charaList.map(chara => {
        const aniList = otherUnique[weapon][chara].animations;
        const iconLink = `${process.env.PUBLIC_URL}/${otherUnique[weapon][chara].icon}`;
        const buttons = aniList.map(ani => (
            <Button
                variant="contained"
                onClick={handleSelect}
                data-value={ani.value}
                data-name={`${chara} ${ani.name}`}
                key={`${chara}-${ani.name}`}
            >
                {ani.name}
            </Button>
        ));
        return (
            <Fragment key={chara}>
                <div className="OtherUnique-chara">
                    <div className="OtherUnique-charaInfo">
                        <img
                            className="OtherUnique-charaIcon"
                            src={iconLink}
                            alt={chara}
                        />
                        <h4 className="OtherUnique-charaName">{chara}</h4>
                    </div>
                    <div className="OtherUnique-btns">{buttons}</div>
                </div>
            </Fragment>
        );
    });

    return (
        <div className="OtherUnique">
            <div className="OtherUnique-Selectors">
                <WeaponSelector
                    disabled={disabled}
                    value={weapon}
                    handleClick={handleClick}
                />
            </div>
            <div className="OtherUnique-content">{content}</div>
        </div>
    );
}

export default OtherUnique;
