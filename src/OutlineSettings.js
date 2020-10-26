import React, { useContext } from "react";
import useToggleState from "./hooks/useToggleState";

import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import { DispatchContext, SettingsContext } from "./context/SettingsContext";
import { complementaryColor } from "./helpers";
import "./styles/AdvancedSettingsGroup.css";

function OutlineSettings({ openControl }) {
    const [expand, toggleExpand] = useToggleState(false);
    const dispatch = useContext(DispatchContext);
    const toggleOutline = event => {
        event.StopPropagation();
        const action = {
            type: "update",
            key: "outline",
            value: { enable: !enable },
        };
        dispatch(action);
    };

    const handleChange = key => (_, newValue) => {
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

    return (
        <div className="AdvancedSettingsGroup">
            <div
                className="AdvancedSettingsGroup-header"
                onClick={toggleExpand}
            >
                <IconButton size="small">
                    {expand ? (
                        <KeyboardArrowUpIcon />
                    ) : (
                        <KeyboardArrowDownIcon />
                    )}
                </IconButton>
                <div className="AdvancedSettingsGroup-title">Outline</div>
                <div className="AdvancedSettingsGroup-titleBtn">
                    <Button variant="contained" onClick={toggleOutline}>
                        {enable ? "On" : "Off"}
                    </Button>
                </div>
            </div>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <div className="AdvancedSettingsGroup-options">
                    <div className="AdvancedSettingsGroup-optionName">
                        Size: {size}
                    </div>
                    <div className="AdvancedSettingsGroup-slider">
                        <Slider
                            value={size}
                            min={1}
                            max={10}
                            onChange={handleChange("size")}
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
                            onChange={handleChange("opacity")}
                        />
                    </div>
                    <div className="AdvancedSettingsGroup-optionName">
                        Color
                    </div>
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
            </Collapse>
        </div>
    );
}

export default OutlineSettings;
