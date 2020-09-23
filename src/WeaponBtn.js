import React, { useContext } from "react";
import useToggleState from "./hooks/useToggleState";
import "./styles/WeaponBtn.css";

import { DispatchContext } from "./context/SettingsContext";

function WeaponBtn(props) {
    const { wid, iconName, name } = props;
    const [clicked, toggleClicked] = useToggleState(false);
    const [reverseGrip, toggleReverseGrip] = useToggleState(false);
    const iconPath = `${process.env.PUBLIC_URL}/img/weaponIcons/${iconName}`;

    const dispatch = useContext(DispatchContext);

    const setWeapon = event => {
        event.stopPropagation();
        const side = event.currentTarget.dataset.value;
        const weaponCode = `${wid}${reverseGrip ? "b" : "n"}`;
        let value = {};
        value[`weapon${side}`] = weaponCode;
        const action = {
            type: "update",
            key: "model",
            value,
        };
        dispatch(action);
    };

    return (
        <div className="WeaponBtn">
            {iconName && (
                <img
                    src={iconPath}
                    value={wid}
                    alt={wid}
                    onClick={toggleClicked}
                    className="WeaponBtn-icon"
                />
            )}
            {clicked ? (
                <div className="WeaponBtn-add" onClick={toggleClicked}>
                    <div
                        className="WeaponBtn-grip"
                        onClick={e => e.stopPropagation()}
                    >
                        <input
                            type="checkbox"
                            id="reverseGrip"
                            checked={reverseGrip}
                            onChange={toggleReverseGrip}
                        />
                        <label htmlFor="reverseGrip">Reverse Grip</label>
                    </div>
                    <div className="WeaponBtn-addBtnGroup">
                        <div
                            className="WeaponBtn-addBtn"
                            data-value="Left"
                            onClick={setWeapon}
                        >
                            &#8656;
                        </div>
                        <div>ADD</div>
                        <div
                            className="WeaponBtn-addBtn"
                            data-value="Right"
                            onClick={setWeapon}
                        >
                            &#8658;
                        </div>
                    </div>
                </div>
            ) : (
                <div className="WeaponBtn-name" onClick={toggleClicked}>
                    {name}
                </div>
            )}
        </div>
    );
}

export default WeaponBtn;
