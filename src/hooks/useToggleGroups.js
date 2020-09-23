import { useState } from "react";

function useToggleGroups(groups, initVal = false) {
    let initState = {};
    Object.keys(groups).forEach(key => {
        let values = groups[key];
        let tmp = {};
        values.forEach(value => {
            tmp = { ...tmp, [value]: initVal };
        });
        initState = { ...initState, [key]: tmp };
    });

    const [groupState, setGroupState] = useState(initState);

    // toggle value of groupState[groupName][eleName]
    const groupToggle = (groupName, eleName) => {
        const currentValue = groupState[groupName][eleName];
        const newGroup = { ...groupState[groupName], [eleName]: !currentValue };

        // If all key in the group is true, set all to false
        if (Object.keys(newGroup).every(key => newGroup[key])) {
            Object.keys(newGroup).forEach(key => (newGroup[key] = false));
        }

        setGroupState({
            ...groupState,
            [groupName]: newGroup,
        });
    };

    // set all values to newVal
    const setAll = newVal => {
        let newGroupState = {};
        Object.keys(groupState).forEach(key => {
            let values = groupState[key];
            let tmp = {};
            Object.keys(values).forEach(value => {
                tmp = { ...tmp, [value]: newVal };
            });
            newGroupState = { ...newGroupState, [key]: tmp };
        });
        setGroupState(newGroupState);
    };

    return [groupState, groupToggle, setAll];
}

export default useToggleGroups;
