import { useActiveModel } from "@/state";

import Accordion from "components/Accordion";
import Setters from "components/Setters";
import { Button } from "@mui/material";
import { FiberManualRecord as RecordIcon } from "@mui/icons-material";
import viewer from "@/viewer";

import { quickRecord } from "./helper";
import { props } from "./props";
import "../../SettingGroup.css";

function RecordControl() {
    const { activeModel } = useActiveModel();
    const { record } = viewer;
    const handleQuickRecord = event => {
        event.stopPropagation();
        const { clipDuration } = activeModel.animation.current;
        if (clipDuration === 0 || clipDuration === Infinity) {
            alert("Can't record");
            return;
        }

        quickRecord();
    };

    return record ? (
        <Accordion className="SettingGroup">
            <>
                <div>Record</div>
                <Button
                    onClick={handleQuickRecord}
                    title="Record current animation"
                    variant="contained"
                >
                    <RecordIcon />
                </Button>
            </>

            <Setters target={record.settings} propList={props} />
        </Accordion>
    ) : (
        <></>
    );
}

export default RecordControl;
