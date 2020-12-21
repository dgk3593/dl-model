import { lazy, Suspense } from "react";

const CharaSelect = lazy(() => import("./CharaSelect"));
// const FaceSelect = lazy(() => import("FaceSelect"));
// const AnimationSelect = lazy(() => import("AnimationSelect"));
// const WeaponSelect = lazy(() => import("WeaponSelect"));

function ModalBody({ mode, closeModal, handleSelect }) {
    let Body = null;
    switch (mode) {
        case "model":
        case "texture":
            Body = CharaSelect;
            break;
        default:
    }

    return (
        <Suspense fallback={<div>Loading</div>}>
            <Body
                mode={mode}
                closeModal={closeModal}
                handleSelect={handleSelect}
            />
        </Suspense>
    );
}

export default ModalBody;
