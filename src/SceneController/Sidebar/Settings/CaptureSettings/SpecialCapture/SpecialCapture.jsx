import { useActiveModel } from "@/state";

import Accordion from "components/Accordion";
import Setters from "components/Setters";
import { Button } from "@mui/material";
import { Download, FiberManualRecord as RecordIcon } from "@mui/icons-material";

import { commonProps } from "./props";
import { getRotateClip, getRotateFrames, speedDraw } from "./helper";
import viewer from "@/viewer";

import "./SpecialCapture.css";

function SpecialCapture() {
    const { activeModel } = useActiveModel();
    const handleDraw = () => speedDraw(activeModel);
    return (
        <Accordion className="SpecialCapture SettingGroup">
            <>
                <div>Special Capture</div>
            </>
            <>
                <Setters
                    target={viewer.userData.specialCapture}
                    propList={commonProps}
                />
                <Button
                    onClick={getRotateFrames}
                    title="Get all frames as zip"
                    startIcon={<Download />}
                >
                    Get Rotate Frames
                </Button>

                {viewer.record && (
                    <Button onClick={getRotateClip} startIcon={<RecordIcon />}>
                        Get Rotate Clip
                    </Button>
                )}

                {viewer.record && (
                    <Button onClick={handleDraw} startIcon={<RecordIcon />}>
                        Get Speed Draw Clip
                    </Button>
                )}
            </>
        </Accordion>
    );
}

export default SpecialCapture;
