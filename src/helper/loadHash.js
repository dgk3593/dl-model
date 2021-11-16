import { getBool } from "./utils";
import { parseCode } from "@/dl-viewer/utils/parseCode";
import { useAniSelectState, useAppState } from "@/state";
import * as DEFAULT from "./default";
import viewer from "@/viewer";
import { getDefaultCamera, getDefaultControl } from "../dl-viewer";
import { getDefaultAni } from "@/data/getPersonalAni";
import { chainCodeToList } from "@/SceneController/Sidebar/ChainMaker/helper";
import { initAniSelectState } from "./initAniSelectState";

export function loadHash() {
    const { hash } = window.location;
    const params = parseCode(hash);
    const settings = Object.fromEntries(params);
    applySettings(settings);
    loadModel(hash);
}

function applySettings(settings) {
    const {
        bg = DEFAULT.BACKGROUND,
        showAC = "true",
        showSettings = "true",
    } = settings;

    viewer.background = bg;
    useAppState.setState({ showTimeControl: getBool(showAC) });
    useAppState.setState({ showSettings: getBool(showSettings) });
}

async function loadModel(encodedHash) {
    viewer.disposeAllModels();
    const hash = decodeURI(encodedHash);

    setTimeout(async () => {
        const code = hash.includes("id=")
            ? hash
            : hash + `/id=${DEFAULT.MODEL}`;
        const model = await viewer.loadModelFromCode(code);
        viewer.add(model);

        const aniCategory = model.type === "adventurer" ? "Adv" : "Personal";

        useAniSelectState.getState().setCategory(aniCategory);
        initAniSelectState(model);

        const { id } = model;
        if (!hash.includes("camPos=")) {
            const camera = getDefaultCamera(id);
            viewer.camera.position.set(...camera);
        }

        const control = getDefaultControl(id);
        viewer.controls.target.set(...control);

        if (!hash.includes("ani=")) {
            const ani = getDefaultAni(id);
            if (ani) {
                const { code, name } = ani;
                model.animation.addChain(code);
                model.userData.chain = chainCodeToList(code, name);
            }
        } else {
            const currentAni = model.animation.current.chainCode ?? "";
            currentAni &&
                (model.userData.chain = chainCodeToList(currentAni, "init"));
        }
    });
}
