import { useState } from "react";
import ToggleGroup from "components/Filter/ToggleGroup";

/**
 * Toggle visibility of mesh parts
 * @param {{ list: THREE.Mesh[] }} props
 */
function MeshVisibilityController({ list }) {
    const names = list.map(({ name }) => name);
    /**
     * @param {string} meshName
     * @return {THREE.Mesh}
     */
    const getMesh = meshName => list.find(({ name }) => name === meshName);

    /**
     * @type {{ [meshName: string]: Boolean }} visibility of mesh parts in list
     */
    const initState = Object.fromEntries(
        names.map(name => [name, getMesh(name)?.visible])
    );
    const [state, setState] = useState(initState);

    /**
     * toggle visibility of a mesh
     * @param {""} _
     * @param {string} name
     */
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
