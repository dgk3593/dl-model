import { useEffect } from "react";
import { useKey } from "@/SceneController/hook";
import { ArrayWithEvent } from "@/dl-viewer/utils/ArrayWithEvent";
import { useActiveModel } from "@/state";
import ChainAni from "./ChainAni";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

function ChainAniList() {
    const { activeModel } = useActiveModel();
    const [key, updateKey] = useKey();
    if (!activeModel) return null;
    const chain =
        activeModel.userData.chain ??
        (activeModel.userData.chain = new ArrayWithEvent());

    useEffect(() => {
        const listener = chain.addEventListener("change", updateKey);

        return () => chain.removeEventListener("change", listener);
    }, []);

    const aniList = provided => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
            {chain.map((ani, i) => (
                <ChainAni index={i} ani={ani} key={ani.id} />
            ))}
            {provided.placeholder}
        </div>
    );

    const onDragEnd = result => {
        const { destination, source } = result;
        if (!destination || destination.index === source.index) return;

        const newChain = [...chain];
        const targetAni = newChain.splice(source.index, 1)[0];
        newChain.splice(destination.index, 0, targetAni);

        chain.length = 0;
        chain.push(...newChain);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="chainList">{aniList}</Droppable>
        </DragDropContext>
    );
}

export default ChainAniList;
