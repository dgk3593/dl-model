import { useEffect } from "react";
import { useKey } from "@/SceneController/hook";
import ChainAni from "./ChainAni";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

function ChainAniList({ target }) {
    if (!target?.userData?.chain) return null;

    const [key, updateKey] = useKey();
    const chain = target.userData.chain;

    useEffect(() => {
        const listener = chain.addEventListener("change", updateKey);

        return () => chain.removeEventListener("change", listener);
    }, []);

    const aniList = provided => (
        <div key={key} ref={provided.innerRef} {...provided.droppableProps}>
            {chain.map((ani, i) => (
                <ChainAni target={target} index={i} ani={ani} key={ani.id} />
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
