import React from "react";

import SimpleOption from "./SimpleOption";

import "./styles/SimpleOptionList.css";

function SimpleOptionList(props) {
    const { options, handleSelect } = props;
    const buttons = options.map(option => (
        <SimpleOption key={option.id} {...option} handleSelect={handleSelect} />
    ));
    return <div className="SimpleOptionList">{buttons}</div>;
}

export default SimpleOptionList;
