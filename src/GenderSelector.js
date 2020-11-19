import "./styles/Selector.css";

function GenderSelector({ value, handleClick }) {
    const options = ["Male", "Female"];
    const selectors = options.map(option => (
        <div
            data-name="gender"
            data-value={option}
            key={option}
            onClick={handleClick}
            className={`Selector-Item ${value === option ? "selected" : ""}`}
        >
            {option}
        </div>
    ));
    return <div className="Selector">{selectors}</div>;
}

export default GenderSelector;
