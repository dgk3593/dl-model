import { useToggleState } from "@/SceneController/hook";
import { PlayArrow, Pause, SkipPrevious, SkipNext } from "@mui/icons-material";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import GlowToggle from "components/GlowToggle";

import "./ModelTimeControl.css";
import ModelTimeScaleControl from "./ModelTimeScaleControl";

function ModelTimeControl({ target }) {
    const { animation } = target;
    const [isPaused, togglePaused] = useToggleState(animation.isPaused);
    const [isReverse, toggleIsReverse] = useToggleState(
        animation.mixer.timeScale < 0
    );
    const onTogglePause = () => {
        isPaused ? animation.resume() : animation.pause();
        togglePaused();
    };

    const onToggleReverse = () => {
        animation.mixer.timeScale *= -1;
        toggleIsReverse();
    };

    const handleSkip = event => {
        const { dir } = event.currentTarget.dataset;
        const multiplier = dir === "next" ? 1 : -1;
        const FPS = 60;
        const skipTime = (1 / FPS) * multiplier;
        if (isPaused) {
            animation.resume();
            animation.update(skipTime);
            animation.pause();
        } else animation.update(skipTime);
    };

    return (
        <div className="ModelTimeControl">
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

            <ModelTimeScaleControl isReverse={isReverse} target={target} />
        </div>
    );
}

export default ModelTimeControl;
