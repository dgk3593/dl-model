import AttachmentSetting from "@/SceneController/Sidebar/Settings/ModelSettings/AttachmentSetting";
import { useActiveModel } from "@/state";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import Accordion from "components/Accordion";

import "./BoneManager.css";

/**
 * @param {Object} props
 * @param {string} props.bone
 * @param {(boneName?: string) => void} props.add
 * @param {DLModel} [props.target]
 */
function BoneManager({ bone, add, target }) {
    const { activeModel } = useActiveModel();
    target ??= activeModel;
    const attList = target?.attachment[bone] ?? [];
    const handleAdd = event => {
        event.stopPropagation();
        add(bone);
    };

    return (
        <Accordion defaultOpen className="BoneManager" disableGutters>
            <>
                <div className="BoneManager-name">{bone}</div>
                <Button
                    variant="contained"
                    className="BoneManager-add"
                    onClick={handleAdd}
                >
                    <Add />
                </Button>
            </>
            <>
                {attList.map(att => (
                    <AttachmentSetting
                        target={att}
                        label={att?.userData?.name ?? att.id}
                    />
                ))}
            </>
        </Accordion>
    );
}

export default BoneManager;
