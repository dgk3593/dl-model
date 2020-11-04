// import { useContext } from "react";

import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";

import { complementaryColor } from "./helpers";

// import { DispatchContext } from "./context/SettingsContext";

function LightParamsSettings(props) {
    const {
        id,
        toggleLight,
        colorBtnClick,
        updateIntensity,
        ...params
    } = props;
    const { type, enable, color, intensity } = params;
    // const dispatch = useContext(DispatchContext);

    return (
        <div className="AdvancedSettingsGroup-options">
            <div className="AdvancedSettingsGroup-optionName">{`${type}`}</div>
            <Button
                data-id={id}
                fullWidth
                variant="contained"
                onClick={toggleLight}
            >
                {enable ? "ON" : "OFF"}
            </Button>
            <div className="AdvancedSettingsGroup-optionName">Color</div>
            <Button
                fullWidth
                style={{
                    backgroundColor: color,
                    color: complementaryColor(color),
                    textShadow: `0px 0px 3px white`,
                }}
                data-value={`Lights-${id}`}
                onClick={colorBtnClick}
            >
                {color}
            </Button>
            <div className="AdvancedSettingsGroup-optionName">{`Intensity: ${intensity}`}</div>
            <div className="AdvancedSettingsGroup-slider">
                <Slider
                    value={intensity}
                    data-id={id}
                    min={0}
                    max={1}
                    step={0.05}
                    onChange={updateIntensity}
                />
            </div>
        </div>
    );
}

export default LightParamsSettings;
