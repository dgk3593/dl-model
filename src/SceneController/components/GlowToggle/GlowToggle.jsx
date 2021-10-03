import "./GlowToggle.css";

/**
 * @param {object} props
 * @param {'icon' | 'text'} props.type
 * @param {string} props.value - text to show in the toggle box, set as data-value
 * @param {string} [props.icon] - path to icon in the toggle box
 * @param {boolean} props.checked
 * @param {string} [props.name]
 * @param {React.MouseEventHandler<HTMLDivElement>} [props.onClick]
 *
 */
function GlowToggle({
    type,
    value,
    icon,
    checked = false,
    name = value,
    onClick = () => void 0,
    ...others
}) {
    const className = `GlowToggle ${checked ? "checked" : ""}`;

    const body =
        type === "icon" ? <img src={icon} alt={name} /> : <span>{name}</span>;

    return (
        <div
            className={className}
            data-type={type}
            data-value={value}
            onClick={onClick}
            {...others}
        >
            {body}
        </div>
    );
}

export default GlowToggle;
