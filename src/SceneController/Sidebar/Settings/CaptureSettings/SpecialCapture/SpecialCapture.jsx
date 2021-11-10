import Accordion from "components/Accordion";
import Setters from "components/Setters";
import { Button } from "@mui/material";
import { Download } from "@mui/icons-material";

import { commonProps } from "./props";
import { getRotateFrames } from "./helper";
import viewer from "@/viewer";

import "./SpecialCapture.css";

function SpecialCapture() {
    return (
        <Accordion className="SpecialCapture SettingGroup">
            <>
                <div>Special</div>
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
            </>
        </Accordion>
    );
}

export default SpecialCapture;
