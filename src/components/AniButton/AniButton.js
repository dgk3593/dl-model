import Button from "@material-ui/core/Button";

import "./AniButton.css";

import "helpers/typedef";

/**
 * create an animation button
 * @param {{ data: AnimationData, groupName: string, handleClick: Function}} buttonData
 */
function AniButton({ data, groupName, handleClick }) {
    const { icon, name, subtitle, code } = data;

    const fullIconUrl = icon && `${process.env.PUBLIC_URL}/img/${icon}`;

    const icons = (
        <div>
            {icon && (
                <img className="AniButton-icon" src={fullIconUrl} alt={name} />
            )}
        </div>
    );

    const description = (
        <div className="AniButton-description">
            <h3 className="AniButton-title">{name}</h3>
            {subtitle && <h5 className="AniButton-subtitle">{subtitle}</h5>}
        </div>
    );

    return (
        <Button
            variant="outlined"
            data-value={code}
            data-name={`${name} ${groupName || ""}`}
            onClick={handleClick}
            startIcon={icons}
            className="AniButton"
        >
            {description}
        </Button>
    );
}

export default AniButton;
