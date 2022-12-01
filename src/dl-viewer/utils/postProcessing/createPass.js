import * as THREE from "three";
import { passData } from ".";

const passMap = {
    bloom: createBloomPass,
    pixel: createPixelPass,
    afterimage: createAfterimagePass,
    sobel: createSobelPass,
    halftone: createHalftonePass,
    dotscreen: createDotScreenPass,
    bokeh: createBokehPass,
    smaa: createSMAAPass,
};

/**
 * @param {string} type
 * @param {{}} params
 */
export async function createPass(type, params) {
    type = type.toLowerCase();
    const newPass = await passMap[type]?.(params);
    newPass.type = type;
    newPass.name = passData[type].name;

    return newPass;
}

/**
 * @param {*} pass
 * @param {string[]} propList
 */
function exposeUniforms(pass, propList) {
    Object.defineProperty(pass, "propList", {
        value: propList,
    });
    propList.forEach(prop => {
        Object.defineProperty(pass, prop, {
            get() {
                return this.uniforms[prop].value;
            },
            set(value) {
                this.uniforms[prop].value = value;
            },
        });
    });
}

async function createBloomPass({
    resolution = new THREE.Vector2(800, 600),
    strength = 0.3,
    radius = 0.5,
    threshold = 0.8,
} = {}) {
    const { UnrealBloomPass } = await import(
        "three/examples/jsm/postprocessing/UnrealBloomPass"
    );
    const pass = new UnrealBloomPass(resolution, strength, radius, threshold);
    Object.defineProperty(pass, "propList", {
        value: ["radius", "strength", "threshold"],
        writable: false,
    });

    return pass;
}

async function createSMAAPass({ renderer }) {
    const { SMAAPass } = await import(
        "three/examples/jsm/postprocessing/SMAAPass"
    );
    const resolution = new THREE.Vector2();
    renderer.getSize(resolution);

    const pass = new SMAAPass(resolution.x, resolution.y);
    Object.defineProperty(pass, "propList", {
        value: [],
        writable: false,
    });

    return pass;
}

async function createPixelPass({ scene, camera }) {
    const { RenderPixelatedPass } = await import(
        "three/examples/jsm/postprocessing/RenderPixelatedPass"
    );

    const pass = new RenderPixelatedPass(5, scene, camera);
    Object.defineProperty(pass, "propList", {
        value: ["size"],
        writable: false,
    });
    Object.defineProperty(pass, "size", {
        get() {
            return this.pixelSize;
        },
        set(value) {
            this.setPixelSize(value);
        },
    });

    return pass;
}

async function createSobelPass({ renderer }) {
    const { ShaderPass } = await import(
        "three/examples/jsm/postprocessing/ShaderPass"
    );
    const { SobelOperatorShader } = await import(
        "three/examples/jsm/shaders/SobelOperatorShader"
    );
    const resolution = new THREE.Vector2();
    renderer.getSize(resolution);
    resolution.multiplyScalar(window.devicePixelRatio);

    const sobel = new ShaderPass(SobelOperatorShader);
    sobel.uniforms["resolution"].value.x = resolution.x;
    sobel.uniforms["resolution"].value.y = resolution.y;

    Object.defineProperty(sobel, "propList", {
        value: [],
        writable: false,
    });

    return sobel;
}

async function createHalftonePass({ renderer }) {
    const { HalftonePass } = await import(
        "three/examples/jsm/postprocessing/HalftonePass"
    );
    const resolution = new THREE.Vector2();
    renderer.getSize(resolution);

    const pass = new HalftonePass(resolution.x, resolution.y, { radius: 4 });
    const propList = ["greyscale", "radius", "scatter", "shape"];
    exposeUniforms(pass, propList);

    return pass;
}

async function createDotScreenPass() {
    const { DotScreenPass } = await import(
        "three/examples/jsm/postprocessing/DotScreenPass"
    );

    const pass = new DotScreenPass();
    const propList = ["scale", "center"];
    exposeUniforms(pass, propList);

    return pass;
}

async function createBokehPass({ scene, camera }) {
    const { BokehPass } = await import(
        "three/examples/jsm/postprocessing/BokehPass"
    );
    const pass = new BokehPass(scene, camera, {});
    const propList = ["focus", "aperture", "aspect"];
    exposeUniforms(pass, propList);

    return pass;
}

async function createAfterimagePass() {
    const { AfterimagePass } = await import(
        "three/examples/jsm/postprocessing/AfterimagePass"
    );
    const pass = new AfterimagePass(0.7);

    exposeUniforms(pass, ["damp"]);

    return pass;
}
