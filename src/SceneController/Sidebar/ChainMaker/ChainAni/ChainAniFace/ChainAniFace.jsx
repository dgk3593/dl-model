import { useActiveModel } from "@/state";
import { useState } from "react";
import Accordion from "components/Accordion";
import ChainAniFaceChange from "./ChainAniFaceChange";
import { Add } from "@mui/icons-material";
import { nanoid } from "nanoid";

function ChainAniFace({ ani }) {
    const { activeModel } = useActiveModel();
    const { aniAction } = ani;

    const initFaceChanges = [];
    const otherActions = [];

    aniAction.forEach(action => {
        const {
            time,
            ["face.eyeIdx"]: eyeIdx,
            ["face.mouthIdx"]: mouthIdx,
            ...others
        } = action;

        if (eyeIdx || mouthIdx)
            initFaceChanges.push({ id: nanoid(), time, eyeIdx, mouthIdx });

        if (Object.keys(others).length) otherActions.push({ time, ...others });
    });
    const [faceChanges, setFaceChanges] = useState(initFaceChanges);

    const refreshAction = newList => {
        const faceChangeTime = newList.map(({ time }) => time);
        const otherTime = otherActions.map(({ time }) => time);
        const timeSet = new Set([...faceChangeTime, ...otherTime]);

        const orderedTime = [...timeSet].sort((a, b) => a - b);
        const newAction = orderedTime.map(time => {
            const faceAction = newList.find(action => action.time === time);
            const { eyeIdx, mouthIdx } = faceAction;
            const otherAction = otherActions.find(
                action => action.time === time
            );
            const output = { ...otherAction, time };
            eyeIdx && (output["face.eyeIdx"] = eyeIdx);
            mouthIdx && (output["face.mouthIdx"] = mouthIdx);

            return output;
        });
        ani.aniAction = newAction;
        setFaceChanges(newList);
    };

    const onUpdate = details => {
        const { id } = details;
        const newList = faceChanges.map(action =>
            action.id === id ? details : action
        );
        refreshAction(newList);
    };
    const onRemove = id => {
        const newList = faceChanges.filter(details => details.id !== id);
        setFaceChanges(newList);
        refreshAction(newList);
    };

    const add = () => setFaceChanges(oldList => [...oldList, { id: nanoid() }]);

    const details = faceChanges.map(details => (
        <ChainAniFaceChange
            details={details}
            onUpdate={onUpdate}
            onRemove={onRemove}
            key={details.id}
        />
    ));

    return (
        activeModel.face && (
            <Accordion disableGutters className="ChainAni-face">
                <>Facial Expression</>
                <div className="ChainAniFace">
                    {faceChanges?.length > 0 && (
                        <>
                            <div />
                            <div>Time (%)</div>
                            <div>Eye</div>
                            <div>Mouth</div>
                            {details}
                        </>
                    )}

                    <div onClick={add}>
                        <Add />
                    </div>
                </div>
            </Accordion>
        )
    );
}

export default ChainAniFace;
