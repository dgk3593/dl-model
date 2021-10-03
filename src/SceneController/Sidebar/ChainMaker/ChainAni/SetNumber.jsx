import { TextField } from "@mui/material";

const inputProps = {
    type: "number",
    min: 0,
    max: 100,
    step: 0.25,
};

function SetNumber({ value, label, onChange, index }) {
    const handleChange = event => {
        const index = event.currentTarget.getAttribute("index");
        const value = parseFloat(event.currentTarget.value);
        onChange(value, index);
    };

    return (
        <TextField
            className="SetNumbers-number"
            onChange={handleChange}
            value={value}
            label={label}
            size="small"
            margin="dense"
            variant="outlined"
            inputProps={{ ...inputProps, index }}
        />
    );
}

export default SetNumber;
