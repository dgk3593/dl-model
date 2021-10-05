import { useKey } from "@/SceneController/hook";

import Accordion from "components/Accordion";
import Setters from "components/Setters";
import { Button } from "@mui/material";
import { CameraAlt } from "@mui/icons-material";

import viewer from "@/viewer";
import { cameraProp } from "./props";
import { PERSPECTIVE_CAM } from "@/dl-viewer/defaultParams";

function DisplayControl() {
    const { camera } = viewer;
    const [key, updateKey] = useKey();

    const reset = event => {
        event.stopPropagation();
        ["near", "far", "fov"].forEach(
            prop => (camera[prop] = PERSPECTIVE_CAM[prop])
        );
        camera.updateProjectionMatrix();

        updateKey();
    };

    return (
        <Accordion disableGutters className="SettingGroup DisplayControl">
            <>
                <div className="title">
                    <CameraAlt />
                    Camera
                </div>
                <Button
                    onClick={reset}
                    title="Reset camera settings"
                    variant="contained"
                >
                    Reset
                </Button>
            </>
            <Setters key={key} target={camera} propList={cameraProp} />
        </Accordion>
    );
}

export default DisplayControl;
