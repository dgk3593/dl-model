import Accordion from "components/Accordion";
import Setters from "components/Setters";
import { Button } from "@mui/material";
import {
    Download,
    FiberManualRecord as RecordIcon,
    Gif,
} from "@mui/icons-material";

import { commonProps } from "./props";
import { programs } from "./helper";
import viewer from "@/viewer";

import "./SpecialCapture.css";

function SpecialCapture() {
    const handleCapture = event => {
        const { type } = event.currentTarget.dataset;
        const { program = "rotate" } = viewer.userData.specialCapture ?? {};
        programs.find(p => p.value === program)?.[type]?.();
    };

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
                <div className="SpecialCapture-actions">
                    <Button
                        data-type="frames"
                        onClick={handleCapture}
                        title="Get all frames as zip"
                        startIcon={<Download />}
                    >
                        Get Frames
                    </Button>
                    <Button
                        data-type="gif"
                        onClick={handleCapture}
                        title="Download as GIF"
                        startIcon={<Gif />}
                    >
                        Get GIF
                    </Button>
                    {viewer.record && (
                        <Button
                            data-type="clip"
                            onClick={handleCapture}
                            startIcon={<RecordIcon />}
                            title="Record Clip"
                        >
                            Get Clip
                        </Button>
                    )}
                </div>
            </>
        </Accordion>
    );
}

export default SpecialCapture;
