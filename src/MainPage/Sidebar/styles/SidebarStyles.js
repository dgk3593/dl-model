import { makeStyles } from "@material-ui/core/styles";
import { DRAWER_WIDTH, DRAWER_BGCOLOR } from "helpers/consts";
import bg from "./Rose-Petals.svg";

const useStyles = makeStyles(() => ({
    drawer: {
        width: DRAWER_WIDTH,
        overflowY: "scroll",
    },
    drawerPaper: {
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(255, 255, 255, 0.8) rgba(0, 0, 0, 0.3)",
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
        "&::-webkit-scrollbar": {
            width: "8px",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
        "&::-webkit-scrollbar-thumb": {
            width: "8px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
        },
    },
}));

export default useStyles;
