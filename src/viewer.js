// @ts-nocheck
import { DLViewer, getDefaultCamera, getDefaultControl } from "./dl-viewer";
import { chainCodeToList } from "./SceneController/Sidebar/ChainMaker/helper";

const DEFAULT_MODEL = "c100001_01";
const DEFAULT_MODEL_NAME = "The Prince";
const DEFAULT_ANI = "CMN_MWM_03&@50=(ei=3)&@55=(ei=2)";
const DEFAULT_ANI_NAME = "Bob";

const viewer = new DLViewer();
viewer.setViewport();

setTimeout(async () => {
    await viewer.initData();
    // const id = DEFAULT_MODEL;
    // const model = await viewer.loadDLModel(id);
    // model.userData.name = DEFAULT_MODEL_NAME;
    // viewer.add(model);

    // const camera = getDefaultCamera(id);
    // viewer.camera.position.set(...camera);

    // const control = getDefaultControl(id);
    // viewer.controls.target.set(...control);

    // model.animation.addChain(DEFAULT_ANI);

    // model.userData.chain = chainCodeToList(DEFAULT_ANI, DEFAULT_ANI_NAME);
});

window.addEventListener("resize", () => viewer.setViewport());

window.viewer = viewer;
window.model = viewer.model;

export default viewer;
