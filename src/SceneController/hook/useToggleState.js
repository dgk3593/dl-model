import { useState } from "react";

/** custom hook for a boolean state
 * @param {Boolean} initVal - initial value, default is false
 * @return {[state: Boolean, toggleFunction: () => void]}
 */
export function useToggleState(initVal = false) {
    const [state, setState] = useState(initVal);
    const toggleState = () => setState(state => !state);

    return [state, toggleState];
}
