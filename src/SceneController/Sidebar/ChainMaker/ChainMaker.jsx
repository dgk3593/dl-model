import ChainMakerHeader from "./ChainMakerHeader";
import ChainAniList from "./ChainAniList";

import { useActiveModel } from "@/state";

import "./ChainMaker.css";

function ChainMaker() {
    const { activeModel } = useActiveModel();

    return (
        <div className="ChainMaker" key={activeModel?.uniqueId ?? 0}>
            <ChainMakerHeader />
            <ChainAniList />
        </div>
    );
}

export default ChainMaker;
