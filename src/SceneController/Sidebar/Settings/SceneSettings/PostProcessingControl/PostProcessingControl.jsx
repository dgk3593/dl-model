import React, { useEffect } from "react";
import { useKey } from "@/SceneController/hook";

import Accordion from "components/Accordion";
import { Add } from "@mui/icons-material";
import MenuButton from "components/MenuButton";
import EffectController from "components/controller/EffectController";
import Setters from "components/Setters";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import viewer from "@/viewer";
import { passTypes } from "@/dl-viewer/utils/postprocessing/passData";
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

    const onDragEnd = result => {
        const { destination, source } = result;
        if (!destination || destination.index === source.index) return;

        const newPasses = [...passes];
        const targetPass = newPasses.splice(source.index, 1)[0];
        newPasses.splice(destination.index, 0, targetPass);

        viewer.postProcessing.updatePasses(newPasses);
    };

    const passList = provided => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
            {passes.map((pass, i) => (
                <EffectController index={i} key={pass.id} target={pass} />
            ))}
            {provided.placeholder}
        </div>
    );

    return (
        <Accordion
            disableGutters
            className="PostProcessingControl SettingGroup"
        >
            <>
                <div>Post-Processing</div>
                <MenuButton
                    onClick={addPass}
                    options={passTypes}
                    title="Add Pass"
                >
                    <Add />
                </MenuButton>
            </>

            <React.Fragment key={key}>
                <Setters
                    target={viewer.postProcessing}
                    propList={[toggleProp]}
                />
                {passes.length ? (
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="postprocessing">
                            {passList}
                        </Droppable>
                    </DragDropContext>
                ) : (
                    "Click + to add pass"
                )}
            </React.Fragment>
        </Accordion>
    );
}

export default PostProcessingControl;
