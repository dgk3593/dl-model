import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

/**
 * a button that opens a menu when clicked
 * @param {object} props
 * @param {*} props.children
 * @param { (value: string) => void} props.onClick
 * @param {{ value: string, label: string }[]} props.options
 * @param {string} [props.title]
 */
function MenuButton({ children, onClick, options, title }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = event => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };
    const closeMenu = () => setAnchorEl(null);

    const handleClick = event => {
        event.stopPropagation();
        const { value } = event.currentTarget.dataset;
        onClick(value);
        closeMenu();
    };

    return (
        <>
            <Button onClick={openMenu} title={title} variant="contained">
                {children}
            </Button>

            <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={closeMenu}>
                {options.map(({ value, label }) => (
                    <MenuItem
                        key={value}
                        data-value={value}
                        onClick={handleClick}
                    >
                        {label ?? value}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}

export default MenuButton;
