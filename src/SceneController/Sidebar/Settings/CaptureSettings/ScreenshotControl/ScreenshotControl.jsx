import { useActiveModel, useAppState } from "@/state";

import Accordion from "components/Accordion";
import { Button } from "@mui/material";
import Setters from "components/Setters";
import { Camera as CameraIcon, Download } from "@mui/icons-material";

import viewer from "@/viewer";
import { basic, allFrames } from "./props";
import { saveAs } from "file-saver";

import "../../SettingGroup.css";
import { pngUrlToZip } from "@/dl-viewer/utils/downloader";

function ScreenshotControl() {
    const { setLoadingMsg } = useAppState();
    const { activeModel } = useActiveModel();
    const { screenshot } = viewer;
    const takeScreenshot = event => {
        event.stopPropagation();
        screenshot.get();
    };

    const getAllFrames = () => {
        const modelIndex = viewer.model.indexOf(activeModel);
        if (modelIndex === -1) {
            setLoadingMsg("no model");
            setTimeout(() => setLoadingMsg(""), 2000);
            return;
        }

        setLoadingMsg("generating frames...");
        setTimeout(async () => {
            const frames = screenshot.getAllFrames(modelIndex);
            if (!frames) {
                setLoadingMsg("invalid animation...");
                setTimeout(() => setLoadingMsg(""), 2000);
                return;
            }

            setLoadingMsg("creating zip...");
            const fileName = screenshot.settings.fileName || "frames";
            const zip = await pngUrlToZip(frames, fileName);

            setLoadingMsg("finished");
            saveAs(zip, `${fileName}.zip`);
            setTimeout(() => setLoadingMsg(""), 1000);
        });
    };

    return (
        <Accordion className="SettingGroup">
            <>
                <div>Screenshot</div>
                <Button
                    onClick={takeScreenshot}
                    title="Take screenshot"
                    variant="contained"
                >
                    <CameraIcon />
                </Button>
            </>
            <>
                <Setters target={screenshot.settings} propList={basic} />

                <Accordion disableGutters className="SettingGroup-extra">
                    <>Capture All Frames</>
                    <>
                        <div className="SettingGroup-grid">
                            <Setters
                                target={screenshot.settings}
                                propList={allFrames}
                            />
                        </div>

                        <Button
                            onClick={getAllFrames}
                            title="Get all frames as zip"
                            startIcon={<Download />}
                        >
                            Get All Frames
                        </Button>
                    </>
                </Accordion>
            </>
        </Accordion>
    );
}

export default ScreenshotControl;
