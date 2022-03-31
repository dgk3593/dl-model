import { useState } from "react";
import { DialogTitle, DialogContent } from "@mui/material";
import TabBar from "components/TabBar";
import ColorPicker from "components/ColorPicker";
import BackgroundImagePicker from "./BackgroundImagePicker";
import SkyboxPicker from "./SkyboxPicker";
import "./BackgroundPicker.css";
import viewer from "@/viewer";

const types = ["Color", "Image", "Skybox"].map(name => ({ name }));
const picker = {
    Color: ColorPicker,
    Image: BackgroundImagePicker,
    Skybox: SkyboxPicker,
};

/**
 * @param {string} bg
 */
const getBackgroundType = bg => {
    if (bg.startsWith("sky:")) return "Skybox";
    if (bg.startsWith("img:")) return "Image";

    return "Color";
};

/**
 * @param {object} props
 * @param {() => void} [props.onAfterSelect]
 */
function BackgroundPicker({ onAfterSelect }) {
    const initType = getBackgroundType(viewer.background);
    const [type, setType] = useState(initType);
    /**
     * @param {string} bg
     */
    const handleSelect = bg => {
        viewer.background = bg;
        onAfterSelect?.();
    };

    const handleTypeChange = (_, newType) => setType(newType);

    const Picker = picker[type] ?? (() => null);

    return (
        <div className="BackgroundPicker">
            <DialogTitle sx={{ textAlign: "center" }}>
                Choose a background
            </DialogTitle>

            <TabBar value={type} onChange={handleTypeChange} tabs={types} />

            <DialogContent>
                <Picker onSelect={handleSelect} />
            </DialogContent>
        </div>
    );
}

export default BackgroundPicker;
