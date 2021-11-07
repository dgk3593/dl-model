import React, { useEffect } from "react";
import { useKey } from "@/SceneController/hook";
import { useAppState } from "@/state";

import ModelSelect from "./ModelSelect";
import viewer from "@/viewer";
import FullModelController from "components/controller/FullModelController";

const { setLoadingMsg } = useAppState.getState();

const handleSelect = async (id, name) => {
    setLoadingMsg("Loading");
    const newModel = await viewer.loadDLModel(id);
    newModel.userData.name = name;
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

    return (
        <>
            <ModelSelect label="Add Model" handleSelect={handleSelect} />
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
