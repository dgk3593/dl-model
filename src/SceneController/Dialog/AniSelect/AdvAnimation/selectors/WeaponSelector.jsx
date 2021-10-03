import Selector from "components/Selector";
import { WEAPON_TYPES } from "@/SceneController/helper/lists";

const iconUrl = WEAPON_TYPES.map(type => `img/appIcon/weapon_${type}.png`);

function WeaponSelector({ value, onClick }) {
    return (
        <Selector
            type="icon"
            options={WEAPON_TYPES}
            icons={iconUrl}
            value={value}
            onClick={onClick}
        />
    );
}

export default WeaponSelector;
