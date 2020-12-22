import { useContext, lazy, Suspense } from "react";

import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import SettingsGroup from "./AdvancedSettingsGroup";

import { DispatchContext, SettingsContext } from "context/SettingsContext";
import "./styles/AdvancedSettingsGroup.css";
import { MATERIALS } from "helpers/consts";

const MaterialParamsSetting = lazy(() => import("./MaterialParamsSetting"));

function MaterialSettings({ openModal, openAtStart }) {
    const {
        material: { type: materialType },
    } = useContext(SettingsContext);

    const dispatch = useContext(DispatchContext);

    const resetSettings = event => {
        event.stopPropagation();
        const action = {
            type: "reset",
            key: "material",
        };
        dispatch(action);
    };

    const handleChange = event => {
        const { value: matType } = event.target;
        const action = {
            type: "update",
            key: "material",
            value: { type: matType },
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
        <SettingsGroup
            title="Material"
            titleButton={titleButton}
            openAtStart={openAtStart}
        >
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
                <Suspense fallback={<div>Loading</div>}>
                    <MaterialParamsSetting
                        materialType={materialType}
                        openModal={openModal}
                    />
                </Suspense>
            </div>
        </SettingsGroup>
    );
}

export default MaterialSettings;
