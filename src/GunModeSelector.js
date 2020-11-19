import "./styles/GunModeSelector.css";

const displayTexts = {
    A: "Short Range",
    B: "Long Range",
    C: "Rapid-Fire",
};

function GunModeSelector({ value, handleClick }) {
    const options = ["A", "B", "C"];
    const selectors = options.map(option => (
        <div
            data-name="gunMode"
            data-value={option}
            key={option}
            onClick={handleClick}
            className={`GunModeSelector-GunMode ${
                value === option ? "selected" : ""
            }`}
        >
            {displayTexts[option]}
        </div>
    ));
    return <div className="GunModeSelector">{selectors}</div>;
}

export default GunModeSelector;
