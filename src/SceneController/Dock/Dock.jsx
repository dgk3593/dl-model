import { Suspense } from "react";

import { useAppState } from "@/state";
import { Drawer, Box } from "@mui/material";
import { dialogBody } from "@/SceneController/Dialog";
import LoadSpinner from "components/LoadSpinner";
import CloseButton from "components/CloseButton";
import { styles } from "./styles";

function Dock() {
    const { mode, handleSelect, close } = useAppState(state => state.dock);
    const Body = dialogBody[mode] ?? Box;

    return (
        mode && (
            <Drawer
                className="Dock"
                sx={styles.dock}
                open={!!mode}
                variant="persistent"
                anchor="right"
                PaperProps={{ sx: styles.Paper }}
            >
                <CloseButton onClick={close} title="Close Dock" />
                <Suspense fallback={<LoadSpinner />}>
                    <Body compact onSelect={handleSelect} />
                </Suspense>
            </Drawer>
        )
    );
}

export default Dock;
