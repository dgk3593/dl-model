import { useDispatch } from "context/SettingsContext";

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
    const dispatch = useDispatch();

    const modList = modelMod[id]?.map(mod => mod.name);

    const setMod = (code, name) => {
        const action = {
            type: "update",
            key: "model",
            value: { mod: code, modName: name },
        };
        dispatch(action);
    };

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
