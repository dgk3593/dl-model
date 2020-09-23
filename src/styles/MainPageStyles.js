import { makeStyles } from "@material-ui/core/styles";
import { DRAWER_WIDTH, DRAWER_BGCOLOR } from "../consts";
import bg from "./Rose-Petals.svg";

const drawerWidth = DRAWER_WIDTH;
const drawerBG = DRAWER_BGCOLOR;

const useStyles = makeStyles(theme => ({
    root: {
        display: "block",
        width: "100vw",
        height: "100vh",
    },
    closeDrawerButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "2rem",
        height: "2rem",
        borderRadius: "50%",
        position: "absolute",
        right: "0",
        top: "0",
        margin: "1rem",
        cursor: "pointer",
        backgroundColor: "rgba(255,255,255,0.5)",
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.8)",
        },
    },
    drawer: {
        width: drawerWidth,
        // flexShrink: 0,
    },
    drawerPaper: {
        alignItems: "center",
        backgroundColor: drawerBG,
        backgroundImage: `url(${bg})`,
        /* background by SVGBackgrounds.com */
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: drawerWidth,
        "& button": {
            marginBottom: "0.2rem",
        },
    },
    drawerHeader: {
        height: `4rem`,
        width: "100%",
        fontSize: "1.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        filter: "drop-shadow(0px 20px 10px rgba(0, 0, 0, $shadow-opacity))",
        backgroundColor: drawerBG,
        backgroundImage: `url(${bg})`,
        /* background by SVGBackgrounds.com */
        backgroundSize: "auto 100vh",
        backgroundPosition: "center",
        color: "white",
        marginBottom: "0.5rem",
    },
    content: {
        height: "100vh",
        width: "100vw",
        padding: 0,
    },
    openDrawerButton: {
        position: "absolute",
        top: 0,
        left: 0,
        margin: "2rem",
        opacity: "0.5",
        borderRadius: "0.25rem",
        transition: "0.5s all ease-in-out",
        cursor: "pointer",
        "&:hover": {
            opacity: "1",
        },
    },
    loadingMsg: {
        position: "absolute",
        zIndex: "9999",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "x-large",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
}));

export default useStyles;
