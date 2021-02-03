import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles/CharaCardStyles";

/**
 * @callback onClickCallback
 * @param {React.MouseEvent<HTMLElement, MouseEvent>} event
 * @return {void}
 */
/**
 * A single card in card gallery
 * @param {Object} props
 * @param {ModelData['id']} props.id - model's ID
 * @param {ModelData['name']} props.name - model's name
 * @param {ModelData['title']} [props.title] - model's title
 * @param {ModelData['rarity']} [props.rarity] - model's rarity
 * @param {ModelData['element']} [props.element] - model's element
 * @param {ModelData['weapon']} [props.weapon] - model's weapon type
 * @param {onClickCallback} props.onClick - called when clicked
 * @param {string} props.portraitDir - directory of the card's portrait
 */
function AdvCard(props) {
    const {
        id,
        name,
        title,
        rarity,
        element,
        weapon,
        onClick,
        portraitDir,
    } = props;
    const classes = useStyles();

    const eleIconPath = `${process.env.PUBLIC_URL}/img/filter/element_${element}.png`;
    const weaponIconPath = `${process.env.PUBLIC_URL}/img/filter/weapon_${weapon}.png`;
    const rarityImgPath = `${process.env.PUBLIC_URL}/img/filter/card_r${rarity}.png`;
    const portrait = `${process.env.PUBLIC_URL}/img/${portraitDir}/${id}.png`;

    const eleIcon = element && <img src={eleIconPath} alt={element} />;
    const weaponIcon = weapon && <img src={weaponIconPath} alt={weapon} />;
    const rarityImg = rarity && (
        <img className={classes.rarityImg} src={rarityImgPath} alt="rarity" />
    );

    return (
        <Card
            className={classes.root}
            data-value={id}
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
                {rarityImg}
            </CardContent>
        </Card>
    );
}

export default AdvCard;
