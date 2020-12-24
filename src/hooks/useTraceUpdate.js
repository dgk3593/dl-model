import { useRef, useEffect } from "react";
import { getUpdated } from "helpers/helpers";

function useTraceUpdate(props) {
    const prev = useRef(props);
    useEffect(() => {
        const updated = getUpdated(prev.current, props);
        if (Object.keys(updated).length > 0) {
            console.log("Changed props:", updated);
        }
        prev.current = props;
    });
}

export default useTraceUpdate;
