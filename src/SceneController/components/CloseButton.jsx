import { Box, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

/**
 * @param {object} props
 * @param {()=> void} props.onClick
 * @param {string} [props.color]
 * @param {string} [props.title]
 */
const CloseButton = ({ onClick, color = "#101010", title }) => (
    <Box position="absolute" top={0} right={0}>
        <IconButton
            sx={{ color: color, zIndex: 5 }}
            onClick={onClick}
            size="large"
            title={title}
        >
            <Close />
        </IconButton>
    </Box>
);

export default CloseButton;
