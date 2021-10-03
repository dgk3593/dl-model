import eventDispatcher from "./eventDispatcher";

// Array methods that change the array itself
const methods = [
    "push",
    "pop",
    "shift",
    "unshift",
    "splice",
    "reverse",
    "sort",
];

/**
 * @typedef {object} ArrayChangeEvent
 * @property {'change'} type
 * @property {string} method - method used to change the array
 * @property {Array} args - method arguments
 */
/**
 * Special array that will dispatch 'change' event when its content is changed with a method
 * @see {@link ArrayChangeEvent}
 */
export class ArrayWithEvent extends Array {
    constructor(...args) {
        super(...args);
        Object.assign(this, eventDispatcher);

        methods.forEach(method => {
            Object.defineProperty(this, method, {
                value: (...args) => {
                    Array.prototype[method].call(this, ...args);
                    this.dispatchEvent({ type: "change", method, args });
                },
                enumerable: false,
            });
        });
    }

    remove(item) {
        const index = this.indexOf(item);
        if (index === -1) return;

        this.splice(index, 1);
    }
}
