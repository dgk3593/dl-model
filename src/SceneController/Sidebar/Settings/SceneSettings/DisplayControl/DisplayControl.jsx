import React, { useEffect } from "react";
import { useKey } from "hook/useKey";

import Accordion from "components/Accordion";
import Setters from "components/Setters";
import { Button } from "@mui/material";
import { Monitor } from "@mui/icons-material";

import viewer from "@/viewer";
import { displayProp } from "./props";

function DisplayControl() {
    const [key, updateKey] = useKey();

    const reset = event => {
        event.stopPropagation();
        viewer.setViewport();
        viewer.pixelRatio = 1;
        viewer.toneMapping = "No Mapping";

        setTimeout(() => {
            updateKey();
        }, 200);
    };

    const handleChange = () => {
        const {
            viewport: { width, height },
        } = viewer;
        viewer.setViewport(width, height);
    };

    useEffect(() => {
        const listener = () =>
            setTimeout(() => {
                updateKey();
            }, 200);
        window.addEventListener("resize", listener);

        return () => window.removeEventListener("resize", listener);
    }, []);

    /**
     * @type {import("components/Setters").PropDetails[]}
     */
    const viewportProps = [
        {
            propName: "width",
            label: "Width",
            type: "number",
            min: 0,
            max: window.innerWidth,
            step: 32,
            onChange: handleChange,
        },
        {
            propName: "height",
            label: "Height",
            type: "number",
            min: 0,
            max: window.innerHeight,
            step: 32,
            onChange: handleChange,
        },
    ];

    return (
        <Accordion disableGutters className="SettingGroup DisplayControl">
            <>
                <div className="title">
                    <Monitor />
                    Display
                </div>
                <Button
                    onClick={reset}
                    title="Reset display settings"
                    variant="contained"
                >
                    Reset
                </Button>
            </>
            <React.Fragment key={key}>
                <Setters target={viewer.viewport} propList={viewportProps} />
                <Setters target={viewer} propList={displayProp} />
            </React.Fragment>
        </Accordion>
    );
}

export default DisplayControl;
