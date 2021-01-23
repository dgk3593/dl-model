import { useState, useCallback } from "react";

/**
 * custom hook for a boolean state
 * @param {Boolean} initVal - initial value, default is false
 * @return {[state: Boolean, toggleFunction: Function]}
 */
function useToggleState(initVal = false) {
    const [state, setState] = useState(initVal);
    const toggleState = useCallback(() => {
        setState(state => !state);
    }, [setState]);
    return [state, toggleState];
}

export default useToggleState;
