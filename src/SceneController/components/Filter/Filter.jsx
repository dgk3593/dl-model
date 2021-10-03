import { useEffect } from "react";
import { useFilterState } from "./useFilterState";
import ToggleGroup from "./ToggleGroup";
import { collectFilter } from "./helper";
import "./Filter.css";

/**
 * @param {object} props
 * @param {FilterConfig} props.config
 * @param { (conditions: FilterConditions) => void} props.onChange
 * @param { boolean} [props.compact]
 */
function Filter({ config, onChange, compact }) {
    if (!config) return <></>;

    const [state, toggle, reset] = useFilterState(config);

    useEffect(() => {
        const filterConditions = collectFilter(state);
        onChange(filterConditions);
    }, [state]);

    const toggleGroups = config.map((group, i) => (
        <ToggleGroup
            key={i}
            state={state[group.name]}
            toggle={toggle}
            {...group}
        />
    ));

    return (
        <div className="Filter" data-compact={compact}>
            {toggleGroups}
            <button className="Filter-reset" onClick={reset}>
                <span>Reset</span>
            </button>
        </div>
    );
}

export default Filter;
