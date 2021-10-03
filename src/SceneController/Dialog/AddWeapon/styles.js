export const styles = {
    root: {
        display: "flex",
        flexDirection: "column",
        overflowY: "hidden",
        minHeight: "90vh",
        "& svg": {
            color: "rgba(16, 16, 16, 0.8)",
        },
    },
    top: {
        display: "flex",
        flexWrap: "wrap",
        borderBottom: "1px solid rgba(16, 16, 16, 0.4)",
        boxShadow: "0 0.2rem 0.3rem rgba(16, 16, 16, 0.4)",
    },
    searchFilter: {
        marginTop: "0.2rem",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minWidth: "20rem",
        alignItems: "center",
        justifyContent: "center",
        "& .MuiTextField-root": {
            justifyContent: "center",
        },
    },
    search: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
    },
    title: {
        padding: "0.5rem 1rem",
        textAlign: "center",
        flexGrow: 0.1,
        margin: "auto",
    },
    content: {
        padding: "0.3rem",
        textAlign: "center",
        minHeight: "60vh",
    },
};
