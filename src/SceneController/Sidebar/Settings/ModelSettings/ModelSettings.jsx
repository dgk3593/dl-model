import { useAppState, useActiveModel } from "@/state";

import { Button } from "@mui/material";
import SimpleWeaponControl from "./SimpleWeaponControl";
import FaceSettings from "./FaceSettings";
import ModelSelect from "./ModelSelect";

import OutlineSettings from "./OutlineSettings";
import MaterialSettings from "./MaterialSettings";
import ParticleController from "components/controller/ParticleController";

import { simpleHandler } from "../simpleHandler";
import { Attachment, DirectionsRun, Storage } from "@mui/icons-material";
import BodyPartsController from "@/SceneController/components/controller/BodyPartsController";
import TextureController from "@/SceneController/components/controller/TextureController";

function ModelSettings() {
    const { activeModel } = useActiveModel();
    const openModal = useAppState(state => state.sidebar.modal.open);
    const { toggleChainMaker } = useAppState(state => state.sidebar);

    const handleClick = event => {
        const { mode } = event.currentTarget.dataset;
        openModal(mode, simpleHandler[mode]);
    };

    return (
        <>
            <ModelSelect />
            <span className="break" />
            {/* <Button
                variant="contained"
                data-mode="target"
                onClick={handleClick}
            >
                Target
            </Button> */}

            {activeModel && (
                <>
                    <TextureController
                        key={activeModel.uniqueId}
                        target={activeModel}
                    />
                    {activeModel?.parts && (
                        <>
                            <BodyPartsController
                                target={activeModel}
                                key={activeModel.uniqueId}
                            />
                            <span className="break" />
                        </>
                    )}

                    {activeModel?.face && (
                        <FaceSettings handleClick={handleClick} />
                    )}
                    <span className="break" />

                    <Button
                        variant="contained"
                        data-mode="attachment"
                        onClick={handleClick}
                        startIcon={<Attachment />}
                    >
                        Manage Attachments
                    </Button>
                    <SimpleWeaponControl openModal={openModal} />
                    <span className="break" />

                    <Button
                        variant="contained"
                        data-mode="animation"
                        onClick={handleClick}
                        startIcon={<DirectionsRun />}
                    >
                        Animation Select
                    </Button>
                    <Button
                        variant="contained"
                        onClick={toggleChainMaker}
                        startIcon={<Storage />}
                    >
                        Chain Maker
                    </Button>

                    <span className="break" />
                    <OutlineSettings />
                    <MaterialSettings />
                    <ParticleController target={activeModel} />
                </>
            )}
        </>
    );
}

export default ModelSettings;
