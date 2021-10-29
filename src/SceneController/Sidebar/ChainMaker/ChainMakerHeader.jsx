import { useActiveModel, useAppState, useModalState } from "@/state";
import CloseButton from "components/CloseButton";
import { ButtonGroup, Button } from "@mui/material";
import { Add, PlayArrow } from "@mui/icons-material";
import { chainCodeToList, generateChainCode } from "./helper";

function ChainMakerHeader() {
    const toggleChainMaker = useAppState(
        state => state.sidebar.toggleChainMaker
    );
    const { inputAni } = useModalState();
    const { activeModel } = useActiveModel();
    const chain = activeModel?.userData?.chain ?? [];

    const playAll = () => {
        const code = generateChainCode(chain);
        activeModel?.animation.addChain(code);
    };

    const addAniToChain = async () => {
        const [code, name] = await inputAni();
        if (!code) return;

        const chainToAdd = chainCodeToList(code, name);
        chain.push(...chainToAdd);
    };

    return (
        <div className="ChainMaker-header">
            <ButtonGroup>
                <Button variant="contained" title="Play All" onClick={playAll}>
                    <PlayArrow />
                </Button>
                <Button variant="contained" title="Add" onClick={addAniToChain}>
                    <Add />
                </Button>
            </ButtonGroup>
            ChainMaker
            <CloseButton
                onClick={toggleChainMaker}
                color="white"
                title="Close Chain Maker"
            />
        </div>
    );
}

export default ChainMakerHeader;
