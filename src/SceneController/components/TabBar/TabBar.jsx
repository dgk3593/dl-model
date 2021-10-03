import { AppBar, Tabs, Tab } from "@mui/material";
import { styles } from "./styles";

/**
 * @typedef {object} TabDetail
 * @property {string} name
 * @property {string} [label]
 */
/**
 * @param {object} props
 * @param {string} props.value
 * @param {(event: *, newValue: string) => void} props.onChange
 * @param {Array <TabDetail>} props.tabs
 */
const TabBar = ({ value, onChange, tabs }) => (
    <AppBar className="TabBar" position="static">
        <Tabs centered value={value} onChange={onChange} sx={styles.Tabs}>
            {tabs.map(({ name, label }) => (
                <Tab value={name} label={label ?? name} key={name} />
            ))}
        </Tabs>
    </AppBar>
);

export default TabBar;
