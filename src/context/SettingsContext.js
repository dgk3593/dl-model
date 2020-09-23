import React, { createContext, useReducer } from "react";
import { settingsReducer } from "../reducer/settingsReducer";

export const SettingsContext = createContext();
export const DispatchContext = createContext();

export const initSettings = {
    model: {
        id: "c100001_01",
        texture: "c100001_01",
        faceTexture: "c100001_01",
        face: 2,
        weaponRight: "",
        weaponLeft: "",
    },
    scene: { background: "#cccccc" },
    animation: { code: "MWM_CMN+CMN_MWM_03", timeScale: 1 },
    app: { showSettings: true, showAniControl: true },
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
