import { createPortal } from "react-dom";

import Dialog from "@material-ui/core/Dialog";

import ModalBody from "./ModalBody";

function Modal({ mode, closeModal, handleSelect }) {
    return mode
        ? createPortal(
              <Dialog
                  maxWidth="lg"
                  onClose={closeModal}
                  open={!!mode}
                  scroll="paper"
                  PaperProps={{ classes: { root: "Modal" } }}
              >
                  <ModalBody
                      mode={mode}
                      closeModal={closeModal}
                      handleSelect={handleSelect}
                  />
              </Dialog>,
              document.getElementById("modal-root")
          )
        : null;
}

export default Modal;
