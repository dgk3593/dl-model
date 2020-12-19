import FilterGroup from "./FilterGroup";
import "./styles/Filters.css";

function Filters(props) {
    const { filterList, groupState, handleToggle, resetFilters } = props;
    const filterGroups = Object.keys(filterList).map(group => (
        <FilterGroup
            groupName={group}
            filterNames={Object.keys(groupState[group])}
            value={groupState[group]}
            handleToggle={handleToggle}
            key={group}
        />
    ));
    return (
        <div className="Filters">
            {filterGroups}
            <button className="Filters-reset" onClick={resetFilters}>
                Reset
            </button>
        </div>
    );
}

export default Filters;
