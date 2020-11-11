import useToggleState from "./hooks/useToggleState";

import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import TextField from "@material-ui/core/TextField";

import Close from "@material-ui/icons/Close";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./styles/DisplayAni.css";

function DisplayAdvanced(props) {
    const { id, timeScale, repetitions, handleChange } = props;

    return (
        <div className="DisplayAni-timeRep">
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
        deleteSingle,
    } = props;

    const [expand, toggleExpand] = useToggleState(false);

    return (
        <div className="DisplayAni">
            <div className="DisplayAni-name">{name}</div>
            <div className="DisplayAni-topBtns">
                <Button id={id} onClick={deleteSingle}>
                    <Close />
                </Button>
                <Button id={id} onClick={singlePlay}>
                    <PlayArrowIcon />
                </Button>
            </div>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <DisplayAdvanced
                    handleChange={handleChange}
                    id={id}
                    timeScale={timeScale}
                    repetitions={repetitions}
                />
            </Collapse>
            <div className="DisplayAni-toggleExpand" onClick={toggleExpand}>
                {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
        </div>
    );
}

export default DisplayAni;
