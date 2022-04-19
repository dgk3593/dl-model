import { useActiveModel } from "@/state";
import { saveAs } from "file-saver";

/**
 * @param { THREE.Object3D } target
 * @param { Object } options
 * @return { Promise<Blob> }
 */
async function createGltf(target, options) {
    const { GLTFExporter } = await import(
        "three/examples/jsm/exporters/GLTFExporter"
    );
    const exporter = new GLTFExporter();
    const output = await exporter.parseAsync(target, {
        embedImages: true,
        ...options,
    });

    const blob = options.binary
        ? new Blob([output])
        : new Blob([JSON.stringify(output)], { type: "application/json" });
    return blob;
}

export async function exportGltf({ binary = false }) {
    const activeModel = useActiveModel.getState().activeModel;
    if (!activeModel) return;

    const target = activeModel.model;
    const ext = binary ? "glb" : "gltf";
    const fileName = `${activeModel.userData?.name ?? activeModel.id}.${ext}`;
    const currentChain = activeModel.animation.current.chainName;
    const animations = activeModel.animation.chain[currentChain].clips;

    const blob = await createGltf(target, {
        binary,
        animations,
        embedImages: true,
        onlyVisible: true,
    });
    saveAs(blob, fileName);
}
