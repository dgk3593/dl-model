import Drawer from "@material-ui/core/Drawer";

import DrawerContent from "./DrawerContent";
import DrawerHeader from "./DrawerHeader";

import useStyles from "./styles/MainPageStyles";

function SideBar({ toggleSidebarOpen, open, openControl }) {
    const classes = useStyles();
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
            <DrawerHeader toggleDrawerOpen={toggleSidebarOpen} />
            <DrawerContent openControl={openControl} />
        </Drawer>
    );
}

export default SideBar;
