import { DialogTitle, DialogContent } from "@mui/material";
import "./AttachmentManager.css";

function AttachmentManager() {
    return (
        <div className="AttachmentManager">
            <DialogTitle sx={{ textAlign: "center" }}>
                Manage Attachments
            </DialogTitle>
            <DialogContent></DialogContent>
        </div>
    );
}

export default AttachmentManager;
