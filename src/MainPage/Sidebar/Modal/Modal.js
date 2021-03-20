import { lazy, Suspense } from "react";
import { createPortal } from "react-dom";

import Dialog from "@material-ui/core/Dialog";

const ModalBody = lazy(() =>
    import(
        /* webpackChunkName: "ModalBody" */ "MainPage/Sidebar/Modal/ModalBody"
    )
);

function Modal({ mode, closeModal, handleSelect, setDock = null }) {
    return (
        mode &&
        createPortal(
            <Dialog
                maxWidth="lg"
                onClose={closeModal}
                open={!!mode}
                scroll="paper"
                PaperProps={{ classes: { root: "Modal" } }}
            >
                <Suspense fallback={<div>Loading</div>}>
                    <ModalBody
                        mode={mode}
                        closeModal={closeModal}
                        handleSelect={handleSelect}
                        setDock={setDock}
                    />
                </Suspense>
            </Dialog>,
            document.getElementById("modal-root")
        )
    );
}

export default Modal;
