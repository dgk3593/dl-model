import React from "react";

import "./styles/GunModeSelector.css";

function GunModeSelector({ value, handleClick }) {
    return (
        <div className="GunModeSelector">
            <div
                data-name="gunMode"
                data-value="A"
                onClick={handleClick}
                className={`GunModeSelector-GunMode ${
                    value === "A" ? "selected" : ""
                }`}
            >
                Short Range
            </div>
            <div
                data-name="gunMode"
                data-value="B"
                onClick={handleClick}
                className={`GunModeSelector-GunMode ${
                    value === "B" ? "selected" : ""
                }`}
            >
                Long Range
            </div>
            <div
                data-name="gunMode"
                data-value="C"
                onClick={handleClick}
                className={`GunModeSelector-GunMode ${
                    value === "C" ? "selected" : ""
                }`}
            >
                Burst
            </div>
        </div>
    );
}

export default GunModeSelector;
