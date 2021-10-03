import { useToggleState } from "hook/useToggleState";
import SetWeaponButton from "./SetWeaponButton";
import { ModelIcon } from "components/DLIcon";
import "./WeaponButton.css";

const gripClickHandle = e => e.stopPropagation();

function WeaponButton({ id, name, noIcon, onClick }) {
    const [clicked, toggleClicked] = useToggleState(false);
    const [reverseGrip, toggleReverseGrip] = useToggleState(false);

    const weaponIcon = !noIcon && (
        <ModelIcon modelId={id} className="WeaponButton-icon" />
    );

    const gripSelect = clicked && (
        <div className="WeaponButton-grip" onClick={gripClickHandle}>
            <input
                type="checkbox"
                id={`grip-${id}`}
                checked={reverseGrip}
                onChange={toggleReverseGrip}
            />
            <label htmlFor={`grip-${id}`}>Reverse Grip</label>
        </div>
    );

    const handleClick = event => {
        event.stopPropagation();
        const { side } = event.currentTarget.dataset;
        onClick({ side, id, name, reverse: reverseGrip });
    };

    return (
        <div className="WeaponButton">
            {weaponIcon}
            {clicked ? (
                <div className="WeaponButton-add" onClick={toggleClicked}>
                    {gripSelect}
                    <div className="WeaponButton-addBtnGroup">
                        <SetWeaponButton side="Left" onClick={handleClick} />
                        <div>ADD</div>
                        <SetWeaponButton side="Right" onClick={handleClick} />
                    </div>
                </div>
            ) : (
                <div className="WeaponButton-name" onClick={toggleClicked}>
                    {name}
                </div>
            )}
        </div>
    );
}

export default WeaponButton;
