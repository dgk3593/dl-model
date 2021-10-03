import { Tabs, Tab } from "@mui/material";

/**
 * @typedef {object} TabDetail
 * @property {string} name
 * @property {string} [label]
 */
/**
 * @param {object} props
 * @param {Array <TabDetail>} props.tabs
 * @param {string} props.value
 * @param { (newIndex: number ) => void} props.onChange
 */
function VerticalTabs({ tabs, value, onChange }) {
    const handleChange = (e, newValue) => onChange(newValue);

    return (
        <Tabs
            variant="scrollable"
            orientation="vertical"
            className="VerticalTabs"
            value={value}
            onChange={handleChange}
        >
            {tabs.map(({ label, name }) => (
                <Tab label={label ?? name} key={name} value={name} />
            ))}
        </Tabs>
    );
}

export default VerticalTabs;
