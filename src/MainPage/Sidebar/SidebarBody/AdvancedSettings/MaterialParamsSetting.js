import { Fragment } from "react";

import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import ColorButton from "components/ColorButton";

import {
    matCommonParams as commonParams,
    matExtraParams as extraParams,
    matParamsDetails as paramsDetails,
} from "helpers/consts";

import { useSettings, useDispatch } from "context/SettingsContext";

function MaterialParamsSetting({ materialType: matType, openModal }) {
    const settings = useSettings();
    const dispatch = useDispatch();

    const currentSettings = settings.material;

    const paramsList = [...commonParams, ...extraParams[matType]];

    const updateMatParam = (name, value) => {
        const action = {
            type: "update",
            key: "material",
            value: { [name]: value },
        };
        dispatch(action);
    };

    const toggleSetting = event => {
        const paramName = event.currentTarget.value;
        const action = {
            type: "toggle",
            key: "material",
            value: paramName,
        };
        dispatch(action);
    };

    const handleSliderChange = key => (_, newValue) => {
        updateMatParam(key, newValue);
    };

    const handleSelectChange = key => e => {
        updateMatParam(key, e.target.value);
    };

    const createToggleButton = name => {
        const currentValue = currentSettings[name];
        return (
            <Button
                value={name}
                fullWidth
                variant="contained"
                onClick={toggleSetting}
            >
                {currentValue ? "ON" : "OFF"}
            </Button>
        );
    };

    const createColorButton = name => {
        const color = currentSettings[name];
        return (
            <ColorButton
                fullWidth
                color={color}
                value={`material-${name}`}
                onClick={openModal}
            />
        );
    };

    const createSlider = name => {
        const currentValue = currentSettings[name];
        const { min, max, step } = paramsDetails[name];
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

    const createSelectBox = name => {
        const currentValue = currentSettings[name];
        const { options } = paramsDetails[name];
        const selectOptions = options.map(option => (
            <MenuItem value={option} key={option}>
                {option}
            </MenuItem>
        ));
        return (
            <div>
                <Select
                    fullWidth
                    value={currentValue}
                    onChange={handleSelectChange(name)}
                >
                    {selectOptions}
                </Select>
            </div>
        );
    };

    const generateControl = paramName => {
        const { type } = paramsDetails[paramName];
        switch (type) {
            case "boolean":
                return createToggleButton(paramName);
            case "number":
            case "percentage":
                return createSlider(paramName);
            case "color":
                return createColorButton(paramName);
            case "select":
                return createSelectBox(paramName);
            default:
                return currentSettings[paramName];
        }
    };

    const generateParamText = param => {
        const { type, name } = paramsDetails[param];
        switch (type) {
            case "number":
                return `${name}: ${currentSettings[param]}`;
            case "percentage":
                return `${name}: ${~~(currentSettings[param] * 100)}%`;
            default:
                return name;
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
