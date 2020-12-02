/* 
################################################
# Extension of Ani Viewer for dragons that adds:
#    - Eyes and Mouth
################################################  
*/

import DragonViewer from "./AniViewer";

import { fbxSource } from "./App";
import { getDragonEye, getDragonMouth } from "./viewerHelpers";

export class CharaViewer extends DragonViewer {
    constructor() {
        super();
        this.aniSource = `${fbxSource}/fbx/dragonAni`;
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

        this.eyeIdx = 1;
        this.mouthIdx = 1;
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

export default CharaViewer;
