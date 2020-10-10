import React, { useContext } from "react";

import { DispatchContext } from "./context/SettingsContext";
import Close from "@material-ui/icons/Close";
import OutlineSettings from "./OutlineSettings";

import "./styles/AdvancedSettings.css";

function AdvancedSettings() {
    const dispatch = useContext(DispatchContext);

    const close = () => {
        const action = {
            type: "update",
            key: "app",
            value: { sideContent: "settings" },
        };
        dispatch(action);
    };

    return (
        <div className="AdvancedSettings">
            <div className="AdvancedSettings-header">
                <div className="AdvancedSettings-title">Advanced Settings</div>
                <div className="AdvancedSettings-close" onClick={close}>
                    <Close />
                </div>
            </div>
            <div className="AdvancedSettings-List">
                <OutlineSettings />
            </div>
        </div>
    );
}

export default AdvancedSettings;
