import "./IconTabBar.css";

/**
 * @typedef {object} IconTabDetail
 * @property {string} value
 * @property {string} [title]
 * @property {JSX.Element} [icon]
 */
/**
 * @param {object} props
 * @param {string} props.value
 * @param {(newValue: string) => void} props.onChange
 * @param {Array <IconTabDetail>} props.tabs
 * @param {'horizontal' | 'vertical'} [props.orientation]
 * @param {string} [props.className]
 */
function IconTabBar({
    value,
    onChange,
    tabs,
    orientation = "horizontal",
    className = "",
}) {
    className = `IconTabBar ${className} ` + orientation;

    const handleClick = event => {
        const { value: newValue } = event.currentTarget.dataset;
        onChange(newValue);
    };

    return (
        <div className={className}>
            {tabs.map(tab => {
                const { icon, value: tabValue, title = tabValue } = tab;
                return (
                    <button
                        {...(value === tabValue && { className: "selected" })}
                        title={title}
                        data-value={tabValue}
                        onClick={handleClick}
                    >
                        {icon}
                    </button>
                );
            })}
        </div>
    );
}

export default IconTabBar;
