import { Fragment, useContext } from "react";

import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";

import {
    materialCommonParams as commonParams,
    materialExtraParams as extraParams,
    matParamsDetails,
    matParamsDetails as paramsDetails,
} from "./consts";
import { complementaryColor } from "./helpers";

import { DispatchContext, SettingsContext } from "./context/SettingsContext";

function MaterialParamsSetting({ materialType: matType, openControl }) {
    const settings = useContext(SettingsContext);
    const dispatch = useContext(DispatchContext);

    const currentSettings = settings.materialParams;

    const paramsList = [...commonParams, ...extraParams[matType]];

    const updateMatParam = (name, value) => {
        const action = {
            type: "update",
            key: "materialParams",
            value: { [name]: value },
        };
        dispatch(action);
    };

    const toggleSetting = event => {
        const paramName = event.currentTarget.value;
        const action = {
            type: "toggle",
            key: "materialParams",
            value: paramName,
        };
        dispatch(action);
    };

    const handleSliderChange = key => (_, newValue) => {
        updateMatParam(key, newValue);
    };

    const handleColorBtnClick = e => {
        openControl(e.currentTarget.dataset.value);
    };

    const createToggleButton = name => {
        const currentValue = currentSettings[name];
        return (
            <div>
                <Button
                    value={name}
                    fullWidth
                    variant="contained"
                    onClick={toggleSetting}
                >
                    {currentValue ? "ON" : "OFF"}
                </Button>
            </div>
        );
    };

    const createColorButton = name => {
        const color = currentSettings[name];
        return (
            <Button
                fullWidth
                style={{
                    backgroundColor: color,
                    color: complementaryColor(color),
                    textShadow: `0px 0px 3px white`,
                }}
                data-value={`materialParams-${name}`}
                onClick={handleColorBtnClick}
            >
                {color}
            </Button>
        );
    };

    const createSlider = name => {
        const currentValue = currentSettings[name];
        const { min, max, step } = matParamsDetails[name];
        return (
            <div className="AdvancedSettingsGroup-slider">
                <Slider
                    value={currentValue}
                    min={min}
                    max={max}
                    step={step}
                    onChange={handleSliderChange(name)}
                />
            </div>
        );
    };

    const generateControl = paramName => {
        const type = paramsDetails[paramName].type;
        switch (type) {
            case "boolean":
                return createToggleButton(paramName);
            case "number":
            case "percentage":
                return createSlider(paramName);
            case "color":
                return createColorButton(paramName);
            default:
                return currentSettings[paramName];
        }
    };

    const generateParamText = param => {
        const type = paramsDetails[param].type;
        switch (type) {
            case "number":
                return `${paramsDetails[param].name}: ${currentSettings[param]}`;
            case "percentage":
                return `${paramsDetails[param].name}: ${~~(
                    currentSettings[param] * 100
                )}%`;
            default:
                return paramsDetails[param].name;
        }
    };

    const settingsList = paramsList.map(param => {
        return (
            <Fragment key={param}>
                <div className="AdvancedSettingsGroup-optionName">
                    {generateParamText(param)}
                </div>
                <>{generateControl(param)}</>
            </Fragment>
        );
    });

    return <>{settingsList}</>;
}

export default MaterialParamsSetting;
