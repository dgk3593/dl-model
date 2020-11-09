import { lazy, Suspense, useContext } from "react";

import { DispatchContext, SettingsContext } from "./context/SettingsContext";

import Close from "@material-ui/icons/Close";

import Button from "@material-ui/core/Button";

import { generateChainCode } from "./helpers";

import "./styles/ChainMaker.css";

const DisplayAniList = lazy(() => import("./DisplayAniList"));

function ChainMaker({ openControl }) {
    const {
        chainMaker: { chain },
    } = useContext(SettingsContext);
    const dispatch = useContext(DispatchContext);

    const close = () => {
        const action = {
            type: "update",
            key: "app",
            value: { sideContent: "settings" },
        };
        dispatch(action);
    };

    const handleChange = event => {
        const { id, name, value } = event.target;
        let newChain = [...chain];
        const ani = newChain.find(a => a.id === id);
        switch (name) {
            case "repetitions":
                ani[name] = value < 0 ? 0 : Math.round(value);
                break;
            default:
                ani[name] = value;
        }
        const action = {
            type: "update",
            key: "chainMaker",
            value: { chain: newChain },
        };
        dispatch(action);
    };

    const applyCode = code => {
        const action = {
            type: "update",
            key: "animation",
            value: { code },
        };
        dispatch(action);
    };

    const singlePlay = event => {
        const { id } = event.currentTarget;
        const ani = chain.find(a => a.id === id);

        const code = generateChainCode([ani]);
        applyCode(code);
    };

    const deleteSingle = event => {
        if (chain.length === 1) return;
        const { id } = event.currentTarget;
        const action = {
            type: "update",
            key: "chainMaker",
            value: { chain: chain.filter(ani => ani.id !== id) },
        };
        dispatch(action);
    };

    const playAll = () => {
        const code = generateChainCode(chain);
        applyCode(code);
    };

    const add = () => {
        openControl("addAni");
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
                    <Button onClick={add} className="ChainMaker-btn">
                        Add
                    </Button>
                </div>
                <div className="ChainMaker-list">
                    <DisplayAniList
                        singlePlay={singlePlay}
                        deleteSingle={deleteSingle}
                        handleChange={handleChange}
                        chain={chain}
                    />
                </div>
            </Suspense>
        </div>
    );
}

export default ChainMaker;
