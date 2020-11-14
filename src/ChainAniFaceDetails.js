import TextField from "@material-ui/core/TextField";

import Close from "@material-ui/icons/Close";

function ChainAniFaceDetails({
    change: { id, time, eyeIdx, mouthIdx },
    deleteFaceChange,
    handleChange,
}) {
    const commonInputProps = { type: "number", step: 1, min: 1, max: 9 };

    return (
        <>
            <div
                className="ChainAniFace-delete"
                onClick={deleteFaceChange}
                id={id}
            >
                <Close />
            </div>
            <TextField
                onChange={handleChange}
                inputProps={{
                    ...commonInputProps,
                    max: 100,
                    "data-name": "time",
                    "data-id": id,
                }}
                value={time}
            />
            <TextField
                onChange={handleChange}
                inputProps={{
                    ...commonInputProps,
                    "data-name": "eyeIdx",
                    "data-id": id,
                }}
                value={eyeIdx}
            />
            <TextField
                onChange={handleChange}
                inputProps={{
                    ...commonInputProps,
                    "data-name": "mouthIdx",
                    "data-id": id,
                }}
                value={mouthIdx}
            />
        </>
    );
}

export default ChainAniFaceDetails;
