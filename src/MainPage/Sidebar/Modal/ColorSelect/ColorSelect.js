import { lazy, Suspense, useState, useContext } from "react";

import ColorButton from "components/ColorButton";

import { DialogContent, DialogTitle, DialogTop } from "components/CustomDialog";
import { commonColors } from "helpers/consts";
import { DispatchContext, SettingsContext } from "context/SettingsContext";

import "./styles/ColorSelect.css";

const ChromePicker = lazy(() =>
    import("react-color").then(module => ({ default: module.ChromePicker }))
);

const titles = {
    background: "Background Settings",
    "outline-color": "Outline Color",
};

function ColorSelect({ close, mode, handleSelect, docked, moveToDock }) {
    const dispatch = useContext(DispatchContext);
    const settings = useContext(SettingsContext);
    const title = titles[mode] || "Pick a Color";

    const getInitColor = mode => {
        if (mode === "background") return settings.scene.background;

        const [key, subkey] = mode.split("-");
        if (key === "Lights") {
            const lightId = subkey;
            const currentLight = settings.lights.find(
                ({ id }) => id === lightId
            );
            return currentLight.color;
        }
        return settings[key][subkey];
    };

    const initColor = getInitColor(mode);
    const [color, setColor] = useState(initColor);

    const handleChangeComplete = color => {
        setColor(color.hex);
    };

    const updateSettings = (key, value) => {
        const action = { type: "update", key, value };
        dispatch(action);
    };

    const setBG = bgColor => updateSettings("scene", { background: bgColor });

    const defaultHandler = mode => {
        if (mode === "background") return setBG;

        const [key, subkey] = mode.split("-");
        const setOtherColor = color => {
            updateSettings(key, { [subkey]: color });
        };
        return setOtherColor;
    };

    const handler = handleSelect || defaultHandler(mode);

    const applyColor = () => {
        handler(color);
        !docked && close();
    };

    const useCamera = () => {
        updateSettings("scene", { background: "camera" });
        close();
    };

    const commonBtn = Object.entries(commonColors).map(([name, code]) => (
        <ColorButton onClick={setColor} value={code} color={code} key={name}>
            {name}
        </ColorButton>
    ));

    return (
        <div>
            <DialogTop>
                <DialogTitle
                    showDockBtn={!docked}
                    onDock={moveToDock}
                    onClose={close}
                >
                    {title}
                </DialogTitle>
            </DialogTop>
            <DialogContent dividers className="ColorSelect">
                <div className="ColorSelect-btn">
                    <ColorButton
                        color={color === "camera" ? "#000000" : color}
                        onClick={applyColor}
                    >
                        Apply
                    </ColorButton>
                    <div className="ColorSelect-common">{commonBtn}</div>
                </div>
                <Suspense fallback={null}>
                    <ChromePicker
                        color={color}
                        onChangeComplete={handleChangeComplete}
                    />
                </Suspense>
                {mode === "background" && navigator.mediaDevices?.getUserMedia && (
                    <>
                        <div />
                        <div style={{ padding: "1rem" }}>
                            <ColorButton color="#000000" onClick={useCamera}>
                                Use Camera (Experimental)
                            </ColorButton>
                        </div>
                    </>
                )}
            </DialogContent>
        </div>
    );
}

export default ColorSelect;
