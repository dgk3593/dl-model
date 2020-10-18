import React, { lazy, Suspense, useContext } from "react";

import { DispatchContext } from "./context/SettingsContext";
import Close from "@material-ui/icons/Close";

import "./styles/AdvancedSettings.css";

const OutlineSettings = lazy(() => import("./OutlineSettings"));

function AdvancedSettings({ openControl }) {
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
                <Suspense fallback={<div>Loading</div>}>
                    <OutlineSettings openControl={openControl} />
                </Suspense>
            </div>
        </div>
    );
}

export default AdvancedSettings;
