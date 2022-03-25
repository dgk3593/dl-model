import { useActiveModel, useAppState } from "@/state";

import Accordion from "components/Accordion";
import { Button } from "@mui/material";
import Setters from "components/Setters";
import { Download, Gif, ContentCopy } from "@mui/icons-material";

import viewer from "@/viewer";
import { props } from "./props";
import { saveAs } from "file-saver";
import { pngUrlToZip } from "@/dl-viewer/utils/createZip";
import { dataUrlToBlob } from "@/SceneController/helper/dataUrlToBlob";
import { encode as makeApng } from "upng-js";

import "../../SettingGroup.css";

function ScreenshotControl() {
    const { setLoadingMsg } = useAppState();
    const { activeModel } = useActiveModel();
    const { screenshot } = viewer;
    const copyScreenshot = async event => {
        event.stopPropagation();
        const url = screenshot.getFrame();
        const blob = dataUrlToBlob(url);
        navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
    };

    const getAllFrames = () => {
        if (!activeModel) {
            setLoadingMsg("No model");
            setTimeout(() => setLoadingMsg(""), 2000);
            return;
        }

        setLoadingMsg("Generating frames...");
        setTimeout(async () => {
            const frames = screenshot.getAllFrames(activeModel);
            if (!frames) {
                setLoadingMsg("Invalid animation...");
                setTimeout(() => setLoadingMsg(""), 2000);
                return;
            }

            setLoadingMsg("Creating zip...");
            const fileName = screenshot.settings.fileName || "frames";
            const zip = await pngUrlToZip(frames, fileName);

            setLoadingMsg("Finished");
            saveAs(zip, `${fileName}.zip`);
            setTimeout(() => setLoadingMsg(""), 1000);
        });
    };

    const createGif = () => {
        if (!activeModel) {
            setLoadingMsg("No model");
            setTimeout(() => setLoadingMsg(""), 2000);
            return;
        }

        setLoadingMsg("Generating frames...");
        setTimeout(async () => {
            const frames = screenshot.getAllFrames(activeModel);

            if (!frames) {
                setLoadingMsg("Invalid animation");
                setTimeout(() => setLoadingMsg(""), 2000);
                return;
            }

            setLoadingMsg(`Creating gif from ${frames.length} frames...`);
            const { frameRate } = screenshot.settings;
            const { makeGif } = await import("@/helper/makeGif");
            const gif = await makeGif({
                frames,
                width: viewer.viewport.width,
                height: viewer.viewport.height,
                delay: Math.ceil(1000 / frameRate),
            });

            setLoadingMsg("Finished");
            const fileName =
                activeModel.userData.name ?? activeModel.id ?? "ani";
            saveAs(gif, `${fileName}.gif`);
            setTimeout(() => setLoadingMsg(""), 1000);
        });
    };

    const createApng = () => {
        if (!activeModel) {
            setLoadingMsg("No model");
            setTimeout(() => setLoadingMsg(""), 2000);
            return;
        }

        setLoadingMsg("Generating frames...");
        setTimeout(async () => {
            const buffer = screenshot.getAllFramesAsArrayBuffer(activeModel);

            if (!buffer) {
                setLoadingMsg("Invalid animation");
                setTimeout(() => setLoadingMsg(""), 2000);
                return;
            }

            setLoadingMsg(`Creating apng from ${buffer.length} frames...`);
            const { frameRate } = screenshot.settings;
            const delay = Math.ceil(1000 / frameRate);
            const dels = Array(buffer.length - 1).fill(delay);
            const { width, height } = viewer.viewport;
            const apngBuffer = makeApng(buffer, width, height, 0, dels);
            const apng = new Blob([apngBuffer], { type: "image/apng" });

            setLoadingMsg("Finished");
            const fileName =
                activeModel.userData.name ?? activeModel.id ?? "ani";
            saveAs(apng, `${fileName}.png`);
            setTimeout(() => setLoadingMsg(""), 1000);
        });
    };

    return (
        <Accordion className="SettingGroup">
            <>
                <div>Screenshot/GIF/APNG</div>
                <Button
                    onClick={copyScreenshot}
                    title="Copy screenshot to clipboard"
                    variant="contained"
                >
                    <ContentCopy />
                </Button>
            </>
            <>
                <Setters target={screenshot.settings} propList={props} />
                <Button
                    onClick={getAllFrames}
                    title="Get all frames as zip"
                    startIcon={<Download />}
                >
                    Get All Frames
                </Button>

                <Button
                    title="Create GIF of current animation"
                    startIcon={<Gif viewBox="4 4 16 16" />}
                    onClick={createGif}
                >
                    Create GIF
                </Button>

                <Button
                    onClick={createApng}
                    title="Create APNG of current animation"
                    startIcon={<Download />}
                >
                    Create APNG
                </Button>
            </>
        </Accordion>
    );
}

export default ScreenshotControl;
