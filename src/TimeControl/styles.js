export const styles = {
    popover: {
        backgroundColor: "#101010",
        minHeight: "16.5rem",
        maxHeight: "80vh",
        display: "flex",
        padding: "0.3rem",
        paddingBottom: "1.5rem",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        "& .MuiSlider-root": {
            marginRight: "3.2rem",
        },
    },
    slider: {
        minHeight: "15rem",
        maxHeight: "90%",
        "& span.MuiSlider-markLabel": {
            color: "#bbb",
            textAlign: "right",
            width: "2.3rem",
        },
        "& span.MuiSlider-markLabelActive": { color: "#fff" },
    },
};
