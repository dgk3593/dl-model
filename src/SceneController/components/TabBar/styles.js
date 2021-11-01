export const styles = {
    Tabs: {
        backgroundColor: "rgba(16, 16 ,16 ,0.8)",
        "& .MuiTab-root": {
            minWidth: "5rem",
            color: "rgba(200, 200, 200, 0.7)",
            "& svg": {
                color: "rgba(200, 200, 200, 0.7)",
            },
        },
        "& .Mui-selected[aria-selected=true]": {
            color: "rgba(255, 255, 255, 0.9)",
            "& svg": {
                color: "rgba(255, 255, 255, 0.9)",
            },
        },
        "& span.MuiTabs-indicator": {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
        },
    },
};
