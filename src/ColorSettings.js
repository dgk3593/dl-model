import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";

import { DialogContent, DialogTitle, DialogTop } from "./CustomDialog";
import { complementaryColor } from "./helpers";
import { commonBG } from "./consts";
import { DispatchContext, SettingsContext } from "./context/SettingsContext";

import "./styles/ColorSettings.css";

function ColorSettings({ toggleControlOpen, mode }) {
    const dispatch = useContext(DispatchContext);
    const settings = useContext(SettingsContext);
    let initColor, title, commonColor;
    switch (mode) {
        case "background":
            initColor = settings.scene.background;
            commonColor = commonBG;
            title = "Background Settings";
            break;
        case "outlineColor":
            initColor = settings.outline.color;
            commonColor = {};
            title = "Outline Color";
            break;
        default:
    }
    const [color, setColor] = useState(initColor);

    const handleChangeComplete = color => {
        setColor(color.hex);
    };

    const applyColor = event => {
        const value = event.currentTarget.value;
        const colorToSet = value === "picker" ? color : value;
        let action = { type: "update" };
        switch (mode) {
            case "background":
                action.key = "scene";
                action.value = { background: colorToSet };
                break;
            case "outlineColor":
                action.key = "outline";
                action.value = { color: colorToSet };
                break;
            default:
        }
        dispatch(action);
        toggleControlOpen();
    };

    const setNewColor = event => {
        const value = event.currentTarget.value;
        setColor(value);
    };

    const commonBGBtn = Object.keys(commonColor).map(color => (
        <Button
            onClick={setNewColor}
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
                <DialogTitle onClose={toggleControlOpen}>{title}</DialogTitle>
            </DialogTop>
            <DialogContent dividers className="ColorSettings">
                <div className="ColorSettings-btn">
                    <Button
                        onClick={applyColor}
                        style={{
                            backgroundColor: color,
                            color: complementaryColor(color),
                            textShadow: `0px 0px 3px white`,
                        }}
                        value="picker"
                    >
                        Apply
                    </Button>
                    <div className="ColorSettings-common">{commonBGBtn}</div>
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
