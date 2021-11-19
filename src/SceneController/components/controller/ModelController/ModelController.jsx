import { useState } from "react";
import SelectBox from "components/SelectBox";
import QuickAccess from "./QuickAccess";
import { getControlList, getSelectOptions, Controller } from "./helper";

import "./ModelController.css";

/**
 * Render a controller for a DL model
 * @param {object} props
 * @param {DLModel} props.target - The DL model to control
 */
function ModelController({ target }) {
    const options = getControlList(target);

    const [type, setType] = useState(target.userData.controller ?? options[0]);
    const selectOptions = getSelectOptions(options);

    const handleTypeChange = newType => {
        target.userData.controller = newType;
        setType(newType);
    };

    return (
        <div className="ModelController">
            <QuickAccess
                list={options}
                value={type}
                onChange={handleTypeChange}
            />

            <SelectBox
                options={selectOptions}
                value={type}
                onChange={handleTypeChange}
                fullWidth
                size="small"
            />
            <Controller type={type} target={target} />
        </div>
    );
}

export default ModelController;
