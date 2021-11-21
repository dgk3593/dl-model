import Accordion from "components/Accordion";
import Setters from "@/SceneController/components/Setters";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

import { props } from "./props";

/**
 * @param {{ target: THREE.Light }} props
 */
function LightController({ target }) {
    const { type, name } = target;

    const remove = event => {
        event.stopPropagation();
        target.remove();
    };

    const removeButton = (
        <IconButton title="Remove" className="closeButton" onClick={remove}>
            <Close />
        </IconButton>
    );

    const propList = props[type];
    if (type === "DirectionalLight") {
        propList.find(prop => prop.propName === "position").onChange = () =>
            target.helper?.update?.();
    }

    return (
        <Accordion disableGutters className="LightController">
            <>
                {name}
                {removeButton}
            </>
            <>
                <Setters target={target} propList={propList} />
            </>
        </Accordion>
    );
}

export default LightController;
