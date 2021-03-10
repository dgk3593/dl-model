import { lazy, Suspense } from "react";
import Drawer from "@material-ui/core/Drawer";

import useStyles from "./DockStyles";

const ModalBody = lazy(() => import("MainPage/Sidebar/Modal/ModalBody"));

function Dock({ mode, handleSelect, close }) {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={!!mode}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Suspense fallback={<div>Loading...</div>}>
                <ModalBody
                    mode={mode}
                    docked
                    closeModal={close}
                    handleSelect={handleSelect}
                />
            </Suspense>
        </Drawer>
    );
}

export default Dock;
