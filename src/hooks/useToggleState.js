import { useState, useCallback } from "react";

function useToggleState(initVal = false) {
    const [state, setState] = useState(initVal);
    const toggleState = useCallback(() => {
        setState(state => !state);
    }, [setState]);
    return [state, toggleState];
}

export default useToggleState;
