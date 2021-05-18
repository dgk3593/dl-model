import { lazy, Suspense } from "react";

import Button from "@material-ui/core/Button";
import SettingsGroup from "./AdvancedSettingsGroup";

import { useSettings, useDispatch } from "context/SettingsContext";

const ParamsSetting = lazy(() => import("./AsciiParamsSetting"));

function AsciiSettings({ openModal }) {
    const {
        ascii: { enable },
    } = useSettings();
    const dispatch = useDispatch();

    const toggleAscii = event => {
        event.stopPropagation();
        const action = {
            type: "toggle",
            key: "ascii",
            value: ["enable"],
        };
        dispatch(action);
    };

    const resetParams = () => {
        const action = {
            type: "reset",
            key: "ascii",
        };
        dispatch(action);
    };

    const titleButton = (
        <Button variant="contained" onClick={toggleAscii}>
            {enable ? "On" : "Off"}
        </Button>
    );

    return (
        <SettingsGroup title="ASCII Mode" titleButton={titleButton}>
            <div className="AdvancedSettingsGroup-options">
                <Suspense fallback={<div>Loading</div>}>
                    <ParamsSetting openModal={openModal} />
                </Suspense>
            </div>
            <div className="AdvancedSettingsGroup-reset">
                <Button variant="contained" onClick={resetParams}>
                    Reset
                </Button>
            </div>
        </SettingsGroup>
    );
}

export default AsciiSettings;
