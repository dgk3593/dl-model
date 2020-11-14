import { lazy, Suspense, useContext } from "react";

import { SettingsContext } from "./context/SettingsContext";

const SettingBtns = lazy(() => import("./SettingBtns"));
const ChainMaker = lazy(() => import("./ChainMaker"));
const AdvancedSettings = lazy(() => import("./AdvancedSettings"));

function DrawerContent({ openControl }) {
    const {
        app: { sideContent },
    } = useContext(SettingsContext);

    let content;
    switch (sideContent) {
        case "settings":
            content = <SettingBtns openControl={openControl} />;
            break;
        case "chainMaker":
            content = (
                <>
                    <ChainMaker openControl={openControl} />
                </>
            );
            break;
        case "advanced":
            content = <AdvancedSettings openControl={openControl} />;
            break;
        default:
    }

    return <Suspense fallback={<div>Loading</div>}>{content}</Suspense>;
}

export default DrawerContent;
