import outlineFrag from "./shader/outline.frag?raw";
import outlineVert from "./shader/outline.vert?raw";
import * as THREE from "three";
import { disposeMaterial } from "../../utils";

/**
 * @param {{ [key: string] : ShaderUniform }} uniforms
 */
const createOutlineMaterial = uniforms => {
    return new THREE.ShaderMaterial({
        side: THREE.BackSide,
        transparent: true,
        depthFunc: THREE.LessDepth,
        vertexShader: outlineVert,
        fragmentShader: outlineFrag,
        uniforms,
    });
};

/** replace all of a mesh's material
 * @param {THREE.Mesh} mesh
 * @param {THREE.Material} newMaterial
 */
function replaceMaterial(mesh, newMaterial) {
    const { material } = mesh;
    const isArray = Array.isArray(mesh.material);

    // dispose old material
    [material].flat().forEach(disposeMaterial);

    // apply new material
    mesh.material = isArray
        ? new Array(mesh.material.length).fill(newMaterial)
        : newMaterial;
}

/** add outline to given meshes
 * @param {THREE.Mesh[]} meshes
 * @param {{ [key: string]: ShaderUniform }} uniforms
 * @return {THREE.Mesh[]}
 */
export default function addOutline(meshes, uniforms) {
    const material = createOutlineMaterial(uniforms);

    const outlines = [];
    const skipList = ["Eff", "Extension"];

    meshes.forEach(mesh => {
        const { name } = mesh;
        if (skipList.some(word => name.includes(word))) return;

        const outline = mesh.clone();
        outline.name = `outline-${mesh.name}`;
        replaceMaterial(outline, material);

        if (mesh.isSkinnedMesh) {
            outline.bind(mesh.skeleton, mesh.bindMatrix);
        }
        mesh.add(outline);
        outlines.push(outline);
    });

    return outlines;
}
