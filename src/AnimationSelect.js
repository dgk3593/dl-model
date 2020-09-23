import React, { useState, useContext } from "react";

import { DialogContent, DialogTitle, DialogTop } from "./CustomDialog";
import TabPanel from "./TabPanel";
import GameAni from "./GameAni";
import ExtraAni from "./ExtraAni";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { DispatchContext } from "./context/SettingsContext";

function AnimationSelect(props) {
    const { toggleControlOpen } = props;
    const [aniSet, setAniSet] = useState(0);
    const dispatch = useContext(DispatchContext);

    const handleSelect = event => {
        const aniCode = event.currentTarget.dataset.value;
        const action = {
            type: "update",
            key: "animation",
            value: { code: aniCode },
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
                    Select an Animation
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
