import Accordion from "components/Accordion";
import Setters from "@/SceneController/components/Setters";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

import { props } from "./props";

import "./AuraController.css";

function AuraController({ target }) {
    const { name } = target;
    const remove = event => {
        event.stopPropagation();
        target.dispose();
    };

    const removeButton = (
        <IconButton title="Remove" className="closeButton" onClick={remove}>
            <Close />
        </IconButton>
    );

    return (
        <Accordion disableGutters className="AuraController">
            <>
                {name}
                {removeButton}
            </>
            <Setters target={target} propList={props} />
        </Accordion>
    );
}

export default AuraController;
