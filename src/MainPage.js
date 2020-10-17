import React, { useState, useRef, useEffect, useContext } from "react";
import useToggleState from "./hooks/useToggleState";

import Menu from "@material-ui/icons/Menu";

import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "./styles/MainPageStyles";

import Display from "./Display";
import SideBar from "./SideBar";
import ControlPanel from "./ControlPanel";
import { SettingsContext } from "./context/SettingsContext";
import { setInitialSettings } from "./helpers";

function MainPage({ location }) {
    const classes = useStyles();

    const [currentMode, setCurrentMode] = useState("model");
    const [sidebarOpen, toggleSidebarOpen] = useToggleState(true);
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
        <>
            {isLoading && <div className={classes.loadingMsg}>Loading...</div>}
            <div className={classes.root}>
                <CssBaseline />
                <ControlPanel
                    mode={currentMode}
                    open={controlOpen}
                    toggleControlOpen={toggleControlOpen}
                />
                {showSettings && (
                    <>
                        <button
                            onClick={toggleSidebarOpen}
                            className={classes.openSidebarButton}
                        >
                            <Menu />
                        </button>

                        <SideBar
                            toggleSidebarOpen={toggleSidebarOpen}
                            open={sidebarOpen}
                            openControl={openControl}
                        />
                    </>
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
        </>
    );
}

export default MainPage;
