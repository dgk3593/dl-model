import { useActiveModel } from "@/state";

import Accordion from "components/Accordion";
import CloseButton from "components/CloseButton";
import ChainAniAdvanced from "./ChainAniAdvanced";
import ChainAniDuration from "./ChainAniDuration";
import ChainAniFace from "./ChainAniFace";
import { IconButton } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

import { generateChainCode } from "../helper";

const PlayButton = ({ onClick }) => (
    <IconButton onClick={onClick} title="Play">
        <PlayArrow />
    </IconButton>
);

function ChainAni({ ani }) {
    const { activeModel } = useActiveModel();
    const { chain } = activeModel.userData;

    const remove = event => {
        event.stopPropagation();
        chain.remove(ani);
    };

    const play = event => {
        event.stopPropagation();
        const code = generateChainCode([ani]);
        activeModel?.animation.addChain(code);
    };

    return (
        <Accordion className="ChainAni">
            <>
                <PlayButton onClick={play} />
                <div className="ChainAni-name">{ani.name}</div>
                <CloseButton onClick={remove} title="Delete" />
            </>
            <>
                <ChainAniAdvanced ani={ani} />
                <ChainAniDuration ani={ani} />
                <ChainAniFace ani={ani} />
            </>
        </Accordion>
    );
}

export default ChainAni;
