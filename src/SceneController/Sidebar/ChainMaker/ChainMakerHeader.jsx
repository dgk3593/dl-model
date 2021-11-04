import { useChainMakerState, useModalState } from "@/state";

import CloseButton from "components/CloseButton";
import ChainMakerTarget from "./ChainMakerTarget";
import { ButtonGroup, Button } from "@mui/material";
import { Add, PlayArrow } from "@mui/icons-material";

import { chainCodeToList, generateChainCode } from "./helper";

function ChainMakerHeader({ target }) {
    const { toggle } = useChainMakerState();
    const { inputAni } = useModalState();

    const chain = target?.userData?.chain ?? [];

    const playAll = () => {
        const code = generateChainCode(chain);
        target?.animation.addChain(code);
    };

    const addAniToChain = async () => {
        const [code, name] = await inputAni();
        if (!code) return;

        const chainToAdd = chainCodeToList(code, name);
        target?.userData?.chain.push(...chainToAdd);
    };

    return (
        <div className="ChainMaker-header">
            <div className="ChainMaker-title">
                <ButtonGroup>
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
                onClick={toggle}
                color="white"
                title="Close Chain Maker"
            />
        </div>
    );
}

export default ChainMakerHeader;
