import { useState, useRef } from "react";
import Drawer from "@material-ui/core/Drawer";

import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody/SidebarBody";
import Modal from "./Modal/Modal";

import useStyles from "./styles/SidebarStyles";

function SideBar({ toggleSidebarOpen, open }) {
    const classes = useStyles();

    const [modalMode, setModalMode] = useState("");
    const handleSelect = useRef(null);

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
            <SidebarHeader toggleSidebarOpen={toggleSidebarOpen} />
            <SidebarBody setModalMode={setModalMode} />
            <Modal
                mode={modalMode}
                closeModal={closeModal}
                handleSelect={handleSelect}
            />
        </Drawer>
    );
}

export default SideBar;
