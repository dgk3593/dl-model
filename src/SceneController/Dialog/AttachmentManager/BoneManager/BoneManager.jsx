import AttachmentSetting from "@/SceneController/Sidebar/Settings/ModelSettings/AttachmentSetting";
import { useActiveModel } from "@/state";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import Accordion from "components/Accordion";

import "./BoneManager.css";

function BoneManager({ bone, add }) {
    const { activeModel } = useActiveModel();
    const attList = activeModel?.attachment[bone] ?? [];
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
