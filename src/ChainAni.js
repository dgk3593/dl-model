import { lazy, Suspense } from "react";
import useToggleState from "./hooks/useToggleState";

import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import Close from "@material-ui/icons/Close";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./styles/ChainAni.css";

const ChainAniAdvanced = lazy(() => import("./ChainAniAdvanced"));

function ChainAni(props) {
    const { ani, playAni, deleteAni, updateAni, openControl } = props;
    const { name, id, timeScale, repetitions, faceChanges } = ani;

    const [expand, toggleExpand] = useToggleState(false);

    const updateAniParams = value => {
        const newAni = { ...ani, ...value };
        updateAni(id, newAni);
    };

    return (
        <div className="ChainAni">
            <div className="ChainAni-name">{name}</div>
            <div className="ChainAni-topBtns">
                <Button id={id} onClick={deleteAni}>
                    <Close />
                </Button>
                <Button id={id} onClick={playAni}>
                    <PlayArrowIcon />
                </Button>
            </div>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <Suspense fallback={<div>Loading</div>}>
                    <ChainAniAdvanced
                        openControl={openControl}
                        timeScale={timeScale}
                        repetitions={repetitions}
                        faceChanges={faceChanges}
                        updateParams={updateAniParams}
                    />
                </Suspense>
            </Collapse>
            <div className="ChainAni-toggleExpand" onClick={toggleExpand}>
                {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
        </div>
    );
}

export default ChainAni;
