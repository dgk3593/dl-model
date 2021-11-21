import GlowToggle from "../GlowToggle";
import "./ToggleGroup.css";

/**
 * Group of glowing toggles.
 * @param {object} props
 * @param {string} props.name - The name of the group
 * @param {string[]} props.options - The options to display
 * @param {"text" | "icon" } props.type - The type of the toggle
 * @param {{ [value: string]: Boolean }} props.state - The state of each option
 * @param { (groupName: string, value: string) => void } props.toggle - The function to call when toggling
 */
function ToggleGroup({ name, options, type, state, toggle }) {
    const handleToggle = event => {
        const { group, value } = event.currentTarget.dataset;
        toggle(group, value);
    };

    /**
     * @param {string} option
     */
    const getValue = option => `img/appIcon/${name}_${option}.png`;

    const toggles = options.map(option => (
        <GlowToggle
            icon={getValue(option)}
            value={option}
            type={type}
            checked={state[option]}
            data-group={name}
            onClick={handleToggle}
        />
    ));
    return <div className="ToggleGroup">{toggles}</div>;
}

export default ToggleGroup;
