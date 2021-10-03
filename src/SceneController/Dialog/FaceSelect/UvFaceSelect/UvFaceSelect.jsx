import { useState, useEffect } from "react";
import { useKey, useIsMount } from "@/SceneController/hook";
import FacePartSelector from "./FacePartSelector";
import FaceBox from "./FaceBox";
import { indexes } from "./FaceBox/helper";
import "./UvFaceSelect.css";

function UvFaceSelect({ target, onSelect }) {
    const face = target?.face;
    if (!face || face?.type !== "uv") return <h2>Not Available</h2>;

    const [key, updateKey] = useKey();
    useEffect(() => {
        const listener = face.addEventListener("change", ({ propName }) => {
            if (propName.includes("Base") || propName.includes("Texture"))
                updateKey();
        });

        return () => face.removeEventListener("change", listener);
    }, []);

    const isMount = useIsMount();
    const [part, setPart] = useState("Both");
    useEffect(() => !isMount && updateKey(), [part]);

    const handleSelect = event => {
        const { index } = event.currentTarget.dataset;
        if (part !== "Eyes") onSelect(index, "mouth");
        if (part !== "Mouth") onSelect(index, "eye");
    };

    const { eyeBaseIdx, eyeTexture, mouthBaseIdx, mouthTexture } = face;

    return (
        <div className="UvFaceSelect">
            <FacePartSelector value={part} onClick={setPart} />
            <div key={key} className="FaceBoxes">
                {indexes.map(index => (
                    <FaceBox
                        eyeTexture={eyeTexture}
                        eyeIdx={part === "Mouth" ? eyeBaseIdx : index}
                        mouthTexture={mouthTexture}
                        mouthIdx={part === "Eyes" ? mouthBaseIdx : index}
                        data-index={index}
                        onClick={handleSelect}
                    />
                ))}
            </div>
        </div>
    );
}

export default UvFaceSelect;
