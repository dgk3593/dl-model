import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles/AdvCardStyles";

function AdvCard(props) {
    const { cid, name, title, element, weapon, handleSelect } = props;
    const classes = useStyles();
    const eleIcon = `${process.env.PUBLIC_URL}/img/filter/element_${element}.png`;
    const weaponIcon = `${process.env.PUBLIC_URL}/img/filter/weapon_${weapon}.png`;
    // const rarityImg = `${process.env.PUBLIC_URL}/img/filter/card_r${rarity}.png`;
    const advPortrait = `${process.env.PUBLIC_URL}/img/full_body_300/${cid}.png`;

    return (
        <Card
            className={classes.root}
            data-value={`c${cid}`}
            variant="outlined"
            onClick={handleSelect}
        >
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    {title}
                </Typography>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <div className={classes.icons}>
                    <img src={eleIcon} alt={element} />
                    <img src={weaponIcon} alt={weapon} />
                </div>
                <img
                    className={classes.portrait}
                    src={advPortrait}
                    alt={name}
                />
            </CardContent>
        </Card>
    );
}

export default AdvCard;
