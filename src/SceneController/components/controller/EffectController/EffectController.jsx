import { useToggleState } from "hook/useToggleState";
import Setters from "@/SceneController/components/Setters";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

import { props } from "./props";
import { passData } from "@/dl-viewer/utils/postProcessing";
import "./EffectController.css";

function EffectController({
  target,
  index,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  isDragOver,
  isDragging,
}) {
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

  return (
    <div
      className={`EffectController ${open ? "open" : ""} ${
        isDragOver ? "drag-over" : ""
      } ${isDragging ? "dragging" : ""}`}
      onDragOver={event => {
        event.preventDefault();
        onDragOver?.(event, index);
      }}
      onDrop={event => {
        event.preventDefault();
        onDrop?.(event, index);
      }}
    >
      <div className="EffectController-summary" onClick={handleToggle}>
        {open ? <ArrowDropUp /> : <ArrowDropDown />}

        <div
          className="EffectController-name"
          draggable
          onDragStart={event => onDragStart?.(event, index)}
          onDragEnd={onDragEnd}
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
}

export default EffectController;
