import Button from "@material-ui/core/Button";
import getTextColor from "helpers/getTextColor";

function ColorButton(props) {
    const { color, value, onClick, children, ...others } = props;

    const onBtnClick = event => {
        const { value } = event.currentTarget;
        onClick(value);
    };

    return (
        <Button
            style={{
                backgroundColor: color,
                color: getTextColor(color),
            }}
            value={value}
            onClick={onBtnClick}
            {...others}
        >
            {children || color}
        </Button>
    );
}

export default ColorButton;
