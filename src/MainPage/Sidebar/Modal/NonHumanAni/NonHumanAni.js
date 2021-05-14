import { useState, useEffect, useContext, useRef } from "react";

import { DispatchContext, SettingsContext } from "context/SettingsContext";

import Button from "@material-ui/core/Button";

import { DialogContent, DialogTitle, DialogTop } from "components/CustomDialog";
import Modal from "../../Modal";

import { chainCodeToList } from "helpers/viewerHelpers";
import { getViewerType } from "helpers/helpers";
import { getNonHumanAniList } from "helpers/async/getNonHumanAniList";

import "./styles/NonHumanAni.css";

function NonHumanAni({ close, handleSelect, docked, moveToDock }) {
    const dispatch = useContext(DispatchContext);
    const {
        model: { id: modelId },
        app: { sidebarContent },
    } = useContext(SettingsContext);

    const [sourceId, setSourceId] = useState(modelId);
    const [modalMode, setModalMode] = useState("");

    /** @type {[ undefined|AnimationList , function]} */
    const [aniList, setAniList] = useState();
    const [listLoading, setListLoading] = useState(true);

    const source = useRef(modelId);

    useEffect(() => {
        const viewerType = getViewerType(modelId);
        if (!["dragon", "ani"].includes(viewerType)) {
            close();
            return;
        }
        if (modelId !== source.current) {
            source.current = modelId;
            setSourceId(modelId);
        }
    }, [modelId, close]);

    useEffect(() => {
        const getAniList = async () => {
            const list = await getNonHumanAniList(sourceId);
            setAniList(list);
            setListLoading(false);
        };

        setListLoading(true);
        getAniList();
    }, [sourceId]);

    const sourceIsNotDragon =
        sourceId.startsWith("h") || sourceId.startsWith("c");

    const portraitDir = sourceIsNotDragon
        ? "enemyPortraits"
        : "dragonPortraits";

    const portraitName =
        sourceIsNotDragon || sourceId === "smith"
            ? sourceId
            : sourceId.slice?.(1);

    const portraitPath = `${process.env.PUBLIC_URL}/img/${portraitDir}/${portraitName}.png`;

    const portrait = <img src={portraitPath} alt="portrait" />;

    const chainMode = sidebarContent === "chainMaker";

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

    const aniButtons = aniList ? (
        aniList.map(({ name, code }) => (
            <Button
                key={code}
                data-value={code}
                data-name={name}
                variant="contained"
                onClick={handleAniSelect}
            >
                {name}
            </Button>
        ))
    ) : (
        <div>No Animation</div>
    );

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
                        Change Source
                    </Button>
                </div>
            </DialogTop>
            <DialogContent dividers className="NonHumanAni-content">
                {listLoading ? <div>Loading...</div> : aniButtons}
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
