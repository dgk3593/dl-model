import { useState } from "react";

/**
 * Create initial state for a group of a multiconditional filter
 * @param { Array<string> } keyList - list of keys to filter for
 * @return {FilterGroupState} init state of the multiconditional filter
 */
const initGroup = keyList => {
    const entries = keyList.map(key => [key, false]);
    return Object.fromEntries(entries);
};

/**
 * Create initial state for a multiconditional filter
 * @param {FilterGroups} groups - filter groups
 * @return {FilterState} initial state of the multiconditional filter
 */
const createInitState = groups => {
    const entries = Object.entries(groups).map(([name, keys]) => [
        name,
        initGroup(keys),
    ]);
    return Object.fromEntries(entries);
};

/**
 * custom hook for multiconditional filter
 * @param {FilterGroups} groups define keys and values to filter for
 * @returns { [filterState: FilterState, toggleFilter: Function, resetFilters: Function] }
 */
function useFilterGroups(groups) {
    const initState = createInitState(groups);
    const [filterState, setFilterState] = useState(initState);

    /**
     * Reset all filters
     */
    const resetFilters = () => setFilterState(initState);

    /**
     * toggle value of filterState[groupName][eleName]
     * @param {string} groupName - name of filter group
     * @param {string} eleName - name of filter value
     */
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
