import React, { useContext, useEffect } from "react";

import { SettingsContext, DispatchContext } from "./context/SettingsContext";

import ArrowLeft from "@material-ui/icons/ArrowLeft";
import GetApp from "@material-ui/icons/GetApp";

import Tooltip from "@material-ui/core/Tooltip";

import useStyles from "./styles/DrawerHeaderStyles";

import { videoCodecs } from "./consts";

function DrawerHeader({ toggleDrawerOpen }) {
    const classes = useStyles();
    const dispatch = useContext(DispatchContext);
    const {
        capture: { codec: currentCodec },
    } = useContext(SettingsContext);

    useEffect(() => {
        try {
            const supportedCodecs = videoCodecs.filter(codec =>
                MediaRecorder.isTypeSupported(codec)
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
        } catch (err) {
            console.log(err);
        }
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
            <div
                className={classes.closeDrawerButton}
                onClick={toggleDrawerOpen}
            >
                <ArrowLeft />
            </div>
            {currentCodec && (
                <Tooltip
                    title="Save animation as video (experimental)"
                    placement="bottom-end"
                >
                    <div
                        className={classes.downloadButton}
                        onClick={toggleCapture}
                    >
                        <GetApp />
                    </div>
                </Tooltip>
            )}
        </div>
    );
}

export default DrawerHeader;
