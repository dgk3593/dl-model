import Selector from "./Selector";

function BladeSelector({ value, onClick }) {
    const options = ["Blade", "Sheath"];
    return <Selector value={value} options={options} onClick={onClick} />;
}

export default BladeSelector;
