import { useEffect } from "react";
import { useKey } from "@/SceneController/hook";
import { useActiveModel } from "@/state";
import { DialogTitle, DialogContent } from "@mui/material";
import Stretcher from "components/Stretcher";
import BoneManager from "./BoneManager";

import "./AttachmentManager.css";
import { getUnique } from "@/dl-viewer/utils";

function AttachmentManager() {
    const { activeModel } = useActiveModel();
    const [key, updateKey] = useKey();
    const boneList = activeModel?.bones.list ?? [];
    const activeBones = getUnique(
        activeModel.attachment.list.map(att => att.parentBone)
    );

    useEffect(() => {
        if (!activeModel) return;
        const current = activeModel;

        const listener = current.addEventListener(
            "AttachmentChanged",
            updateKey
        );
        return () => current.removeEventListener("AttachmentChanged", listener);
    });

    return (
        <div className="AttachmentManager">
            <DialogTitle sx={{ textAlign: "center" }}>
                Manage Attachments
            </DialogTitle>
            <DialogContent className="AttachmentManager-body">
                <Stretcher />
                {activeBones.map(bone => (
                    <BoneManager bone={bone} />
                ))}
            </DialogContent>
        </div>
    );
}

export default AttachmentManager;
