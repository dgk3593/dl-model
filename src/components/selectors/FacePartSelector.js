import "./styles/Selector.css";

const displayTexts = {
    eye: "Eyes",
    mouth: "Mouth",
    both: "Both",
};

function FacePartSelector({ value, handleClick }) {
    const options = ["eye", "mouth", "both"];
    const selectors = options.map(option => (
        <div
            data-value={option}
            key={option}
            onClick={handleClick}
            className={`Selector-Item ${value === option ? "selected" : ""}`}
        >
            {displayTexts[option]}
        </div>
    ));
    return <div className="Selector">{selectors}</div>;
}

export default FacePartSelector;
