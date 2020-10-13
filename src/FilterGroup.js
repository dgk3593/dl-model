import React from "react";
import GlowCheckbox from "./GlowCheckbox";
import "./styles/FilterGroup.css";

function FilterGroup(props) {
    const { groupName, filterNames, value, handleToggle } = props;
    const filters = filterNames.map((filter, i) => (
        <GlowCheckbox
            group={groupName}
            checked={value[filter]}
            filterName={filter}
            order={i}
            handleToggle={handleToggle}
            key={`${groupName}_${filter}`}
        />
    ));
    return <div className="FilterGroup">{filters}</div>;
}

export default FilterGroup;
