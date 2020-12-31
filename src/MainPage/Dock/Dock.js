import Drawer from "@material-ui/core/Drawer";
import ModalBody from "MainPage/Sidebar/Modal/ModalBody";

import useStyles from "./DockStyles";

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
            <ModalBody
                mode={mode}
                docked
                closeModal={close}
                handleSelect={handleSelect}
            />
        </Drawer>
    );
}

export default Dock;
