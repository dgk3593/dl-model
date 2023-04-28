import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";

export function createEffectComposer({ renderer, scene, camera }) {
    const renderTarget = createRenderTarget();
    const effectComposer = new EffectComposer(renderer, renderTarget);
    const renderPass = new RenderPass(scene, camera);
    effectComposer.addPass(renderPass);

    return effectComposer;
}

const createRenderTarget = () =>
    new THREE.WebGLRenderTarget(800, 600, {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        colorSpace: THREE.SRGBColorSpace,
    });
