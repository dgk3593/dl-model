import { useEffect } from "react";
import { useKey } from "@/SceneController/hook";

import Accordion from "components/Accordion";
import { Button } from "@mui/material";
import { ModelIcon } from "components/DLIcon";
import { getUnique } from "@/dl-viewer/utils";

import "./ModelTree.css";
import BoneChildren from "./BoneChildren";
import { Check } from "@mui/icons-material";
import { getModelById } from "@/data/dbFunction";

function ModelTree({ target, onSelect }) {
    if (!target) return null;

    const [key, update] = useKey();
    useEffect(() => {
        const listener = target.addEventListener("AttachmentChanged", update);
        return () => target.removeEventListener("AttachmentChanged", listener);
    }, []);

    useEffect(() => {
        if (target.userData.name) return;

        getModelById(target.id).then(model => {
            target.userData.name = model?.name;
            update();
        });
    }, []);

    const id = target.id;
    const name = target?.userData.name;
    const label = name ?? id;
    const modelIcon = (
        <ModelIcon modelId={id} alt={name ?? id} className="ModelTree-icon" />
    );
    const activeBones = getUnique(
        target.attachment.list.map(att => att.parentBone)
    );

    const handleSelect = () => onSelect(target);
    const summary = (
        <>
            {modelIcon}
            <div className="target-name">{label}</div>
            <Button title="Select" variant="contained" onClick={handleSelect}>
                <Check />
            </Button>
        </>
    );

    return activeBones.length ? (
        <Accordion disableGutters key={key} className="ModelTree">
            {summary}
            <>
                {activeBones.map(bone => (
                    <BoneChildren
                        defaultOpen={activeBones.length === 1}
                        label={bone}
                        onSelect={onSelect}
                        list={target.attachment[bone]}
                    />
                ))}
            </>
        </Accordion>
    ) : (
        <div key={key} className="ModelTree">
            {summary}
        </div>
    );
}

export default ModelTree;
