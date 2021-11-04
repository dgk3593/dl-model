import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useAniSelectState, useAppState } from "@/state";
import { useActiveModel } from "@/state";
import { useIsMount } from "./hook";

import Sidebar from "./Sidebar";
import Dock from "./Dock";
import RootModal from "./RootModal";
import { Menu } from "@mui/icons-material";

import { initAppData } from "data/initAppData";
import viewer from "@/viewer";

import "./SceneController.css";
import "@/fonts.css";

export default function SceneController() {
    const sidebar = useAppState(state => state.sidebar);
    const setChainMakerTarget = useAppState(
        state => state.chainMaker.setTarget
    );
    const setLoadingMsg = useAppState(state => state.setLoadingMsg);
    const isMount = useIsMount();
    const { activeModel, setActiveModel } = useActiveModel();
    const { setSource, setSourceName } = useAniSelectState(
        state => state.personalAni
    );
    const showDock = useMediaQuery("(min-width:640px)");

    useEffect(() => {
        isMount && setLoadingMsg("Loading");
        setActiveModel(viewer.model[0]);
        const listener = viewer.model.addEventListener("change", () => {
            if (!viewer.model.includes(activeModel)) {
                setActiveModel(viewer.model[0]);
            }
        });

        initAppData();
        window.addEventListener("unload", () =>
            indexedDB?.deleteDatabase("model-viewer")
        );
        setLoadingMsg("");

        return () => viewer.model.removeEventListener(listener);
    }, []);

    useEffect(() => {
        if (!activeModel) return;

        setSourceName(activeModel?.userData.name);
        setSource(activeModel?.id);
        // setChainMakerTarget(activeModel);
    }, [activeModel]);

    return (
        <>
            <button className="sidebar-toggle" onClick={sidebar.toggle}>
                <Menu />
            </button>

            <RootModal />
            <Sidebar open={sidebar.open} />
            {showDock && <Dock />}
        </>
    );
}
