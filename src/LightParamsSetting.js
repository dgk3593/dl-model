import { lazy, Suspense } from "react";

import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";

import { complementaryColor } from "./helpers";

const CoordinatePicker = lazy(() => import("./CoordinatePicker"));

function LightParamsSetting(props) {
    const {
        id,
        toggleLight,
        colorBtnClick,
        updateIntensity,
        updatePosition,
        ...params
    } = props;
    const { type, enable, color, intensity } = params;

    return (
        <>
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
            {type !== "Ambient" && (
                <div style={{ width: "100%" }}>
                    <Suspense fallback={null}>
                        <div className="AdvancedSettingsGroup-optionName">
                            Position
                        </div>
                        <CoordinatePicker
                            updateCoordinate={updatePosition}
                            value={params.position}
                        />
                    </Suspense>
                </div>
            )}
        </>
    );
}

export default LightParamsSetting;
