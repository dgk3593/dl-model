import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";

import { DialogContent, DialogTitle, DialogTop } from "./CustomDialog";
import { complementaryColor } from "./helpers";
import { commonBG } from "./consts";
import { DispatchContext, SettingsContext } from "./context/SettingsContext";

import "./styles/BackgroundSettings.css";

function ColorSettings({ toggleControlOpen, mode }) {
    const dispatch = useContext(DispatchContext);
    const settings = useContext(SettingsContext);
    let initColor;
    switch (mode) {
        case "background":
            initColor = settings.scene.background;
            break;
        case "outlineColor":
            initColor = settings.outline.color;
            break;
        default:
    }
    const [color, setColor] = useState(initColor);

    const handleChangeComplete = color => {
        setColor(color.hex);
    };

    const applyBG = event => {
        const value = event.currentTarget.value;
        const BG = value === "picker" ? color : value;
        const action = {
            type: "update",
            key: "scene",
            value: { background: BG },
        };
        dispatch(action);
        toggleControlOpen();
    };

    const setBG = event => {
        const value = event.currentTarget.value;
        setColor(value);
    };

    const commonBGBtn = Object.keys(commonBG).map(color => (
        <Button
            onClick={setBG}
            style={{
                backgroundColor: commonBG[color],
                color: complementaryColor(commonBG[color]),
            }}
            value={commonBG[color]}
            key={color}
        >
            {color}
        </Button>
    ));

    return (
        <>
            <DialogTop>
                <DialogTitle onClose={toggleControlOpen}>
                    Background Settings
                </DialogTitle>
            </DialogTop>
            <DialogContent dividers className="BackgroundSettings">
                <div className="BackgroundSettings-btn">
                    <Button
                        onClick={applyBG}
                        style={{
                            backgroundColor: color,
                            color: complementaryColor(color),
                            textShadow: `0px 0px 3px white`,
                        }}
                        value="picker"
                    >
                        Apply
                    </Button>
                    <div className="BackgroundSettings-common">
                        {commonBGBtn}
                    </div>
                </div>
                <ChromePicker
                    color={color}
                    onChangeComplete={handleChangeComplete}
                />
            </DialogContent>
        </>
    );
}

export default ColorSettings;
