export const styles = {
    root: {
        display: "flex",
        flexDirection: "column",
        overflowY: "hidden",
        minHeight: "90vh",
        minWidth: "20rem",
        "& svg": {
            color: "rgba(16, 16, 16, 0.8)",
        },
    },
    title: {
        textAlign: "center",
        padding: "0.5rem 2rem",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid rgba(16, 16, 16, 0.4)",
        boxShadow: "0 0.2rem 0.3rem rgba(16, 16, 16, 0.4)",
        "& h2": {
            padding: "0.2rem 1rem",
        },
        "& Searchbox": {
            minWidth: "15rem",
        },
    },
    content: {
        padding: "0.5rem 1rem",
    },
};
