import { useContext } from "react";
import { DispatchContext, SettingsContext } from "./context/SettingsContext";

import Button from "@material-ui/core/Button";

import SettingsGroup from "./AdvancedSettingsGroup";

function LightSettings() {
    // const {
    //     scene: { lights: currentLights },
    // } = useContext(SettingsContext);
    const dispatch = useContext(DispatchContext);
    const resetSettings = event => {
        event.stopPropagation();
        const action = {
            type: "reset",
            key: "scene",
            value: ["lights"],
        };
        dispatch(action);
    };
    const titleButton = (
        <Button variant="contained" onClick={resetSettings}>
            Reset
        </Button>
    );

    return (
        <SettingsGroup title="Light" titleButton={titleButton}>
            Light Settings
        </SettingsGroup>
    );
}
export default LightSettings;
