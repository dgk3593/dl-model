import { useContext, useEffect } from "react";

import { SettingsContext, DispatchContext } from "context/SettingsContext";

import ArrowLeft from "@material-ui/icons/ArrowLeft";
import SaveIcon from "@material-ui/icons/GetApp";

import Tooltip from "@material-ui/core/Tooltip";

import useStyles from "./styles/SidebarHeaderStyles";

import { videoCodecs } from "helpers/consts";

function DrawerHeader({ toggleSidebar }) {
    const classes = useStyles();
    const dispatch = useContext(DispatchContext);
    const {
        capture: { codec: currentCodec },
        ascii: { enable: asciiOn },
    } = useContext(SettingsContext);

    useEffect(() => {
        if (!MediaRecorder) return;

        const supportedCodecs = videoCodecs.filter(
            MediaRecorder.isTypeSupported
        );
        const action = {
            type: "update",
            key: "capture",
            value: {
                supportedCodecs: [...supportedCodecs],
                codec: supportedCodecs[0],
            },
        };
        dispatch(action);
    }, [dispatch]);

    const toggleCapture = () => {
        const action = {
            type: "toggle",
            key: "capture",
            value: "enable",
        };
        dispatch(action);
    };

    return (
        <div className={classes.root}>
            <span>Settings</span>
            <div className={classes.closeDrawerButton} onClick={toggleSidebar}>
                <ArrowLeft />
            </div>
            {currentCodec && !asciiOn && (
                <Tooltip
                    title="Save animation as video (experimental)"
                    placement="bottom-end"
                >
                    <div
                        className={classes.downloadButton}
                        onClick={toggleCapture}
                    >
                        <SaveIcon />
                    </div>
                </Tooltip>
            )}
        </div>
    );
}

export default DrawerHeader;
