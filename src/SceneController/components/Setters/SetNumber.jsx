import { useState } from "react";
import { TextField } from "@mui/material";
import { clamp } from "@/SceneController/helper/clamp";

/**
 * @param {object} props
 * @param {object} props.target
 * @param {string} props.propName
 * @param {string} [props.label]
 * @param {number} [props.min]
 * @param {number} [props.max]
 * @param {number} [props.step]
 * @param {(newValue: number) => void} [props.onBeforeChange]
 * @param {(newValue: number) => void} [props.onChange]
 * @param {boolean} [props.fullWidth]
 */
function SetNumber({
    target,
    propName,
    label,
    min,
    max,
    step = 1,
    onBeforeChange,
    onChange,
    ...others
}) {
    const [value, setValue] = useState(target[propName]);

    const handleChange = event => {
        if (!event.currentTarget.value) return;

        const value = parseFloat(event.currentTarget.value) || min;
        let newValue = clamp(value, min, max);
        setValue(newValue);

        onBeforeChange?.(newValue);
        target[propName] = newValue;
        onChange?.(newValue);
    };

    return (
        <div className="SetNumber">
            <TextField
                onChange={handleChange}
                value={value}
                label={label}
                size="small"
                margin="dense"
                variant="outlined"
                inputProps={{
                    type: "number",
                    min,
                    max,
                    step,
                }}
                {...others}
            />
        </div>
    );
}

export default SetNumber;
