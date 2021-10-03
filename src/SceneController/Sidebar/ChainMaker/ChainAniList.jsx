import { useEffect } from "react";
import { useKey } from "@/SceneController/hook";
import { ArrayWithEvent } from "@/dl-viewer/utils/ArrayWithEvent";
import { useActiveModel } from "@/state";
import ChainAni from "./ChainAni";

function ChainAniList() {
    const { activeModel } = useActiveModel();
    const [key, updateKey] = useKey();
    const chain =
        activeModel.userData.chain ??
        (activeModel.userData.chain = new ArrayWithEvent());

    useEffect(() => {
        const listener = chain.addEventListener("change", updateKey);

        return () => chain.removeEventListener("change", listener);
    }, []);

    return (
        <div className="ChainAniList" key={key}>
            {chain.map(ani => (
                <ChainAni ani={ani} key={ani.id} />
            ))}
        </div>
    );
}

export default ChainAniList;
