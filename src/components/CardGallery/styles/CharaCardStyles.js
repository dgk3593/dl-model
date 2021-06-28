import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: "14rem",
        position: "relative",
        maxWidth: "47%",
        contentVisibility: "auto",
        containIntrinsicSize: "0 15rem",
        padding: 0,
        textAlign: "center",
        margin: "0.3rem 0.1rem",
        border: "2px solid rgba(0,0,0,0.1)",
        boxSizing: "content-box",
        cursor: "pointer",
        "&:hover": {
            border: "2px solid black",
            "& $portrait": {
                filter: "drop-shadow(0 0 1px black) drop-shadow(0 0 4px black)",
            },
        },
        "& .MuiCardContent-root": {
            padding: "0.1rem",
        },
        "&[data-value]:hover::after": {
            content: "attr(data-value)",
            position: "absolute",
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            width: "100%",
            display: "inline-block",
            opacity: 0,
            animation: "$fadeIn 0.2s forwards ease-in 1s 1",
        },
    },
    title: {
        margin: "5px auto 2px auto",
        lineHeight: 1,
    },
    icons: {
        display: "flex",
        justifyContent: "center",
        "& img": {
            width: "1.5rem",
            height: "1.5rem",
            margin: "0.2rem 1rem 0 1rem",
        },
    },
    portrait: {
        width: "100%",
        aspectRatio: "1 / 1",
        margin: "0.2rem 0",
        filter: "drop-shadow(0 0 1px black)",
    },
    rarityImg: {
        maxHeight: "2rem",
        maxWidth: "80%",
        margin: "0 auto",
    },
    "@keyframes fadeIn": {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
    },
});

export default useStyles;
