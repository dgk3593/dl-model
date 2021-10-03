import "./styles.css";

function RarityIcon({ rarity, style = {} }) {
    const path = `img/appIcon/card_r${rarity}.png`;

    return rarity ? (
        <img
            src={path}
            alt={rarity}
            className="DLIcon RarityStars"
            style={style}
        />
    ) : (
        <></>
    );
}

export default RarityIcon;
