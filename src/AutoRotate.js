import React, { useContext } from "react";
import useToggleState from "./hooks/useToggleState";

import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import { DispatchContext, SettingsContext } from "./context/SettingsContext";
import "./styles/AdvancedSettingsGroup.css";

function AutoRotate() {
    const [expand, toggleExpand] = useToggleState(true);

    const {
        scene: { rotateSpeed },
    } = useContext(SettingsContext);

    const dispatch = useContext(DispatchContext);

    const handleChange = (_, newValue) => {
        const action = {
            type: "update",
            key: "scene",
            value: { rotateSpeed: newValue },
        };
        dispatch(action);
    };

    const resetSettings = () => {
        const action = {
            type: "reset",
            key: "scene",
            value: ["rotateSpeed"],
        };
        dispatch(action);
    };

    return (
        <div className="AdvancedSettingsGroup">
            <div className="AdvancedSettingsGroup-header">
                <IconButton size="small" onClick={toggleExpand}>
                    {expand ? (
                        <KeyboardArrowUpIcon />
                    ) : (
                        <KeyboardArrowDownIcon />
                    )}
                </IconButton>
                <div className="AdvancedSettingsGroup-title">Auto Rotate</div>
                <div className="AdvancedSettingsGroup-toggle">
                    <Button variant="contained" onClick={resetSettings}>
                        Reset
                    </Button>
                </div>
            </div>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <div className="AdvancedSettingsGroup-options">
                    <div className="AdvancedSettingsGroup-optionName">
                        Speed: {rotateSpeed}
                    </div>
                    <div className="AdvancedSettingsGroup-slider">
                        <Slider
                            value={rotateSpeed}
                            min={-1}
                            max={1}
                            step={0.05}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </Collapse>
        </div>
    );
}

export default AutoRotate;
