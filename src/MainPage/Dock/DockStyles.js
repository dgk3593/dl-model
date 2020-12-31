import { makeStyles } from "@material-ui/core/styles";

const MAX_DOCK_WIDTH = "23rem";

const useStyles = makeStyles(() => ({
    drawer: {
        maxWidth: MAX_DOCK_WIDTH,
        overflowY: "scroll",
    },
    drawerPaper: {
        alignItems: "center",
        maxWidth: MAX_DOCK_WIDTH,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "& .MuiDialogTitle-root": {
            width: "100%",
        },
    },
}));

export default useStyles;
