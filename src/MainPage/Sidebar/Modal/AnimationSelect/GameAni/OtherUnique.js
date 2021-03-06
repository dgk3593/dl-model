import { Fragment, useState } from "react";

import WeaponSelector from "components/selectors/WeaponSelector";
import Button from "@material-ui/core/Button";

import otherUnique from "data/aniOtherUnique";
import { WEAPON_LIST } from "helpers/consts";

import "./styles/OtherUnique.css";

function OtherUnique({ handleSelect }) {
    const [weapon, setWeapon] = useState("Sword");

    const disabled = WEAPON_LIST.filter(weapon => !otherUnique[weapon]);

    const charaList = otherUnique[weapon];
    const content = charaList.map(chara => {
        const aniList = chara.animations;
        const iconLink = `${process.env.PUBLIC_URL}/img/${chara.icon}`;
        const buttons = aniList.map(ani => (
            <Button
                variant="contained"
                onClick={handleSelect}
                data-value={ani.code}
                data-name={`${chara.name} ${ani.name}`}
                key={`${chara.name}-${ani.name}`}
            >
                {ani.name}
            </Button>
        ));
        return (
            <Fragment key={chara.name}>
                <div className="OtherUnique-chara">
                    <div className="OtherUnique-charaInfo">
                        <img
                            className="OtherUnique-charaIcon"
                            src={iconLink}
                            alt={chara.name}
                        />
                        <h4 className="OtherUnique-charaName">{chara.name}</h4>
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
                    onClick={setWeapon}
                />
                <hr />
            </div>
            <div className="OtherUnique-content">{content}</div>
        </div>
    );
}

export default OtherUnique;
