import Button from "@material-ui/core/Button";

import "./SimpleOptionList.css";

function SimpleOptionList({ options, onSelect }) {
    const handleClick = event => {
        const { value } = event.currentTarget.dataset;
        onSelect(value);
    };

    const buttons = options.map(option => (
        <Button
            variant="outlined"
            key={option.id}
            data-value={option.id}
            onClick={handleClick}
        >
            {option.name}
        </Button>
    ));

    return <div className="SimpleOptionList">{buttons}</div>;
}

export default SimpleOptionList;
