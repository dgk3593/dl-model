import React from "react";
import useToggleState from "./hooks/useToggleState";

import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import TextField from "@material-ui/core/TextField";

import Close from "@material-ui/icons/Close";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import "./styles/DisplayAni.css";

function DisplayAdvanced(props) {
    const { id, timeScale, repetitions, handleChange } = props;

    return (
        <div>
            <TextField
                onChange={handleChange}
                label="Speed"
                size="small"
                margin="dense"
                variant="outlined"
                inputProps={{
                    type: "number",
                    step: 0.25,
                    name: "timeScale",
                    id: id,
                }}
                value={timeScale}
            />
            <TextField
                onChange={handleChange}
                label="Repetitions"
                size="small"
                margin="dense"
                variant="outlined"
                inputProps={{
                    type: "number",
                    name: "repetitions",
                    id: id,
                }}
                value={repetitions}
            />
        </div>
    );
}

function DisplayAni(props) {
    const {
        name,
        id,
        timeScale,
        repetitions,
        handleChange,
        singlePlay,
    } = props;
    const [showMore, toggleShowMore] = useToggleState(false);
    const mainContent = showMore ? (
        <DisplayAdvanced
            handleChange={handleChange}
            id={id}
            timeScale={timeScale}
            repetitions={repetitions}
        />
    ) : (
        <Button className="DisplayAni-showMore" onClick={toggleShowMore}>
            Advanced Settings
        </Button>
    );

    return (
        <div className="DisplayAni">
            <div className="DisplayAni-name">{name}</div>
            <div className="DisplayAni-content">
                <Button>
                    <Close />
                </Button>
                {mainContent}
                <Button id={id} onClick={singlePlay}>
                    <PlayArrowIcon />
                </Button>
            </div>
            {showMore && (
                <div className="DisplayAni-showLess" onClick={toggleShowMore}>
                    <ExpandLessIcon />
                </div>
            )}
        </div>
    );
}

export default DisplayAni;
