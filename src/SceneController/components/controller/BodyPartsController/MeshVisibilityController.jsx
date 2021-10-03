import { useState } from "react";
import ToggleGroup from "components/Filter/ToggleGroup";

function MeshVisibilityController({ list }) {
    const names = list.map(({ name }) => name);
    const getMesh = meshName => list.find(({ name }) => name === meshName);
    const initState = Object.fromEntries(
        names.map(name => [name, getMesh(name)?.visible])
    );
    const [state, setState] = useState(initState);
    const toggle = (_, name) => {
        const newState = !state[name];
        setState({ ...state, [name]: newState });
        getMesh(name).visible = newState;
    };
    return (
        <ToggleGroup
            name=""
            options={names}
            type="text"
            state={state}
            toggle={toggle}
        />
    );
}

export default MeshVisibilityController;
