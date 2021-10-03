import { Button } from "@mui/material";

const styles = { minHeight: "3rem" };

/**
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.code
 * @param {React.MouseEventHandler<HTMLButtonElement>} props.onClick
 * @param {string} [props.fullName]
 */
function SimpleAniButton({ name, code, onClick, fullName, ...others }) {
    return (
        <Button
            className="AniSelect-Btn"
            variant="contained"
            data-code={code}
            data-name={fullName ?? name}
            onClick={onClick}
            sx={styles}
            {...others}
        >
            {name}
        </Button>
    );
}

export default SimpleAniButton;
