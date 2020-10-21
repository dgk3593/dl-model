import React, { useContext } from "react";

import { DialogContent, DialogTitle, DialogTop } from "./CustomDialog";
import { SettingsContext } from "./context/SettingsContext";
import { DispatchContext } from "./context/SettingsContext";

import { fbxSource } from "./App";
import faceOffsetFix from "./data/face_offset";
import useStyles from "./styles/FaceSelectStyles";

function FaceSelect(props) {
    const { toggleControlOpen } = props;
    const dispatch = useContext(DispatchContext);
    const {
        model: { faceTexture },
    } = useContext(SettingsContext);

    const classes = useStyles(faceOffsetFix[faceTexture] || { x: 0, y: 0 });

    const imgPath = `${fbxSource}/fbx/${faceTexture}/${faceTexture}.png`;

    const setFace = event => {
        const n = event.currentTarget.dataset.value;
        const action = {
            type: "update",
            key: "model",
            value: { face: n },
        };
        dispatch(action);
        toggleControlOpen();
    };

    const faces = Array.from({ length: 9 }, (_, k) => k + 1).map(i => (
        <div
            className={`${classes[`face${i}`]} ${classes["faceBox"]}`}
            style={{ backgroundImage: `url(${imgPath})` }}
            data-value={i}
            key={i}
            onClick={setFace}
        />
    ));

    return (
        <>
            <DialogTop>
                <DialogTitle onClose={toggleControlOpen}>
                    Select a Face
                </DialogTitle>
            </DialogTop>
            <DialogContent dividers className={classes["FaceSelect"]}>
                {faces}
            </DialogContent>
        </>
    );
}

export default FaceSelect;
