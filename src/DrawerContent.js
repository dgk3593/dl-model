import React, { useContext } from "react";

import { SettingsContext } from "./context/SettingsContext";

import SettingBtns from "./SettingBtns";
import ChainMaker from "./ChainMaker";

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
            content = <ChainMaker openControl={openControl} />;
            break;
        default:
    }

    return <>{content}</>;
}

export default DrawerContent;
