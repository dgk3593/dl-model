import Selector from "./Selector";

function FacePartSelector({ value, onClick }) {
    const options = ["eye", "mouth", "both"];
    const texts = ["Eye", "Mouth", "Both"];
    return (
        <Selector
            value={value}
            options={options}
            texts={texts}
            onClick={onClick}
        />
    );
}

export default FacePartSelector;
