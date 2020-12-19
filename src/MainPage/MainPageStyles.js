import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        display: "block",
        width: "100vw",
        height: "100vh",
    },
    content: {
        height: "100vh",
        width: "100vw",
        padding: 0,
    },
    openSidebarButton: {
        position: "absolute",
        top: 0,
        left: 0,
        margin: "2rem",
        opacity: "0.5",
        borderRadius: "0.25rem",
        transition: "0.5s all ease-in-out",
        backgroundColor: "#cccccc",
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
