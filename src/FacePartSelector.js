import "./styles/Selector.css";

function FacePartSelector({ value, handleClick }) {
    return (
        <div className="Selector">
            <div
                data-value="eye"
                onClick={handleClick}
                className={`Selector-Item ${value === "eye" ? "selected" : ""}`}
            >
                Eyes
            </div>
            <div
                data-value="mouth"
                onClick={handleClick}
                className={`Selector-Item ${
                    value === "mouth" ? "selected" : ""
                }`}
            >
                Mouth
            </div>
            <div
                data-value="both"
                onClick={handleClick}
                className={`Selector-Item ${
                    value === "both" ? "selected" : ""
                }`}
            >
                Both
            </div>
        </div>
    );
}

export default FacePartSelector;
