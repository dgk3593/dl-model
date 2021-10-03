import { useState } from "react";
import { TextField } from "@mui/material";

function ChainAniAdvanced({ ani }) {
    const [state, setState] = useState({
        timeScale: ani.timeScale,
        reps: ani.reps,
    });
    const handleParamChange = event => {
        const { name, value } = event.target;
        const inputValue =
            name === "reps" ? parseInt(value) : parseFloat(value);
        const setValue = isNaN(inputValue) ? 1 : inputValue;
        ani[name] = setValue;
        setState(oldState => ({ ...oldState, [name]: setValue }));
    };

    return (
        <div className="ChainAni-advanced">
            <TextField
                onChange={handleParamChange}
                label="Speed"
                size="small"
                margin="dense"
                variant="filled"
                inputProps={{
                    type: "number",
                    step: 0.25,
                    name: "timeScale",
                }}
                value={state.timeScale}
            />
            <TextField
                onChange={handleParamChange}
                label="Repetitions"
                size="small"
                margin="dense"
                variant="filled"
                inputProps={{
                    type: "number",
                    name: "reps",
                }}
                value={state.reps}
            />
        </div>
    );
}

export default ChainAniAdvanced;
