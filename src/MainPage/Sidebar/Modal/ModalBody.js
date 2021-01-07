import { lazy, Suspense } from "react";

const AdvSelect = lazy(() => import("./AdvSelect"));
const DragonSelect = lazy(() => import("./DragonSelect"));
const FaceSelect = lazy(() => import("./FaceSelect"));
const WeaponSelect = lazy(() => import("./WeaponSelect"));
const AnimationSelect = lazy(() => import("./AnimationSelect"));
const NonHumanAni = lazy(() => import("./NonHumanAni"));
const ColorSelect = lazy(() => import("./ColorSelect"));
const Share = lazy(() => import("./Share"));

function ModalBody({ mode, closeModal, handleSelect, docked, setDock }) {
    let Body = null;
    switch (mode) {
        case "adv":
        case "texture":
            Body = AdvSelect;
            break;
        case "dragon":
            Body = DragonSelect;
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
            Body = AnimationSelect;
            break;
        case "nonHumanAni":
            Body = NonHumanAni;
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

    const moveToDock =
        setDock &&
        function () {
            setDock(mode, handleSelect);
            closeModal();
        };

    return (
        <Suspense fallback={<div>Loading</div>}>
            <Body
                mode={mode}
                docked={docked}
                close={closeModal}
                handleSelect={handleSelect}
                moveToDock={moveToDock}
            />
        </Suspense>
    );
}

export default ModalBody;
