import {
    lazy,
    Suspense,
    useRef,
    useEffect,
    useContext,
    useCallback,
} from "react";

import { SettingsContext, DispatchContext } from "./context/SettingsContext";
import "./styles/Display.css";

import { getTextColor, getViewerType, getDefaultAni } from "./helpers";
import {
    cameraPositions,
    controlsPositions,
    DEFAULT_FACE_IDX,
    DEFAULT_DRAGON_FACE_IDX,
} from "./consts";

const AniControl = lazy(() => import("./AniControl"));
const BaseViewer = lazy(() => import("./BaseViewer"));
const CharaViewer = lazy(() => import("./CharaViewer"));
const DragonViewer = lazy(() => import("./DragonViewer"));

const viewers = { base: BaseViewer, chara: CharaViewer, dragon: DragonViewer };
const defaultFace = {
    chara: DEFAULT_FACE_IDX,
    dragon: DEFAULT_DRAGON_FACE_IDX,
};

function Display(props) {
    const activeViewer = useRef("");
    const { viewport } = props;

    const settings = useContext(SettingsContext);
    const {
        model: { id: modelId },
        scene: { rotateSpeed, background: bgColor, initCameraPosition },
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

    const resetAni = useCallback(
        id => {
            const defaultAni = getDefaultAni(id);
            const action = {
                type: "update",
                key: "animation",
                value: { code: defaultAni },
            };
            dispatch(action);
        },
        [dispatch]
    );

    const resetFace = useCallback(
        type => {
            const defaultIdx = defaultFace[type] || 1;
            const action = {
                type: "update",
                key: "model",
                value: { eyeIdx: defaultIdx, mouthIdx: defaultIdx },
            };
            dispatch(action);
        },
        [dispatch]
    );

    useEffect(() => {
        const newViewerType = getViewerType(modelId);
        if (activeViewer.current === newViewerType) return;

        if (activeViewer.current) {
            resetFace(newViewerType);
            resetAni(modelId);
        }
        activeViewer.current = newViewerType;
    }, [modelId, resetAni, resetFace]);

    const viewerType = getViewerType(modelId);
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
                    setIsLoading={props.setIsLoading}
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
