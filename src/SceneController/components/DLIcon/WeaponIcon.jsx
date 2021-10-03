import "./styles.css";

function WeaponIcon({ type, ...others }) {
    const path = `img/appIcon/weapon_${type}.png`;

    return type ? (
        <img src={path} alt={type} className="DLIcon WeaponIcon" {...others} />
    ) : (
        <></>
    );
}

export default WeaponIcon;
