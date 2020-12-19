import { lazy, Suspense, useContext } from "react";

import { SettingsContext } from "context/SettingsContext";

const SettingBtns = lazy(() => import("./SettingBtns"));
const ChainMaker = lazy(() => import("ChainMaker"));
const AdvancedSettings = lazy(() => import("AdvancedSettings"));

function SidebarBody({ setModalMode }) {
    const {
        app: { sideContent },
    } = useContext(SettingsContext);

    let content;
    switch (sideContent) {
        case "settings":
            content = <SettingBtns setModalMode={setModalMode} />;
            break;
        case "chainMaker":
            content = <ChainMaker setModalMode={setModalMode} />;
            break;
        case "advanced":
            content = <AdvancedSettings setModalMode={setModalMode} />;
            break;
        default:
    }

    return <Suspense fallback={<div>Loading</div>}>{content}</Suspense>;
}

export default SidebarBody;
