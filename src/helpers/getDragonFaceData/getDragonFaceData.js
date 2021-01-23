import { loadModel } from "helpers/viewerHelpers";
import { fbxSource } from "App";

import dragons from "data/dragon_list";
import extraDragons from "data/dragon_list_extra";

import { getMeshes } from "helpers/viewerHelpers";

const outputFileName = "dragonFace.js";

const outputTemplate = `const dragonFace = {
%data%
}
export default dragonFace;`;

const getModel = async id => {
    const filePath = `${fbxSource}/fbx/${id}/${id}.fbx`;
    const model = await loadModel(filePath);
    return model;
};

const getFaceData = async id => {
    const model = await getModel(id);
    const meshes = getMeshes(model);
    const meshNames = meshes.map(mesh => mesh.name);

    const eyeNumber = meshNames.filter(name => name.includes("mEye")).length;
    const mouthNumber = meshNames.filter(name => name.includes("mMouth"))
        .length;

    return { eye: eyeNumber, mouth: mouthNumber };
};

const extractDragonId = ({ id }) => `d${id}`;

const exportFaceMap = faceMap => {
    const exportParts = [];
    faceMap.forEach((value, key) => {
        const { eye, mouth } = value;
        const partData = `    ${key}: { eye: ${eye}, mouth: ${mouth} },`;
        exportParts.push(partData);
    });

    const exportData = exportParts.join("\n");
    const content = outputTemplate.replace("%data%", exportData);

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = outputFileName;
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
};

export async function getDragonFaceData() {
    const faceDataMap = new Map();

    const extraId = extraDragons.map(extractDragonId);
    const dragonId = dragons.map(extractDragonId);
    const idList = [...extraId, ...dragonId];

    for (const id of idList) {
        const faceData = await getFaceData(id);
        faceDataMap.set(id, faceData);
    }

    exportFaceMap(faceDataMap);
}
