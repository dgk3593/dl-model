import Selector from "components/Selector";
const GUN_TYPES = ["Long", "Close", "Rapid"];

const iconUrl = GUN_TYPES.map(type => `img/appIcon/gun_${type}.png`);

function GunModeSelector({ value, onClick }) {
    return (
        <Selector
            type="icon"
            options={GUN_TYPES}
            icons={iconUrl}
            labels={GUN_TYPES}
            value={value}
            onClick={onClick}
        />
    );
}

export default GunModeSelector;
