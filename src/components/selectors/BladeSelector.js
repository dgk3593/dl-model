import "./styles/Selector.css";

const BladeSelector = ({ value, handleClick }) => {
    return (
        <div className="Selector">
            <div
                data-value="Blade"
                onClick={handleClick}
                className={`Selector-Item ${
                    value === "Blade" ? "selected" : ""
                }`}
            >
                Blade
            </div>
            <div
                data-value="Sheath"
                onClick={handleClick}
                className={`Selector-Item ${
                    value === "Sheath" ? "selected" : ""
                }`}
            >
                Sheath
            </div>
        </div>
    );
};

export default BladeSelector;
