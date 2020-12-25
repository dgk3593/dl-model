import Selector from "./Selector";

function GenderSelector({ value, onClick }) {
    const options = ["Male", "Female"];
    return <Selector value={value} options={options} onClick={onClick} />;
}

export default GenderSelector;
