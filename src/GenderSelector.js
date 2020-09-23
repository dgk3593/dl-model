import React from "react";

import "./styles/GenderSelect.css";

function GenderSelector({ value, handleClick }) {
    return (
        <div className="GenderSelect">
            <div
                data-name="gender"
                data-value="Male"
                onClick={handleClick}
                className={`GenderSelect-Gender ${
                    value === "Male" ? "selected" : ""
                }`}
            >
                Male
            </div>
            <div
                data-name="gender"
                data-value="Female"
                onClick={handleClick}
                className={`GenderSelect-Gender ${
                    value === "Female" ? "selected" : ""
                }`}
            >
                Female
            </div>
        </div>
    );
}

export default GenderSelector;
