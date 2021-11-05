import { useState, useEffect } from "react";
import { useChainMakerState, useModalState } from "@/state";
import { ModelIcon } from "components/DLIcon";
import { Button } from "@mui/material";
import { getModelById } from "@/data/dbFunction";

function ChainMakerTarget() {
    const { target, setTarget } = useChainMakerState();
    if (!target) return null;
    const { inputTarget } = useModalState();

    const id = target?.id;
    const [name, setName] = useState(target?.userData?.name);

    useEffect(() => {
        setName(target?.userData?.name);
        if (name || !target) return;

        getModelById(id).then(model => {
            setName(model.name);
            target.userData.name = model.name;
        });
    }, [target]);

    const modelTitle = name ?? id;

    const changeTarget = async () => {
        const newTarget = await inputTarget();
        if (!newTarget) return;

        setTarget(newTarget[0]);
    };

    return (
        target && (
            <div className="ChainMaker-target">
                Target
                <Button onClick={changeTarget} title="Click to change">
                    <ModelIcon modelId={id} alt={modelTitle} />
                    <span className="name">{modelTitle}</span>
                </Button>
            </div>
        )
    );
}

export default ChainMakerTarget;
