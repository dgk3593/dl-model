import { useAppState, useActiveModel } from "@/state";

import { IconButton } from "@mui/material";
import {
    Panorama as BackgroundIcon,
    Camera as CameraIcon,
    FiberManualRecord as RecordIcon,
} from "@mui/icons-material";

import viewer from "@/viewer";
import "./QuickAction.css";

function QuickAction() {
    const { activeModel } = useActiveModel();
    const { record, screenshot } = viewer;
    const openModal = useAppState(state => state.sidebar.modal.open);

    const takeScreenshot = event => {
        event.stopPropagation();
        screenshot.get();
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

            {record && (
                <IconButton
                    title="Record Current Animation"
                    onClick={handleQuickRecord}
                >
                    <RecordIcon />
                </IconButton>
            )}
        </div>
    );
}

export default QuickAction;
