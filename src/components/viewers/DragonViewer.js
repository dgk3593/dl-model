import AniViewer from "./AniViewer";

import { getDragonEye, getDragonMouth } from "helpers/viewerHelpers";

/**
 * Extension of Ani Viewer for dragons that adds:
 *   - Eyes and Mouth
 */
export class DragonViewer extends AniViewer {
    /**
     * @param {ViewerProps} props
     */
    constructor(props) {
        super(props);
        this._eyeIdx = this._mouthIdx = 0;
    }

    initNewModel = () => {
        this.saveMainModelInitState();
        this.initFace();
        this.addAnimation();
    };

    afterMainModelLoad = () => {
        this.initNewModel();
    };

    updateModel = async (prev, current) => {
        await this.updateMainModel(prev.model, current.model);
        this.updateFace(current.model);
        this.updateAnimation(prev.animation, current.animation);
    };

    updateFace = ({ eyeIdx, mouthIdx }) => {
        this.eyeIdx = eyeIdx;
        this.mouthIdx = mouthIdx;
    };

    afterMainModelUpdate = () => {
        this.initNewModel();
    };

    initFace = () => {
        const mainModel = this.models.main;
        this.eyes = getDragonEye(mainModel);

        this.mouths = getDragonMouth(mainModel);

        const { eyeIdx, mouthIdx } = this.props.model;
        this.eyeIdx = eyeIdx;
        this.mouthIdx = mouthIdx;
    };

    /**
     * @param {number} newIdx
     */
    set eyeIdx(newIdx) {
        const oldIdx = this._eyeIdx;
        if (newIdx === oldIdx) return;

        this._eyeIdx = newIdx;
        const regex = /[0-9]{2}/;
        this.eyes.forEach(mesh => {
            const { name } = mesh;
            const id = regex.exec(name)[0];
            mesh.visible = parseInt(id) === newIdx;
        });
    }

    /**
     * @param {number} newIdx
     */
    set mouthIdx(newIdx) {
        const oldIdx = this._mouthIdx;
        if (newIdx === oldIdx) return;

        this._mouthIdx = newIdx;
        const regex = /[0-9]{2}/;
        this.mouths.forEach(mesh => {
            const { name } = mesh;
            const id = regex.exec(name)[0];
            mesh.visible = parseInt(id) === newIdx;
        });
    }
}

export default DragonViewer;
