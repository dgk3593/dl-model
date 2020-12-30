import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles/CharaCardStyles";

function AdvCard(props) {
    const { cid, name, title, element, weapon, onClick, portraitDir } = props;
    const classes = useStyles();

    const eleIconPath = `${process.env.PUBLIC_URL}/img/filter/element_${element}.png`;
    const weaponIconPath = `${process.env.PUBLIC_URL}/img/filter/weapon_${weapon}.png`;
    // const rarityImg = `${process.env.PUBLIC_URL}/img/filter/card_r${rarity}.png`;
    const portrait = `${process.env.PUBLIC_URL}/img/${portraitDir}/${cid}.png`;

    const eleIcon = element && <img src={eleIconPath} alt={element} />;
    const weaponIcon = weapon && <img src={weaponIconPath} alt={weapon} />;

    return (
        <Card
            className={classes.root}
            data-value={cid}
            variant="outlined"
            onClick={onClick}
        >
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    {title || <br />}
                </Typography>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <div className={classes.icons}>
                    {eleIcon}
                    {weaponIcon}
                </div>
                <img className={classes.portrait} src={portrait} alt={name} />
            </CardContent>
        </Card>
    );
}

export default AdvCard;
