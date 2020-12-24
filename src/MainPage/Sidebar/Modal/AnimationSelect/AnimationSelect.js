import { lazy, Suspense, useState, useContext } from "react";

import { DialogContent, DialogTitle, DialogTop } from "components/CustomDialog";
import TabPanel from "components/TabPanel";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { DispatchContext, SettingsContext } from "context/SettingsContext";
import { chainCodeToList } from "helpers/viewerHelpers";

import GameAni from "./GameAni";
const ExtraAni = lazy(() => import("./ExtraAni"));

function AnimationSelect(props) {
    const { closeModal, handleSelect } = props;
    const [aniSet, setAniSet] = useState(0);
    const dispatch = useContext(DispatchContext);
    const {
        app: { sidebarContent },
    } = useContext(SettingsContext);
    const chainMode = sidebarContent === "chainMaker";

    const updateSettings = (key, value) => {
        dispatch({ type: "update", key, value });
    };

    const defaultAniHandler = (aniCode, name) => {
        // Set Animation
        updateSettings("animation", { code: aniCode });
        // Reinitialize Chain Maker's chain
        const chainList = chainCodeToList(aniCode, name);
        updateSettings("chainMaker", { chain: chainList });
    };

    const aniHandler = handleSelect || defaultAniHandler;

    const handleAniSelect = event => {
        const aniCode = event.currentTarget.dataset.value;
        const name = event.currentTarget.dataset.name;

        aniHandler(aniCode, name);
        closeModal();
    };

    const handleChange = (_, newValue) => {
        setAniSet(newValue);
    };

    return (
        <>
            <DialogTop>
                <DialogTitle onClose={closeModal}>
                    {chainMode ? "Add Animation" : "Select an Animation"}
                </DialogTitle>
                <AppBar position="static">
                    <Tabs centered value={aniSet} onChange={handleChange}>
                        <Tab label="In-game" />
                        <Tab label="Extra" />
                    </Tabs>
                </AppBar>
            </DialogTop>
            <DialogContent dividers className="AnimationSelect-content">
                <Suspense fallback={<div>Loading</div>}>
                    <TabPanel value={aniSet} index={0}>
                        <GameAni handleSelect={handleAniSelect} />
                    </TabPanel>
                    <TabPanel value={aniSet} index={1}>
                        <ExtraAni handleSelect={handleAniSelect} />
                    </TabPanel>
                </Suspense>
            </DialogContent>
        </>
    );
}

export default AnimationSelect;
