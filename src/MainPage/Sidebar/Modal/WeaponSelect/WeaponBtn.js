import { lazy, Suspense, useState, useContext } from "react";
import useToggleState from "hooks/useToggleState";
import "./styles/WeaponBtn.css";

import { DispatchContext } from "context/SettingsContext";
import { isBlade } from "helpers/helpers";

const BladeSelector = lazy(() => import("components/selectors/BladeSelector"));
const BtnIcon = { Left: "⇐", Right: "⇒" };

function WeaponBtn({ id, iconName = "", name }) {
    const [bladeMode, setBladeMode] = useState("Blade");
    const [clicked, toggleClicked] = useToggleState(false);
    const [reverseGrip, toggleReverseGrip] = useToggleState(false);
    const iconPath = `${process.env.PUBLIC_URL}/img/weaponIcons/${iconName}`;

    const dispatch = useContext(DispatchContext);

    const weaponIsBlade = isBlade(id);

    const setWeapon = event => {
        event.stopPropagation();
        const side = event.currentTarget.dataset.value;
        // change id code for sheath if needed
        const idCode = bladeMode === "Sheath" ? id.replace("_01", "_02") : id;
        const gripCode = reverseGrip ? "b" : "n";

        const weaponCode = `${idCode}${gripCode}`;
        const action = {
            type: "update",
            key: "model",
            value: { [`weapon${side}`]: weaponCode },
        };
        dispatch(action);
    };

    const weaponIcon = iconName && (
        <img
            src={iconPath}
            value={id}
            alt={id}
            onClick={toggleClicked}
            className="WeaponBtn-icon"
        />
    );

    const gripSelect = clicked && (
        <div
            className={`WeaponBtn-grip ${weaponIsBlade ? "blade" : ""}`}
            onClick={e => e.stopPropagation()}
        >
            <div>
                <input
                    type="checkbox"
                    id={`grip-${id}`}
                    checked={reverseGrip}
                    onChange={toggleReverseGrip}
                />
                <label htmlFor={`grip-${id}`}>Reverse Grip</label>
            </div>
        </div>
    );

    const bladeModeSelect = weaponIsBlade && (
        <Suspense fallback={null}>
            <BladeSelector value={bladeMode} onClick={setBladeMode} />
        </Suspense>
    );

    const SetWeaponBtn = ({ side }) => (
        <div className="WeaponBtn-addBtn" data-value={side} onClick={setWeapon}>
            {BtnIcon[side]}
        </div>
    );

    return (
        <div className="WeaponBtn">
            {weaponIcon}
            {clicked ? (
                <div className="WeaponBtn-add" onClick={toggleClicked}>
                    {gripSelect}
                    <div className="WeaponBtn-addBtnGroup">
                        <SetWeaponBtn side="Left" />
                        <div>ADD</div>
                        <SetWeaponBtn side="Right" />
                    </div>
                    {bladeModeSelect}
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
