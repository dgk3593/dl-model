import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { listStyle, typographyProps } from "./commonProps";

import "./styles/ModelSelectBtns.css";

const categories = ["adv", "dragon"];

function ModelSelectBtns({ handleClick }) {
    const btns = categories.map(category => {
        const iconPath = `${process.env.PUBLIC_URL}/img/icons/${category}Icon.png`;
        return (
            <Button
                key={category}
                className="ModelSelectBtns-Btn"
                data-value={category}
                onClick={handleClick}
            >
                <img src={iconPath} alt={category} />
            </Button>
        );
    });

    return (
        <List dense disablePadding style={listStyle} component="div">
            <ListItem divider>
                <ListItemText
                    primary="Change Model"
                    primaryTypographyProps={typographyProps}
                />
            </ListItem>
            <ListItem>
                <div className="ModelSelectBtns">{btns}</div>
            </ListItem>
        </List>
    );
}

export default ModelSelectBtns;
