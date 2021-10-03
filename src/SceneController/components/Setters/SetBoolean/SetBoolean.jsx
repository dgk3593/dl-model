import { useState } from "react";
import { Switch } from "@mui/material";
import "./SetBoolean.css";

/**
 * @param {object} props
 * @param {object} props.target
 * @param {string} props.propName
 * @param {(newValue: boolean) => void} [props.onBeforeChange]
 * @param {(newValue: boolean) => void} [props.onChange]
 */
function SetBoolean({ target, propName, onBeforeChange, onChange }) {
    const [value, setValue] = useState(target[propName]);
    const toggle = () => {
        const newValue = !value;
        setValue(newValue);

        onBeforeChange?.(newValue);
        target[propName] = newValue;
        onChange?.(newValue);
    };

    return (
        <div className="SetBoolean">
            <Switch onChange={toggle} checked={value} />
        </div>
    );
}

export default SetBoolean;
