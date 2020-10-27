import Button from "@material-ui/core/Button";

import "./styles/ButtonWithIcons.css";

function ButtonWithIcons({ data, groupName, handleClick }) {
    const { icon, name, subtitle, value } = data;

    const fullIconUrl = icon && `${process.env.PUBLIC_URL}/${icon}`;

    const icons = (
        <div>
            {icon && (
                <img
                    className="ButtonWithIcons-icon"
                    src={fullIconUrl}
                    alt={name}
                />
            )}
        </div>
    );

    const description = (
        <div className="ButtonWithIcons-description">
            <h3 className="ButtonWithIcons-title">{name}</h3>
            {subtitle && (
                <h5 className="ButtonWithIcons-subtitle">{subtitle}</h5>
            )}
        </div>
    );

    return (
        <Button
            variant="outlined"
            data-value={value}
            data-name={`${name} ${groupName || ""}`}
            onClick={handleClick}
            startIcon={icons}
            className="ButtonWithIcons"
        >
            {description}
        </Button>
    );
}

export default ButtonWithIcons;
