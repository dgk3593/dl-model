/**
 * @mixin
 * @type {EventDispatcher}
 */
const eventDispatcher = {
    addEventListener(type, listener) {
        if (!listener) return;

        this._listeners ??= {};
        const listeners = this._listeners;

        type = type.toLowerCase();
        listeners[type] ??= [];
        // add listener if not already added
        listeners[type].includes(listener) || listeners[type].push(listener);
        return listener;
    },

    hasEventListener(type, listener) {
        type = type.toLowerCase();
        return !!this._listeners?.[type]?.includes(listener);
    },

    removeEventListener(type, listener) {
        type = type.toLowerCase();
        const listenerArray = this._listeners?.[type];
        if (!listenerArray) return;

        const index = listenerArray.indexOf(listener);
        index !== -1 && listenerArray.splice(index, 1);
    },

    dispatchEvent(event) {
        const type = event.type?.toLowerCase();
        const listenerArray = this._listeners?.[type];
        if (!listenerArray) return;

        event.target = this;

        // Make a copy, in case listeners are removed while iterating.
        const listeners = [...listenerArray];
        listeners.forEach(listener => listener.call(this, event));
    },

    addCountedEventListener(type, listener, count = 1) {
        const target = this;

        function tmpListener(event) {
            listener.call(target, event);
            count--;
            count === 0 && target.removeEventListener(type, tmpListener);
        }
        this.addEventListener(type, tmpListener);
    },
};

export default eventDispatcher;
