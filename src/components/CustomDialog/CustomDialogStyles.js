const styles = {
    dialogRoot: {
        margin: 0,
        padding: 0,
    },
    closeButton: {
        position: "absolute",
        right: "0.25rem",
        top: "0.5rem",
        color: "rgba(0,0,0,0.8)",
    },
    dockButton: {
        position: "absolute",
        right: "2.3rem",
        top: "0.5rem",
        color: "rgba(0,0,0,0.8)",
        "& svg": {
            animation:
                "$bounce 1600ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95)",
        },
    },
    titleRoot: {
        margin: 0,
        padding: "1rem",
        paddingBottom: 0,
        display: "flex",
        justifyContent: "center",
    },
    "@keyframes bounce": {
        "50%": {
            transform: "translateX(25%)",
        },
    },
};

export default styles;
