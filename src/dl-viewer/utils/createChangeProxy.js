import eventDispatcher from "./eventDispatcher";

/**
 * dispatch change event if any key is changed
 * @param {object} object - object to create proxy
 */
export const createChangeProxy = object =>
    new Proxy(Object.assign(object, eventDispatcher), {
        get(target, propName) {
            return target[propName];
        },
        set(target, propName, value) {
            target[propName] = value;
            target.dispatchEvent({ type: "change", propName, value });

            return true;
        },
    });
