import { useActiveModel, useAniSelectState, useAppState } from "@/state";
import { getDefaultAni } from "@/data/getPersonalAni";
import viewer from "@/viewer";
import { getDefaultCamera, getDefaultControl } from "@/dl-viewer";
import { chainCodeToList } from "../ChainMaker/helper";

const { setLoadingMsg } = useAppState.getState();

const aniHandler = (code, name) => {
    const activeModel = useActiveModel.getState().activeModel;
    activeModel?.animation.addChain(code);

    const chainList = chainCodeToList(code, name);
    if (!activeModel?.userData) return;

    activeModel.userData.chain
        ? activeModel.userData.chain.splice(0, Infinity, ...chainList)
        : (activeModel.userData.chain = chainList);
};

const modelHandler = async (id, name) => {
    setLoadingMsg("Loading");
    const oldModel = useActiveModel.getState().activeModel;
    const newModel = await viewer.loadDLModel(id);
    newModel.userData.name = name;

    if (oldModel?.type === "adventurer" && newModel.type === "adventurer") {
        newModel.userData.chain = oldModel.userData.chain;
        newModel.animation.addChain(oldModel.animation.current.chainCode);
        // move attachments
        oldModel.attachment.list.forEach(att =>
            newModel.attach(att, att.parentBone)
        );
    } else {
        const ani = getDefaultAni(id);
        if (ani) {
            const { code, name } = ani;
            newModel.animation.addChain(code);
            newModel.userData.chain = chainCodeToList(code, name);
        }
    }

    oldModel?.dispose();
    viewer.add(newModel);
    const camera = getDefaultCamera(id);
    viewer.camera.position.set(...camera);

    const control = getDefaultControl(id);
    viewer.controls.target.set(...control);

    useAniSelectState
        .getState()
        .setCategory(
            newModel.type === "adventurer" ? "Adventurer" : "Personal"
        );

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
