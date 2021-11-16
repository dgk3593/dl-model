import {
    useActiveModel,
    useAniSelectState,
    useChainMakerState,
    useModalState,
} from "@/state";

import CloseButton from "components/CloseButton";
import ChainMakerTarget from "./ChainMakerTarget";
import { ButtonGroup, Button } from "@mui/material";
import { Add, PlayArrow } from "@mui/icons-material";

import { chainCodeToList, generateChainCode } from "./helper";

function ChainMakerHeader({ target }) {
    const { toggle } = useChainMakerState();
    const { inputAni } = useModalState();
    const { activeModel } = useActiveModel();

    const chain = target?.userData?.chain ?? [];

    const playAll = () => {
        const code = generateChainCode(chain);
        target?.animation.addChain(code);
    };

    const addAniToChain = async () => {
        const ani = await inputAni();
        if (!ani) return;
        const [code, name, state] = ani;

        const chainToAdd = chainCodeToList(code, name);
        target.userData?.chain.push(...chainToAdd);
        target.userData.aniSelectState = state;
    };

    const closeChainMaker = () => {
        toggle();
        useAniSelectState
            .getState()
            .loadState(activeModel?.userData?.aniSelectState);
    };

    return (
        <div className="ChainMaker-header">
            <div className="ChainMaker-title">
                <ButtonGroup disabled={!target}>
                    <Button
                        variant="contained"
                        title="Play All"
                        onClick={playAll}
                    >
                        <PlayArrow />
                    </Button>
                    <Button
                        variant="contained"
                        title="Add"
                        onClick={addAniToChain}
                    >
                        <Add />
                    </Button>
                </ButtonGroup>
                ChainMaker
            </div>

            <ChainMakerTarget />

            <CloseButton
                onClick={closeChainMaker}
                color="white"
                title="Close Chain Maker"
            />
        </div>
    );
}

export default ChainMakerHeader;
