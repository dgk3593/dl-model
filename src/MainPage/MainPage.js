import {
    lazy,
    Suspense,
    useState,
    useRef,
    useEffect,
    useContext,
    useCallback,
} from "react";

import useToggleState from "hooks/useToggleState";

import Menu from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "./MainPageStyles";

import Display from "./Display";

import { SettingsContext, DispatchContext } from "context/SettingsContext";
import { getViewerType } from "helpers/helpers";
import { getDefaultAni } from "helpers/async/getDefaultAni";

import setParamsFromPath from "helpers/async/setParamsFromPath";
import { getDefaultModelMod } from "helpers/async/getModelMod";

import { chainCodeToList } from "helpers/viewerHelpers";

const Sidebar = lazy(() =>
    import(/* webpackChunkName: "Sidebar" */ "./Sidebar")
);
const Dock = lazy(() => import(/* webpackChunkName: "Dock" */ "./Dock"));

function MainPage({ location }) {
    const classes = useStyles();

    const [sidebar, toggleSidebar] = useToggleState(true);
    const [loadingMsg, setLoadingMsg] = useState("Loading...");
    const [initLoadDone, setInitLoadDone] = useState(false);
    const [viewport, setViewport] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [dockMode, setDockMode] = useState("");
    const dockHandle = useRef();

    const {
        model,
        app: { showSettings, viewerType },
    } = useContext(SettingsContext);
    const dispatch = useContext(DispatchContext);

    const viewerRef = useRef();
    const currentId = useRef("");

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

    const updateSetings = useCallback(
        key => value => dispatch({ type: "update", key, value }),
        [dispatch]
    );

    // load params from path
    useEffect(() => {
        const setParams = async () => {
            setLoadingMsg("Loading...");
            await setParamsFromPath(location.pathname, dispatch);
            setLoadingMsg("");
            setInitLoadDone(true);
        };
        setParams();
    }, [location.pathname, dispatch]);

    // update settings when id changed
    useEffect(() => {
        const { id, modName } = model;
        if (!currentId.current) {
            currentId.current = id;
            return;
        }

        if (id === currentId.current) return;

        const newViewerType = getViewerType(id);
        const viewerChanged = newViewerType !== viewerType;
        updateSetings("app")({ viewerType: newViewerType });

        const viewerChangedToAdv = newViewerType === "adv" && viewerChanged;
        if (viewerChangedToAdv) {
            updateSetings("model")({ eyeIdx: 2, mouthIdx: 2 });
        }

        if (viewerChanged && newViewerType === "dragon") {
            updateSetings("model")({ eyeIdx: 1, mouthIdx: 1 });
        }

        const needResetAni =
            ["dragon", "ani"].includes(newViewerType) || viewerChangedToAdv;

        const resetAni = async () => {
            const ani = await getDefaultAni(id);
            updateSetings("animation")({ code: ani });
            updateSetings("chainMaker")({
                chain: chainCodeToList(ani, "init"),
            });
        };

        const setModelMod = async () => {
            const modelMod = await getDefaultModelMod(id);
            if (!modelMod || !modName) {
                updateSetings("model")({
                    mod: modelMod?.code,
                    modName: modelMod?.name,
                });
            }
        };
        Promise.all([setModelMod(), needResetAni && resetAni()]);

        currentId.current = id;
    }, [model, updateSetings, viewerType]);

    // update viewport size when resized
    useEffect(() => {
        window.addEventListener("resize", updateViewportSize);

        return function () {
            window.removeEventListener("resize", updateViewportSize);
        };
    }, []);

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
