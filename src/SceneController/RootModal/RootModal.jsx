import { Suspense } from "react";
import { useModalState } from "@/state";

import Modal from "components/Modal";
import LoadSpinner from "components/LoadSpinner";

function RootModal() {
    const { Component, props = {}, close, onClose } = useModalState();

    return (
        <Modal open={!!Component} closeModal={onClose ?? close}>
            <Suspense fallback={<LoadSpinner />}>
                <Component {...props} />
            </Suspense>
        </Modal>
    );
}

export default RootModal;
