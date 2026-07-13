import eventDispatcher from "./eventDispatcher";

/** @typedef {import("../typedef").EventDispatcher} EventDispatcher */

/**
 * @typedef {object} ArrayChangeEvent
 * @property {'change'} type
 * @property {string} method - method used to change the array
 * @property {Array} args - method arguments
 */
/**
 * Special array that dispatches a 'change' event when its contents mutate.
 * @implements {EventDispatcher}
 * @see {@link ArrayChangeEvent}
 */
export class ArrayWithEvent extends Array {
  constructor(...args) {
    super(...args);
  }

  push(...args) {
    const result = super.push(...args);
    this.dispatchEvent({ type: "change", method: "push", args });
    return result;
  }

  pop() {
    const result = super.pop();
    this.dispatchEvent({ type: "change", method: "pop", args: [] });
    return result;
  }

  shift() {
    const result = super.shift();
    this.dispatchEvent({ type: "change", method: "shift", args: [] });
    return result;
  }

  unshift(...args) {
    const result = super.unshift(...args);
    this.dispatchEvent({ type: "change", method: "unshift", args });
    return result;
  }

  splice(...args) {
    const result = super.splice(...args);
    this.dispatchEvent({ type: "change", method: "splice", args });
    return result;
  }

  reverse() {
    const result = super.reverse();
    this.dispatchEvent({ type: "change", method: "reverse", args: [] });
    return result;
  }

  sort(compareFn) {
    const result = super.sort(compareFn);
    this.dispatchEvent({ type: "change", method: "sort", args: [compareFn] });
    return result;
  }

  copyWithin(...args) {
    const result = super.copyWithin(...args);
    this.dispatchEvent({ type: "change", method: "copyWithin", args });
    return result;
  }

  fill(...args) {
    const result = super.fill(...args);
    this.dispatchEvent({ type: "change", method: "fill", args });
    return result;
  }

  remove(item) {
    const index = this.indexOf(item);
    if (index === -1) return;
    this.splice(index, 1);
  }
}

Object.assign(ArrayWithEvent.prototype, eventDispatcher);
