import GlowCheckbox from "./GlowCheckbox";
import "./styles/FilterGroup.css";

function FilterGroup(props) {
    const { groupName, filterNames, value, handleToggle } = props;
    const filters = filterNames.map(filter => (
        <GlowCheckbox
            group={groupName}
            checked={value[filter]}
            filterName={filter}
            handleToggle={handleToggle}
            key={`${groupName}_${filter}`}
        />
    ));
    return <div className="FilterGroup">{filters}</div>;
}

export default FilterGroup;
