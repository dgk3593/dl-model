import { useEffect, useState, useRef } from "react";
import { useKey } from "@/SceneController/hook";
import { useActiveModel, useModalState } from "@/state";
import {
    DialogTitle,
    DialogContent,
    Box,
    Select,
    MenuItem,
    Button,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import Stretcher from "components/Stretcher";
import BoneManager from "./BoneManager";
import { getUnique } from "@/dl-viewer/utils";
import viewer from "@/viewer";

import "./AttachmentManager.css";

function AttachmentManager() {
    const { activeModel } = useActiveModel();
    const [key, update] = useKey();
    const { inputModel } = useModalState();
    const removeListener = useRef(() => void 0);

    const boneList = ["root", ...(activeModel?.bones?.list ?? [])];
    const [bone, setBone] = useState(boneList[0]);

    const activeBones = getUnique(
        activeModel.attachment.list.map(att => att.parentBone)
    );

    useEffect(() => {
        if (!activeModel) return;

        // remove old listener
        removeListener.current();

        const listener = activeModel.addEventListener(
            "AttachmentChanged",
            update
        );
        removeListener.current = () =>
            activeModel.removeEventListener("AttachmentChanged", listener);

        return removeListener.current;
    }, [activeModel]);

    const handleChange = event => {
        setBone(event.target.value);
    };

    const addAttachment = async () => {
        const attachment = await inputModel();
        if (!attachment) return;

        const [id, name] = attachment;
        const att = await viewer.loadDLModel(id);
        att.userData.name = name;

        activeModel.attach(att, bone === "root" ? undefined : bone);

        att.outline.code = activeModel.outline.code;
        att.material.code = activeModel.material.code;
        viewer.render();
    };

    return (
        <Box className="AttachmentManager">
            <Box className="AttachmentManager-top">
                <DialogTitle>Manage Attachments</DialogTitle>
                <Box className="AttachmentManager-add">
                    <Select
                        onChange={handleChange}
                        value={bone}
                        className="AttachmentManager-select"
                    >
                        {boneList.map(boneName => (
                            <MenuItem key={boneName} value={boneName}>
                                {boneName}
                            </MenuItem>
                        ))}
                    </Select>
                    <Button
                        title="Add Attachment"
                        variant="contained"
                        onClick={addAttachment}
                    >
                        <Add />
                    </Button>
                </Box>
            </Box>

            <DialogContent key={key} className="AttachmentManager-body">
                <Stretcher />
                {activeBones.map(boneName => (
                    <BoneManager key={boneName} bone={boneName} />
                ))}
            </DialogContent>
        </Box>
    );
}

export default AttachmentManager;
