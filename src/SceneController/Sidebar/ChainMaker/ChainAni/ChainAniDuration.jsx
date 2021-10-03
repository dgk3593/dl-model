import { useState } from "react";

import { Slider, IconButton } from "@mui/material";
import Accordion from "components/Accordion";
import SetNumber from "./SetNumber";

import { Autorenew } from "@mui/icons-material";

const SetDuration = ({ value, onChange, reset }) => (
    <div className="SetNumbers">
        <SetNumber
            value={value[0]}
            label="Start (%)"
            onChange={onChange}
            index="0"
        />
        <SetNumber
            value={value[1]}
            label="End (%)"
            onChange={onChange}
            index="1"
        />
        <IconButton onClick={reset} title="Reset">
            <Autorenew />
        </IconButton>
    </div>
);

function ChainAniDuration({ ani }) {
    const [duration, setDuration] = useState(ani.duration ?? [0, 100]);

    /**
     * @param {[start: number, end: number]} newDuration
     */
    const setNewDuration = newDuration => {
        setDuration(newDuration);
        ani.duration = newDuration;
    };

    const onChange = (value, index) => {
        const newDuration = [...duration];
        newDuration[index] = value;
        setNewDuration(newDuration);
    };

    const onSliderChange = (_, newDuration) => setNewDuration(newDuration);

    const reset = () => setNewDuration([0, 100]);

    return (
        <Accordion disableGutters className="ChainAni-duration">
            <> Duration</>
            <>
                <SetDuration
                    value={duration}
                    onChange={onChange}
                    reset={reset}
                />
                <div className="duration-slider">
                    <Slider
                        size="small"
                        value={duration}
                        onChange={onSliderChange}
                    />
                </div>
            </>
        </Accordion>
    );
}

export default ChainAniDuration;
