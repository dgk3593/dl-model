import { useContext } from "react";

import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import SettingsGroup from "./AdvancedSettingsGroup";

import { DispatchContext, SettingsContext } from "./context/SettingsContext";
import { complementaryColor } from "./helpers";
import "./styles/AdvancedSettingsGroup.css";

function OutlineSettings({ openControl, openAtStart }) {
    const dispatch = useContext(DispatchContext);

    const toggleOutline = event => {
        event.stopPropagation();
        const action = {
            type: "toggle",
            key: "outline",
            value: ["enable"],
        };
        dispatch(action);
    };

    const handleValueChange = key => (_, newValue) => {
        const action = {
            type: "update",
            key: "outline",
            value: { [key]: newValue },
        };
        dispatch(action);
    };

    const handleBtnClick = e => {
        openControl(e.currentTarget.dataset.value);
    };

    const resetSettings = () => {
        const action = {
            type: "reset",
            key: "outline",
        };
        dispatch(action);
    };

    const {
        outline: { enable, size, color, opacity },
    } = useContext(SettingsContext);

    const titleButton = (
        <Button variant="contained" onClick={toggleOutline}>
            {enable ? "On" : "Off"}
        </Button>
    );

    return (
        <SettingsGroup
            title="Outline"
            titleButton={titleButton}
            openAtStart={openAtStart}
        >
            <div className="AdvancedSettingsGroup-options">
                <div className="AdvancedSettingsGroup-optionName">
                    Size: {size}
                </div>
                <div className="AdvancedSettingsGroup-slider">
                    <Slider
                        value={size}
                        min={1}
                        max={10}
                        onChange={handleValueChange("size")}
                    />
                </div>
                <div className="AdvancedSettingsGroup-optionName">
                    Opacity: {opacity * 100}%
                </div>
                <div className="AdvancedSettingsGroup-slider">
                    <Slider
                        value={opacity}
                        min={0.1}
                        step={0.1}
                        max={1}
                        onChange={handleValueChange("opacity")}
                    />
                </div>
                <div className="AdvancedSettingsGroup-optionName">Color</div>
                <div>
                    <Button
                        fullWidth
                        style={{
                            backgroundColor: color,
                            color: complementaryColor(color),
                            textShadow: `0px 0px 3px white`,
                        }}
                        data-value="outlineColor"
                        onClick={handleBtnClick}
                    >
                        {color}
                    </Button>
                </div>
            </div>
            <div className="AdvancedSettingsGroup-reset">
                <Button onClick={resetSettings} variant="contained">
                    Reset
                </Button>
            </div>
        </SettingsGroup>
    );
}

export default OutlineSettings;
