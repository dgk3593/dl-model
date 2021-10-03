import { disposeMesh } from "../../utils";

/** dispose a 3D object */
export const disposeContainerObject = container => {
    container.dispatchEvent({ type: "dispose" });
    if (!container) return;

    const { model, meshes, outline, particle, viewer } = container;

    particle?.list.forEach(p => p.dispose());

    if (model.parent?.isScene) {
        model.parent.remove(model);
        viewer.loadedModel.remove(container);
    }
    container.detach?.();

    const allMeshes = [meshes.reverse(), outline?.all].flat();
    allMeshes.forEach(disposeMesh);
};

/**
 * convert a vector to string
 * @param {THREE.Vector3} vec
 */
export function vec3ToStr(vec) {
    const { x, y, z } = vec;
    return [x, y, z].map(v => (v ? v : "")).join();
}
