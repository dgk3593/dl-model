import { Box, IconButton } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import "./DockButton.css";

const DockButton = ({ onClick, color = "#101010" }) => (
    <Box position="absolute" top="2rem" right={0}>
        <IconButton
            className="DockButton"
            sx={{ color: color }}
            onClick={onClick}
            title="Send to Dock"
            size="large">
            <ArrowForwardIos />
        </IconButton>
    </Box>
);

export default DockButton;
