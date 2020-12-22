import { lazy, Suspense, useState, useContext } from "react";
import Button from "@material-ui/core/Button";

import { DialogContent, DialogTitle, DialogTop } from "components/CustomDialog";
import { getTextColor } from "helpers/helpers";
import { commonBG } from "helpers/consts";
import { DispatchContext, SettingsContext } from "context/SettingsContext";

import "./styles/ColorSelect.css";

const ChromePicker = lazy(() =>
    import("react-color").then(module => ({ default: module.ChromePicker }))
);

const titles = {
    background: "Background Settings",
    outlineColor: "Outline Color",
};

function ColorSelect({ closeModal, mode }) {
    const dispatch = useContext(DispatchContext);
    const settings = useContext(SettingsContext);
    const title = titles[mode] || "Pick a Color";
    let initColor,
        commonColor = commonBG;
    switch (mode) {
        case "background":
            initColor = settings.scene.background;
            break;
        case "outlineColor":
            initColor = settings.outline.color;
            commonColor = {};
            break;
        default:
            const [key, subkey] = mode.split("-");
            if (key === "Lights") {
                const currentLight = settings.lights.find(
                    ({ id }) => id === subkey
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
                    const { lights } = settings;
                    const newLights = lights.map(light => {
                        if (light.id === subkey) {
                            return { ...light, color: colorToSet };
                        }
                        return light;
                    });

                    action.type = "overwrite";
                    action.key = "lights";
                    action.value = newLights;
                    break;
                }
                action.key = key;
                action.value = { [subkey]: colorToSet };
        }
        dispatch(action);
        closeModal();
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
                <DialogTitle onClose={closeModal}>{title}</DialogTitle>
            </DialogTop>
            <DialogContent dividers className="ColorSelect">
                <div className="ColorSelect-btn">
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
                    <div className="ColorSelect-common">{commonBGBtn}</div>
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

export default ColorSelect;
