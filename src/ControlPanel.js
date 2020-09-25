import React from "react";

import Dialog from "@material-ui/core/Dialog";
import CharaSelect from "./CharaSelect";
import AnimationSelect from "./AnimationSelect";
import BackgroundSettings from "./BackgroundSettings";
import WeaponSelect from "./WeaponSelect";
import FaceSelect from "./FaceSelect";
import Share from "./Share";

function ControlPanel(props) {
    const { open, mode, toggleControlOpen } = props;
    let content;
    switch (mode) {
        case "model":
        case "texture":
        case "faceOverride":
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
            content = (
                <BackgroundSettings toggleControlOpen={toggleControlOpen} />
            );
            break;
        case "weapon":
            content = <WeaponSelect toggleControlOpen={toggleControlOpen} />;
            break;
        case "face":
            content = <FaceSelect toggleControlOpen={toggleControlOpen} />;
            break;
        case "share":
            content = <Share toggleControlOpen={toggleControlOpen} />;
            break;
        default:
            content = null;
    }

    return (
        <Dialog
            maxWidth="lg"
            onClose={toggleControlOpen}
            open={open}
            scroll="paper"
        >
            {content}
        </Dialog>
    );
}

export default ControlPanel;
