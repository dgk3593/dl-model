import { useState } from "react";
import AddWeapon from "@/SceneController/Dialog/AddWeapon";
import { Button } from "@mui/material";
import Modal from "components/Modal";

import "./AttachmentController.css";
import AttachmentList from "./AttachmentList";

const weaponIcon = (
    <img className="btn-icon" src="img/appIcon/weapon.png" alt="Add Weapon" />
);

function AttachmentController({ target }) {
    const [modalOpen, setModalOpen] = useState(false);
    const hasWeapon = target.bones.list.includes("jWeaponR");

    const closeModal = () => setModalOpen(false);
    const addWeapon = () => setModalOpen(true);

    return (
        <div className="AttachmentController">
            {hasWeapon && (
                <Button
                    title="Add Weapon"
                    startIcon={weaponIcon}
                    onClick={addWeapon}
                >
                    Add Weapon
                </Button>
            )}
            <AttachmentList target={target} />

            <Modal open={modalOpen} closeModal={closeModal}>
                <AddWeapon target={target} />
            </Modal>
        </div>
    );
}

export default AttachmentController;
