import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";

export function createEffectComposer({
    antialias = "SMAA",
    renderer,
    scene,
    camera,
}) {
    const renderTarget = createRenderTarget(antialias);
    const effectComposer = new EffectComposer(renderer, renderTarget);
    const renderPass = new RenderPass(scene, camera);
    effectComposer.addPass(renderPass);

    return effectComposer;
}

function createRenderTarget(method = "SMAA") {
    const RenderTargetClass =
        method === "SMAA"
            ? THREE.WebGLRenderTarget
            : THREE.WebGLMultisampleRenderTarget;

    return new RenderTargetClass(800, 600, {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        encoding: THREE.sRGBEncoding,
    });
}
