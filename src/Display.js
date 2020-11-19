import { lazy, Suspense, useContext, useCallback } from "react";

import { SettingsContext, DispatchContext } from "./context/SettingsContext";
import ModelViewer from "./ModelViewer";
import "./styles/Display.css";

import { getTextColor } from "./helpers";
import { cameraPositions, controlsPositions } from "./consts";

const AniControl = lazy(() => import("./AniControl"));

function Display(props) {
    const { viewport } = props;

    const settings = useContext(SettingsContext);
    const {
        model: { id: modelId },
        scene: { rotateSpeed, background: bgColor, initCameraPosition, lights },
        app: { showAniControl, antiAliasing },
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

    const type = modelId[0];

    const defaultCameraPosition =
        cameraPositions[modelId] || cameraPositions[type];

    const cameraPosition = initCameraPosition
        ? initCameraPosition.map((n, i) =>
              isNaN(n) ? defaultCameraPosition[i] : n
          )
        : defaultCameraPosition;

    const controlsPosition =
        controlsPositions[modelId] || controlsPositions[type];

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
            <ModelViewer
                setIsLoading={props.setIsLoading}
                capture={settings.capture}
                toggleCapture={toggleCapture}
                viewport={viewport}
                cameraPosition={cameraPosition}
                controlsPosition={controlsPosition}
                model={settings.model}
                materialParams={settings.materialParams}
                outline={settings.outline}
                animation={settings.animation}
                rotateSpeed={rotateSpeed}
                lights={lights}
                bgColor={bgColor}
                antiAliasing={antiAliasing}
                ascii={settings.ascii}
            />
        </div>
    );
}

export default Display;
