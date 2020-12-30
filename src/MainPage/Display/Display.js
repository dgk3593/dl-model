import { lazy, Suspense, useContext, useCallback } from "react";

import { SettingsContext, DispatchContext } from "context/SettingsContext";
import "./styles/Display.css";

import { getTextColor } from "helpers/helpers";
import { cameraPositions, controlsPositions } from "helpers/consts";

const AniControl = lazy(() => import("./AniControl"));
const BaseViewer = lazy(() => import("./viewers/BaseViewer"));
const AdvViewer = lazy(() => import("./viewers/AdvViewer"));
const DragonViewer = lazy(() => import("./viewers/DragonViewer"));

const viewers = { base: BaseViewer, adv: AdvViewer, dragon: DragonViewer };

function Display(props) {
    const { viewport } = props;

    const settings = useContext(SettingsContext);
    const {
        model: { id: modelId },
        scene: { rotateSpeed, background: bgColor, initCameraPosition },
        app: { showAniControl, antiAliasing, viewerType },
    } = settings;

    const dispatch = useContext(DispatchContext);
    const toggleCapture = useCallback(() => {
        const action = {
            type: "toggle",
            key: "capture",
            value: "enable",
        };
        dispatch(action);
    }, [dispatch]);

    const modelType = modelId[0];

    const defaultCameraPosition =
        cameraPositions[modelId] || cameraPositions[modelType];

    const cameraPosition = initCameraPosition
        ? initCameraPosition.map((n, i) =>
              isNaN(n) ? defaultCameraPosition[i] : n
          )
        : defaultCameraPosition;

    const controlsPosition =
        controlsPositions[modelId] || controlsPositions[modelType];

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
                    toggleCapture={toggleCapture}
                    capture={settings.capture}
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
                    controlsPosition={controlsPosition}
                    rotateSpeed={rotateSpeed}
                />
            </Suspense>
        </div>
    );
}

export default Display;
