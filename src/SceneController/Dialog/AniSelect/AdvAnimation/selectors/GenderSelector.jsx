import Selector from "components/Selector";

const options = ["Male", "Female"];

function GenderSelector({ value, onClick }) {
    return (
        <Selector
            type="text"
            options={options}
            value={value}
            onClick={onClick}
        />
    );
}

export default GenderSelector;
