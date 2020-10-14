import React, { useContext, useCallback } from "react";

import { SettingsContext, DispatchContext } from "./context/SettingsContext";
import ModelViewer from "./ModelViewer";
import AniControl from "./AniControl";
import "./styles/Display.css";

import { faceOffsets, cameraPositions, controlsPositions } from "./consts";

function Display(props) {
    const { viewport } = props;

    const settings = useContext(SettingsContext);
    const {
        model: {
            id: modelId,
            texture,
            faceTexture,
            face,
            weaponRight,
            weaponLeft,
        },
        animation: { code: chainCode, timeScale },
        scene: { background: bgColor, initCameraPosition },
        app: { showAniControl, antiAliasing, capture },
        outline: {
            enable: showOutline,
            color: outlineColor,
            size: outlineSize,
            opacity: outlineOpacity,
        },
    } = settings;

    const dispatch = useContext(DispatchContext);
    const toggleCapture = useCallback(() => {
        const action = {
            type: "toggle",
            key: "app",
            value: "capture",
        };
        dispatch(action);
    }, [dispatch]);

    const faceOffset = faceOffsets[`face${face}`];

    const type = modelId[0];

    const defaultCameraPosition = cameraPositions[modelId]
        ? cameraPositions[modelId]
        : cameraPositions[type];

    const cameraPosition = initCameraPosition
        ? initCameraPosition.map((n, i) =>
              isNaN(n) ? defaultCameraPosition[i] : n
          )
        : defaultCameraPosition;

    const controlsPosition = controlsPositions[modelId]
        ? controlsPositions[modelId]
        : controlsPositions[type];

    return (
        <div className="Display">
            {showAniControl && (
                <div className="Display-AniControl">
                    <AniControl value={settings.animation.timeScale} />
                </div>
            )}
            <ModelViewer
                setIsLoading={props.setIsLoading}
                capture={capture}
                toggleCapture={toggleCapture}
                viewport={viewport}
                cameraPosition={cameraPosition}
                controlsPosition={controlsPosition}
                model={modelId}
                texture={texture}
                faceTexture={faceTexture}
                faceOffset={faceOffset}
                weaponRight={weaponRight}
                weaponLeft={weaponLeft}
                aniCode={chainCode}
                timeScale={timeScale}
                bgColor={bgColor}
                showOutline={showOutline}
                outlineColor={outlineColor}
                outlineSize={outlineSize}
                outlineOpacity={outlineOpacity}
                antiAliasing={antiAliasing}
            />
        </div>
    );
}

export default Display;
