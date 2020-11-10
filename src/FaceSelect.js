import { useState, useContext, lazy, Suspense } from "react";

import { DialogContent, DialogTitle, DialogTop } from "./CustomDialog";
import { SettingsContext } from "./context/SettingsContext";
import { DispatchContext } from "./context/SettingsContext";

import { fbxSource } from "./App";
import faceOffsetFix from "./data/face_offset";
import useStyles from "./styles/FaceSelectStyles";

const FacePartSelector = lazy(() => import("./FacePartSelector"));

function FaceSelect(props) {
    const { toggleControlOpen } = props;
    const dispatch = useContext(DispatchContext);
    const {
        model: { eyeTexture, mouthTexture },
    } = useContext(SettingsContext);

    const [facePart, setFacePart] = useState("both");

    const changeFacePart = event => {
        event.stopPropagation();
        const mode = event.currentTarget.dataset.value;
        setFacePart(mode);
    };

    const classes = useStyles(faceOffsetFix[eyeTexture] || { x: 0, y: 0 });

    const imgPath =
        facePart === "mouth"
            ? `${fbxSource}/fbx/${mouthTexture}/${mouthTexture}.png`
            : `${fbxSource}/fbx/${eyeTexture}/${eyeTexture}.png`;

    const setIdx = event => {
        const n = event.currentTarget.dataset.value;
        const action = {
            type: "update",
            key: "model",
        };

        if (["eye", "both"].includes(facePart)) {
            action.value = { eyeIdx: n };
            dispatch(action);
        }
        if (["mouth", "both"].includes(facePart)) {
            action.value = { mouthIdx: n };
            dispatch(action);
        }

        toggleControlOpen();
    };

    const faces = Array.from({ length: 9 }, (_, k) => k + 1).map(i => (
        <div
            className={`${classes[`face${i}`]} ${classes["faceBox"]}`}
            style={{ backgroundImage: `url(${imgPath})` }}
            data-value={i}
            key={i}
            onClick={setIdx}
        />
    ));

    return (
        <>
            <DialogTop>
                <DialogTitle onClose={toggleControlOpen}>
                    Select a Face
                </DialogTitle>
                <Suspense fallback={null}>
                    <FacePartSelector
                        value={facePart}
                        handleClick={changeFacePart}
                    />
                </Suspense>
            </DialogTop>
            <DialogContent dividers className={classes["FaceSelect"]}>
                {faces}
            </DialogContent>
        </>
    );
}

export default FaceSelect;
