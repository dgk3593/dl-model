import { lazy, Suspense } from "react";
import { createPortal } from "react-dom";

import Dialog from "@material-ui/core/Dialog";

const WeaponSelect = lazy(() => import("WeaponSelect"));
const CharaSelect = lazy(() => import("CharaSelect"));
const AnimationSelect = lazy(() => import("AnimationSelect"));
const FaceSelect = lazy(() => import("FaceSelect"));

function Modal({ mode, closeModal, handleSelect }) {
    const content = "modal content";
    return mode
        ? createPortal(
              <Dialog
                  maxWidth="lg"
                  onClose={closeModal}
                  open={!!mode}
                  scroll="paper"
                  PaperProps={{ classes: { root: "Modal" } }}
              >
                  <Suspense fallback={<div>Loading</div>}>{content}</Suspense>
              </Dialog>,
              document.getElementById("modal-root")
          )
        : null;
}

export default Modal;
