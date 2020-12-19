import { lazy, Suspense } from "react";

import Dialog from "@material-ui/core/Dialog";
import WeaponSelect from "./WeaponSelect";
import CharaSelect from "./MainPage/Sidebar/Modal/CharaSelect/CharaSelect";
import AnimationSelect from "./AnimationSelect";
import FaceSelect from "./FaceSelect";

const ColorSettings = lazy(() => import("./ColorSettings"));
const Share = lazy(() => import("./Share"));

function ControlPanel(props) {
    const { open, mode, toggleControlOpen, handleSelect } = props;
    let content = null;
    switch (mode) {
        case "model":
        case "texture":
            content = (
                <CharaSelect
                    mode={mode}
                    toggleControlOpen={toggleControlOpen}
                />
            );
            break;
        case "animation":
        case "addAni":
            content = <AnimationSelect toggleControlOpen={toggleControlOpen} />;
            break;
        case "background":
        case "outlineColor":
            content = (
                <ColorSettings
                    mode={mode}
                    toggleControlOpen={toggleControlOpen}
                />
            );
            break;
        case "weapon":
            content = <WeaponSelect toggleControlOpen={toggleControlOpen} />;
            break;
        case "face":
        case "eye":
        case "mouth":
            content = (
                <FaceSelect
                    mode={mode}
                    toggleControlOpen={toggleControlOpen}
                    handleSelect={handleSelect}
                />
            );
            break;
        case "share":
            content = <Share toggleControlOpen={toggleControlOpen} />;
            break;
        default:
            content = mode.includes("-") && (
                <ColorSettings
                    mode={mode}
                    toggleControlOpen={toggleControlOpen}
                />
            );
    }

    return (
        <Dialog
            maxWidth="lg"
            onClose={toggleControlOpen}
            open={open}
            scroll="paper"
            PaperProps={{ classes: { root: "ControlPanel" } }}
        >
            <Suspense fallback={<div>Loading</div>}>{content}</Suspense>
        </Dialog>
    );
}

export default ControlPanel;
