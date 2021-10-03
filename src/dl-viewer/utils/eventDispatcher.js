/**
 * @mixin
 * @type {EventDispatcher}
 */
const eventDispatcher = {
    addEventListener(type, listener) {
        if (!listener) return;

        this._listeners = this._listeners ?? {};
        const listeners = this._listeners;

        const lcType = type.toLowerCase();

        listeners[lcType] = listeners[lcType] ?? [];
        // add listener if not already added
        !listeners[lcType].includes(listener) &&
            listeners[lcType].push(listener);
        return listener;
    },

    hasEventListener(type, listener) {
        if (this._listeners === undefined) return false;

        const listeners = this._listeners;

        return !!listeners[type.toLowerCase()]?.includes(listener);
    },

    removeEventListener(type, listener) {
        if (this._listeners === undefined) return;

        const lcType = type.toLowerCase();

        const listeners = this._listeners;
        const listenerArray = listeners[lcType];

        if (listenerArray !== undefined) {
            const index = listenerArray.indexOf(listener);

            if (index !== -1) {
                listenerArray.splice(index, 1);
            }
        }
    },

    dispatchEvent(event) {
        if (this._listeners === undefined) return;

        const listeners = this._listeners;
        const eventType = event.type.toLowerCase();
        const listenerArray = listeners[eventType];

        if (listenerArray) {
            event.target = this;

            // Make a copy, in case listeners are removed while iterating.
            const array = listenerArray.slice(0);

            for (let i = 0, l = array.length; i < l; i++) {
                array[i].call(this, event);
            }
        }
    },

    addCountedEventListener(type, listener, count = 1) {
        const target = this;
        let counter = count;

        function tmpListener(event) {
            listener.call(target, event);
            counter--;
            counter === 0 && target.removeEventListener(type, tmpListener);
        }
        this.addEventListener(type, tmpListener);
    },
};

export default eventDispatcher;
