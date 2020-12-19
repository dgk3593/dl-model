import { lazy, Suspense, useContext } from "react";

import { SettingsContext } from "context/SettingsContext";

const SettingBtns = lazy(() => import("./SettingBtns"));
const ChainMaker = lazy(() => import("ChainMaker"));
const AdvancedSettings = lazy(() => import("AdvancedSettings"));

function SidebarBody({ openModal }) {
    const {
        app: { sideContent },
    } = useContext(SettingsContext);

    let content;
    switch (sideContent) {
        case "settings":
            content = <SettingBtns openModal={openModal} />;
            break;
        case "chainMaker":
            content = <ChainMaker openModal={openModal} />;
            break;
        case "advanced":
            content = <AdvancedSettings openModal={openModal} />;
            break;
        default:
    }

    return <Suspense fallback={<div>Loading</div>}>{content}</Suspense>;
}

export default SidebarBody;
