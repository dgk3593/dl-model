import { useState } from "react";
import SelectBox from "components/SelectBox";
import { getSelectOptions, defaultOptions, Controller } from "./helper";

import "./ModelController.css";

function ModelController({
    target,
    options = defaultOptions,
    dataKey = "controller",
}) {
    const [type, setType] = useState(target.userData[dataKey] ?? options[0]);
    const selectOptions = getSelectOptions(options);

    const handleTypeChange = newType => {
        target.userData[dataKey] = newType;
        setType(newType);
    };

    return (
        <div className="ModelController">
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
