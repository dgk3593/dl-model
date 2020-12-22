import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: "14rem",
        padding: 0,
        textAlign: "center",
        margin: "0.3rem 0.1rem",
        border: "2px solid rgba(0,0,0,0.1)",
        boxSizing: "content-box",
        maxWidth: "47%",
        "&:hover": {
            border: "2px solid black",
        },
        "& .MuiCardContent-root": {
            padding: "0.1rem",
        },
    },
    title: {
        fontSize: 14,
        margin: "5px auto",
    },
    icons: {
        display: "flex",
        justifyContent: "center",
        "& img": {
            width: "1.5rem",
            height: "1.5rem",
            margin: "0.5rem 1rem",
        },
    },
    portrait: {
        width: "100%",
        margin: "0.5rem 0",
    },
});

export default useStyles;
