import { Select, MenuItem } from "@mui/material";

function SelectBox({ options, value, onChange, ...others }) {
    const handleChange = event => onChange(event.target.value);
    return (
        <Select
            className="SelectBox"
            value={value}
            onChange={handleChange}
            {...others}
        >
            {options.map(({ value, label = value, title }) => (
                <MenuItem value={value} {...{ title }}>
                    {label}
                </MenuItem>
            ))}
        </Select>
    );
}

export default SelectBox;
