import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";

import { DialogContent, DialogTitle, DialogTop } from "./CustomDialog";
import { complementaryColor } from "./helpers";
import { commonBG } from "./consts";
import { DispatchContext } from "./context/SettingsContext";
import { SettingsContext } from "./context/SettingsContext";

import "./styles/BackgroundSettings.css";

function BackgroundSettings(props) {
    const { toggleControlOpen } = props;
    const dispatch = useContext(DispatchContext);
    const settings = useContext(SettingsContext);
    const [color, setColor] = useState(settings.scene.background);

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
                            textShadow: `1px 1px 2px black
                            }`,
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

export default BackgroundSettings;
