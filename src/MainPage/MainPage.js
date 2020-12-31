import { lazy, Suspense, useState, useRef, useEffect, useContext } from "react";
import useToggleState from "hooks/useToggleState";

import Menu from "@material-ui/icons/Menu";

import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "./MainPageStyles";

import Display from "./Display";
import { SettingsContext } from "context/SettingsContext";
import { setInitialSettings } from "helpers/helpers";

const Sidebar = lazy(() => import("./Sidebar"));
const Dock = lazy(() => import("./Dock"));

function MainPage({ location }) {
    const classes = useStyles();

    const [sidebar, toggleSidebar] = useToggleState(true);
    const [loadingMsg, setLoadingMsg] = useState("");
    const [initLoadDone, setInitLoadDone] = useState(false);
    const [viewport, setViewport] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [dockMode, setDockMode] = useState("");
    const dockHandle = useRef();

    const {
        app: { showSettings },
    } = useContext(SettingsContext);

    const viewerRef = useRef();

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
        const width = viewerRef.current.clientWidth;
        const height = viewerRef.current.clientHeight;
        setViewport({ width, height });
    };

    const setDock = (mode, handleSelect) => {
        setDockMode(mode);
        dockHandle.current = handleSelect;
    };

    const closeDock = () => setDockMode("");

    return (
        <>
            {loadingMsg && (
                <div className={classes.loadingMsg}>{loadingMsg}</div>
            )}
            {initLoadDone && (
                <div className={classes.root}>
                    {showSettings && (
                        <Suspense fallback={null}>
                            <CssBaseline />
                            <button
                                onClick={toggleSidebar}
                                className={classes.openSidebarButton}
                            >
                                <Menu />
                            </button>
                            <Sidebar
                                toggleSidebar={toggleSidebar}
                                open={sidebar}
                                setDock={setDock}
                            />
                        </Suspense>
                    )}
                    <main ref={viewerRef} className={classes.content}>
                        <Display
                            setLoadingMsg={setLoadingMsg}
                            viewport={viewport}
                        />
                    </main>
                    {dockMode && (
                        <Suspense fallback={null}>
                            <Dock
                                mode={dockMode}
                                handleSelect={dockHandle.current}
                                close={closeDock}
                            />
                        </Suspense>
                    )}
                </div>
            )}
        </>
    );
}

export default MainPage;
