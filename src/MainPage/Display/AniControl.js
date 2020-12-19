import { useContext } from "react";

import { DispatchContext } from "context/SettingsContext";

import Slider from "@material-ui/core/Slider";
import "./styles/AniControl.css";

function AniControl({ value }) {
    const dispatch = useContext(DispatchContext);
    const scaleOptions = [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
    const marks = scaleOptions.map(scale => ({
        value: scale,
        label: `${scale}x`,
    }));

    const setTimeScale = (_, newValue) => {
        const action = {
            type: "update",
            key: "animation",
            value: { timeScale: newValue },
        };
        dispatch(action);
    };

    return (
        <>
            <div>Animation Speed</div>
            <div className="AniControl-Slider">
                <Slider
                    value={value}
                    valueLabelDisplay="auto"
                    step={null}
                    marks={marks}
                    min={0}
                    max={2}
                    onChange={setTimeScale}
                />
            </div>
        </>
    );
}

export default AniControl;
