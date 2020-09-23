export const settingsReducer = (state, action) => {
    switch (action.type) {
        case "update":
            // update state[key] with values from value
            const { key, value } = action;
            return { ...state, [key]: { ...state[key], ...value } };
        default:
            return state;
    }
};
