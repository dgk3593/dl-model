import { useChainMakerState, useModalState } from "@/state";
import { Close, DirectionsRun, Storage } from "@mui/icons-material";
import { Button } from "@mui/material";
import { chainCodeToList } from "@/SceneController/Sidebar/ChainMaker/helper";

import "./AnimationController.css";
import ModelTimeControl from "./ModelTimeControl";

function AnimationController({ target }) {
    const { inputAni } = useModalState();
    const { toggle, setTarget } = useChainMakerState();

    const addAni = async () => {
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
        toggle();
    };

    return (
        <div className="AnimationController">
            <ModelTimeControl target={target} />
            <Button
                variant="contained"
                startIcon={<DirectionsRun />}
                onClick={addAni}
            >
                Add Animation
            </Button>
            <Button
                variant="contained"
                startIcon={<Storage />}
                onClick={openChainMaker}
            >
                Chain Maker
            </Button>
            <Button
                variant="contained"
                startIcon={<Close />}
                onClick={removeAni}
            >
                Reset
            </Button>
        </div>
    );
}

export default AnimationController;
