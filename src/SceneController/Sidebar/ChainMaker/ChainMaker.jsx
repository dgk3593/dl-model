import { useEffect } from "react";
import { useActiveModel, useChainMakerState } from "@/state";

import ChainMakerHeader from "./ChainMakerHeader";
import ChainAniList from "./ChainAniList";

import { ArrayWithEvent } from "@/dl-viewer/utils/ArrayWithEvent";
import viewer from "@/viewer";
import "./ChainMaker.css";

function ChainMaker() {
    const { activeModel } = useActiveModel();
    const { target, setTarget } = useChainMakerState();

    useEffect(() => {
        if (target && viewer.loadedModel.includes(target)) return;

        setTarget(activeModel);
    }, [target, activeModel]);

    return (
        <div className="ChainMaker" key={target?.uniqueId}>
            <ChainMakerHeader target={target} />
            <ChainAniList key={target?.uniqueId} target={target} />
        </div>
    );
}

export default ChainMaker;
