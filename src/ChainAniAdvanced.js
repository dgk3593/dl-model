import TextField from "@material-ui/core/TextField";

import ChainAniFace from "./ChainAniFace";

function ChainAniAdvanced(props) {
    const { timeScale, repetitions, faceChanges, updateParams } = props;

    const handleParamChange = event => {
        const { name, value } = event.target;
        const updateValue = { [name]: value };
        updateParams(updateValue);
    };

    const deleteFaceChange = event => {
        const { id } = event.currentTarget;
        const newFaceChanges = faceChanges.filter(change => change.id !== id);
        const updateValue = { faceChanges: newFaceChanges };
        updateParams(updateValue);
    };

    const updateFaceChanges = (id, newFaceChange) => {
        const newFaceChanges = faceChanges.map(change =>
            change.id === id ? newFaceChange : change
        );
        const updateValue = { faceChanges: newFaceChanges };
        updateParams(updateValue);
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
                faceChanges={faceChanges}
                deleteFaceChange={deleteFaceChange}
                updateFaceChanges={updateFaceChanges}
            />
        </>
    );
}

export default ChainAniAdvanced;
