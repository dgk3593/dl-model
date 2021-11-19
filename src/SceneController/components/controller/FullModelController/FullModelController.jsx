import { ModelIcon } from "components/DLIcon";
import Accordion from "components/Accordion";
import { ModelController } from "..";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

import "./FullModelController.css";

/**
 * Render a controller for a DL model inside an Accordion
 * @param {object} props
 * @param {DLModel} props.target - The DL model to control
 * @param {string} [props.label] - Controller label
 */
function FullModelController({
    target,
    label = target?.userData?.name ?? target.id,
}) {
    const remove = e => {
        e.stopPropagation();
        target.dispose();
    };

    const modelIcon = (
        <ModelIcon
            modelId={target.id}
            alt={target?.userData.name}
            className="FullModelController-icon"
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
        <Accordion className="FullModelController">
            <>
                {modelIcon}
                {label}
                {removeButton}
            </>

            <ModelController target={target} />
        </Accordion>
    );
}

export default FullModelController;
