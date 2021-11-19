import { lazy, Suspense, useState } from "react";
import ColorButton from "../ColorButton";

import commonColors from "./commonColors";
import "./styles.css";

const ChromePicker = lazy(() =>
    import("react-color").then(module => ({ default: module.ChromePicker }))
);

function ColorPicker({ initColor = "#cccccc", onSelect }) {
    const [color, setColor] = useState(initColor);

    const handleChange = ({ hex }) => setColor(hex);
    const handleButtonClick = event => setColor(event.target.value);
    const applyColor = () => onSelect(color);

    const commonColorBtns = (
        <div className="ColorPicker-common">
            {commonColors.map(({ name, hex, title }) => (
                <ColorButton
                    onClick={handleButtonClick}
                    value={hex}
                    color={hex}
                    title={title}
                    key={hex}
                >
                    {name}
                </ColorButton>
            ))}
        </div>
    );

    return (
        <div className="ColorPicker">
            <div className="ColorPicker-select">
                {commonColorBtns}

                <Suspense fallback={null}>
                    <ChromePicker
                        color={color}
                        onChangeComplete={handleChange}
                    />
                </Suspense>
            </div>

            <ColorButton color={color} onClick={applyColor}>
                Apply
            </ColorButton>
        </div>
    );
}

export default ColorPicker;
