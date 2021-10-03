import React, { useEffect, useRef } from "react";
import { useKey } from "hook/useKey";

import Setters from "components/Setters";
import { props, matType } from "./props";

function MaterialController({ target }) {
    const { material } = target;
    const { propList } = material;
    const [key, updateKey] = useKey();
    // skip rerender if changed directly with this controller
    const skipRerender = useRef(false);

    useEffect(() => {
        const listener = material.addEventListener("change", ({ propName }) => {
            if (skipRerender.current) {
                skipRerender.current = false;
                return;
            }
            updateKey();
        });

        return () => material.removeEventListener("change", listener);
    }, []);

    const propagate = () => {
        const { code } = material;
        target.attachment.traverse(att => {
            att.material.code = code;
        });
    };
    matType[0].onChange = () => {
        updateKey();
        propagate();
    };

    const relevantProps = props.filter(({ propName }) =>
        propList.includes(propName)
    );
    relevantProps.forEach(prop => {
        prop.onBeforeChange = () => (skipRerender.current = true);
        prop.onChange = propagate;
    });

    return (
        <React.Fragment key={key}>
            <Setters target={material} propList={matType} />
            <Setters target={material} propList={relevantProps} />
        </React.Fragment>
    );
}

export default MaterialController;
