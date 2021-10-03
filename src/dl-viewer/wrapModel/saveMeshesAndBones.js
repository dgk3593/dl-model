import { getMeshesAndBones, getUnique } from "../utils";

/** Add refererences to a DL model's meshes and bones to a DL Model container
 * @param {object} container - DL Model container
 */
export default function saveMeshesAndBones(container) {
    const { model, uniqueId } = container;
    const [meshes, bones] = getMeshesAndBones(model);

    // original boneName
    Object.defineProperty(bones, "list", {
        value: getUnique(bones.map(({ name }) => name)),
    });

    Object.defineProperty(meshes, "visible", {
        get() {
            return this.filter(({ visible }) => visible);
        },
    });

    // change bone name to avoid collision when attaching something with identical bone name
    bones.forEach(bone => {
        bone.name = `${uniqueId}|${bone.name}`;
    });

    return Object.defineProperties(container, {
        meshes: {
            get() {
                return meshes;
            },
        },
        bones: {
            get() {
                return bones;
            },
        },
    });
}
