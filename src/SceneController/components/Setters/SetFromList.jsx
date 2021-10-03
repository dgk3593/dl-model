import { useState } from "react";
import SelectBox from "components/SelectBox";

/**
 *
 * @typedef {object} SelectOption
 * @property {string} label
 * @property {string} value
 */
/**
 * @param {object} props
 * @param {object} props.target
 * @param {string} props.propName
 * @param {string} [props.label]
 * @param {SelectOption[]} props.options
 * @param {(newValue: string) => void} [props.onBeforeChange]
 * @param {(newValue: string) => void} [props.onChange]
 * @param {boolean} [props.fullWidth]
 */
function SetFromList({
    target,
    propName,
    label,
    options,
    onBeforeChange,
    onChange,
    ...others
}) {
    const [value, setValue] = useState(target[propName]);

    const handleChange = value => {
        setValue(value);

        onBeforeChange?.(value);
        target[propName] = value;
        onChange?.(value);
    };

    return (
        <div className="SetFromList">
            <SelectBox
                onChange={handleChange}
                options={options}
                value={value}
                size="small"
                margin="dense"
                {...others}
            />
        </div>
    );
}

export default SetFromList;
