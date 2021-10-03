import { Button } from "@mui/material";
import "./IconButton.css";

/**
 * @param {object} props
 * @param {string} [props.icon] - URL of the main icon
 * @param {string} [props.subIcon] - URL of the secondary icon, in lower right quarter
 * @param {string} props.title - button label
 * @param {string} [props.subtitle]
 * @param {React.MouseEventHandler<HTMLButtonElement>} props.onClick
 */
function IconButton({
    icon = "",
    subIcon = "",
    title,
    subtitle = "",
    onClick,
    ...others
}) {
    const icons = icon && (
        <div className="IconButton-icons">
            <img
                className="IconButton-mainIcon"
                src={icon}
                alt={title}
                loading="lazy"
            />
            {subIcon && (
                <img
                    className="IconButton-subIcon"
                    src={subIcon}
                    alt={subIcon}
                    loading="lazy"
                />
            )}
        </div>
    );

    const description = (
        <div className="IconButton-description">
            {subtitle && <h5 className="IconButton-subtitle">{subtitle}</h5>}
            <h3 className="IconButton-title">{title}</h3>
        </div>
    );

    return (
        <Button
            variant="outlined"
            className="IconButton"
            onClick={onClick}
            startIcon={icons}
            {...others}
        >
            {description}
        </Button>
    );
}

export default IconButton;
