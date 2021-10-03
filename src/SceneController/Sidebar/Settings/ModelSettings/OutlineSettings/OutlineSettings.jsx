import { useActiveModel } from "@/state";
import { useKey } from "hook/useKey";
import { Button } from "@mui/material";
import { PersonOutlined } from "@mui/icons-material";
import Accordion from "components/Accordion";
import { OutlineController } from "components/controller";

import "../../SettingGroup.css";

function OutlineSettings() {
    const { activeModel } = useActiveModel();
    const { outline } = activeModel;
    const [key, updateKey] = useKey();

    const propagate = () => {
        const { code } = outline;
        activeModel.attachment.traverse(att => {
            att.outline.code = code;
        });
    };

    const toggleOutline = event => {
        event.stopPropagation();
        outline.enabled = !outline.enabled;
        propagate();
        updateKey();
    };

    return (
        outline && (
            <Accordion disableGutters className="SettingGroup">
                <>
                    <div className="title">
                        <PersonOutlined />
                        Outline
                    </div>
                    <Button
                        onClick={toggleOutline}
                        title="Toggle Outline"
                        variant="contained"
                    >
                        Toggle
                    </Button>
                </>
                <OutlineController target={activeModel} key={key} />
            </Accordion>
        )
    );
}

export default OutlineSettings;
