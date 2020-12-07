/* 
################################################
# Extension of Ani Viewer that adds:
#    - Weapons
#    - Face Texture
#    - Face offset
################################################  
*/

import AniViewer from "./AniViewer";

import { fbxSource } from "./App";
import { DEFAULT_FACE_IDX } from "./consts";
import {
    calculateTextureOffset,
    calculateIdxOffset,
    analyzeWeaponCode,
    loadModel,
    applyEyeTexture,
    applyMouthTexture,
    applyEyeOffset,
    applyMouthOffset,
    disposeItem,
    createOutline,
    changeMaterial,
} from "./viewerHelpers";

const SIDES = ["Right", "Left"];

export class CharaViewer extends AniViewer {
    constructor() {
        super();
        this.aniSource = `${fbxSource}/fbx`;
        this._eyeIdx = this._mouthIdx = DEFAULT_FACE_IDX;
    }

    afterMainModelLoad = () => {
        this.saveMainModelInitState();
        this.initFace();
        this.addWeapons();
        this.addAnimation();
    };

    beforeMainModelUpdate = () => {
        this.detachAllWeapons();
    };

    afterMainModelUpdate = () => {
        this.saveMainModelInitState();
        this.initFace();
        this.attachAllWeapons();
        this.addAnimation();
    };

    updateModel = async (prev, current) => {
        if (prev === current) return;

        const prevModel = prev.model;
        const { model } = current;
        if (prevModel.id !== model.id) {
            await this.updateMainModel(prevModel, model);
        } else {
            this.updateFace(prevModel, model);
        }
        this.updateWeapons(prevModel, model);
        this.updateAnimation(prev.animation, current.animation);
    };

    initFace = () => {
        const modelId = this.props.model.id;
        const defaultFaceParams = {
            mouthTexture: modelId,
            mouthIdx: DEFAULT_FACE_IDX,
            eyeTexture: modelId,
            eyeIdx: DEFAULT_FACE_IDX,
        };
        this.updateFace(defaultFaceParams, this.props.model);
    };

    addWeapons = async () => {
        this.getWeaponInfo();

        const [weaponRight, weaponLeft] = await this.initWeaponLoad();
        this.models = Object.assign(this.models, { weaponRight, weaponLeft });

        await this.initAllWeapons();
        this.attachAllWeapons();
    };

    getWeaponInfo = () => {
        const { weaponRight, weaponLeft } = this.props.model;
        const newInfo = {
            weaponRight: analyzeWeaponCode(weaponRight),
            weaponLeft: analyzeWeaponCode(weaponLeft),
        };
        this.modelInfo = Object.assign(this.modelInfo, newInfo);
    };

    initWeaponLoad = () => {
        const weaponRight = this.modelInfo.weaponRight?.modelPath;
        const loadWeaponR = loadModel(weaponRight);

        const weaponLeft = this.modelInfo.weaponLeft?.modelPath;
        const loadWeaponL = loadModel(weaponLeft);

        return Promise.all([loadWeaponR, loadWeaponL]);
    };

    initAllWeapons = async () => {
        const { materialType } = this.props.model;
        SIDES.forEach(side => {
            const key = `weapon${side}`;
            const weapon = this.models[key];
            if (!weapon) return;

            const weaponInfo = this.modelInfo[key];
            const { texturePath, flipped } = weaponInfo;
            changeMaterial(weapon, { materialType, texturePath });
            if (flipped) weapon.rotation.y += Math.PI;

            const outlineParams = this.props.outline;
            this.outlines[key] = createOutline(weapon, outlineParams);
        });
    };

    attachWeapon = (weapon, side) => {
        const boneName = `jWeapon${side[0]}`;
        this.models.main.traverse(child => {
            if (child.name.includes(boneName) && child.children.length === 0) {
                child.add(weapon);
            }
        });
    };

    attachAllWeapons = () => {
        SIDES.forEach(side => {
            const key = `weapon${side}`;
            const weapon = this.models[key];
            if (!weapon) return;

            this.attachWeapon(weapon, side);
        });
    };

    detachWeapon = side => {
        const key = `weapon${side}`;
        const model = this.models[key];
        if (!model) return;

        model.parent.remove(model);
    };

    detachAllWeapons = () => SIDES.forEach(side => this.detachWeapon(side));

    updateEyeTexture = (prev, current) => {
        const currentTexture = current.eyeTexture;
        const prevTexture = prev.eyeTexture;

        if (currentTexture === prevTexture) return false;

        const { materialType } = current;
        applyEyeTexture(this.models.main, {
            materialType,
            textureId: currentTexture,
        });
        const offset = calculateTextureOffset(currentTexture, prevTexture);
        applyEyeOffset(this.models.main, offset);

        return true;
    };

    set eyeIdx(newIdx) {
        if (!newIdx) return;

        const oldIdx = this._eyeIdx;
        if (newIdx === oldIdx) return;

        const offset = calculateIdxOffset(newIdx, oldIdx);
        applyEyeOffset(this.models.main, offset);

        this._eyeIdx = newIdx;
    }

    updateMouthTexture = (prev, current) => {
        const currentTexture = current.mouthTexture;
        const prevTexture = prev.mouthTexture;

        if (currentTexture === prevTexture) return false;

        const { materialType } = current;
        applyMouthTexture(this.models.main, {
            materialType,
            textureId: currentTexture,
        });
        const offset = calculateTextureOffset(currentTexture, prevTexture);
        applyMouthOffset(this.models.main, offset);

        return true;
    };

    set mouthIdx(newIdx) {
        if (!newIdx) return;

        const oldIdx = this._mouthIdx;
        if (newIdx === oldIdx) return;

        const offset = calculateIdxOffset(newIdx, oldIdx);
        applyMouthOffset(this.models.main, offset);

        this._mouthIdx = newIdx;
    }

    updateFaceTexture = (prev, current) => {
        const eyeUpdated = this.updateEyeTexture(prev, current);
        const mouthUpdated = this.updateMouthTexture(prev, current);
        if (eyeUpdated || mouthUpdated) {
            const mainModel = this.models.main;
            this.applyNewModelMat(mainModel);
        }
    };

    updateFaceOffset = ({ eyeIdx, mouthIdx }) => {
        this.eyeIdx = eyeIdx;
        this.mouthIdx = mouthIdx;
    };

    updateFace = (prev, current) => {
        this.updateFaceTexture(prev, current);
        this.updateFaceOffset(current);
    };

    updateWeapons = async (prev, current) => {
        this.disableInput();
        SIDES.forEach(async side => {
            const key = `weapon${side}`;
            if (prev[key] === current[key]) return;

            // remove old weapon
            this.detachWeapon(side);
            disposeItem(this.models[key]); // dispose old weapon

            // if current weapon is empty (weapon removed)
            if (!current[key]) {
                this.models[key] = null;
                this.modelInfo[key] = "";
                // remove reference to outline
                this.outlines[key] = null;
                return;
            }

            // load new weapon
            this.modelInfo[key] = analyzeWeaponCode(current[key]);
            const { modelPath, texturePath, flipped } = this.modelInfo[key];

            // load new model
            const model = await loadModel(modelPath);
            this.models[key] = model;

            // process new weapon
            const { materialType } = current;
            changeMaterial(model, { materialType, texturePath });
            // this.applyNewMatParams(model);

            if (flipped) {
                model.rotation.y += Math.PI;
            }

            const outlineParams = this.props.outline;
            this.outlines[key] = createOutline(model, outlineParams);

            this.attachWeapon(model, side);
        });
        this.enableInput();
    };
}

export default CharaViewer;
