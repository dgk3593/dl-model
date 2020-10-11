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
import "./styles/OutlineSettings.css";

function OutlineSettings({ openControl }) {
    const [expand, toggleExpand] = useToggleState(true);
    const dispatch = useContext(DispatchContext);
    const toggleOutline = () => {
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

    const {
        outline: { enable, size, color, opacity },
    } = useContext(SettingsContext);

    return (
        <div className="OutlineSettings">
            <div className="OutlineSettings-header">
                <IconButton size="small" onClick={toggleExpand}>
                    {expand ? (
                        <KeyboardArrowUpIcon />
                    ) : (
                        <KeyboardArrowDownIcon />
                    )}
                </IconButton>
                <div className="OutlineSettings-title">Outline</div>
                <div className="OutlineSettings-toggle">
                    <Button variant="contained" onClick={toggleOutline}>
                        {enable ? "On" : "Off"}
                    </Button>
                </div>
            </div>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <div className="OutlineSettings-options">
                    <div className="OutlineSettings-optionName">
                        Size: {size}
                    </div>
                    <div className="OutlineSettings-slider">
                        <Slider
                            value={size}
                            min={1}
                            max={10}
                            onChange={handleChange("size")}
                        />
                    </div>
                    <div className="OutlineSettings-optionName">
                        Opacity: {opacity * 100}%
                    </div>
                    <div className="OutlineSettings-slider">
                        <Slider
                            value={opacity}
                            min={0.1}
                            step={0.1}
                            max={1}
                            onChange={handleChange("opacity")}
                        />
                    </div>
                    <div className="OutlineSettings-optionName">Color</div>
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
            </Collapse>
        </div>
    );
}

export default OutlineSettings;
