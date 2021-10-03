import GlowToggle from "../GlowToggle";
import "./ToggleGroup.css";

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
