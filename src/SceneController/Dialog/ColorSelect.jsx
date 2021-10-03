import ColorPicker from "components/ColorPicker";
import { DialogTitle, DialogContent } from "@mui/material";

function ColorSelect({ onSelect }) {
    return (
        <div className="BackgroundPicker">
            <DialogTitle sx={{ textAlign: "center" }}>Pick a Color</DialogTitle>

            <DialogContent>
                <ColorPicker onSelect={onSelect} />
            </DialogContent>
        </div>
    );
}

export default ColorSelect;
