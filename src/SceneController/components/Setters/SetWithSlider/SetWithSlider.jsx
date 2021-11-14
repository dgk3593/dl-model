import { Slider } from "@mui/material";
import { useState } from "react";
import "./SetWithSlider.css";

/**
 * @param {object} props
 * @param {object} props.target
 * @param {string} props.propName
 * @param {string} [props.label]
 * @param {string} [props.title]
 * @param {(currentValue: number) => string} [props.valueMap]
 * @param {number} [props.min]
 * @param {number} [props.max]
 * @param {number} [props.step]
 * @param {(newValue: number) => void} [props.onBeforeChange]
 * @param {(newValue: number) => void} [props.onChange]
 * @param {boolean} [props.fullWidth]
 */
function SetWithSlider({
    target,
    propName,
    label = propName,
    title,
    valueMap = String,
    min = 0,
    max = 1,
    step = 0.01,
    onBeforeChange,
    onChange,
    ...others
}) {
    const [value, setValue] = useState(target[propName]);

    const handleChange = (_, newValue) => {
        setValue(newValue);

        onBeforeChange?.(newValue);
        target[propName] = newValue;
        onChange?.(newValue);
    };
    const fullLabel = `${label}: ${valueMap(value)}`;

    return (
        <>
            <div className="Setters-label" {...{ title }}>
                {fullLabel}
            </div>
            <div className="Setters-slider">
                <Slider
                    size="small"
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    onChange={handleChange}
                    {...others}
                />
            </div>
        </>
    );
}

export default SetWithSlider;
