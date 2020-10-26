import { defaultSettings } from "../consts";

export const settingsReducer = (state, action) => {
    const { type, key, subkey, value } = action;
    switch (type) {
        case "toggle":
            let currentValue;
            if (subkey) {
                currentValue = state[key][subkey][value];
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [subkey]: {
                            ...state[key][subkey],
                            [value]: !currentValue,
                        },
                    },
                };
            }
            currentValue = state[key][value];
            return {
                ...state,
                [key]: { ...state[key], [value]: !currentValue },
            };
        case "reset":
            // reset values
            // value = array of keys in settings[key] or settings[key][subkey] to be reset, null -> reset all
            const defaultSetting = subkey
                ? defaultSettings[key][subkey]
                : defaultSettings[key];
            // no value -> reset all
            if (!value)
                return subkey
                    ? {
                          ...state,
                          [key]: {
                              ...state[key],
                              [subkey]: {
                                  ...state[key][subkey],
                                  ...defaultSetting,
                              },
                          },
                      }
                    : {
                          ...state,
                          [key]: { ...state[key], ...defaultSetting },
                      };
            // if value is defined, reset only the specified keys
            const update = {};
            value.forEach(v => {
                update[v] = defaultSetting[v];
            });
            return subkey
                ? {
                      ...state,
                      [key]: {
                          ...state[key],
                          [subkey]: { ...state[key][subkey], ...update },
                      },
                  }
                : { ...state, [key]: { ...state[key], ...update } };
        case "load":
            // load preset values
            return;
        case "update":
            // update state[key] or state[key][subkey] with values from value
            return subkey
                ? {
                      ...state,
                      [key]: {
                          ...state[key],
                          [subkey]: { ...state[key][subkey], ...value },
                      },
                  }
                : { ...state, [key]: { ...state[key], ...value } };
        default:
            return state;
    }
};
