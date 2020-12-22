import { lazy, Suspense, useContext } from "react";

import { DispatchContext, SettingsContext } from "context/SettingsContext";

import Close from "@material-ui/icons/Close";

import Button from "@material-ui/core/Button";

import { generateChainCode } from "helpers/helpers";

import "./styles/ChainMaker.css";

const ChainAniList = lazy(() => import("./ChainAniList"));

function ChainMaker({ openModal }) {
    const {
        chainMaker: { chain },
    } = useContext(SettingsContext);
    const dispatch = useContext(DispatchContext);

    const updateSettings = (key, value) => {
        const action = { type: "update", key, value };
        dispatch(action);
    };

    const close = () => {
        updateSettings("app", { sidebarContent: "settings" });
    };

    const applyCode = code => {
        updateSettings("animation", { code });
    };

    const playAni = event => {
        const { id } = event.currentTarget;

        const ani = chain.find(a => a.id === id);
        const code = generateChainCode([ani]);
        applyCode(code);
    };

    const deleteAniFromList = event => {
        if (chain.length === 1) return;

        const { id } = event.currentTarget;
        const newChain = chain.filter(ani => ani.id !== id);
        updateSettings("chainMaker", { chain: newChain });
    };

    const playAll = () => {
        const code = generateChainCode(chain);
        applyCode(code);
    };

    const addAniToList = () => {
        openModal("addAni");
    };

    const updateAniInChain = (id, newAni) => {
        const newChain = chain.map(ani => (ani.id === id ? newAni : ani));
        updateSettings("chainMaker", { chain: newChain });
    };

    return (
        <div className="ChainMaker">
            <div className="ChainMaker-header">
                <div className="ChainMaker-title">Chain Maker</div>
                <div className="ChainMaker-close" onClick={close}>
                    <Close />
                </div>
            </div>
            <Suspense fallback={<div>Loading</div>}>
                <div className="ChainMaker-btns">
                    <Button onClick={playAll} className="ChainMaker-btn">
                        Play All
                    </Button>
                    <Button onClick={addAniToList} className="ChainMaker-btn">
                        Add
                    </Button>
                </div>
                <div className="ChainMaker-list">
                    <ChainAniList
                        openModal={openModal}
                        playAni={playAni}
                        deleteAni={deleteAniFromList}
                        updateAni={updateAniInChain}
                        chain={chain}
                    />
                </div>
            </Suspense>
        </div>
    );
}

export default ChainMaker;
