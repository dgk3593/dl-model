import { AppBar, Tabs, Tab } from "@mui/material";
import { styles } from "./styles";

/**
 * @typedef {object} TabDetail
 * @property {string} name
 * @property {string} [label]
 * @property {JSX.Element} [icon]
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
            {tabs.map(({ name, label, icon }) => (
                <Tab
                    value={name}
                    label={label ?? name}
                    icon={icon}
                    key={name}
                />
            ))}
        </Tabs>
    </AppBar>
);

export default TabBar;
