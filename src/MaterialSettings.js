import { useContext } from "react";

import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import MaterialParamsSetting from "./MaterialParamsSetting";
import SettingsGroup from "./AdvancedSettingsGroup";

import { DispatchContext, SettingsContext } from "./context/SettingsContext";
import "./styles/AdvancedSettingsGroup.css";
import { MATERIALS } from "./consts";

function MaterialSettings({ openControl }) {
    const {
        model: { materialType },
    } = useContext(SettingsContext);

    const dispatch = useContext(DispatchContext);

    const resetSettings = event => {
        event.stopPropagation();
        const action = {
            type: "reset",
            key: "model",
            value: ["materialType"],
        };
        dispatch(action);
        action.key = "materialParams";
        action.value = "";
        dispatch(action);
    };

    const handleChange = event => {
        const { value: materialType } = event.target;
        const action = {
            type: "update",
            key: "model",
            value: { materialType },
        };
        dispatch(action);
    };

    const options = MATERIALS.map(mat => (
        <MenuItem value={mat} key={mat}>
            {mat}
        </MenuItem>
    ));

    const titleButton = (
        <Button variant="contained" onClick={resetSettings}>
            Reset
        </Button>
    );

    return (
        <SettingsGroup title="Material" titleButton={titleButton} openAtStart>
            <div className="AdvancedSettingsGroup-options">
                <div className="AdvancedSettingsGroup-optionName">Type</div>
                <div>
                    <Select
                        fullWidth
                        onChange={handleChange}
                        value={materialType}
                    >
                        {options}
                    </Select>
                </div>
                <MaterialParamsSetting
                    materialType={materialType}
                    openControl={openControl}
                />
            </div>
        </SettingsGroup>
    );
}

export default MaterialSettings;
