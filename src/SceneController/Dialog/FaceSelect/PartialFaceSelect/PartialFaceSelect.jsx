import { useActiveModel } from "@/state";
import { DialogTitle, DialogContent } from "@mui/material";
import PartialFaceSelectBody from "./PartialFaceSelectBody";
import "./PartialFaceSelect.css";

const title = {
    eye: "Select Eye",
    mouth: "Select Mouth",
};

function PartialFaceSelect({ part, onSelect, onAfterSelect }) {
    const { activeModel } = useActiveModel();
    const type = activeModel?.face?.type;
    if (!type) return <>Not Available</>;

    const handleSelect = (index, part) => {
        onSelect(index, part);
        onAfterSelect?.();
    };

    return type === "uv" ? (
        <div className="PartialFaceSelect" data-type={type}>
            <DialogTitle sx={{ textAlign: "center" }}>
                {title[part]}
            </DialogTitle>
            <DialogContent sx={{ padding: "1rem" }}>
                <PartialFaceSelectBody part={part} onSelect={handleSelect} />
            </DialogContent>
        </div>
    ) : (
        <div className="PartialFaceSelect" data-type={type}>
            <PartialFaceSelectBody part={part} onSelect={handleSelect} />
        </div>
    );
}

export default PartialFaceSelect;
