import { DEFAULT_MAT_PARAMS } from "../../defaultParams";
import * as THREE from "three";
import { analyzeCode, getBool } from "../../utils";

import {
    getMatPropList,
    changeMaterial,
    spProps,
    matProps,
    createGradientMap,
    loadMatcap,
    valueMap,
    valueToString,
} from "./helper";
import { createChangeProxy } from "@/dl-viewer/utils/createChangeProxy";

/**
 * @param {MaterialParams} params
 */
const addMaterialFunctions =
    params =>
    /**
     * @param {object} container
     */
    container => {
        /**
         * @type {THREE.Mesh[]}
         */
        const meshes = container.meshes;

        /**
         * @type {MaterialParams}
         */
        const initParams = { ...DEFAULT_MAT_PARAMS, ...params };
        const { type } = initParams;

        // force initial material change
        // @ts-ignore
        changeMaterial(meshes, { force: true, matType: type });
        /**
         * @type { MaterialParams }
         */
        let currentParams = { type, showTexture: true };
        let propList = getMatPropList(type);

        const material = {
            get code() {
                const { type, propList } = this;

                const parts = [];
                type !== DEFAULT_MAT_PARAMS.type && parts.push(`type=${type}`);

                propList.forEach(prop => {
                    const toString = valueToString[prop];
                    const current = toString(this[prop]);
                    const defaultValue = toString(DEFAULT_MAT_PARAMS[prop]);
                    if (current !== defaultValue)
                        parts.push(`${prop}=${current}`);
                });
                const code = parts.join("/").replaceAll("#", "");
                return code;
            },

            set code(code) {
                const keys = Object.keys(DEFAULT_MAT_PARAMS);
                const settings = {
                    ...DEFAULT_MAT_PARAMS,
                    ...analyzeCode(code),
                };
                keys.forEach(key => {
                    this[key] = settings[key];
                });
            },

            toString() {
                const { code } = this;
                return code ? `mat=(${code})` : "";
            },

            get list() {
                return meshes.flatMap(({ material }) => material);
            },

            get propList() {
                return propList;
            },

            /**
             * @param {MaterialType} type
             */
            set type(type) {
                if (this.type === type) return;

                propList = getMatPropList(type);

                changeMaterial(meshes, { matType: type });
                currentParams.type = type;
                const tmp = { ...currentParams };
                currentParams = { showTexture: tmp.showTexture };

                propList.forEach(key => (this[key] = tmp[key]));
                currentParams = tmp;
            },

            /**
             *  @param {boolean} value
             */
            set flatShading(value) {
                const boolValue = getBool(value);
                if (boolValue === this.flatShading) return;

                currentParams.flatShading = boolValue;
                if (!this.propList.includes("flatShading")) return;

                this.list.forEach(mat => {
                    mat.flatShading = boolValue;
                    mat.needsUpdate = true;
                });
            },

            /**
             * @param {number[] | 'none'} values
             */
            set gradientMap(values) {
                if (values === this.gradientMap) return;

                currentParams.gradientMap = values;
                if (!this.propList.includes("gradientMap")) return;

                const oldMap = this.list[0]?.gradientMap;
                oldMap?.dispose?.();

                const map =
                    values === "none" ? null : createGradientMap(values);

                this.list.forEach(mat => {
                    mat.gradientMap = map;
                    mat.needsUpdate = true;
                });
            },

            /**
             * @param {boolean} value
             */
            set showTexture(value) {
                const boolValue = getBool(value);
                if (this.showTexture === boolValue) return;

                currentParams.showTexture = boolValue;

                const handler = boolValue
                    ? /** @param {Material} mat */
                      mat => {
                          mat.map = mat.userData.backupMap;
                          mat.userData.backupMap = null;
                          mat.needsUpdate = true;
                      }
                    : /** @param {Material} mat */
                      mat => {
                          mat.userData.backupMap = mat.map;
                          mat.map = null;
                          mat.needsUpdate = true;
                      };

                this.list.forEach(handler);
            },

            /**
             * @param {string} matcap
             */
            set matcap(matcap) {
                if (currentParams.matcap === matcap) return;

                currentParams.matcap = matcap;
                if (!this.propList.includes("matcap")) return;

                const oldMatcap = this.list[0]?.matcap;
                oldMatcap?.dispose?.();

                const newMatcap = loadMatcap(matcap);
                this.list.forEach(mat => {
                    mat.matcap = newMatcap;
                    mat.needsUpdate = true;
                });
            },
        };

        matProps.forEach(prop =>
            Object.defineProperty(material, prop, {
                get() {
                    return currentParams[prop];
                },
                ...(!spProps.includes(prop) && {
                    set(value) {
                        if (value === this[prop]) return;
                        currentParams[prop] = value;

                        if (!this.propList.includes(prop)) return;

                        this.list.forEach(
                            mat => (mat[prop] = valueMap[prop](value))
                        );
                    },
                }),
            })
        );

        // Set all relevant properties
        getMatPropList(type).forEach(key => (material[key] = initParams[key]));

        // Save the rest of the properties
        currentParams = { ...DEFAULT_MAT_PARAMS, ...currentParams };
        container.material = createChangeProxy(material);

        return container;
    };

export default addMaterialFunctions;
