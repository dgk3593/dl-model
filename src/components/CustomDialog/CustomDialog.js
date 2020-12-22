import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import Close from "@material-ui/icons/Close";

import styles from "./CustomDialogStyles";

export const DialogTop = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle
            disableTypography
            className={classes.dialogRoot}
            {...other}
        >
            {children}
        </MuiDialogTitle>
    );
});

export const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle
            disableTypography
            className={classes.titleRoot}
            {...other}
        >
            <Typography variant="h6" className={classes.titleText}>
                {children}
            </Typography>
            <IconButton
                aria-label="close"
                className={classes.closeButton}
                onClick={onClose}
            >
                <Close />
            </IconButton>
        </MuiDialogTitle>
    );
});

export const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

export const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);
