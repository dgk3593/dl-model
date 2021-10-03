import { TextField, IconButton } from "@mui/material";
import { Close, Search } from "@mui/icons-material";
import { styles } from "./styles";

const ResetButton = ({ onClick }) => (
    <IconButton onClick={onClick} size="large">
        <Close />
    </IconButton>
);

/**
 * @param {object} props
 * @param {string} props.query
 * @param {(value: string) => void} props.onChange
 * @param {string} [props.placeholder]
 */
function Searchbox({ query, onChange, placeholder = "Search by name" }) {
    const handleChange = event => {
        const { value } = event.target;
        onChange(value);
    };

    const resetQuery = () => onChange("");

    return (
        <TextField
            className="SearchBox"
            value={query}
            onChange={handleChange}
            placeholder={placeholder}
            InputProps={{
                endAdornment: <ResetButton onClick={resetQuery} />,
                startAdornment: <Search />,
            }}
            sx={styles}
        />
    );
}

export default Searchbox;
