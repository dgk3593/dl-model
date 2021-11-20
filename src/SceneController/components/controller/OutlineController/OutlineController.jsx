import { useKey } from "hook/useKey";
import { useEffect, useRef } from "react";

import Setters from "components/Setters";
import { Button } from "@mui/material";
import { props } from "./props";

import viewer from "@/viewer";

/**
 * @param {{ target: DLModel }} props
 */
function OutlineController({ target }) {
    const { outline } = target;
    const [key, updateKey] = useKey();
    // skip rerender if changed directly with this controller
    const skipRerender = useRef(false);

    useEffect(() => {
        const listener = outline.addEventListener("change", () => {
            if (skipRerender.current) {
                skipRerender.current = false;
                return;
            }
            updateKey();
        });

        return () => outline.removeEventListener("change", listener);
    }, []);

    const propagate = () => {
        const { code } = outline;
        target.attachment.traverse(att => (att.outline.code = code));
    };

    props.forEach(prop => {
        prop.onBeforeChange = () => (skipRerender.current = true);
        prop.onChange = propagate;
    });

    const reset = () => {
        const defaultSettings = viewer.settings.outline;

        Object.entries(defaultSettings).forEach(([key, value]) => {
            outline[key] = value;
        });
        propagate();
        updateKey();
    };

    return (
        <>
            <Setters key={key} target={outline} propList={props} />
            <div className="SettingGroup-extra">
                <Button onClick={reset}>Reset</Button>
            </div>
        </>
    );
}

export default OutlineController;
