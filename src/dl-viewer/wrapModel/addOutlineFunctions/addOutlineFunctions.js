import { DEFAULT_OUTLINE } from "../../defaultParams";
import * as THREE from "three";
import addOutline from "./helper";
import { analyzeCode, createColor, getBool } from "../../utils";
import { createChangeProxy } from "@/dl-viewer/utils/createChangeProxy";

const valueMap = {
    size: parseFloat,
    opacity: parseFloat,
    color: createColor,
};

/**
 * @param {OutlineParams} params
 */
const addOutlineFunctions =
    params =>
    /**
     * @param {object} container
     */
    container => {
        const initParams = { ...DEFAULT_OUTLINE, ...params };

        /**
         * @type {THREE.Mesh[]}
         */
        const meshes = container.meshes;

        const uniforms = {
            size: { value: initParams.size },
            opacity: { value: initParams.opacity },
            color: { value: new THREE.Color(initParams.color) },
        };

        const outlineList = addOutline(meshes, uniforms);
        const currentParams = { ...initParams, enabled: true };

        const outline = {
            get propList() {
                return ["enabled", "color", "size", "opacity"];
            },

            get enabled() {
                return currentParams.enabled;
            },

            /**
             * @param {boolean | string} value
             */
            set enabled(value) {
                const bool = getBool(value);

                outlineList.forEach(outline => (outline.visible = bool));
                currentParams.enabled = bool;
            },

            get code() {
                if (!this.enabled) return "none";

                const parts = [];
                Object.keys(DEFAULT_OUTLINE).forEach(key => {
                    const current = this[key];
                    if (current !== DEFAULT_OUTLINE[key]) {
                        parts.push(`${key}=${current}`);
                    }
                });
                return parts.join("/").replaceAll("#", "");
            },

            /**
             * set properties from string
             * @param {string} code
             */
            set code(code) {
                if (code === "none") {
                    this.enabled = false;
                    return;
                }
                const keys = Object.keys(DEFAULT_OUTLINE);
                const settings = { ...DEFAULT_OUTLINE, ...analyzeCode(code) };
                keys.forEach(key => {
                    this[key] = settings[key];
                });
            },

            toString() {
                const { code } = this;
                return code ? `ol=(${code})` : "";
            },
        };

        ["size", "opacity", "color"].forEach(prop =>
            Object.defineProperty(outline, prop, {
                get() {
                    return currentParams[prop];
                },

                set(value) {
                    if (value === this[prop]) return;

                    currentParams[prop] = value;
                    uniforms[prop].value = valueMap[prop](value);
                },
            })
        );

        outline.enabled = initParams.enabled;
        container.outline = createChangeProxy(outline);

        return container;
    };

export default addOutlineFunctions;
