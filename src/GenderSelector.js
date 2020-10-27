import "./styles/Selector.css";

function GenderSelector({ value, handleClick }) {
    return (
        <div className="Selector">
            <div
                data-name="gender"
                data-value="Male"
                onClick={handleClick}
                className={`Selector-Item ${
                    value === "Male" ? "selected" : ""
                }`}
            >
                Male
            </div>
            <div
                data-name="gender"
                data-value="Female"
                onClick={handleClick}
                className={`Selector-Item ${
                    value === "Female" ? "selected" : ""
                }`}
            >
                Female
            </div>
        </div>
    );
}

export default GenderSelector;
