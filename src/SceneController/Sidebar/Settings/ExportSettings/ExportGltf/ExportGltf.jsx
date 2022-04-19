import Accordion from "components/Accordion";
import { Button } from "@mui/material";
import { Download } from "@mui/icons-material";
import { exportGltf } from "./helper";

import "../../SettingGroup.css";

function ExportGltf() {
    const handleClick = e => {
        e.stopPropagation();
        const binary = !!e.currentTarget.dataset.binary;
        exportGltf({ binary });
    };

    return (
        <Accordion className="SettingGroup">
            <>
                <div>glTF</div>
                <Button
                    onClick={handleClick}
                    title="Download current model as glTF"
                    variant="contained"
                >
                    <Download />
                </Button>
            </>

            <>
                <div>
                    <Button
                        onClick={handleClick}
                        title="Download current model as glTF"
                    >
                        <Download />
                        glTF
                    </Button>

                    <Button
                        data-binary
                        onClick={handleClick}
                        title="Download current model as glb (binary glTF)"
                    >
                        <Download />
                        glb
                    </Button>
                </div>
            </>
        </Accordion>
    );
}

export default ExportGltf;
