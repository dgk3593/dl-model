import "./CharaCard.css";
import { getPortraitPath } from "./helper";
import { WeaponIcon, ElementIcon, RarityStars } from "components/DLIcon";

function CharaCard({
    id,
    name,
    title,
    rarity,
    element,
    weapon,
    noPortrait = false,
    onClick,
}) {
    const portraitPath = getPortraitPath(id);

    return (
        <div
            className="CharaCard"
            data-value={id}
            data-name={name}
            data-element={element}
            onClick={onClick}
        >
            <div className="CharaCard-title">{title || " "}</div>
            <div className="CharaCard-name">{name}</div>

            <div className="CharaCard-modelIcons">
                <ElementIcon element={element} />
                <WeaponIcon type={weapon} />
            </div>

            {!noPortrait && (
                <img
                    className="CharaCard-portrait"
                    src={portraitPath}
                    alt={name}
                    loading="lazy"
                />
            )}

            <RarityStars rarity={rarity} />
        </div>
    );
}

export default CharaCard;
