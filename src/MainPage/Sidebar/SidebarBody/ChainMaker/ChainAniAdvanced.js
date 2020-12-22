import TextField from "@material-ui/core/TextField";

import ChainAniFace from "./ChainAniFace";

import { v4 as uuid } from "uuid";

function ChainAniAdvanced(props) {
    const {
        timeScale,
        repetitions,
        faceChanges,
        updateParams,
        openModal,
    } = props;

    const handleParamChange = event => {
        const { name, value } = event.target;
        const updateValue = { [name]: value };
        updateParams(updateValue);
    };

    const updateFaceChanges = newFaceChanges => {
        const updateValue = { faceChanges: newFaceChanges };
        updateParams(updateValue);
    };

    const deleteFaceChange = event => {
        const { id } = event.currentTarget;
        const newFaceChanges = faceChanges.filter(change => change.id !== id);
        updateFaceChanges(newFaceChanges);
    };

    const updateFaceChange = (id, newFaceChange) => {
        const newFaceChanges = faceChanges.map(change =>
            change.id === id ? newFaceChange : change
        );
        updateFaceChanges(newFaceChanges);
    };

    const addFaceChange = () => {
        const blankChange = { id: uuid(), time: "", eyeIdx: "", mouthIdx: "" };
        const newFaceChanges = [...faceChanges, blankChange];
        updateFaceChanges(newFaceChanges);
    };

    return (
        <>
            <div className="ChainAni-fields">
                <TextField
                    onChange={handleParamChange}
                    label="Speed"
                    size="small"
                    margin="dense"
                    variant="outlined"
                    inputProps={{
                        type: "number",
                        step: 0.25,
                        name: "timeScale",
                    }}
                    value={timeScale}
                />
                <TextField
                    onChange={handleParamChange}
                    label="Repetitions"
                    size="small"
                    margin="dense"
                    variant="outlined"
                    inputProps={{
                        type: "number",
                        name: "repetitions",
                    }}
                    value={repetitions}
                />
            </div>
            <ChainAniFace
                openModal={openModal}
                faceChanges={faceChanges}
                deleteFaceChange={deleteFaceChange}
                updateFaceChange={updateFaceChange}
                addFaceChange={addFaceChange}
            />
        </>
    );
}

export default ChainAniAdvanced;
