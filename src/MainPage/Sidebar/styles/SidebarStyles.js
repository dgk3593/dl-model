import { makeStyles } from "@material-ui/core/styles";
import { DRAWER_WIDTH, DRAWER_BGCOLOR } from "helpers/consts";
import bg from "./Rose-Petals.svg";

const useStyles = makeStyles(() => ({
    drawer: {
        width: DRAWER_WIDTH,
        overflowY: "scroll",
    },
    drawerPaper: {
        alignItems: "center",
        backgroundColor: DRAWER_BGCOLOR,
        backgroundImage: `url(${bg})`,
        /* background by SVGBackgrounds.com */
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: DRAWER_WIDTH,
        "& button": {
            marginBottom: "0.2rem",
        },
    },
}));

export default useStyles;
