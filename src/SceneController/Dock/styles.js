const MAX_WIDTH = "23rem";

export const styles = {
    dock: {
        width: MAX_WIDTH,
    },
    Paper: {
        width: MAX_WIDTH,
        border: "unset",

        scrollbarWidth: "thin",
        scrollbarColor: "rgba(128, 0, 0, 0.8) rgba(255, 255, 255, 0.3)",
        "&::-webkit-scrollbar": {
            width: "4px",
            backgroundColor: "rgba(128, 0, 0, 0.3)",
        },
        "&::-webkit-scrollbar-thumb": {
            width: "4px",
            backgroundColor: "rgba(128, 0, 0, 0.8)",
            borderRadius: "2px",
        },
    },
};
