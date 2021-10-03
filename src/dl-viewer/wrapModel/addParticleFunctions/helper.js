import * as THREE from "three";
import vertexShader from "./shader/aura/aura.vert?raw";
import fragmentShader from "./shader/aura/aura.frag?raw";
import { DEFAULT_AURA_PARAMS, PROP_LIST } from "./defaultParams";
import { getBool } from "../../utils";

export const createParticles =
    (type = "aura") =>
    /**
     * @param {THREE.Mesh[]} meshes
     * @param {object} initParams
     */
    (meshes, initParams = {}) => {
        if (!meshes?.length) return;

        if (type === "aura") return createAura(meshes, initParams);
    };

/**
 * @param {{ [ name: string ]: {value: * } }} uniforms
 */
function createAuraMaterial(uniforms) {
    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
    });

    return material;
}

/**
 * @param {THREE.Mesh[]} meshes
 * @param {object} initParams
 *
 */
function createAura(meshes, initParams) {
    const uniformEntries = DEFAULT_AURA_PARAMS.map(param => {
        const { uName, defaultValue, valueMap } = param;
        const value = valueMap?.(defaultValue) ?? defaultValue;

        return [uName, { value }];
    });
    const uniforms = Object.fromEntries(uniformEntries);
    const material = createAuraMaterial(uniforms);
    /**
     * @type {THREE.Points[]}
     */
    const auraList = [];

    meshes.forEach(mesh => {
        const { name } = mesh.geometry;
        if (name.startsWith("mEye") || name.startsWith("mMouth")) return;

        const geometry = mesh.geometry.clone();
        const vertexCount = geometry.attributes.position.count;

        const random = new Float32Array(vertexCount)
            .fill(0)
            .map(() => Math.random() - 0.5);

        geometry.setAttribute("aRandom", new THREE.BufferAttribute(random, 1));
        geometry.deleteAttribute("color");
        geometry.deleteAttribute("uv");

        const particle = new THREE.Points(geometry, material);

        particle.name = "aura";
        // add skinning if needed
        if (mesh.isSkinnedMesh) {
            particle.type = "SkinnedMesh";
            particle.isSkinnedMesh = true;
            particle.skeleton = mesh.skeleton;
            particle.bindMatrix = mesh.bindMatrix;
            particle.bindMatrixInverse = mesh.bindMatrixInverse;
            particle.bindMode = mesh.bindMode;
            particle.bind = mesh.bind;
            particle.clone = mesh.clone;
            particle.initBones = mesh.initBones;
            particle.normalizeSkinWeights = mesh.normalizeSkinWeights;
            particle.pose = mesh.pose;
            particle.updateMatrixWorld = mesh.updateMatrixWorld;
        }

        mesh.add(particle);
        auraList.push(particle);
    });

    const params = { visible: true };
    const aura = {
        name: "aura",
        onDispose: () => void 0,

        get list() {
            return auraList;
        },

        get propList() {
            return PROP_LIST["aura"];
        },

        get visible() {
            return params.visible;
        },

        /**
         * @param {boolean | string }
         */
        set visible(value) {
            const bool = getBool(value);
            this.list.forEach(particle => (particle.visible = bool));
            params.visible = bool;
        },

        dispose() {
            this.onDispose();
            this.list.forEach(item => {
                item.parent?.remove(item);

                item.material.dispose?.();
                item.geometry.dispose?.();
            });
        },

        /**
         * @param {string} code
         */
        set code(code) {
            const parts = code.split("/");
            parts.forEach(part => {
                const [key, value] = part.split("=");
                if (!DEFAULT_AURA_PARAMS.map(({ name }) => name).includes(key))
                    return;

                this[key] = value;
            });
        },
    };

    DEFAULT_AURA_PARAMS.forEach(param => {
        const { name, uName, defaultValue, valueMap } = param;
        params[name] = defaultValue;

        Object.defineProperty(aura, name, {
            get() {
                return params[name];
            },
            set(value) {
                params[name] = value;
                uniforms[uName].value = valueMap?.(value) ?? value;
            },
        });
    });
    aura.onTimeUpdate = ({ time }) => (aura.time = time);
    // set initial params
    Object.entries(initParams).forEach(([name, value]) => (aura[name] = value));

    return aura;
}
