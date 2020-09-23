import React, { useContext } from "react";
import { SettingsContext } from "./context/SettingsContext";
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
        animation: { code: aniCode, timeScale },
        scene: { background: bgColor },
        app: { showAniControl },
    } = settings;

    const faceOffset = faceOffsets[`face${face}`];

    const type = modelId[0];

    const cameraPosition = cameraPositions[modelId]
        ? cameraPositions[modelId]
        : cameraPositions[type];

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
                model={modelId}
                texture={texture}
                faceTexture={faceTexture}
                viewport={viewport}
                faceOffset={faceOffset}
                cameraPosition={cameraPosition}
                controlsPosition={controlsPosition}
                timeScale={timeScale}
                bgColor={bgColor}
                weaponRight={weaponRight}
                weaponLeft={weaponLeft}
                aniCode={aniCode}
            />
        </div>
    );
}

export default Display;
