import { useAppState } from "@/state";

import DisplayControl from "./DisplayControl";
import AutoRotate from "./AutoRotate";
import LightControl from "./LightControl";
import PostProcessingControl from "./PostProcessingControl";

import { Button } from "@mui/material";
import {
    Panorama,
    ShowChart,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";

function SceneSettings() {
    const openModal = useAppState(state => state.sidebar.modal.open);
    const {
        showTimeControl,
        toggleTimeControl,
        showFrameRate,
        toggleFrameRate,
    } = useAppState();

    return (
        <>
            <DisplayControl />
            <AutoRotate />
            <Button
                variant="contained"
                onClick={toggleTimeControl}
                startIcon={showTimeControl ? <VisibilityOff /> : <Visibility />}
            >
                {showTimeControl ? "Hide Time Control" : "Show Time Control"}
            </Button>
            <Button
                variant="contained"
                onClick={toggleFrameRate}
                startIcon={<ShowChart />}
            >
                {showFrameRate ? "Hide Frame Rate" : "Show Frame Rate"}
            </Button>
            <span className="break" />

            <Button
                variant="contained"
                onClick={() => openModal("background")}
                startIcon={<Panorama />}
            >
                Background Settings
            </Button>
            <LightControl />
            <PostProcessingControl />
        </>
    );
}

export default SceneSettings;
