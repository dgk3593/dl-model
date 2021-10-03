/**
 * @param {FilterState} filterState
 * @return {FilterConditions}
 */
export const collectFilter = filterState => {
    const stateEntries = Object.entries(filterState);
    /**
     * @type {FilterConditions}
     */
    const filterConditions = stateEntries.map(([groupName, groupData]) => [
        groupName,
        Object.keys(groupData).filter(key => groupData[key]),
    ]);
    return filterConditions.filter(([, valueList]) => valueList.length);
};
