import Selector from "components/Selector";

const options = ["Eyes", "Mouth", "Both"];

function FacePartSelector({ value, onClick }) {
    return (
        <Selector
            type="text"
            options={options}
            value={value}
            onClick={onClick}
        />
    );
}

export default FacePartSelector;
