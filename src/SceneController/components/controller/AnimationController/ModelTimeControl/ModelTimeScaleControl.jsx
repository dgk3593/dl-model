import { useState } from "react";
import { Button, Popover, MenuItem } from "@mui/material";

const sx = {
    backgroundColor: "#101010",
    color: "#ccc",
    "& li:not(:last-child)": {
        borderBottom: "1px solid #ffffff33",
    },
    "& li[data-current]": {
        backgroundColor: "#202020",
        color: "#fff",
        borderColor: "#fff",
    },
    "& li:hover": {
        backgroundColor: "#ffffff33",
    },
};

function TimeScaleControl({ target, isReverse }) {
    const { animation } = target;
    const initTimeScale = Math.abs(animation.mixer.timeScale);
    const [timeScale, setTimeScale] = useState(initTimeScale);

    const [anchorEl, setAnchorEl] = useState(null);
    const openPopover = event => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };
    const closePopover = () => setAnchorEl(null);

    const timeScales = Array(8)
        .fill()
        .map((_, i) => i * 0.25 + 0.25);

    const handleClick = event => {
        const { value } = event.target.dataset;
        animation.mixer.timeScale = isReverse ? -value : value;
        setTimeScale(parseFloat(value));
        closePopover();
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
                PaperProps={{ sx }}
            >
                {timeScales.map(scale => (
                    <MenuItem
                        onClick={handleClick}
                        data-value={scale}
                        data-current={scale === timeScale}
                    >
                        {`${scale}x`}
                    </MenuItem>
                ))}
            </Popover>
        </>
    );
}

export default TimeScaleControl;
