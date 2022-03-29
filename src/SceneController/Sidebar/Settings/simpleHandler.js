import { useActiveModel, useAniSelectState, useAppState } from "@/state";
import { getDefaultAni } from "@/data/getPersonalAni";
import viewer from "@/viewer";
import { getDefaultCamera, getDefaultControl } from "@/dl-viewer";
import { chainCodeToList } from "../ChainMaker/helper";
import { initAniSelectState } from "@/helper/initAniSelectState";

const { setLoadingMsg } = useAppState.getState();

const aniHandler = (code, name, state) => {
    const activeModel = useActiveModel.getState().activeModel;
    activeModel?.animation.addChain(code);

    const chainList = chainCodeToList(code, name);
    if (!activeModel?.userData) return;

    activeModel.userData.aniSelectState = state;

    activeModel.userData.chain
        ? activeModel.userData.chain.splice(0, Infinity, ...chainList)
        : (activeModel.userData.chain = chainList);
};

const modelHandler = async (id, name) => {
    setLoadingMsg("Loading");
    const setActiveModel = useActiveModel.getState().setActiveModel;
    const oldModel = useActiveModel.getState().activeModel;
    const newModel = await viewer.loadDLModel(id);
    newModel.userData.name = name;
    newModel.material.code = oldModel?.material.code ?? "";
    newModel.outline.code = oldModel?.outline.code ?? "";
    initAniSelectState(newModel);

    const { parent, parentBone } = oldModel ?? {};
    const isAvdToAdv =
        oldModel?.type === "adventurer" && newModel.type === "adventurer";

    if (isAvdToAdv) {
        newModel.userData.chain = oldModel.userData.chain;
        newModel.animation.addChain(oldModel.animation.current.chainCode);
        // move attachments
        oldModel.attachment.list.forEach(att =>
            newModel.attach(att, att.parentBone)
        );
    } else if (oldModel?.animation.current.chainCode || !parentBone) {
        const ani = getDefaultAni(id);
        if (ani) {
            const { code, name } = ani;
            newModel.animation.addChain(code);
            newModel.userData.chain = chainCodeToList(code, name);
        }
    }

    oldModel?.dispose();
    if (parentBone) {
        parent.attach(newModel, parentBone);
    } else {
        viewer.add(newModel);
        if (!isAvdToAdv) {
            const camera = getDefaultCamera(id);
            viewer.camera.position.set(...camera);

            const control = getDefaultControl(id);
            viewer.controls.target.set(...control);
        }

        const aniCategory = newModel.type === "adventurer" ? "Adv" : "Personal";
        useAniSelectState.getState().setCategory(aniCategory);
    }
    setActiveModel(newModel);

    setLoadingMsg("");
};

const faceHandler = (index, part) => {
    const activeModel = useActiveModel.getState().activeModel;
    if (!activeModel?.face || index === undefined || index === null) return;

    activeModel.face[`${part}BaseIdx`] = index;
};

const faceTextureHandler = (id, part) => {
    const activeModel = useActiveModel.getState().activeModel;
    if (!id || !activeModel?.face) return;

    activeModel.face[`${part}Texture`] = id;
};

export const simpleHandler = {
    model: modelHandler,
    animation: aniHandler,
    face: faceHandler,
    faceTexture: faceTextureHandler,
};
