import { useEffect } from "react";

import Button from "@material-ui/core/Button";

import { DialogContent, DialogTitle, DialogTop } from "components/CustomDialog";

import { useSettings, useDispatch } from "context/SettingsContext";

import { getViewerType } from "helpers/helpers";

import faceData from "data/dragonFace";

import "./DragonFaceSelect.css";

const titles = {
    dragonFace: "Select Face",
    dragonEye: "Select Eyes",
    dragonMouth: "Select Mouth",
};

function DragonFaceSelect({ mode, close, handleSelect, docked, moveToDock }) {
    const dispatch = useDispatch();
    const {
        model: { id: modelId },
    } = useSettings();

    useEffect(() => {
        if (getViewerType(modelId) !== "dragon") {
            close();
            return;
        }
    }, [modelId, close]);

    const { eye: nEye, mouth: nMouth } = faceData[modelId] || {};

    /**
     * @param {{ }} value
     */
    const updateModel = value => {
        const action = {
            type: "update",
            key: "model",
            value,
        };
        dispatch(action);
    };

    /**
     * @param {number} idx - selected index
     * @param {string} part - eye or mouth
     */
    const defaultHandler = (idx, part) => {
        const updateKey = `${part}Idx`;
        updateModel({ [updateKey]: idx });
    };

    /**
     * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
     */
    const setIdx = event => {
        const idx = parseInt(event.currentTarget.dataset.value);
        const part = event.currentTarget.dataset.part;
        const handler = handleSelect || defaultHandler;
        handler(idx, part);

        !docked && close();
    };

    const eyeBtns = nEye ? (
        Array(nEye)
            .fill()
            .map((_, i) => (
                <Button
                    key={`eye${i + 1}`}
                    data-part="eye"
                    data-value={i + 1}
                    onClick={setIdx}
                    variant="contained"
                >
                    {i + 1}
                </Button>
            ))
    ) : (
        <div>Not available</div>
    );

    const eyeSelect = mode !== "dragonMouth" && (
        <>
            {mode === "dragonFace" && <div>Eyes</div>}
            {eyeBtns}
            <hr />
        </>
    );

    const mouthBtns = nMouth ? (
        Array(nMouth)
            .fill()
            .map((_, i) => (
                <Button
                    key={`mouth${i + 1}`}
                    data-part="mouth"
                    data-value={i + 1}
                    onClick={setIdx}
                    variant="contained"
                >
                    {i + 1}
                </Button>
            ))
    ) : (
        <div>Not available</div>
    );

    const mouthSelect = mode !== "dragonEye" && (
        <>
            {mode === "dragonFace" && <div>Mouth</div>}
            {mouthBtns}
            <hr />
        </>
    );

    return (
        <div className="DragonFaceSelect">
            <DialogTop>
                <DialogTitle
                    showDockBtn={!docked}
                    onDock={moveToDock}
                    onClose={close}
                >
                    {titles[mode]}
                </DialogTitle>
            </DialogTop>
            <DialogContent dividers>
                {eyeSelect}
                {mouthSelect}
                {mode !== "dragonFace" && (
                    <Button onClick={setIdx} data-value="">
                        Remove
                    </Button>
                )}
            </DialogContent>
        </div>
    );
}

export default DragonFaceSelect;
