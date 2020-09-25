import React, { useState, useContext } from "react";

import { DialogContent, DialogTitle, DialogTop } from "./CustomDialog";
import TabPanel from "./TabPanel";
import GameAni from "./GameAni";
import ExtraAni from "./ExtraAni";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { DispatchContext, SettingsContext } from "./context/SettingsContext";
import { chainCodeToList } from "./viewerHelpers";

function AnimationSelect(props) {
    const { toggleControlOpen } = props;
    const [aniSet, setAniSet] = useState(0);
    const dispatch = useContext(DispatchContext);
    const {
        chainMaker: { enable: chainMode, chain: currentChain },
    } = useContext(SettingsContext);

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
        console.log("Add to Chain");
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
                <TabPanel value={aniSet} index={0}>
                    <GameAni handleSelect={handleSelect} />
                </TabPanel>
                <TabPanel value={aniSet} index={1}>
                    <ExtraAni handleSelect={handleSelect} />
                </TabPanel>
            </DialogContent>
        </>
    );
}

export default AnimationSelect;
