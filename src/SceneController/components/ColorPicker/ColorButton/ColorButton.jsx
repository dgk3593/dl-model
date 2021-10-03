import { Button } from "@mui/material";
import getTextColor from "@/SceneController/helper/getTextColor";

function ColorButton({
    color,
    children = null,
    title = undefined,
    style = {},
    ...others
}) {
    const sx = {
        color: getTextColor(color),
        backgroundColor: color,
        "&:hover": { backgroundColor: color },
        ...style,
    };

    return (
        <Button
            className="ColorButton"
            sx={sx}
            variant="contained"
            title={title}
            {...others}
        >
            {children ?? color}
        </Button>
    );
}

export default ColorButton;
