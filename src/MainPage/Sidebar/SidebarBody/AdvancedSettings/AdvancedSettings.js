import { lazy, Suspense, useContext } from "react";

import { SettingsContext, DispatchContext } from "context/SettingsContext";
import Close from "@material-ui/icons/Close";

import "./styles/AdvancedSettings.css";

const OutlineSettings = lazy(() => import("./OutlineSettings"));
const AutoRotate = lazy(() => import("./AutoRotate"));
const MaterialSettings = lazy(() => import("./MaterialSettings"));
const LightSettings = lazy(() => import("./LightSettings"));
const AsciiSettings = lazy(() => import("./AsciiSettings"));

function AdvancedSettings({ openModal }) {
    const dispatch = useContext(DispatchContext);
    const {
        material: { type: materialType },
    } = useContext(SettingsContext);

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
                    <AutoRotate openAtStart />
                </Suspense>
                <Suspense fallback={<div>Loading</div>}>
                    <OutlineSettings openModal={openModal} />
                </Suspense>
                {materialType !== "Basic" && (
                    <Suspense fallback={<div>Loading</div>}>
                        <LightSettings openModal={openModal} />
                    </Suspense>
                )}
                <Suspense fallback={<div>Loading</div>}>
                    <MaterialSettings openModal={openModal} />
                </Suspense>
                <Suspense fallback={<div>Loading</div>}>
                    <AsciiSettings openModal={openModal} />
                </Suspense>
            </div>
        </div>
    );
}

export default AdvancedSettings;
