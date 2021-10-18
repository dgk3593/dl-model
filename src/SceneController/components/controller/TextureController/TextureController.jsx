import { useEffect } from "react";
import { useKey } from "@/SceneController/hook";
import { useAppData } from "@/data";

import Setters from "@/SceneController/components/Setters";
import { prop } from "./prop";

import "./TextureController.css";

function TextureController({ target }) {
    const textureData = useAppData(data => data["model-texture"]);
    if (!textureData?.[target.id]) return null;

    const [key, update] = useKey();

    useEffect(update, [target]);

    const propList = [{ ...prop, options: textureData[target.id] }];

    return (
        <div key={key} className="TextureController">
            <Setters target={target} propList={propList} />
        </div>
    );
}

export default TextureController;
