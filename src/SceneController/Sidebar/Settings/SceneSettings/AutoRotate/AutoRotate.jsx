import { useKey } from "hook/useKey";
import Accordion from "components/Accordion";
import Setters from "components/Setters";
import { Button } from "@mui/material";
import { ThreeSixty } from "@mui/icons-material";

import { props } from "./props";
import viewer from "@/viewer";

function AutoRotate() {
    const { controls } = viewer;
    const [key, updateKey] = useKey();

    const reset = event => {
        event.stopPropagation();
        controls.autoRotate = false;
        controls.autoRotateSpeed = 2;
        updateKey();
    };

    return (
        <Accordion className="SettingGroup">
            <>
                <div className="title">
                    <ThreeSixty />
                    Auto Rotate
                </div>
                <Button onClick={reset} title="Reset" variant="contained">
                    Reset
                </Button>
            </>

            <Setters key={key} target={controls} propList={props} />
        </Accordion>
    );
}

export default AutoRotate;
