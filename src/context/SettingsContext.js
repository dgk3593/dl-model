import { createContext, useReducer } from "react";
import { settingsReducer } from "../reducer/settingsReducer";
import { defaultSettings } from "../consts";
import { chainCodeToList } from "../viewerHelpers";

export const SettingsContext = createContext();
export const DispatchContext = createContext();

const initAniChain = chainCodeToList(defaultSettings.animation.code, "init");

export const initSettings = {
    model: { ...defaultSettings.model },
    materialParams: { ...defaultSettings.materialParams },
    scene: { ...defaultSettings.scene },
    animation: { ...defaultSettings.animation },
    app: { ...defaultSettings.app },
    outline: { ...defaultSettings.outline },
    capture: { ...defaultSettings.capture },
    chainMaker: { chain: initAniChain },
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
