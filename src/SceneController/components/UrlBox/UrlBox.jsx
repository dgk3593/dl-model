import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { styles } from "./styles";

/**
 * @param {object} props
 * @param {(url: string) => void} props.onApply
 * @param {string} [props.applyLabel]
 */
function UrlBox({ onApply, applyLabel = "Apply", ...others }) {
    const [url, setUrl] = useState("");
    const handleChange = event => setUrl(event.target.value);

    const applyURL = () => onApply(url);
    const applyButton = (
        <Button sx={styles.button} variant="contained" onClick={applyURL}>
            {applyLabel}
        </Button>
    );

    return (
        <TextField
            value={url}
            onChange={handleChange}
            placeholder="Enter URL"
            margin="none"
            InputProps={{
                endAdornment: applyButton,
                sx: styles.input,
            }}
            inputProps={{ type: "url" }}
            size="small"
            {...others}
        />
    );
}

export default UrlBox;
