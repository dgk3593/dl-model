import { useState, useRef } from "react";

import Drawer from "@material-ui/core/Drawer";

import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import Modal from "./Modal";

import useStyles from "./styles/SidebarStyles";

function Sidebar({ open, toggleSidebar, setDock }) {
    const classes = useStyles();

    const [modalMode, setModalMode] = useState("");
    const handler = useRef(null);

    const openModal = (mode, handleSelect = null) => {
        handler.current = handleSelect;
        setModalMode(mode);
    };

    const closeModal = () => setModalMode("");

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <SidebarHeader toggleSidebar={toggleSidebar} />
            <SidebarBody openModal={openModal} />
            <Modal
                mode={modalMode}
                closeModal={closeModal}
                handleSelect={handler.current}
                setDock={setDock}
            />
        </Drawer>
    );
}

export default Sidebar;
