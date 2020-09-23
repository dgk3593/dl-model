import { useState, useRef } from "react";

function useToggleState(initVal = false) {
    const [state, setState] = useState(initVal);
    const toggleState = useRef(() => {
        setState(state => !state);
    });
    return [state, toggleState.current];
}

export default useToggleState;
