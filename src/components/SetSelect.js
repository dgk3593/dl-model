import { useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

function SetSelect(props) {
    const { options, selectedIndex, handleSelect } = props;
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickListItem = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (_, index) => {
        handleSelect(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <List
                component="nav"
                aria-label="Character Set Settings"
                style={{ backgroundColor: "rgba(50,50,50,0.5", color: "white" }}
            >
                <ListItem button onClick={handleClickListItem}>
                    <ListItemText primary={options[selectedIndex]} />
                </ListItem>
            </List>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={event => handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}

export default SetSelect;
