import { useRef, useEffect, lazy, Suspense } from "react";
import { loadPersonalAni } from "./data/getPersonalAni";
import { loadHash } from "./helper/loadHash";
import { useIsMount } from "./SceneController/hook";
import { useAppState } from "./state";
import viewer from "./viewer";
const SceneController = lazy(() => import("./SceneController"));
const TimeControl = lazy(() => import("./TimeControl"));

export function App() {
    const isMount = useIsMount();

    /**
     * @type { React.MutableRefObject <HTMLDivElement> }
     */
    const mainView = useRef();
    /**
     * @type { React.MutableRefObject <HTMLDivElement> }
     */
    const stats = useRef();
    const { loadingMsg, showTimeControl, showSettings, showFrameRate } =
        useAppState();

    useEffect(() => {
        isMount && loadPersonalAni().then(loadHash);

        window.addEventListener("hashchange", loadHash);

        return () => window.removeEventListener("hashchange", loadHash);
    });

    useEffect(() => {
        mainView.current.appendChild(viewer.canvas);

        viewer.stats.dom.style.position = "";
        stats.current.appendChild(viewer.stats.dom);
    }, []);

    return (
        <>
            {showSettings && (
                <Suspense fallback={null}>
                    <SceneController />
                </Suspense>
            )}
            <div className="mount" ref={el => (mainView.current = el)} />
            <div
                className="stats"
                style={{ display: showFrameRate ? "unset" : "none" }}
                ref={el => (stats.current = el)}
            />

            {loadingMsg && <div className="loading-msg">{loadingMsg}</div>}
            {showTimeControl && (
                <Suspense fallback={null}>
                    <TimeControl />
                </Suspense>
            )}
        </>
    );
}
