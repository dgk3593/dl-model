import { createPortal } from "react-dom";

import Dialog from "@mui/material/Dialog";
import CloseButton from "./CloseButton";

const paperProp = {
    sx: {
        margin: "0.3rem",
        minWidth: "12rem",
        minHeight: "12rem",
        maxHeight: "calc(100% - 2rem)",
    },
};

const Modal = ({ children, open, closeModal, ...others }) =>
    open ? (
        createPortal(
            <Dialog
                className="Modal"
                maxWidth="lg"
                open={open}
                onClose={closeModal}
                PaperProps={paperProp}
                {...others}
            >
                <CloseButton onClick={closeModal} title="Close" />
                {children}
            </Dialog>,
            document.getElementById("modal-root")
        )
    ) : (
        <></>
    );

export default Modal;
