import { useState } from "react";
import viewer from "@/viewer";
import { capitalize } from "@/dl-viewer/utils";
import { Button } from "@mui/material";
import {
    Pause,
    Stop,
    FiberManualRecord as RecordIcon,
} from "@mui/icons-material";

function ManualRecordControl() {
    const [state, setState] = useState(viewer.record.state);
    const handleClick = event => {
        const { action } = event.currentTarget.dataset;
        viewer.record[action]?.();
        setState(action === "stop" ? "idle" : viewer.record.state);
    };

    const recordButton = (
        <Button
            onClick={handleClick}
            data-action={state === "idle" ? "start" : "resume"}
        >
            <RecordIcon />
        </Button>
    );
    const pauseButton = (
        <Button onClick={handleClick} data-action="pause">
            <Pause />
        </Button>
    );
    const stopButton = (
        <Button onClick={handleClick} data-action="stop">
            <Stop />
        </Button>
    );
    const control = {
        idle: recordButton,
        recording: (
            <>
                {pauseButton}
                {stopButton}
            </>
        ),
        paused: (
            <>
                {recordButton}
                {stopButton}
            </>
        ),
    };

    return (
        <>
            <div>{`Status: ${capitalize(state)}`}</div>
            <div>{control[state]}</div>
        </>
    );
}

export default ManualRecordControl;
