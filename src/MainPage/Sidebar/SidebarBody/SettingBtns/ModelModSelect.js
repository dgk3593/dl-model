import { useEffect, useContext, useCallback } from "react";

import { DispatchContext } from "context/SettingsContext";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import modelMod from "data/modelMod";

import "./styles/ModelModSelect.css";

/**
 * @param {Object} props
 * @param {AppModelState} props.model
 */
function ModelModSelect({ model }) {
    const { id, modName } = model;
    const dispatch = useContext(DispatchContext);

    const modList = modelMod[id]?.map(mod => mod.name);

    const setMod = useCallback(
        (code, name) => {
            const action = {
                type: "update",
                key: "model",
                value: { mod: code, modName: name },
            };
            dispatch(action);
        },
        [dispatch]
    );

    useEffect(() => {
        const defaultCode = modelMod[id]?.[0].code;
        const defaultName = modelMod[id]?.[0].name;

        setMod(defaultCode, defaultName);
    }, [id, setMod]);

    const handleChange = event => {
        const { value: modName } = event.target;
        const { code } = modelMod[id].find(({ name }) => name === modName);

        setMod(code, modName);
    };

    return modList ? (
        <Select
            className="ModelModSelect"
            value={modList.includes(modName) ? modName : modList[0]}
            onChange={handleChange}
            autoWidth
        >
            {modList.map(name => (
                <MenuItem key={name} value={name}>
                    {name}
                </MenuItem>
            ))}
        </Select>
    ) : (
        <></>
    );
}

export default ModelModSelect;
