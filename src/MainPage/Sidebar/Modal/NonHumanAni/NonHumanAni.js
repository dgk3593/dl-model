import { useState, useEffect, useContext } from "react";

import { DispatchContext, SettingsContext } from "context/SettingsContext";

import { DialogContent, DialogTitle, DialogTop } from "components/CustomDialog";
import Button from "@material-ui/core/Button";

import dragonAni from "data/animationDragon";
import Modal from "../../Modal";

import { chainCodeToList } from "helpers/viewerHelpers";

import "./styles/NonHumanAni.css";

function NonHumanAni({ close, handleSelect, docked, moveToDock }) {
    const dispatch = useContext(DispatchContext);
    const {
        model: { id: modelId },
        app: { sidebarContent },
    } = useContext(SettingsContext);

    const [sourceId, setSourceId] = useState(modelId);
    const [modalMode, setModalMode] = useState("");

    useEffect(() => {
        setSourceId(modelId);
    }, [modelId]);

    const portraitDir = "dragonPortraits";

    const portraitPath = `${
        process.env.PUBLIC_URL
    }/img/${portraitDir}/${sourceId.slice?.(1)}.png`;

    const portrait = <img src={portraitPath} alt="portrait" />;

    const chainMode = sidebarContent === "chainMaker";

    const animations = dragonAni[sourceId];

    const chooseSource = () => setModalMode("dragon");
    const closeModal = () => setModalMode("");

    const updateSettings = (key, value) => {
        dispatch({ type: "update", key, value });
    };

    const defaultAniHandler = (aniCode, name) => {
        // Set Animation
        updateSettings("animation", { code: aniCode });
        // Reinitialize Chain Maker's chain
        const chainList = chainCodeToList(aniCode, name);
        updateSettings("chainMaker", { chain: chainList });
    };

    const aniHandler = handleSelect || defaultAniHandler;

    const handleAniSelect = event => {
        const aniCode = event.currentTarget.dataset.value;
        const name = event.currentTarget.dataset.name;

        aniHandler(aniCode, name);
        !docked && close();
    };

    const aniButtons = animations.map(({ name, code }) => (
        <Button
            key={name}
            data-value={code}
            data-name={name}
            variant="contained"
            onClick={handleAniSelect}
        >
            {name}
        </Button>
    ));

    return (
        <>
            <DialogTop>
                <DialogTitle
                    showDockBtn={!docked && !chainMode}
                    onDock={moveToDock}
                    onClose={close}
                >
                    {chainMode ? "Add Animation" : "Select an Animation"}
                </DialogTitle>
                <div className="NonHumanAni-source">
                    {portrait}
                    <Button variant="outlined" onClick={chooseSource}>
                        Change
                    </Button>
                </div>
            </DialogTop>
            <DialogContent dividers className="NonHumanAni-content">
                {aniButtons}
            </DialogContent>
            <Modal
                mode={modalMode}
                closeModal={closeModal}
                handleSelect={setSourceId}
            />
        </>
    );
}

export default NonHumanAni;
