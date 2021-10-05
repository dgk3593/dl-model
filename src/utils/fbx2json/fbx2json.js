import fbxList from "./fileList";
import { FBX_SOURCE } from "@/dl-viewer/path";
import { loadModel } from "../loadModel";
import { saveAs } from "file-saver";

const DOWNLOAD_LIMIT = 10;

const getModel = async fileName => {
    const filePath = `${FBX_SOURCE}/${fileName}`;
    const model = await loadModel(filePath);
    return model;
};

const exportAni = async ani => {
    const fileName = `${ani.name}.json`;
    const content = JSON.stringify(ani.toJSON());

    const blob = new Blob([content], { type: "text/plain" });

    saveAs(blob, fileName);
};

const pause = async msec => {
    return new Promise(resolve => setTimeout(resolve, msec));
};

const exportAllAni = async animations => {
    let counter = 0;
    for (const ani of animations) {
        await exportAni(ani);

        counter = ++counter % DOWNLOAD_LIMIT;
        if (!counter) await pause(1000);
    }
};

const handleFile = async fileName => {
    const fileToLoad = fileName.concat(fileName.endsWith("fbx") ? "" : ".fbx");
    const { animations } = await getModel(fileToLoad);

    const fromMixamo =
        animations.length === 1 && animations[0].name === "mixamo.com";
    if (fromMixamo) {
        const aniName = fileName.replace(".fbx", "");
        animations[0].name = aniName;
    }

    exportAllAni(animations);
    console.log(`exported ${fileName}`);
};

export async function fbx2json() {
    for (const fileName of fbxList) {
        await handleFile(fileName);
    }
}
