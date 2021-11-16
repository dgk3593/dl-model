import React, { useEffect } from "react";
import { useKey } from "@/SceneController/hook";
import { useAppState } from "@/state";

import ModelSelect from "./ModelSelect";
import FullModelController from "components/controller/FullModelController";
import { Button } from "@mui/material";
import { RestartAlt } from "@mui/icons-material";
import viewer from "@/viewer";
import { initAniSelectState } from "@/helper/initAniSelectState";

const { setLoadingMsg } = useAppState.getState();

const handleSelect = async (id, name) => {
    setLoadingMsg("Loading");
    const newModel = await viewer.loadDLModel(id);
    newModel.userData.name = name;
    initAniSelectState(newModel);
    viewer.add(newModel);

    setLoadingMsg("");
};

function MultiMode() {
    const [key, update] = useKey();

    useEffect(() => {
        const listener = viewer.model.addEventListener("change", update);
        return () => {
            viewer.model.removeEventListener("change", listener);
        };
    }, []);

    const restartAllAni = () => {
        viewer.loadedModel.forEach(({ animation }) => {
            animation.stop();
            animation.play();
        });
    };

    return (
        <>
            <ModelSelect label="Add Model" handleSelect={handleSelect} />
            <span className="break" />

            <Button
                variant="contained"
                onClick={restartAllAni}
                startIcon={<RestartAlt />}
            >
                Restart All Animation
            </Button>
            <span className="break" />

            <React.Fragment key={key}>
                {viewer.model.map(model => {
                    return (
                        <div key={model.uniqueId}>
                            <FullModelController target={model} />
                        </div>
                    );
                })}
            </React.Fragment>
        </>
    );
}

export default MultiMode;
