/* 
################################################
# Extension of Ani Viewer for dragons that adds:
#    - Eyes and Mouth
################################################  
*/

import AniViewer from "./AniViewer";

import { getDragonEye, getDragonMouth } from "./viewerHelpers";
import { DEFAULT_DRAGON_FACE_IDX } from "./consts";

export class DragonViewer extends AniViewer {
    constructor() {
        super();
        this._eyeIdx = this._mouthIdx = DEFAULT_DRAGON_FACE_IDX;
    }

    initNewModel = () => {
        this.saveMainModelInitState();
        this.initFace();
        this.addAnimation();
    };

    afterMainModelLoad = () => {
        this.initNewModel();
    };

    afterMainModelUpdate = () => {
        this.initNewModel();
    };

    initFace = () => {
        const mainModel = this.models.main;
        this.eyes = getDragonEye(mainModel);
        this.mouths = getDragonMouth(mainModel);

        this.eyeIdx = DEFAULT_DRAGON_FACE_IDX;
        this.mouthIdx = DEFAULT_DRAGON_FACE_IDX;
    };

    set eyeIdx(newIdx) {
        const idx = parseInt(newIdx);
        const oldIdx = this._eyeIdx;
        if (idx === oldIdx) return;

        this._eyeIdx = idx;
        const regex = /[0-9]{2}/;
        this.eyes.forEach(mesh => {
            const { name } = mesh;
            const id = regex.exec(name)[0];
            mesh.visible = parseInt(id) === idx;
        });
    }

    set mouthIdx(newIdx) {
        const idx = parseInt(newIdx);
        const oldIdx = this._mouthIdx;
        if (idx === oldIdx) return;

        this._mouthIdx = idx;
        const regex = /[0-9]{2}/;
        this.mouths.forEach(mesh => {
            const { name } = mesh;
            const id = regex.exec(name)[0];
            mesh.visible = parseInt(id) === idx;
        });
    }
}

export default DragonViewer;
