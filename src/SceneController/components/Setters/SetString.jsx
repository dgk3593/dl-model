import { useState } from "react";
import { TextField } from "@mui/material";

/**
 * @param {object} props
 * @param {object} props.target
 * @param {string} props.propName
 * @param {string} [props.label]
 * @param {object} [props.inputProps]
 * @param {boolean} [props.fullWidth]
 * @param {(newValue: string) => void} [props.onBeforeChange]
 * @param {(newValue: string) => void} [props.onChange]
 */
function SetString({
    target,
    propName,
    label,
    inputProps = {},
    onBeforeChange,
    onChange,
    ...others
}) {
    const [value, setValue] = useState(target[propName]);

    const handleChange = event => {
        const value = event.currentTarget.value;
        setValue(value);

        onBeforeChange?.(value);
        target[propName] = value;
        onChange?.(value);
    };

    return (
        <div className="SetString">
            <TextField
                onChange={handleChange}
                value={value}
                label={label}
                size="small"
                margin="dense"
                variant="outlined"
                inputProps={inputProps}
                {...others}
            />
        </div>
    );
}

export default SetString;
