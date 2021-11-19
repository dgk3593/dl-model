import { useState } from "react";
import {
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    Box,
} from "@mui/material";

import { styles } from "./styles";

const Icon = props => <img {...props} style={styles.icon} />;

/**
 * @param {object} props
 * @param {number} [props.level]
 * @param {number[]} props.selectedIndices
 * @param {BreadcrumbCategory[]} props.options
 * @param {(level: number, index: number) => void} [props.setIndex]
 */
function Breadcrumbs({ level = 0, selectedIndices, options, setIndex }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const multiOptions = options.length > 1;
    selectedIndices[level] ?? setIndex(level, 0);

    const handleListItem = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItem = event => {
        const { level, index } = event.target.dataset;
        setIndex(parseInt(level), parseInt(index));
        setAnchorEl(null);
    };

    const closeMenu = () => {
        setAnchorEl(null);
    };

    const selectedIndex = selectedIndices[level] ?? 0;
    const { label, value, icon, options: subOptions } = options[selectedIndex];

    const body = (
        <>
            <List disablePadding sx={styles.list}>
                <ListItem
                    data-multi={multiOptions}
                    sx={styles.listItem}
                    onClick={handleListItem}
                >
                    {icon && <Icon alt={value} src={icon} />}
                    <ListItemText primary={`${label}`} />
                </ListItem>
            </List>

            {multiOptions && (
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={closeMenu}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option.value}
                            selected={index === selectedIndex}
                            onClick={handleMenuItem}
                            sx={styles.menuItem}
                            data-index={index}
                            data-level={level}
                        >
                            {option.icon && (
                                <Icon alt={option.value} src={option.icon} />
                            )}
                            {option.label}
                        </MenuItem>
                    ))}
                </Menu>
            )}

            {subOptions && (
                <Breadcrumbs
                    options={subOptions}
                    selectedIndices={selectedIndices}
                    level={level + 1}
                    setIndex={setIndex}
                />
            )}
        </>
    );

    return level === 0 ? (
        <Box className="Breadcrumbs" sx={styles.box}>
            {body}
        </Box>
    ) : (
        body
    );
}

export default Breadcrumbs;
