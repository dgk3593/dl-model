import React, { useState, useRef, useEffect, useContext } from "react";
import useToggleState from "./hooks/useToggleState";

import ArrowLeft from "@material-ui/icons/ArrowLeft";
import Menu from "@material-ui/icons/Menu";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "./styles/MainPageStyles";

import Display from "./Display";
import DrawerContent from "./DrawerContent";
import ControlPanel from "./ControlPanel";
import { SettingsContext } from "./context/SettingsContext";
import { setInitialSettings } from "./helpers";

function MainPage({ location }) {
    const classes = useStyles();

    const [currentMode, setCurrentMode] = useState("model");
    const [drawerOpen, toggleDrawerOpen] = useToggleState(true);
    const [controlOpen, toggleControlOpen] = useToggleState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [initLoadDone, setInitLoadDone] = useState(false);
    const {
        app: { showSettings },
    } = useContext(SettingsContext);

    const viewerRef = useRef();
    const [viewport, setViewport] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const params = location.pathname.split("/");
        setInitialSettings(params);
        setInitLoadDone(true);

        window.addEventListener("resize", updateViewportSize);

        return function () {
            window.removeEventListener("resize", updateViewportSize);
        };
    }, [location.pathname]);

    const updateViewportSize = () => {
        const height = viewerRef.current.clientHeight;
        const width = viewerRef.current.clientWidth;
        setViewport({ width, height });
    };

    const openControl = mode => {
        toggleControlOpen();
        setCurrentMode(mode);
    };

    return (
        <React.Fragment>
            {isLoading && <div className={classes.loadingMsg}>Loading...</div>}
            <div className={classes.root}>
                <CssBaseline />
                <ControlPanel
                    mode={currentMode}
                    open={controlOpen}
                    toggleControlOpen={toggleControlOpen}
                />
                {showSettings && (
                    <React.Fragment>
                        <button
                            onClick={toggleDrawerOpen}
                            className={classes.openDrawerButton}
                        >
                            <Menu />
                        </button>

                        <Drawer
                            className={classes.drawer}
                            variant="persistent"
                            anchor="left"
                            open={drawerOpen}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            <div className={classes.drawerHeader}>
                                <span>Settings</span>
                            </div>
                            <div
                                className={classes.closeDrawerButton}
                                onClick={toggleDrawerOpen}
                            >
                                <ArrowLeft />
                            </div>

                            <DrawerContent openControl={openControl} />
                        </Drawer>
                    </React.Fragment>
                )}
                {initLoadDone && (
                    <main ref={viewerRef} className={classes.content}>
                        <Display
                            setIsLoading={setIsLoading}
                            viewport={viewport}
                        />
                    </main>
                )}
            </div>
        </React.Fragment>
    );
}

export default MainPage;
