import { useAppData } from "@/data";

import Setters from "@/SceneController/components/Setters";
import { prop } from "./prop";

import "./TextureController.css";

/**
 * @param {{ target: DLModel }} props
 */
function TextureController({ target }) {
    const textureData = useAppData(data => data["model-texture"]);
    if (!textureData?.[target.id]) return null;

    /**
     * @type {import('components/Setters').PropDetails[]}
     */
    const propList = [{ ...prop, options: textureData[target.id] }];

    return (
        <div className="TextureController">
            <Setters target={target} propList={propList} />
        </div>
    );
}

export default TextureController;
