import { useModalState } from "@/state";
import { Close, DirectionsRun } from "@mui/icons-material";
import { Button } from "@mui/material";
import { chainCodeToList } from "@/SceneController/Sidebar/ChainMaker/helper";

import "./AnimationController.css";

function AnimationController({ target }) {
    const { inputAni } = useModalState();

    const addAni = async () => {
        const ani = await inputAni();
        if (!ani) return;

        const [code, name] = ani;
        target?.animation.addChain(code);

        const chainList = chainCodeToList(code, name);
        target?.userData && (target.userData.chain = chainList);
    };

    const removeAni = () => {
        target?.animation?.reset();
        target?.userData?.chain.splice(0, Infinity);
    };

    return (
        <div className="AnimationController">
            <Button
                variant="contained"
                startIcon={<DirectionsRun />}
                onClick={addAni}
            >
                Add Animation
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
