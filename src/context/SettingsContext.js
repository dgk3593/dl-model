import React, { createContext, useReducer } from "react";
import { settingsReducer } from "../reducer/settingsReducer";

export const SettingsContext = createContext();
export const DispatchContext = createContext();

const initAni = {
    name: "Bob",
    fileName: "MWM_CMN",
    aniName: "CMN_MWM_03",
    timeScale: 1,
    repetitions: 1,
    id: "0",
};

export const initSettings = {
    model: {
        id: "c100001_01",
        texture: "c100001_01",
        faceTexture: "c100001_01",
        face: 2,
        weaponRight: "",
        weaponLeft: "",
    },
    scene: {
        background: "#cccccc",
        initCameraPosition: null,
    },
    animation: {
        code: `${initAni.fileName}+${initAni.aniName}`,
        timeScale: 1,
    },
    app: {
        sideContent: "advanced",
        showSettings: true,
        showAniControl: true,
        antiAliasing: false,
    },
    chainMaker: {
        chain: [initAni],
    },
    outline: {
        enable: true,
        size: 5, // 1 -> 10
        color: "#000000",
        opacity: 1, // 0.1 -> 10%, 1-> 100%
    },
};

export function SettingsProvider(props) {
    const [settings, dispatch] = useReducer(settingsReducer, initSettings);

    return (
        <SettingsContext.Provider value={settings}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </SettingsContext.Provider>
    );
}
