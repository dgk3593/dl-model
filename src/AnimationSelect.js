import { lazy, Suspense, useState, useContext } from "react";

import { DialogContent, DialogTitle, DialogTop } from "components/CustomDialog";
import TabPanel from "./TabPanel";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { DispatchContext, SettingsContext } from "./context/SettingsContext";
import { chainCodeToList } from "./viewerHelpers";

import GameAni from "./GameAni";
const ExtraAni = lazy(() => import("./ExtraAni"));

function AnimationSelect(props) {
    const { toggleControlOpen } = props;
    const [aniSet, setAniSet] = useState(0);
    const dispatch = useContext(DispatchContext);
    const {
        chainMaker: { chain: currentChain },
        app: { sideContent },
    } = useContext(SettingsContext);
    const chainMode = sideContent === "chainMaker";

    const handleSelect = event => {
        const aniCode = event.currentTarget.dataset.value;
        const name = event.currentTarget.dataset.name;
        if (!chainMode) {
            // Set Animation
            let action = {
                type: "update",
                key: "animation",
                value: { code: aniCode },
            };
            dispatch(action);
            // Reinitialize Chain Maker's chain
            const chainList = chainCodeToList(aniCode, name);
            action.key = "chainMaker";
            action.value = { chain: chainList };
            dispatch(action);

            // Close Animation Select
            toggleControlOpen();
            return;
        }
        // Add to chain
        const chainList = chainCodeToList(aniCode, name);
        const chain = [...currentChain, ...chainList];
        const action = {
            type: "update",
            key: "chainMaker",
            value: { chain },
        };
        dispatch(action);
        toggleControlOpen();
    };

    const handleChange = (_, newValue) => {
        setAniSet(newValue);
    };

    return (
        <>
            <DialogTop>
                <DialogTitle onClose={toggleControlOpen}>
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
                        <GameAni handleSelect={handleSelect} />
                    </TabPanel>
                    <TabPanel value={aniSet} index={1}>
                        <ExtraAni handleSelect={handleSelect} />
                    </TabPanel>
                </Suspense>
            </DialogContent>
        </>
    );
}

export default AnimationSelect;
