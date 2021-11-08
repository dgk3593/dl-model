import { useAppState } from "@/state";
import React from "react";

import { People, Person } from "@mui/icons-material";

import IconTabBar from "@/SceneController/components/IconTabBar";
import { Box } from "@mui/material";
import SingleMode from "./SingleMode";
import MultiMode from "./MultiMode";

const tabs = [
    {
        title: "Single Model",
        value: "single",
        icon: <Person />,
    },
    {
        title: "Multiple Model",
        value: "multi",
        icon: <People />,
    },
];

const components = {
    single: SingleMode,
    multi: MultiMode,
};

const styles = {
    ModeSelect: {
        backgroundColor: "#10101078",
        color: "#eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "2rem",
        marginBottom: "0.3rem",
        cursor: "default",
    },
};

function ModelSettings() {
    const { manageMode, setManageMode } = useAppState(state => state.sidebar);
    const Component = components[manageMode] ?? React.Fragment;

    return (
        <>
            <Box className="ModeSelect" sx={styles.ModeSelect}>
                Mode
                <IconTabBar
                    tabs={tabs}
                    className="ModeSelect-tabs"
                    value={manageMode}
                    onChange={setManageMode}
                />
            </Box>
            <Component />
        </>
    );
}

export default ModelSettings;
