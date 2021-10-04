import { useToggleState } from "@/SceneController/hook";
import { useAppState } from "@/state";
import {
    PlayArrow,
    Pause,
    SkipPrevious,
    SkipNext,
    Close,
} from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/material";
import GlowToggle from "components/GlowToggle";
import viewer from "@/viewer";

import "./TimeControl.css";
import TimeScaleControl from "./TimeScaleControl";

function TimeControl() {
    const [isPaused, togglePaused] = useToggleState(viewer.loop.paused);
    const [isReverse, toggleIsReverse] = useToggleState(viewer.loop.reverse);
    const { toggleTimeControl } = useAppState();
    const onTogglePause = () => {
        isPaused ? viewer.loop.resume() : viewer.loop.pause();
        togglePaused();
    };

    const onToggleReverse = () => {
        viewer.loop.reverse = !isReverse;
        toggleIsReverse();
    };

    const handleSkip = event => {
        const { dir } = event.currentTarget.dataset;
        const multiplier = dir === "next" ? 1 : -1;
        const FPS = 60;
        const skipTime = (1 / FPS) * multiplier;
        viewer.update(skipTime);
    };

    return (
        <div className="TimeControl">
            <ButtonGroup>
                <Button
                    variant="contained"
                    data-dir="prev"
                    onClick={handleSkip}
                    title="Previous Frame"
                >
                    <SkipPrevious />
                </Button>
                <Button
                    variant="contained"
                    onClick={onTogglePause}
                    title={isPaused ? "Resume" : "Pause"}
                >
                    {isPaused ? <PlayArrow /> : <Pause />}
                </Button>
                <Button
                    variant="contained"
                    data-dir="next"
                    onClick={handleSkip}
                    title="Next Frame"
                >
                    <SkipNext />
                </Button>
            </ButtonGroup>

            <GlowToggle
                type="text"
                value="Reverse"
                checked={isReverse}
                onClick={onToggleReverse}
            />

            <TimeScaleControl />

            <Button
                variant="contained"
                onClick={toggleTimeControl}
                title="Close"
            >
                <Close />
            </Button>
        </div>
    );
}

export default TimeControl;
