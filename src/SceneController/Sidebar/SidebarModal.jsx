import { Suspense } from "react";
import { useAppState } from "@/state";
import { Box, useMediaQuery } from "@mui/material";
import Modal from "components/Modal";
import LoadSpinner from "components/LoadSpinner";
import DockButton from "components/DockButton";
import { dialogBody } from "@/SceneController/Dialog";

function SidebarModal() {
    const { mode, handleSelect, close } = useAppState(
        state => state.sidebar.modal
    );
    const openDock = useAppState(state => state.dock.open);

    const moveToDock = () => {
        openDock(mode, handleSelect);
        close();
    };

    const showDock = useMediaQuery("(min-width:640px)");
    const ModalBody = dialogBody[mode] ?? Box;

    return (
        <Modal closeModal={close} open={!!mode}>
            {showDock && <DockButton onClick={moveToDock} />}
            <Suspense fallback={<LoadSpinner />}>
                <ModalBody onSelect={handleSelect} onAfterSelect={close} />
            </Suspense>
        </Modal>
    );
}

export default SidebarModal;
