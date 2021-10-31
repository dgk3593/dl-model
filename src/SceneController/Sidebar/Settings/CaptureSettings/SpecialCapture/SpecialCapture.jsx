import { useAppState } from "@/state";
import Accordion from "components/Accordion";
import { Button } from "@mui/material";
import { Download } from "@mui/icons-material";

import { saveAs } from "file-saver";
import { pngUrlToZip } from "@/dl-viewer/utils/downloader";
import viewer from "@/viewer";

import "./SpecialCapture.css";

function SpecialCapture() {
    const { setLoadingMsg } = useAppState();

    const getRotateFrames = () => {
        setLoadingMsg("generating frames...");
        setTimeout(async () => {
            let { x, y, z } = viewer.camera.position;
            const { x: xT, z: zT } = viewer.controls.target;
            const { sqrt, sin, cos, atan, PI } = Math;
            const r = sqrt((x - xT) ** 2 + (z - zT) ** 2);

            const rotateTime = 5;
            const FPS = 30;
            const nFrames = rotateTime * FPS;
            const dphi = (2 * PI) / nFrames;
            const phi0 = z === zT ? PI / 4 : atan((x - xT) / (z - zT));
            const frames = [];
            viewer.background = "transparent";
            let phi = phi0;
            for (let i = 0; i < nFrames; i++) {
                x = xT + r * sin(phi);
                z = zT + r * cos(phi);
                viewer.camera.position.set(x, y, z);
                viewer.controls.update();
                viewer.render();
                const frame = viewer.canvas.toDataURL();
                frames.push(frame);
                phi += dphi;
            }

            setLoadingMsg("creating zip...");
            const fileName = "frames";
            const zip = await pngUrlToZip(frames, fileName);

            setLoadingMsg("finished");
            saveAs(zip, `${fileName}.zip`);
            setTimeout(() => setLoadingMsg(""), 1000);
        });
    };
    return (
        <Accordion className="SpecialCapture SettingGroup">
            <>
                <div>Special</div>
            </>
            <>
                <Button
                    onClick={getRotateFrames}
                    title="Get all frames as zip"
                    startIcon={<Download />}
                >
                    Get Rotate Frames
                </Button>
            </>
        </Accordion>
    );
}

export default SpecialCapture;
