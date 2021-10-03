import { useToggleState } from "hook/useToggleState";
import Setters from "@/SceneController/components/Setters";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Draggable } from "react-beautiful-dnd";

import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

import { props } from "./props";
import { passData } from "@/dl-viewer/utils/postProcessing";
import "./EffectController.css";

function EffectController({ target, index }) {
    const [open, toggleOpen] = useToggleState(target.open ?? false);
    const { type } = target;
    const { name } = passData[type];

    const handleToggle = () => {
        target.open = !open;
        toggleOpen();
    };

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

    const body = provided => (
        <div
            className={`EffectController ${open ? "open" : ""}`}
            {...provided.draggableProps}
            ref={provided.innerRef}
        >
            <div className="EffectController-summary" onClick={handleToggle}>
                {open ? <ArrowDropUp /> : <ArrowDropDown />}

                <div
                    className="EffectController-name"
                    {...provided.dragHandleProps}
                >
                    {name}
                </div>

                {removeButton}
            </div>

            {open && (
                <div className="EffectController-details">
                    <Setters target={target.params} propList={propList} />
                </div>
            )}
        </div>
    );

    return (
        <Draggable draggableId={target.id} index={index}>
            {body}
        </Draggable>
    );
}

export default EffectController;
