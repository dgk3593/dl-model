import GlowToggle from "components/GlowToggle";
import "./Selector.css";

/**
 * @param {Object} params
 * @param {'icon' | 'text'} params.type - selector type
 * @param {string} params.value - currently selected value
 * @param {string[]} params.options - options to select
 * @param {string[]} [params.icons] - url to icons for 'icon' type
 * @param {function} params.onClick - called when an option is clicked
 * @param {string[]} [params.labels] - display texts for the options
 */
function Selector({ type, value, options, icons = [], onClick, labels = [] }) {
    /**
     * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} event
     */
    const handleClick = event => {
        event.stopPropagation();
        const { value } = event.currentTarget.dataset;
        onClick(value);
    };

    const selectors = options.map((option, i) => (
        <GlowToggle
            type={type}
            value={option}
            name={labels[i]}
            icon={icons[i]}
            onClick={handleClick}
            key={option}
            checked={value === option}
        />
    ));
    return <div className="Selector">{selectors}</div>;
}

export default Selector;
