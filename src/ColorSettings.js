import { lazy, Suspense, useState, useContext } from "react";
import Button from "@material-ui/core/Button";

import { DialogContent, DialogTitle, DialogTop } from "./CustomDialog";
import { getTextColor } from "./helpers";
import { commonBG } from "./consts";
import { DispatchContext, SettingsContext } from "./context/SettingsContext";

import "./styles/ColorSettings.css";

const ChromePicker = lazy(() =>
    import("react-color").then(module => ({ default: module.ChromePicker }))
);

function ColorSettings({ toggleControlOpen, mode }) {
    const dispatch = useContext(DispatchContext);
    const settings = useContext(SettingsContext);
    let initColor,
        title,
        commonColor = commonBG;
    switch (mode) {
        case "background":
            initColor = settings.scene.background;
            title = "Background Settings";
            break;
        case "outlineColor":
            initColor = settings.outline.color;
            commonColor = {};
            title = "Outline Color";
            break;
        default:
            title = "Pick a Color";
            const [key, subkey] = mode.split("-");
            if (key === "Lights") {
                const currentLight = settings.scene.lights.find(
                    ({ lightId }) => lightId === subkey
                );
                initColor = currentLight.color;
                break;
            }
            initColor = settings[key][subkey];
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
                const [key, subkey] = mode.split("-");
                if (key === "Lights") {
                    const { lights } = settings.scene;
                    const newLights = lights.map(light => {
                        if (light.lightId === subkey) {
                            return { ...light, color: colorToSet };
                        }
                        return light;
                    });

                    action.key = "scene";
                    action.value = { lights: newLights };
                    break;
                }
                action.key = key;
                action.value = { [subkey]: colorToSet };
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
                color: getTextColor(commonBG[color]),
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
                            color: getTextColor(color),
                        }}
                        value="picker"
                    >
                        Apply
                    </Button>
                    <div className="ColorSettings-common">{commonBGBtn}</div>
                </div>
                <Suspense fallback={null}>
                    <ChromePicker
                        color={color}
                        onChangeComplete={handleChangeComplete}
                    />
                </Suspense>
            </DialogContent>
        </>
    );
}

export default ColorSettings;
