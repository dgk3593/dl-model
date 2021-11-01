import { useRef } from "react";
import { Box, Button } from "@mui/material";

import { styles } from "./styles";

/**
 * @param {object} props
 * @param {string} [props.id] - id of the input element
 * @param {boolean} [props.multiple] - whether to allow multiple files
 * @param {string} [props.label] - label of the button
 * @param {string} [props.mimeType] - file types to accept
 * @param {string} [props.accept] - file types to accept
 * @param {(files: FileList) => void} props.onChange - executed when input is changed
 * @param {object} [props.style] - styling for the button
 */
function UploadButton({
    id = "upload",
    multiple = false,
    label = "Upload",
    mimeType = "image/*",
    onChange,
    style = {},
    ...others
}) {
    /**
     * @type {React.MutableRefObject<HTMLInputElement>}
     */
    const input = useRef();

    const handleChange = () => {
        const selectedFiles = input.current.files;
        onChange(selectedFiles);
    };

    const buttonStyle = { ...styles.button, ...style };

    return (
        <Box>
            <Button
                variant="outlined"
                htmlFor={id}
                component="label"
                sx={buttonStyle}
                {...others}
            >
                {label}
            </Button>
            <input
                name={id}
                id={id}
                type="file"
                multiple={multiple}
                accept={mimeType}
                style={styles.input}
                ref={el => (input.current = el)}
                onChange={handleChange}
            />
        </Box>
    );
}

export default UploadButton;
