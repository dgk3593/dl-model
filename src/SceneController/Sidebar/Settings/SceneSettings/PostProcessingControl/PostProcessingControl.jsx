import React, { useEffect, useRef, useState } from "react";
import { useKey } from "@/SceneController/hook";

import Accordion from "components/Accordion";
import { Add } from "@mui/icons-material";
import MenuButton from "components/MenuButton";
import EffectController from "components/controller/EffectController";
import Setters from "components/Setters";

import viewer from "@/viewer";
import { passTypes } from "@/dl-viewer/utils/postProcessing/passData";
import "../../SettingGroup.css";
import "./PostProcessingControl.css";

const toggleProp = {
  propName: "enabled",
  label: "Enabled",
  type: "boolean",
};

function PostProcessingControl() {
  const [key, updateKey] = useKey();
  const { passes } = viewer.postProcessing;

  useEffect(() => {
    const listener = passes.addEventListener("change", updateKey);

    return () => passes.removeEventListener("change", listener);
  }, []);

  /**
   * @type { (type: string) => void }
   */
  const addPass = type => void viewer.postProcessing.addPass(type);

  const dragSourceIndex = useRef(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (event, index) => {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", String(index));
    dragSourceIndex.current = index;
    setDraggingIndex(index);
  };

  const handleDragOver = (event, index) => {
    event.preventDefault();
    if (index !== dragSourceIndex.current) {
      setDragOverIndex(index);
    }
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    const source =
      dragSourceIndex.current ??
      Number(event.dataTransfer.getData("text/plain"));
    if (source == null || source === index) {
      setDragOverIndex(null);
      dragSourceIndex.current = null;
      return;
    }

    const newPasses = [...passes];
    const targetPass = newPasses.splice(source, 1)[0];
    newPasses.splice(index, 0, targetPass);

    viewer.postProcessing.updatePasses(newPasses);
    setDragOverIndex(null);
    dragSourceIndex.current = null;
  };

  const handleDragEnd = () => {
    setDragOverIndex(null);
    setDraggingIndex(null);
    dragSourceIndex.current = null;
  };

  return (
    <Accordion disableGutters className="PostProcessingControl SettingGroup">
      <>
        <div>Post-Processing</div>
        <MenuButton onClick={addPass} options={passTypes} title="Add Pass">
          <Add />
        </MenuButton>
      </>

      <React.Fragment key={key}>
        <Setters target={viewer.postProcessing} propList={[toggleProp]} />
        {passes.length ? (
          <div>
            {passes.map((pass, i) => (
              <EffectController
                index={i}
                key={pass.id}
                target={pass}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onDragEnd={handleDragEnd}
                isDragOver={dragOverIndex === i}
                isDragging={draggingIndex === i}
              />
            ))}
          </div>
        ) : (
          "Click + to add pass"
        )}
      </React.Fragment>
    </Accordion>
  );
}

export default PostProcessingControl;
