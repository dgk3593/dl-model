import Selector from "./Selector";

import { gunModeExtra } from "data/animationWeaponExtra";

function GunModeSelector({ value, onClick }) {
    const options = Object.keys(gunModeExtra);
    return <Selector value={value} options={options} onClick={onClick} />;
}

export default GunModeSelector;
