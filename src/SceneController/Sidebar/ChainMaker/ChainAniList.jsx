import { useEffect, useRef, useState } from "react";
import { useKey } from "@/SceneController/hook";
import ChainAni from "./ChainAni";

function ChainAniList({ target }) {
  if (!target?.userData?.chain) return null;

  const [key, updateKey] = useKey();
  const chain = target.userData.chain;
  const dragSourceIndex = useRef(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  useEffect(() => {
    const listener = chain.addEventListener("change", updateKey);

    return () => chain.removeEventListener("change", listener);
  }, []);

  const handleDragStart = (event, index) => {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", String(index));
    dragSourceIndex.current = index;
  };

  const handleDragOver = (event, index) => {
    event.preventDefault();
    if (index !== dragSourceIndex.current) {
      setDragOverIndex(index);
    }
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    const source = dragSourceIndex.current;
    if (source == null || source === index) {
      setDragOverIndex(null);
      dragSourceIndex.current = null;
      return;
    }

    const newChain = [...chain];
    const moved = newChain.splice(source, 1)[0];
    newChain.splice(index, 0, moved);

    chain.length = 0;
    chain.push(...newChain);
    setDragOverIndex(null);
    dragSourceIndex.current = null;
  };

  const handleDragEnd = () => {
    setDragOverIndex(null);
    dragSourceIndex.current = null;
  };

  return (
    <div key={key}>
      {chain.map((ani, i) => (
        <ChainAni
          target={target}
          index={i}
          ani={ani}
          key={ani.id}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
          isDragOver={dragOverIndex === i}
        />
      ))}
    </div>
  );
}

export default ChainAniList;
