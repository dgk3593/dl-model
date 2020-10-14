import { makeStyles } from "@material-ui/core/styles";
import { DRAWER_BGCOLOR } from "../consts";
import bg from "./Rose-Petals.svg";

const drawerBG = DRAWER_BGCOLOR;

const useStyles = makeStyles(theme => ({
    downloadButton: {
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "2rem",
        height: "2rem",
        borderRadius: "50%",
        position: "absolute",
        left: "0",
        top: "0",
        margin: "1rem",
        cursor: "pointer",
        backgroundColor: "rgba(255,255,255,0.5)",
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.8)",
        },
    },
    closeDrawerButton: {
        color: "black",
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
    root: {
        height: "4rem",
        minHeight: "4rem",
        width: "100%",
        fontSize: "1.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: drawerBG,
        backgroundImage: `url(${bg})`,
        /* background by SVGBackgrounds.com */
        backgroundSize: "auto 100vh",
        backgroundPosition: "center",
        color: "white",
        marginBottom: "0.5rem",
    },
}));

export default useStyles;
