import React from "react";

import "./styles/GenderSelector.css";

function GenderSelector({ value, handleClick }) {
    return (
        <div className="GenderSelector">
            <div
                data-name="gender"
                data-value="Male"
                onClick={handleClick}
                className={`GenderSelector-Gender ${
                    value === "Male" ? "selected" : ""
                }`}
            >
                Male
            </div>
            <div
                data-name="gender"
                data-value="Female"
                onClick={handleClick}
                className={`GenderSelector-Gender ${
                    value === "Female" ? "selected" : ""
                }`}
            >
                Female
            </div>
        </div>
    );
}

export default GenderSelector;
