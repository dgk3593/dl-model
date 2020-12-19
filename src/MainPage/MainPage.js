import { lazy, Suspense, useState, useRef, useEffect, useContext } from "react";
import useToggleState from "hooks/useToggleState";

import Menu from "@material-ui/icons/Menu";

import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "./MainPageStyles";

import Display from "./Display";
import { SettingsContext } from "context/SettingsContext";
import { setInitialSettings } from "helpers/helpers";

const Sidebar = lazy(() => import("./Sidebar"));

function MainPage({ location }) {
    const classes = useStyles();

    const [sidebarOpen, toggleSidebarOpen] = useToggleState(true);
    const [loadingMsg, setLoadingMsg] = useState("");
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

    return (
        <>
            {loadingMsg && (
                <div className={classes.loadingMsg}>{loadingMsg}</div>
            )}
            <div className={classes.root}>
                <Suspense fallback={null}>
                    <CssBaseline />
                    {initLoadDone && showSettings && (
                        <>
                            <button
                                onClick={toggleSidebarOpen}
                                className={classes.openSidebarButton}
                            >
                                <Menu />
                            </button>

                            <Sidebar
                                toggleSidebarOpen={toggleSidebarOpen}
                                open={sidebarOpen}
                            />
                        </>
                    )}
                </Suspense>
                {initLoadDone && (
                    <main ref={viewerRef} className={classes.content}>
                        <Display
                            setLoadingMsg={setLoadingMsg}
                            viewport={viewport}
                        />
                    </main>
                )}
            </div>
        </>
    );
}

export default MainPage;
