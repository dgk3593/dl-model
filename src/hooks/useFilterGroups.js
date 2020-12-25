import { useState } from "react";

const initGroup = keyList => {
    const entries = keyList.map(key => [key, false]);
    return Object.fromEntries(entries);
};

const createInitState = groups => {
    const initState = {};
    Object.entries(groups).forEach(
        ([name, keys]) => (initState[name] = initGroup(keys))
    );
    return initState;
};

function useFilterGroups(groups) {
    const initState = createInitState(groups);
    const [filterState, setFilterState] = useState(initState);

    // reset everything to initial values
    const resetFilters = () => setFilterState(initState);

    // toggle value of groupState[groupName][eleName]
    const toggleFilter = (groupName, eleName) => {
        const currentGroup = filterState[groupName];
        const currentValue = currentGroup[eleName];
        const newGroup = { ...currentGroup, [eleName]: !currentValue };

        // If all key in the group is true, set all to false
        if (Object.keys(newGroup).every(key => newGroup[key])) {
            Object.keys(newGroup).forEach(key => (newGroup[key] = false));
        }

        setFilterState({
            ...filterState,
            [groupName]: newGroup,
        });
    };

    return [filterState, toggleFilter, resetFilters];
}

export default useFilterGroups;
