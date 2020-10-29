import { useContext } from "react";
import useToggleState from "./hooks/useToggleState";

import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import MaterialParamsSetting from "./MaterialParamsSetting";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import { DispatchContext, SettingsContext } from "./context/SettingsContext";
import "./styles/AdvancedSettingsGroup.css";
import { MATERIALS } from "./consts";

function MaterialSettings() {
    const [expand, toggleExpand] = useToggleState(true);

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

    return (
        <div className="AdvancedSettingsGroup">
            <div
                className="AdvancedSettingsGroup-header"
                onClick={toggleExpand}
            >
                <IconButton size="small">
                    {expand ? (
                        <KeyboardArrowUpIcon />
                    ) : (
                        <KeyboardArrowDownIcon />
                    )}
                </IconButton>
                <div className="AdvancedSettingsGroup-title">Material</div>
                <div className="AdvancedSettingsGroup-toggle">
                    <Button variant="contained" onClick={resetSettings}>
                        Reset
                    </Button>
                </div>
            </div>
            <Collapse in={expand} timeout="auto" unmountOnExit>
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
                    <MaterialParamsSetting materialType={materialType} />
                </div>
            </Collapse>
        </div>
    );
}

export default MaterialSettings;
