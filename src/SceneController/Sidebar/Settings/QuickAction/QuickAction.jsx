import { useAppState, useActiveModel } from "@/state";

import { IconButton } from "@mui/material";
import {
    Panorama as BackgroundIcon,
    Camera as CameraIcon,
    FiberManualRecord as RecordIcon,
    Download,
    Gif,
} from "@mui/icons-material";

import viewer from "@/viewer";
import "./QuickAction.css";
import { downloadModel, quickGif } from "./helper";

function QuickAction() {
    const { activeModel } = useActiveModel();
    const { record, screenshot } = viewer;
    const openModal = useAppState(state => state.sidebar.modal.open);

    const takeScreenshot = event => {
        event.stopPropagation();
        screenshot.downloadFrame();
    };

    const handleQuickRecord = event => {
        event.stopPropagation();
        const { clipDuration } = activeModel.animation.current;
        if (clipDuration === 0 || clipDuration === Infinity) {
            alert("Can't record");
            return;
        }

        const { animation } = activeModel;
        animation.stop();
        animation.addCountedEventListener("ChainFinished", () => record.stop());
        animation.play();
        record.start();
    };

    const handleDownload = () => downloadModel(activeModel.id);

    return (
        <div className="QuickAction">
            <IconButton
                title="Change Background"
                onClick={() => openModal("background")}
            >
                <BackgroundIcon />
            </IconButton>

            <IconButton title="Get Screenshot" onClick={takeScreenshot}>
                <CameraIcon />
            </IconButton>

            <IconButton title="Create GIF" onClick={quickGif}>
                <Gif fontSize="large" />
            </IconButton>

            {record && (
                <IconButton
                    title="Record Current Animation"
                    onClick={handleQuickRecord}
                >
                    <RecordIcon />
                </IconButton>
            )}

            <IconButton title="Download Current Model" onClick={handleDownload}>
                <Download />
            </IconButton>
        </div>
    );
}

export default QuickAction;
