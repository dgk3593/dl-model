import { lazy, Suspense } from "react";

const CharaSelect = lazy(() => import("./CharaSelect"));
// const WeaponSelect = lazy(() => import("WeaponSelect"));
// const AnimationSelect = lazy(() => import("AnimationSelect"));
// const FaceSelect = lazy(() => import("FaceSelect"));

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
