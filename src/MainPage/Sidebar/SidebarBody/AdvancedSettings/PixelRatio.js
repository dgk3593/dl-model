import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import SettingsGroup from "./AdvancedSettingsGroup";

import { useSettings, useDispatch } from "context/SettingsContext";
import "./styles/AdvancedSettingsGroup.css";

function AutoRotate({ openAtStart = false }) {
    const {
        app: { pixelRatio },
    } = useSettings();

    const dispatch = useDispatch();

    const maxPixelRatio = window.devicePixelRatio;

    const handleValueChange = (_, newValue) => {
        const action = {
            type: "update",
            key: "app",
            value: { pixelRatio: newValue },
        };
        dispatch(action);
    };

    const resetSettings = event => {
        event.stopPropagation();
        const action = {
            type: "reset",
            key: "app",
            value: ["pixelRatio"],
        };
        dispatch(action);
    };

    const titleButton = (
        <Button variant="contained" onClick={resetSettings}>
            Reset
        </Button>
    );

    return maxPixelRatio !== 1 ? (
        <SettingsGroup
            title="Pixel Ratio"
            titleButton={titleButton}
            openAtStart={openAtStart}
        >
            <div className="AdvancedSettingsGroup-options">
                <div className="AdvancedSettingsGroup-optionName">
                    Pixel Ratio: {pixelRatio}
                </div>
                <div className="AdvancedSettingsGroup-slider">
                    <Slider
                        value={pixelRatio}
                        track={false}
                        min={0.1}
                        max={devicePixelRatio}
                        step={0.1}
                        onChange={handleValueChange}
                    />
                </div>
            </div>
        </SettingsGroup>
    ) : (
        <></>
    );
}

export default AutoRotate;
