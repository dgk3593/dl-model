import React from "react";

import "./styles/SimpleOption.css";

function SimpleOption(props) {
    const { id, name, handleSelect } = props;
    return (
        <div className="SimpleOption" data-value={id} onClick={handleSelect}>
            {name}
        </div>
    );
}

export default SimpleOption;
