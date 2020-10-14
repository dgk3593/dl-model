import React, { useContext } from "react";

import { DispatchContext } from "./context/SettingsContext";

import ArrowLeft from "@material-ui/icons/ArrowLeft";
import GetApp from "@material-ui/icons/GetApp";

import Tooltip from "@material-ui/core/Tooltip";

import useStyles from "./styles/DrawerHeaderStyles";

function DrawerHeader({ toggleDrawerOpen }) {
    const classes = useStyles();
    const dispatch = useContext(DispatchContext);

    const toggleCapture = () => {
        const action = {
            type: "toggle",
            key: "app",
            value: "capture",
        };
        dispatch(action);
    };
    return (
        <div className={classes.root}>
            <span>Settings</span>
            <div
                className={classes.closeDrawerButton}
                onClick={toggleDrawerOpen}
            >
                <ArrowLeft />
            </div>
            <Tooltip title="Save animation as video" placement="bottom-end">
                <div className={classes.downloadButton} onClick={toggleCapture}>
                    <GetApp />
                </div>
            </Tooltip>
        </div>
    );
}

export default DrawerHeader;
