import { useEffect } from "react";
import { useActiveModel, useChainMakerState } from "@/state";

import ChainMakerHeader from "./ChainMakerHeader";
import ChainAniList from "./ChainAniList";

import viewer from "@/viewer";
import "./ChainMaker.css";

function ChainMaker() {
    const { activeModel } = useActiveModel();
    const { target, setTarget } = useChainMakerState();

    useEffect(() => {
        if (!target) return;
        const listener = target.addEventListener("dispose", () =>
            setTarget(activeModel)
        );

        return () => target.removeEventListener("dispose", listener);
    }, [target]);

    useEffect(() => {
        if (target && viewer.loadedModel.includes(target)) return;

        setTarget(activeModel);
    }, [target, activeModel]);

    return (
        <div className="ChainMaker" key={target?.uniqueId}>
            <ChainMakerHeader target={target} />
            <ChainAniList target={target} />
        </div>
    );
}

export default ChainMaker;
