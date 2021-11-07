import { useState, useEffect } from "react";
import { useActiveModel, useAniSelectState, useAppState } from "@/state";
import { Button } from "@mui/material";
import { ModelIcon } from "components/DLIcon";
import { getModelById } from "@/data/dbFunction";

import "./TargetSetting.css";

const changeActiveModel = target => {
    useActiveModel.getState().setActiveModel(target);
    useAniSelectState
        .getState()
        .setCategory(target.type === "adventurer" ? "Adv" : "Personal");
};

function TargetSetting() {
    const { activeModel } = useActiveModel();
    const id = activeModel?.id;
    const [name, setName] = useState(activeModel?.userData?.name);

    const openModal = useAppState(state => state.sidebar.modal.open);
    const handleClick = () => openModal("target", changeActiveModel);

    useEffect(() => {
        setName(activeModel?.userData?.name);
        if (name || !activeModel) return;

        getModelById(id).then(model => {
            if (!model) return;
            setName(model.name);
            activeModel.userData.name = model.name;
        });
    }, [activeModel]);

    const modelTitle = name ?? id ?? "None";

    return (
        <div className="ModelSettings-target">
            Current
            <Button onClick={handleClick} title="Click to change">
                <ModelIcon modelId={id} alt={modelTitle} />
                <span className="name">{modelTitle}</span>
            </Button>
        </div>
    );
}

export default TargetSetting;
