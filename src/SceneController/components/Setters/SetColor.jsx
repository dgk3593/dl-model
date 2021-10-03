import { useModalState } from "@/state";
import { useState } from "react";
import ColorButton from "../ColorPicker/ColorButton";

/**
 * @param {object} props
 * @param {object} props.target
 * @param {string} props.propName
 * @param {(newValue: boolean) => void} [props.onBeforeChange]
 * @param {(newValue: boolean) => void} [props.onChange]
 */
function SetColor({ target, propName, onBeforeChange, onChange }) {
    const [color, setColor] = useState(target[propName]);
    const { inputColor } = useModalState();

    const handleClick = async () => {
        const newColor = await inputColor();
        if (!newColor) return;

        setColor(newColor);
        onBeforeChange?.(newColor);
        target[propName] = newColor;
        onChange?.(newColor);
    };

    return (
        <div className="SetColor">
            <ColorButton
                color={color.startsWith("#") ? color : "#" + color}
                onClick={handleClick}
                style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }}
            />
        </div>
    );
}

export default SetColor;
