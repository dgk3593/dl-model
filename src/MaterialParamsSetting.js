import { Fragment, useContext } from "react";

import Button from "@material-ui/core/Button";

import {
    materialCommonParams as commonParams,
    materialExtraParams as extraParams,
    matParamsDetails as paramsDetails,
} from "./consts";

import { DispatchContext, SettingsContext } from "./context/SettingsContext";

function MaterialParamsSetting({ materialType: matType }) {
    const settings = useContext(SettingsContext);
    const dispatch = useContext(DispatchContext);

    const currentSettings = settings.materialParams;

    const paramsList = [...commonParams, ...extraParams[matType]];

    const toggleSetting = event => {
        const paramName = event.currentTarget.value;
        const action = {
            type: "toggle",
            key: "materialParams",
            value: paramName,
        };
        dispatch(action);
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

    const generateControl = paramName => {
        const type = paramsDetails[paramName].type;
        switch (type) {
            case "boolean":
                return createToggleButton(paramName);
            default:
                return JSON.stringify(currentSettings[paramName]);
        }
    };

    const settingsList = paramsList.map(param => {
        return (
            <Fragment key={param}>
                <div className="AdvancedSettingsGroup-optionName">
                    {paramsDetails[param].name}
                </div>
                <div>{generateControl(param)}</div>
            </Fragment>
        );
    });

    return <>{settingsList}</>;
}

export default MaterialParamsSetting;
