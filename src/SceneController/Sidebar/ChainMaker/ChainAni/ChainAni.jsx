import Accordion from "components/Accordion";
import CloseButton from "components/CloseButton";
import ChainAniAdvanced from "./ChainAniAdvanced";
import ChainAniDuration from "./ChainAniDuration";
import ChainAniFace from "./ChainAniFace";
import { IconButton } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

import { generateChainCode } from "../helper";

const PlayButton = ({ onClick }) => (
  <IconButton onClick={onClick} title="Play">
    <PlayArrow />
  </IconButton>
);

function ChainAni({
  target,
  ani,
  index,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  isDragOver,
  isDragging,
}) {
  const { chain } = target.userData;

  const remove = event => {
    event.stopPropagation();
    chain.remove(ani);
  };

  const play = event => {
    event.stopPropagation();
    const code = generateChainCode([ani]);
    target?.animation.addChain(code);
  };

  return (
    <Accordion
      className={`ChainAni ${isDragOver ? "drag-over" : ""} ${
        isDragging ? "dragging" : ""
      }`}
      onDragOver={event => {
        event.preventDefault();
        onDragOver?.(event, index);
      }}
      onDrop={event => {
        event.preventDefault();
        onDrop?.(event, index);
      }}
    >
      <>
        <PlayButton onClick={play} />
        <div
          className="ChainAni-name"
          draggable
          onDragStart={event => onDragStart?.(event, index)}
          onDragEnd={onDragEnd}
        >
          {ani.name}
        </div>
        <CloseButton onClick={remove} title="Delete" />
      </>
      <>
        <ChainAniAdvanced ani={ani} />
        <ChainAniDuration ani={ani} />
        <ChainAniFace ani={ani} />
      </>
    </Accordion>
  );
}

export default ChainAni;
