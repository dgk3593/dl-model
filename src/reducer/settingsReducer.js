import { defaultSettings } from "../consts";

export const settingsReducer = (state, action) => {
    let key, value;
    switch (action.type) {
        case "reset":
            // reset values
            // value = array of keys in settings[key] to be reset, null -> reset all
            key = action.key;
            value = action.value;
            const defaultSetting = defaultSettings[key];
            // no value -> reset all
            if (!value)
                return {
                    ...state,
                    [key]: { ...state[key], ...defaultSetting },
                };
            // if value is defined, reset only the specified keys
            const update = {};
            value.forEach(v => {
                update[v] = defaultSetting[v];
            });
            return { ...state, [key]: { ...state[key], ...update } };
        case "load":
            // load preset values
            return;
        case "update":
            // update state[key] with values from value
            key = action.key;
            value = action.value;
            return { ...state, [key]: { ...state[key], ...value } };
        default:
            return state;
    }
};
