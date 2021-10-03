import { pipe, getModelType, getBool } from "../utils";
import eventDispatcher from "../utils/eventDispatcher";
import addFaceFunctions from "./addFaceFunctions";
import saveMeshesAndBones from "./saveMeshesAndBones";
import addPartFunctions from "./addPartFunctions";
import addMaterialFunctions from "./addMaterialFunctions";
import addOutlineFunctions from "./addOutlineFunctions";
import addAnimation from "./addAnimation";
import addAttachFunctions from "./addAttachFunctions";
import addTextureFunctions from "./addTextureFunctions";
import addParticleFunctions from "./addParticleFunctions";
import addOtherFunctions from "./addOtherFunctions";
import { nanoid } from "nanoid";

/**
 * wrap DL model in a container
 * @param {THREE.Group} model
 * @param {object} params
 * @param {string} params.id
 * @param {MaterialParams} params.material
 * @param {OutlineParams} params.outline
 * @param {import('..').DLViewer} params.viewer
 * @return {DLModel}
 */
export function createDLModel(model, params) {
    const { id, material, outline, viewer } = params;

    const pipeline = [
        saveMeshesAndBones, // must be first
        addPartFunctions,
        addAttachFunctions,
        addOutlineFunctions(outline),
        addMaterialFunctions(material),
        addTextureFunctions,
        addFaceFunctions,
        addAnimation,
        addParticleFunctions,
        addOtherFunctions,
    ];

    const base = {
        ...eventDispatcher,
        isDLModel: true,
        model,
        id, // DL id
        uniqueId: nanoid(), // unique id
        type: getModelType(id),
        viewer,
        userData: {},
        _time: 0,

        /**
         * @param {number} dt
         */
        update(dt) {
            this._time += dt;
            this.attachment?.list.forEach(a => a.update?.(dt));

            this.dispatchEvent({ type: "TimeUpdated", dt, time: this._time });
        },

        set scale(value) {
            if (value.includes?.(",")) {
                const [x, y, z] = value
                    .split(",")
                    .map(v => (v ? parseFloat(v) : 1));
                this.model.scale.set(x, y, z);
                return;
            }

            const scale = Number(value) || 1;
            this.model.scale.set(scale, scale, scale);
        },

        get scale() {
            const { scale } = this.model;
            const { x, y, z } = scale;
            return x === y && x === z ? x : [x, y, z].join(",");
        },

        /**
         * @param {boolean | string} value
         */
        set visible(value) {
            this.model.visible = getBool(value);
        },
    };

    ["position", "rotation", "visible"].forEach(prop =>
        Object.defineProperty(base, prop, {
            get() {
                return this.model[prop];
            },
            enumerable: true,
        })
    );

    model.userData.container = base;

    return pipe(...pipeline)(base);
}
