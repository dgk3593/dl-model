import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import SettingsGroup from "./AdvancedSettingsGroup";

import { useSettings, useDispatch } from "context/SettingsContext";
import "./styles/AdvancedSettingsGroup.css";

function AutoRotate({ openAtStart = false }) {
    const {
        scene: { rotateSpeed },
    } = useSettings();

    const dispatch = useDispatch();

    const handleValueChange = (_, newValue) => {
        const action = {
            type: "update",
            key: "scene",
            value: { rotateSpeed: newValue },
        };
        dispatch(action);
    };

    const resetSettings = event => {
        event.stopPropagation();
        const action = {
            type: "reset",
            key: "scene",
            value: ["rotateSpeed"],
        };
        dispatch(action);
    };
    const titleButton = (
        <Button variant="contained" onClick={resetSettings}>
            Reset
        </Button>
    );

    return (
        <SettingsGroup
            title="Auto Rotate"
            titleButton={titleButton}
            openAtStart={openAtStart}
        >
            <div className="AdvancedSettingsGroup-options">
                <div className="AdvancedSettingsGroup-optionName">
                    Speed: {rotateSpeed}
                </div>
                <div className="AdvancedSettingsGroup-slider">
                    <Slider
                        value={rotateSpeed}
                        track={false}
                        min={-1}
                        max={1}
                        step={0.05}
                        onChange={handleValueChange}
                    />
                </div>
            </div>
        </SettingsGroup>
    );
}

export default AutoRotate;
