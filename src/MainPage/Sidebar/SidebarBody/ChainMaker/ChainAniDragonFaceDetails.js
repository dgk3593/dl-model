import TextField from "@material-ui/core/TextField";

import Close from "@material-ui/icons/Close";

function ChainAniDragonFaceDetails(props) {
    const {
        change: { id, time, eyeIdx, mouthIdx },
        deleteFaceChange,
        handleChange,
        handleClick,
    } = props;

    const eye = eyeIdx || "Set";
    const mouth = mouthIdx || "Set";

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
                    type: "number",
                    min: 0,
                    max: 100,
                    step: 1,
                    "data-name": "time",
                    "data-id": id,
                }}
                value={time}
            />
            <div onClick={handleClick} data-target="eye" data-id={id}>
                {eye}
            </div>
            <div onClick={handleClick} data-target="mouth" data-id={id}>
                {mouth}
            </div>
        </>
    );
}

export default ChainAniDragonFaceDetails;
