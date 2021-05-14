import { createContext, useReducer } from "react";
import { settingsReducer } from "reducer/settingsReducer";
import { defaultSettings } from "helpers/consts";

/** @type {React.Context<ApplicationState>} */
export const SettingsContext = createContext(null);

/** @type {React.Context< React.Dispatch<ReducerAction> >} */
export const DispatchContext = createContext(null);

/** used to initialize global state
 * @type {ApplicationState}
 */
const initSettings = {};
Object.keys(defaultSettings).forEach(
    key => (initSettings[key] = { ...defaultSettings[key] })
);
initSettings.lights = defaultSettings.lights.map(light => ({
    ...light,
}));

export { initSettings };

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
