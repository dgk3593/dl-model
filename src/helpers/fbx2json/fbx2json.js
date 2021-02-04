import fbxList from "./fileList";
import { loadModel } from "helpers/viewerHelpers";
import { fbxSource } from "App";

const DOWNLOAD_LIMIT = 10;

const getModel = async fileName => {
    const filePath = `${fbxSource}/fbx/${fileName}`;
    const model = await loadModel(filePath);
    return model;
};

const exportAni = async ani => {
    const fileName = `${ani.name}.json`;
    const content = JSON.stringify(ani.toJSON());

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    console.log(`exported ${ani.name}`);

    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
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
};

export async function fbx2json() {
    for (const fileName of fbxList) {
        await handleFile(fileName);
    }
}
