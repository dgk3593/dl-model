import { useState } from "react";
import { Button, Popover, Slider } from "@mui/material";
import { styles } from "./styles";
import viewer from "@/viewer";

const marks = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(value => ({
    value,
    label: `${value}x`,
}));

function TimeScaleControl() {
    const [timeScale, setTimeScale] = useState(viewer.loop.timeScale);
    const [anchorEl, setAnchorEl] = useState(null);
    const openPopover = event => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const closePopover = () => setAnchorEl(null);

    const handleChange = (event, value) => {
        viewer.loop.timeScale = value;
        setTimeScale(value);
    };

    return (
        <>
            <Button title="Time Scale" onClick={openPopover}>
                {`${timeScale}x`}
            </Button>

            <Popover
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={closePopover}
                className="TimeScaleSelect"
                PaperProps={{ sx: styles.popover }}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                transformOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Slider
                    orientation="vertical"
                    track={false}
                    marks={marks}
                    min={0.25}
                    max={2}
                    step={0.05}
                    value={timeScale}
                    onChange={handleChange}
                    sx={styles.slider}
                />
            </Popover>
        </>
    );
}

export default TimeScaleControl;
