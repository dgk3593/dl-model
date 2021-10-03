import { TextField } from "@mui/material";
import { useState } from "react";
import "./SetNumbers.css";

/**
 * @param {object} props
 * @param {object} props.target
 * @param {string[]} props.keyList
 * @param {string[]} [props.labels]
 * @param {number} [props.scale]
 * @param {object} [props.inputProps]
 * @param {(values: number[]) => void} [props.onBeforeChange]
 * @param {(values: number[]) => void} [props.onChange]
 * @param {string} [props.className]
 */
function SetNumbers({
    target,
    keyList,
    labels = [],
    scale = 1,
    inputProps = {},
    onBeforeChange = undefined,
    onChange = undefined,
    ...others
}) {
    const initValues = keyList.map(key => target[key] / scale);
    const [values, setValues] = useState(initValues);

    const handleChange = event => {
        const index = parseInt(event.currentTarget.getAttribute("index"));
        const value = parseFloat(event.currentTarget.value);
        let newValues;

        setValues(oldValues => {
            newValues = [...oldValues];
            newValues[index] = value;
            return newValues;
        });

        const scaledValue = value * scale;
        const key = keyList[index];

        onBeforeChange?.(newValues);
        target[key] = scaledValue;
        onChange?.(newValues);
    };

    return (
        <div className="SetNumbers" {...others}>
            {keyList.map((objKey, i) => (
                <TextField
                    className="SetNumbers-number"
                    onChange={handleChange}
                    value={values[i]}
                    label={labels[i] ?? objKey}
                    key={objKey}
                    size="small"
                    margin="dense"
                    variant="outlined"
                    inputProps={{
                        type: "number",
                        index: i,
                        ...inputProps,
                    }}
                />
            ))}
        </div>
    );
}

export default SetNumbers;
