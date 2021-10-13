// @ts-ignore
import bg from "./Rose-Petals.svg";

const SIDEBAR_WIDTH = "17rem";
const SIDEBAR_BG = "#1f0000";

export const styles = {
    sidebar: {
        minWidth: SIDEBAR_WIDTH,
    },
    sidebarHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1rem",
        position: "sticky",
        top: 0,
        height: "2.75rem",
        backgroundColor: "#101010",
        zIndex: 6,
    },
    paper: {
        width: SIDEBAR_WIDTH,
        backgroundColor: SIDEBAR_BG,
        border: "none",
        /* background by SVGBackgrounds.com */
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        scrollbarWidth: "thin",
        scrollbarColor: "rgba(255, 255, 255, 0.8) rgba(0, 0, 0, 0.3)",
        "&::-webkit-scrollbar": {
            width: "4px",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
        },
        "&::-webkit-scrollbar-thumb": {
            width: "4px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "2px",
        },

        "& > .QuickAction": {
            position: "sticky",
            top: "2.75rem",
            zIndex: 6,
            height: "2rem",
        },
        "& > .TabBar": {
            position: "sticky",
            top: "4.75rem",
            zIndex: 6,
            marginBottom: "0.5rem",
        },
        "& > button": {
            backgroundColor: "rgba(16, 16, 16, 0.5)",
            minHeight: "2.5rem",
            borderRadius: "unset",
            padding: "0.5rem 1.5rem",
            justifyContent: "flex-start",
            gap: "1rem",
            "& .btn-icon": {
                maxHeight: "1.5rem",
            },
        },
        "& > button:hover": {
            backgroundColor: "rgba(16, 16, 16, 0.8)",
        },
        "& .break": {
            minHeight: "0.5rem",
        },
        "& .break + .break": {
            minHeight: 0,
        },
        "& .bottom-space": {
            minHeight: "2rem",
        },
    },
};
