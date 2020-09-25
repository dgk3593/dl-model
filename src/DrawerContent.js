import React, { useContext } from "react";

import { SettingsContext } from "./context/SettingsContext";

import SettingBtns from "./SettingBtns";
import ChainMaker from "./ChainMaker";

function DrawerContent({ openControl }) {
    const {
        chainMaker: { enable: chainMode },
    } = useContext(SettingsContext);

    return (
        <>
            {chainMode ? (
                <ChainMaker openControl={openControl} />
            ) : (
                <SettingBtns openControl={openControl} />
            )}
        </>
    );
}

export default DrawerContent;
