import { WEAPON_LIST } from "helpers/consts";

import "./styles/WeaponSelector.css";

/**
 * @param {Object} params
 * @param {WeaponType} params.value - currently selected value
 * @param {WeaponType[]} params.disabled - list of disabled weapon types
 * @param {function} params.onClick - called when an option is clicked
 */
function WeaponSelector({ value, disabled, onClick }) {
    /** @param {React.MouseEvent<HTMLDivElement, MouseEvent>} event */
    const handleClick = event => {
        const { value } = event.currentTarget.dataset;
        onClick(value);
    };

    const weapons = WEAPON_LIST;
    const buttons = weapons.map(weapon => {
        const isDisabled = disabled && disabled.includes(weapon);
        const imgPath = `${process.env.PUBLIC_URL}/img/filter/weapon_${weapon}.png`;
        return (
            <div
                className={`WeaponSelector-GlowRadio ${
                    isDisabled && "disabled"
                }`}
                data-value={weapon}
                key={weapon}
                onClick={!isDisabled ? handleClick : null}
            >
                <img
                    className={`WeaponSelector-GlowRadioIcon  ${
                        value === weapon ? "selected" : ""
                    } `}
                    src={imgPath}
                    alt={`${weapon}`}
                />
            </div>
        );
    });
    return <div className="WeaponSelector">{buttons}</div>;
}

export default WeaponSelector;
