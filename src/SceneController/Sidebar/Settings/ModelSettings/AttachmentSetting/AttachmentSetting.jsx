import { ModelIcon } from "components/DLIcon";
import Accordion from "components/Accordion";
import { ModelController } from "components/controller";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import "./AttachmentSetting.css";

function AttachmentSetting({ target, label }) {
    const remove = e => {
        e.stopPropagation();
        target.dispose();
    };

    const modelIcon = (
        <ModelIcon
            modelId={target.id}
            alt={target?.userData.name}
            className="AttachmentIcon"
        />
    );

    const removeButton = (
        <IconButton
            title="Remove"
            className="closeButton"
            onClick={remove}
            size="large"
        >
            <Close />
        </IconButton>
    );

    return (
        <Accordion className="AttachmentSetting">
            <>
                {modelIcon}
                {label}
                {removeButton}
            </>
            <>
                <ModelController target={target} />
            </>
        </Accordion>
    );
}

export default AttachmentSetting;
