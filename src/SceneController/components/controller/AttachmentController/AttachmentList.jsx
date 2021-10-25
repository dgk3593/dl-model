import React, { useState, useEffect } from "react";
import { useModalState } from "@/state";
import { useKey } from "@/SceneController/hook";

import { Button, Select, MenuItem } from "@mui/material";
import BoneManager from "@/SceneController/Dialog/AttachmentManager/BoneManager";
import { Add } from "@mui/icons-material";

import { getUnique } from "@/dl-viewer/utils";
import viewer from "@/viewer";

function AttachmentList({ target }) {
    if (!target) return <></>;

    const { inputModel } = useModalState();
    const boneList = ["root", ...(target?.bones?.list ?? [])];
    const [bone, setBone] = useState(boneList[0]);
    const activeBones = getUnique(
        target.attachment.list.map(att => att.parentBone)
    );
    const [key, update] = useKey();

    useEffect(() => target?.addEventListener("AttachmentChanged", update), []);

    const handleChange = event => {
        setBone(event.target.value);
    };
    const addAttachment = async (targetBone = bone) => {
        const attachment = await inputModel();
        if (!attachment) return;

        const [id, name] = attachment;
        const att = await viewer.loadDLModel(id);
        att.userData.name = name;

        target.attach(att, targetBone === "root" ? undefined : targetBone);

        att.outline.code = target.outline.code;
        att.material.code = target.material.code;
        viewer.render();
    };

    const handleAdd = () => addAttachment();

    return (
        <React.Fragment key={target.uniqueId}>
            <div className="AttachmentController-add">
                <Select
                    className="AttachmentController-select"
                    onChange={handleChange}
                    value={bone}
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
                    onClick={handleAdd}
                >
                    <Add />
                </Button>
            </div>
            <div key={key} className="AttachmentList">
                {activeBones.map(boneName => (
                    <BoneManager
                        target={target}
                        add={addAttachment}
                        key={boneName}
                        bone={boneName}
                    />
                ))}
            </div>
        </React.Fragment>
    );
}

export default AttachmentList;
