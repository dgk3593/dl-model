import { getModelType, getBool } from "../utils";
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
 * @typedef {import("three").Mesh} Mesh
 * @typedef {import("three").Bone} Bone
 * @typedef {import("three").Group} Group
 * @typedef {import('../typedef.js').MaterialParams} MaterialParams
 * @typedef {import('../typedef.js').OutlineParams} OutlineParams
 */

/**
 * @typedef {import('../typedef.js').EventDispatcher} EventDispatcher
 */

/**
 * @typedef {object} MeshesAndBonesMixin
 * @property {Mesh[]} meshes - Meshes extracted from the model.
 * @property {Bone[]} bones - Bones extracted from the model.
 */

/**
 * @typedef {object} PartMixin
 * @property {object} parts - Part-switching helpers for customizable body pieces.
 */

/**
 * @typedef {object} AttachMixin
 * @property {object} attachment - Attachment state for child models.
 * @property {DLModel} parent - The parent model when attached.
 * @property {string} parentBone - Bone name used for the current attachment.
 * @property {(object: DLModel, boneName?: string) => void} attach - Attaches another model to a bone.
 * @property {(object: DLModel, boneName?: string) => void} remove - Removes an attached child.
 * @property {() => void} detach - Detaches the model from its parent.
 * @property {(target: DLModel, boneName?: string) => void} attachTo - Attaches this model to another model's bone.
 */

/**
 * @typedef {object} MaterialMixin
 * @property {object} material - Material helper API.
 * @property {string} material.code - Current material code identifier.
 * @property {string} material.toString - String representation of the active material.
 * @property {MaterialParams} material.type - Material type.
 * @property {boolean} material.flatShading - Whether flat shading is enabled.
 * @property {boolean} material.showTexture - Whether textures are shown.
 * @property {string} material.matcap - Matcap texture identifier.
 * @property {number[] | 'none'} material.gradientMap - Gradient map configuration.
 * @property {Array<object>} material.list - Available material presets.
 * @property {string[]} material.propList - Material property names.
 */

/**
 * @typedef {object} TextureMixin
 * @property {string} texture - Texture identifier or preset name for the model.
 */

/**
 * @typedef {object} OtherMixin
 * @property {() => void} dispose - Disposes the model and related resources.
 * @property {(value?: string | boolean) => string} toString - String representation used by logging and debugging.
 */

/**
 * A viewer-friendly wrapper around a Three.js Group for a Dragalia Lost asset.
 *
 * DLModel instances are returned by `DLViewer.loadDLModel()` and are the
 * object type used by terminal programs for animation, attachment, materials,
 * parts, faces, and particle effects.
 *
 * @typedef {BaseModelMixin & EventDispatcher & MeshesAndBonesMixin & PartMixin & AttachMixin & MaterialMixin & TextureMixin & OtherMixin} DLModel
 */

/**
 * @typedef {object} BaseModelMixin
 * @property {boolean} isDLModel - Marks the object as a wrapped DL model.
 * @property {Group} model - The underlying Three.js scene object.
 * @property {string} id - Original asset id for the model.
 * @property {string} uniqueId - Unique runtime identifier for this instance.
 * @property {string} type - Inferred model category such as adventurer or weapon.
 * @property {import('..').DLViewer} viewer - Parent viewer instance.
 * @property {object} userData - Custom data container for scripts and extensions.
 * @property {number} _time - Internal animation time accumulator.
 * @property {(dt: number) => void} update - Advances the model's internal time and attached children.
 */

class DLModelInstance {
  /**
   * @param {Group} model
   * @param {object} params
   */
  constructor(model, params) {
    const { id, viewer } = params;

    this.isDLModel = true;
    this.model = model;
    this.id = id;
    this.uniqueId = nanoid();
    this.type = getModelType(id);
    this.viewer = viewer;
    this.userData = {};
    this._time = 0;
  }

  /**
   * @param {number} dt
   */
  update(dt) {
    this._time += dt;
    /** @type {{ list?: Array<{ update?: (dt: number) => void }> }} */
    const attachment = this.attachment;
    attachment?.list?.forEach(
      /** @param {{ update?: (dt: number) => void }} a */ a => a.update?.(dt),
    );

    this.dispatchEvent({ type: "TimeUpdated", dt, time: this._time });
  }

  /**
   * @param {boolean | string | number} value
   */
  set scale(value) {
    if (typeof value === "string" && value.includes?.(",")) {
      const [x, y, z] = value
        .split(",")
        .map(/** @param {string} v */ v => (v ? parseFloat(v) : 1));
      this.model.scale.set(x, y, z);
      return;
    }

    const scale = Number(value) || 1;
    this.model.scale.set(scale, scale, scale);
  }

  get scale() {
    const { scale } = this.model;
    const { x, y, z } = scale;
    return x === y && x === z ? x : [x, y, z].join(",");
  }

  /**
   * @param {boolean | string} value
   */
  set visible(value) {
    this.model.visible = getBool(value);
  }
}

/**
 * Wraps a Three.js Group in the DLModel helper API.
 *
 * This is the internal factory used by `DLViewer.loadDLModel()` when a model
 * is loaded from disk. The returned object exposes helpers for animation,
 * parts, materials, faces, attachments, particles, and scene integration.
 *
 * @param {Group} model The Three.js Group loaded from an FBX asset.
 * @param {object} params Configuration for the wrapper.
 * @param {string} params.id Original model id such as "c100045_01".
 * @param {MaterialParams} params.material Default material settings.
 * @param {OutlineParams} params.outline Default outline settings.
 * @param {import('..').DLViewer} params.viewer Parent viewer instance.
 * @returns {DLModel} A wrapped DLModel instance ready for use with the viewer.
 * @example
 * const wrapped = createDLModel(group, {
 *   id: "c100045_01",
 *   material,
 *   outline,
 *   viewer,
 * });
 */
export function createDLModel(model, params) {
  const { id, material, outline, viewer } = params;

  /**
   * @param {DLModel} base
   * @param {Array<(base: DLModel) => object>} mixins
   * @returns {DLModel}
   */
  const applyMixins = (base, mixins) => {
    const mixinSources = mixins
      .map(factory => factory(base))
      .filter(source => source && source !== base);

    Object.assign(base, ...mixinSources);
    return base;
  };

  const base = new DLModelInstance(model, params);
  Object.assign(base, eventDispatcher);

  ["position", "rotation", "visible"].forEach(prop =>
    Object.defineProperty(base, prop, {
      get() {
        return this.model[prop];
      },
      enumerable: true,
    }),
  );

  const mixins = [
    /** @returns {MeshesAndBonesMixin} */ () =>
      /** @type {MeshesAndBonesMixin} */ (saveMeshesAndBones(base)),
    /** @returns {PartMixin} */ () => addPartFunctions(base),
    /** @returns {AttachMixin} */ () => addAttachFunctions(base),
    /** @returns {object} */ () => addOutlineFunctions(outline)(base),
    /** @returns {MaterialMixin} */ () =>
      /** @type {MaterialMixin} */ (addMaterialFunctions(material)(base)),
    /** @returns {TextureMixin} */ () => addTextureFunctions(base),
    /** @returns {object} */ () => addFaceFunctions(base),
    /** @returns {object} */ () => addAnimation(base),
    /** @returns {object} */ () => addParticleFunctions(base),
    /** @returns {OtherMixin} */ () => addOtherFunctions(base),
  ];

  model.userData.container = base;

  return applyMixins(base, mixins);
}
