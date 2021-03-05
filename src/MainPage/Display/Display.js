import { lazy, Suspense, useContext, useCallback } from "react";

import { SettingsContext, DispatchContext } from "context/SettingsContext";
import "./styles/Display.css";

import getTextColor from "helpers/getTextColor";
import cameraPositions from "data/cameraPositions";
import controlsPosition from "data/controlsPositions";

const AniControl = lazy(() => import("./AniControl"));
const BasicViewer = lazy(() => import("components/viewers/BasicViewer"));
const AdvViewer = lazy(() => import("components/viewers/AdvViewer"));
const DragonViewer = lazy(() => import("components/viewers/DragonViewer"));

const viewers = { basic: BasicViewer, adv: AdvViewer, dragon: DragonViewer };

/**
 * @param {Object} props
 * @param {function} props.setLoadingMsg
 * @param {{width: number, height: number}} props.viewport
 */
function Display(props) {
    const { viewport } = props;

    const settings = useContext(SettingsContext);
    const {
        model: { id: modelId },
        scene: { rotateSpeed, background: bgColor, initCameraPosition },
        app: { showAniControl, antiAliasing, viewerType },
    } = settings;

    const dispatch = useContext(DispatchContext);

    const toggleSetting = useCallback(
        (key, value) => dispatch({ type: "toggle", key, value }),
        [dispatch]
    );
    const toggleCapture = useCallback(
        () => toggleSetting("capture", "enable"),
        [toggleSetting]
    );
    const toggleExport = useCallback(() => toggleSetting("export", "enable"), [
        toggleSetting,
    ]);

    const modelType = modelId[0];

    const defaultCameraPosition =
        cameraPositions[modelId] || cameraPositions[modelType];

    const cameraPosition = initCameraPosition
        ? initCameraPosition.map((n, i) =>
              isNaN(n) ? defaultCameraPosition[i] : n
          )
        : defaultCameraPosition;

    const controlPosition =
        controlsPosition[modelId] || controlsPosition[modelType];

    const ModelViewer = viewers[viewerType];

    return (
        <div className="Display">
            {showAniControl && (
                <div
                    className="Display-AniControl"
                    style={{ color: getTextColor(bgColor) }}
                >
                    <Suspense fallback={null}>
                        <AniControl value={settings.animation.timeScale} />
                    </Suspense>
                </div>
            )}
            <Suspense fallback={null}>
                <ModelViewer
                    setLoadingMsg={props.setLoadingMsg}
                    capture={settings.capture}
                    toggleCapture={toggleCapture}
                    export={settings.export}
                    toggleExport={toggleExport}
                    model={settings.model}
                    material={settings.material}
                    outline={settings.outline}
                    animation={settings.animation}
                    lights={settings.lights}
                    ascii={settings.ascii}
                    antiAliasing={antiAliasing}
                    bgColor={bgColor}
                    viewport={viewport}
                    cameraPosition={cameraPosition}
                    controlsPosition={controlPosition}
                    rotateSpeed={rotateSpeed}
                />
            </Suspense>
        </div>
    );
}

export default Display;
