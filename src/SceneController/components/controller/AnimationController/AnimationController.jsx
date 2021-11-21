import { useAniSelectState, useChainMakerState, useModalState } from "@/state";
import { Close, DirectionsRun, Storage } from "@mui/icons-material";
import { Button } from "@mui/material";
import { chainCodeToList } from "@/SceneController/Sidebar/ChainMaker/helper";

import "./AnimationController.css";
import ModelTimeControl from "./ModelTimeControl";

/**
 * @param {{ target: DLModel }} props
 */
function AnimationController({ target }) {
    const { inputAni } = useModalState();
    const { toggle, setTarget } = useChainMakerState();
    const { loadState: loadAniSelectState } = useAniSelectState();

    const addAni = async () => {
        loadAniSelectState(target?.userData.aniSelectState);
        const ani = await inputAni();
        if (!ani) return;

        const isPaused = target?.animation.isPaused;

        const [code, name] = ani;
        target?.animation
            .addChain(code)
            .then(() => isPaused && target.animation.pause());

        const chainList = chainCodeToList(code, name);
        if (target?.userData) {
            target.userData.chain?.splice(0, Infinity, ...chainList) ??
                (target.userData.chain = chainList);
        }
    };

    const removeAni = () => {
        target?.animation?.reset();
        target?.userData?.chain.splice(0, Infinity);
    };

    const openChainMaker = () => {
        setTarget(target);
        loadAniSelectState(target?.userData.aniSelectState);
        toggle();
    };

    return (
        <div className="AnimationController">
            <ModelTimeControl target={target} />
            <Button
                variant="contained"
                startIcon={<DirectionsRun />}
                onClick={addAni}
                title="Add Animation"
            >
                Add Animation
            </Button>
            <Button
                variant="contained"
                startIcon={<Storage />}
                onClick={openChainMaker}
                title="Open Chain Maker"
            >
                Chain Maker
            </Button>
            <Button
                variant="contained"
                startIcon={<Close />}
                onClick={removeAni}
                title="Remove Animation"
            >
                Reset
            </Button>
        </div>
    );
}

export default AnimationController;
