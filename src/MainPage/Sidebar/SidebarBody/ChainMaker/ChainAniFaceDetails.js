import { useContext } from "react";
import { SettingsContext } from "context/SettingsContext";
import useStyles from "MainPage/Sidebar/Modal/FaceSelect/styles/FaceSelectStyles";

import TextField from "@material-ui/core/TextField";

import Close from "@material-ui/icons/Close";

import { fbxSource } from "App";
import faceOffsetFix from "data/face_offset";

function ChainAniFaceDetails(props) {
    const {
        change: { id, time, eyeIdx, mouthIdx },
        deleteFaceChange,
        handleChange,
        handleClick,
    } = props;

    const {
        model: { eyeTexture, mouthTexture },
    } = useContext(SettingsContext);

    const eyeImgPath = `${fbxSource}/fbx/${eyeTexture}/${eyeTexture}.png`;
    const mouthImgPath = `${fbxSource}/fbx/${mouthTexture}/${mouthTexture}.png`;
    const eyeOffsetFix = faceOffsetFix[eyeTexture] || [0, 0];
    const mouthOffsetFix = faceOffsetFix[mouthTexture] || [0, 0];

    const classes = useStyles(eyeOffsetFix, mouthOffsetFix);

    const eye = eyeIdx ? (
        <div
            className={`${classes[`eye${eyeIdx}`]} ${classes["eyeBox"]}`}
            style={{ backgroundImage: `url(${eyeImgPath})` }}
        />
    ) : (
        "Set"
    );
    const mouth = mouthIdx ? (
        <div
            className={`${classes[`mouth${mouthIdx}`]} ${classes["mouthBox"]}`}
            style={{ backgroundImage: `url(${mouthImgPath})` }}
        />
    ) : (
        "Set"
    );

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

export default ChainAniFaceDetails;
