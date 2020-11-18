import { useState, useContext, lazy, Suspense } from "react";

import { DialogContent, DialogTitle, DialogTop } from "./CustomDialog";
import FaceBox from "./FaceBox";
import { SettingsContext } from "./context/SettingsContext";
import { DispatchContext } from "./context/SettingsContext";

import faceOffsetFix from "./data/face_offset";
import useStyles from "./styles/FaceSelectStyles";

const FacePartSelector = lazy(() => import("./FacePartSelector"));

function FaceSelect(props) {
    const { toggleControlOpen } = props;
    const dispatch = useContext(DispatchContext);
    const {
        model: { eyeTexture, mouthTexture, eyeIdx, mouthIdx },
    } = useContext(SettingsContext);

    const [facePart, setFacePart] = useState("both");

    const changeFacePart = event => {
        event.stopPropagation();
        const mode = event.currentTarget.dataset.value;
        setFacePart(mode);
    };

    const eyeOffsetFix = faceOffsetFix[eyeTexture] || { x: 0, y: 0 };
    const mouthOffsetFix = faceOffsetFix[mouthTexture] || { x: 0, y: 0 };

    const classes = useStyles(eyeOffsetFix, mouthOffsetFix);

    const setIdx = event => {
        const n = event.currentTarget.dataset.value;
        const action = {
            type: "update",
            key: "model",
            value: {},
        };

        if (["eye", "both"].includes(facePart)) {
            action.value.eyeIdx = n;
        }
        if (["mouth", "both"].includes(facePart)) {
            action.value.mouthIdx = n;
        }
        dispatch(action);

        toggleControlOpen();
    };

    const indexes = Array.from({ length: 9 }, (_, k) => k + 1);

    let faces;
    const commonProps = {
        classes,
        eyeTexture,
        mouthTexture,
    };
    switch (facePart) {
        case "eye":
            faces = indexes.map(idx => (
                <div key={idx} onClick={setIdx} data-value={idx}>
                    <FaceBox
                        eyeIdx={idx}
                        mouthIdx={mouthIdx}
                        {...commonProps}
                    />
                </div>
            ));
            break;
        case "mouth":
            faces = indexes.map(idx => (
                <div key={idx} onClick={setIdx} data-value={idx}>
                    <FaceBox eyeIdx={eyeIdx} mouthIdx={idx} {...commonProps} />
                </div>
            ));
            break;
        default:
            faces = indexes.map(idx => (
                <div key={idx} onClick={setIdx} data-value={idx}>
                    <FaceBox eyeIdx={idx} mouthIdx={idx} {...commonProps} />
                </div>
            ));
    }

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
