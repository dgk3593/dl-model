import Button from "@material-ui/core/Button";

import "./SimpleOptionList.css";

function SimpleOptionList(props) {
    const { options, handleSelect } = props;
    const buttons = options.map(option => (
        <Button
            variant="outlined"
            key={option.id}
            data-value={option.id}
            onClick={handleSelect}
        >
            {option.name}
        </Button>
    ));
    return <div className="SimpleOptionList">{buttons}</div>;
}

export default SimpleOptionList;
