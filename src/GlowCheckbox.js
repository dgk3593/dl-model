import React from "react";
import "./styles/GlowCheckbox.css";

function GlowCheckbox(props) {
    const { group, filterName, handleToggle, checked, order } = props;
    const imgPath = `${process.env.PUBLIC_URL}/img/filter/${group}_${filterName}.png`;
    return (
        <div
            className="GlowCheckbox"
            data-group={group}
            data-name={filterName}
            onClick={handleToggle}
            style={{ WebkitOrder: order }} // fix reordering  bug with Safari on iOS
        >
            <img
                className={`GlowCheckbox-icon ${checked && "checked"}`}
                src={imgPath}
                alt={`${group}_${filterName}`}
            />
        </div>
    );
}

export default GlowCheckbox;
