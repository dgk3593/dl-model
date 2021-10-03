import { useActiveModel } from "@/state";
import { useKey } from "hook/useKey";
import { Button } from "@mui/material";
import { Texture } from "@mui/icons-material";
import Accordion from "components/Accordion";
import { MaterialController } from "components/controller";

import "../../SettingGroup.css";

function MaterialSettings() {
    const { activeModel } = useActiveModel();
    const { material } = activeModel;
    const [key, updateKey] = useKey();

    const propagate = () => {
        const { code } = material;
        activeModel.attachment.traverse(att => {
            att.material.code = code;
        });
    };

    const reset = event => {
        event.stopPropagation();
        material.code = "";
        propagate();
        updateKey();
    };

    return (
        <Accordion disableGutters className="SettingGroup">
            <>
                <div className="title">
                    <Texture />
                    Material
                </div>
                <Button
                    onClick={reset}
                    title="Reset to default"
                    variant="contained"
                >
                    Reset
                </Button>
            </>
            <MaterialController target={activeModel} key={key} />
        </Accordion>
    );
}

export default MaterialSettings;
