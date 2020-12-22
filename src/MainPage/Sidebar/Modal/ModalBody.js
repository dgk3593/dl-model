import { lazy, Suspense } from "react";

const CharaSelect = lazy(() => import("./CharaSelect"));
const FaceSelect = lazy(() => import("./FaceSelect"));
const WeaponSelect = lazy(() => import("./WeaponSelect"));
const AnimationSelect = lazy(() => import("./AnimationSelect"));
const ColorSelect = lazy(() => import("./ColorSelect"));
const Share = lazy(() => import("./Share"));

function ModalBody({ mode, closeModal, handleSelect }) {
    let Body = null;
    switch (mode) {
        case "model":
        case "texture":
            Body = CharaSelect;
            break;
        case "face":
        case "eye":
        case "mouth":
            Body = FaceSelect;
            break;
        case "weapon":
            Body = WeaponSelect;
            break;
        case "animation":
        case "addAni":
            Body = AnimationSelect;
            break;
        case "background":
            Body = ColorSelect;
            break;
        case "share":
            Body = Share;
            break;
        default:
            Body = mode.includes("-") ? ColorSelect : null;
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
