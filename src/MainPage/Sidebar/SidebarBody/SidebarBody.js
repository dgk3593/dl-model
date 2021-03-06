import { lazy, Suspense } from "react";

import { useSettings } from "context/SettingsContext";

const SettingBtns = lazy(() => import("./SettingBtns"));
const ChainMaker = lazy(() => import("./ChainMaker"));
const AdvancedSettings = lazy(() => import("./AdvancedSettings"));

const contentMap = {
    settings: SettingBtns,
    chainMaker: ChainMaker,
    advanced: AdvancedSettings,
};

function SidebarBody({ openModal }) {
    const {
        app: { sidebarContent },
    } = useSettings();

    const Body = contentMap[sidebarContent];

    return (
        <Suspense fallback={<div>Loading</div>}>
            <Body openModal={openModal} />
        </Suspense>
    );
}

export default SidebarBody;
