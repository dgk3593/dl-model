import { useState } from "react";
import { TextField } from "@mui/material";
import { Close } from "@mui/icons-material";
import FacePartBox from "./FacePartBox";
import { useModalState } from "@/state";

const inputProps = {
    type: "number",
    min: 0,
    max: 100,
    step: 1,
};
const sx = { marginTop: "0.2rem" };

function ChainAniFaceChange({ details, onUpdate, onRemove }) {
    const { id, time, eyeIdx, mouthIdx } = details;
    const [actionTime, setActionTime] = useState(time);
    const { inputEye, inputMouth } = useModalState();
    const handleRemove = () => onRemove(id);

    const handleChange = event => {
        const newTime = parseFloat(event.target.value);
        setActionTime(newTime);

        const newDetails = { ...details, time: newTime };
        onUpdate(newDetails);
    };

    const handleSet = async event => {
        const { part } = event.currentTarget.dataset;
        const input = part === "eye" ? await inputEye() : await inputMouth();
        if (!input) return;

        const newIndex = input[0] ? input[0] : undefined;
        const newDetails = { ...details, [`${part}Idx`]: newIndex };
        onUpdate(newDetails);
    };

    return (
        <>
            <div onClick={handleRemove}>
                <Close />
            </div>
            <TextField
                onChange={handleChange}
                inputProps={inputProps}
                value={actionTime}
                margin="dense"
                size="small"
                variant="standard"
                sx={sx}
            />

            <FacePartBox
                part="eye"
                index={eyeIdx}
                data-id={id}
                onClick={handleSet}
            />
            <FacePartBox
                part="mouth"
                index={mouthIdx}
                data-id={id}
                onClick={handleSet}
            />
        </>
    );
}

export default ChainAniFaceChange;
