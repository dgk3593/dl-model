import { useState, useMemo } from "react";
import produce from "immer";

/**
 * @param {string} group
 * @param {string} option
 * @return {(draft: FilterState) => void}
 */
const toggleDraft = (group, option) => draft => {
    const currentGroup = draft[group];
    const currentValue = currentGroup?.[option];
    if (currentValue === undefined) return;

    currentGroup[option] = !currentValue;
    // if every option is true, set everything to false
    if (Object.values(currentGroup).every(Boolean)) {
        Object.keys(currentGroup).forEach(key => (currentGroup[key] = false));
    }
};

/**
 * @typedef {(group:string, option: string) => void} FilterToggle
 *
 * @param {FilterConfig} config
 * @return {[state: FilterState, toggle: FilterToggle, reset: () => void]}
 */
export function useFilterState(config) {
    const initState = useMemo(() => createInitState(config), [config]);
    const [state, setState] = useState(initState);

    const toggle = (group, option) =>
        setState(state => produce(state, toggleDraft(group, option)));

    const reset = () => setState(initState);

    return [state, toggle, reset];
}

/**
 * @param {FilterConfig} config
 * @return {FilterState}
 */
function createInitState(config) {
    const entries = config.map(({ name, options }) => {
        const groupStateEntries = options.map(option => [option, false]);
        /**
         * @type {FilterGroupState}
         */
        const groupState = Object.fromEntries(groupStateEntries);

        return [name, groupState];
    });

    return Object.fromEntries(entries);
}
