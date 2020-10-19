import React, { lazy, Suspense, useState, useContext } from "react";
import useToggleState from "./hooks/useToggleState";
import "./styles/WeaponBtn.css";

import { DispatchContext } from "./context/SettingsContext";
import { isBlade } from "./helpers";

const BladeSelector = lazy(() => import("./BladeSelector"));

function WeaponBtn(props) {
    const { wid, iconName, name } = props;
    const [bladeMode, setBladeMode] = useState("Blade");
    const [clicked, toggleClicked] = useToggleState(false);
    const [reverseGrip, toggleReverseGrip] = useToggleState(false);
    const iconPath = `${process.env.PUBLIC_URL}/img/weaponIcons/${iconName}`;

    const dispatch = useContext(DispatchContext);

    const weaponIsBlade = isBlade(wid);

    const setWeapon = event => {
        event.stopPropagation();
        const side = event.currentTarget.dataset.value;
        // change id code for sheath if needed
        const idCode = bladeMode === "Sheath" ? wid.replace("_01", "_02") : wid;

        const weaponCode = `${idCode}${reverseGrip ? "b" : "n"}`;
        let value = {};
        value[`weapon${side}`] = weaponCode;
        const action = {
            type: "update",
            key: "model",
            value,
        };
        dispatch(action);
    };

    const changeBladeMode = event => {
        event.stopPropagation();
        const mode = event.currentTarget.dataset.value;
        setBladeMode(mode);
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
                        className={`WeaponBtn-grip ${
                            weaponIsBlade ? "blade" : ""
                        }`}
                        onClick={e => e.stopPropagation()}
                    >
                        <div>
                            <input
                                type="checkbox"
                                id={`reverseGrip-`}
                                checked={reverseGrip}
                                onChange={toggleReverseGrip}
                            />
                            <label htmlFor={`reverseGrip-`}>Reverse Grip</label>
                        </div>
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
                    {weaponIsBlade && (
                        <Suspense fallback={null}>
                            <BladeSelector
                                value={bladeMode}
                                handleClick={changeBladeMode}
                            />
                        </Suspense>
                    )}
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
