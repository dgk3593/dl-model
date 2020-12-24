import TextField from "@material-ui/core/TextField";

import "./CoordinatePicker.css";

function CoordinatePicker({ value, updateCoordinate }) {
    const handleChange = ({ currentTarget: target }) => {
        const index = parseInt(target.getAttribute("index"));
        const { value: newValue } = target;
        const newCoordinate = value.map((v, i) => (i === index ? newValue : v));
        updateCoordinate(newCoordinate);
    };
    return (
        <div className="CoordinatePicker">
            {["x", "y", "z"].map((axis, i) => (
                <TextField
                    key={axis}
                    label={axis}
                    onChange={handleChange}
                    size="small"
                    margin="dense"
                    variant="outlined"
                    inputProps={{
                        type: "number",
                        step: 10,
                        index: i,
                    }}
                    value={value[i]}
                />
            ))}
        </div>
    );
}

export default CoordinatePicker;
