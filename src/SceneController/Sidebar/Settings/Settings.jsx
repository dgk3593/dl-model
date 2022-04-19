import { useAppState } from "@/state";

import ModelSettings from "./ModelSettings";
import SceneSettings from "./SceneSettings";
import ExportSettings from "./ExportSettings";
import TabBar from "components/TabBar";
import QuickAction from "./QuickAction";

const tabs = ["Model", "Scene", "Export"].map(name => ({ name }));

const settingGroup = {
    Model: ModelSettings,
    Scene: SceneSettings,
    Export: ExportSettings,
};

function Settings() {
    const { tab, setTab } = useAppState(state => state.sidebar.settings);
    const onTabChange = (e, newTab) => setTab(newTab);

    const SettingGroup = settingGroup[tab];

    return (
        <>
            <QuickAction />
            <TabBar value={tab} tabs={tabs} onChange={onTabChange} />
            <SettingGroup />

            <span className="bottom-space" />
        </>
    );
}

export default Settings;
