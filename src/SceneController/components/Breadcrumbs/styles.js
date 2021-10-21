export const styles = {
    box: {
        display: "flex",
        flexWrap: "no-wrap",
        // overflowX: "scroll",
        flexGrow: 1,
        minWidth: "15rem",
        padding: 0,
        margin: "0 2rem",
        justifyContent: "center",
        "&::-webkit-scrollbar": {
            height: "0.1rem",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
        "&::-webkit-scrollbar-thumb": {
            height: "0.1rem",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
        },
    },
    list: {
        backgroundColor: "rgba(16, 16, 16, 0.9)",
        color: "white",
        flex: "1 1",
        minWidth: "9rem",
        maxWidth: "20rem",
        "&:hover": {
            backgroundColor: "rgba(16, 16, 16, 0.7)",
        },
        "& img": {
            filter: "drop-shadow(0 0 0.3rem white)",
        },
    },
    listItem: {
        cursor: "pointer",
        textAlign: "center",
        "&[data-multi]::after": {
            content: '"▼"',
            position: "absolute",
            bottom: "0.1rem",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "x-small",
        },
        "&:not(first-of-type)": {
            borderLeft: "0.1rem solid rgba(255, 255, 255, 0.5)",
        },
    },
    menuItem: {
        gap: "0.2rem",
        minWidth: "8rem",
    },
    icon: {
        maxHeight: "1.5rem",
        margin: "0 0.3rem",
    },
};
