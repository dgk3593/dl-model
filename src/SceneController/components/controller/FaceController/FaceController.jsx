import { Fragment, useState } from "react";
import { Button } from "@mui/material";
import Modal from "components/Modal";
import FaceSelect from "@/SceneController/Dialog/FaceSelect";
import FaceTexture from "@/SceneController/Dialog/FaceTexture";
import { Mood, Face } from "@mui/icons-material";

import "./FaceController.css";

const component = {
    face: FaceSelect,
    faceTexture: FaceTexture,
};

function FaceController({ target }) {
    const face = target?.face;
    if (!face) return <Fragment />;

    const [modalMode, setModalMode] = useState("");
    const closeModal = () => setModalMode("");

    const Body = component[modalMode] ?? Fragment;

    const handleClick = event => {
        const { value } = event.currentTarget.dataset;
        setModalMode(value);
    };

    const handleSelect = (...args) => {
        const [value, part] = args;
        switch (modalMode) {
            case "face":
                target.face[`${part}BaseIdx`] = value;
                return;
            case "faceTexture":
                target.face[`${part}Texture`] = value;
                return;
            default:
                return;
        }
    };

    return (
        <div className="FaceController">
            <Button
                variant="contained"
                startIcon={<Mood />}
                onClick={handleClick}
                data-value="face"
            >
                Facial Expresion
            </Button>

            {face.type === "uv" && (
                <Button
                    variant="contained"
                    startIcon={<Face />}
                    onClick={handleClick}
                    data-value="faceTexture"
                >
                    Face Texture
                </Button>
            )}

            <Modal closeModal={closeModal} open={!!modalMode}>
                <Body
                    target={target}
                    onSelect={handleSelect}
                    onAfterSelect={closeModal}
                />
            </Modal>
        </div>
    );
}

export default FaceController;
