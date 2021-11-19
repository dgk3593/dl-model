import { Select, MenuItem } from "@mui/material";

/**
 * @typedef {object} SelectBoxOption
 * @property {string} value - value of the option
 * @property {string} [label] - label of the option
 * @property {string} [title] - title of the option
 */
/**
 * @param {{ options: SelectBoxOption[],
 *           value: string,
 *           onChange: (value: string) => void,
 *           [key: string]: any
 *        }} props
 */
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
