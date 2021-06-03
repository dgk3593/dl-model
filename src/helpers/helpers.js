import Button from "@material-ui/core/Button";

import { aniModList, incompatibleModels, specialBlades } from "./consts";

/** capitalize first letter of tring
 * @param {string} input
 */
export const capitalize = ([first, ...rest]) =>
    `${first.toUpperCase()}${rest.join("")}`;

/** generate date time string */
export const getDateTimeString = () => {
    const date = new Date();
    const dateStr = date.toDateString().replace(/ /g, "_");
    const timeStr = date
        .toLocaleTimeString()
        .replace(/:/g, "-")
        .replace(/ /g, "");
    return `${dateStr}_${timeStr}`;
};

/** get the default texture file of a model from id
 * @param {string} id - model id
 */
export const getDefaultTexture = id =>
    id.match(/_[0-9]{2}/) ? id : `${id}_01`;

/** create a new object whose entries with key listed in keys are copied from the input object
 * @param {{ }} object - object to filter
 * @param { string[] } keys - list of keys to filter
 * @return {{ }}
 */
export const filterObject = (object, keys) => {
    const entries = Object.entries(object);
    const filtered = entries.filter(([key, _]) => keys.includes(key));
    return Object.fromEntries(filtered);
};

/** Get the difference between 2 object
 * @param {{ }} prev - previous value
 * @param {{ }} current - current value
 * @returns { Array<[updatedKey: string, value: *]> } array of updated key and value pairs
 */
export const getUpdated = (prev, current) => {
    const updated = Object.entries(current).filter(
        ([key, value]) => value !== prev[key]
    );
    return updated;
};

/** check if an object is empty
 * @param {{}} object
 */
export const isEmpty = object => !Object.keys(object).length;

/** check if an ID is a blade
 * @param {string} modelId - id to check
 */
export const isBlade = modelId =>
    specialBlades.has(modelId) || modelId.startsWith("w302");

/** check if an ID is a sheath
 * @param {string} modelId - id to check
 */
export const isSheath = modelId => isBlade(modelId) && modelId.endsWith("02");

/** check if model is compatible with AdvViewer
 * @param {string} modelId
 */
export const isCharaWithAni = modelId =>
    modelId.startsWith("c") &&
    !modelId.endsWith("_h") &&
    !incompatibleModels.has(modelId);

/** check if a model is a dragon
 * @param {string} modelId
 */
export const isDragon = modelId =>
    modelId.startsWith("d") || modelId === "smith";

/** get the suitable viewer type base on ID
 * @param {string} modelId
 */
export const getViewerType = modelId => {
    if (isDragon(modelId)) return "dragon";

    if (modelId.startsWith("h") || incompatibleModels.has(modelId))
        return "ani";

    if (isCharaWithAni(modelId)) return "adv";

    return "basic";
};

/** get default eye and mouth index
 * @param {string} modelId
 */
export const getDefaultFace = modelId => (isDragon(modelId) ? 1 : 2);

/** apply callback on each element of list or on list if list is not an array
 * @param {* | Array} list - list of objects to apply callback
 * @param {function} callback - callback to apply
 */
export const callbackOnEach = (list, callback) =>
    [list].flat().forEach(child => callback(child));

/** generate animation chain code from AnimationChain
 * @param {AnimationChain} chain
 */
export const generateChainCode = chain => {
    const aniCode = chain.map(aniToCode);
    return aniCode.join(">");
};

/** convert 1 animation chain item to single animation code
 * @param {AniListItem} ani
 */
const aniToCode = ani => {
    const { aniName, faceChanges } = ani;
    const modCode = generateAniModCode(ani);
    const faceCode = generateFaceCode(faceChanges);
    return `${aniName}${modCode}${faceCode}`;
};

/**  generate animation modifier code
 * @param {AniListItem} ani
 */
const generateAniModCode = ani => {
    const modCodes = [];
    Object.keys(aniModList).forEach(modKey => {
        const { key, defaultValue } = aniModList[modKey];
        if (ani[key] !== defaultValue) {
            modCodes.push(`&${modKey}=${ani[key]}`);
        }
    });
    return modCodes.join("");
};

/** create face change code
 * @param {FaceChangeArray} faceChanges
 */
const generateFaceCode = faceChanges => {
    if (!faceChanges) return "";

    const faceCodes = [];
    faceChanges.forEach(change => {
        const { time, eyeIdx, mouthIdx } = change;
        if (!time) return;

        eyeIdx && faceCodes.push(`&e-${time}=${eyeIdx}`);

        mouthIdx && faceCodes.push(`&m-${time}=${mouthIdx}`);
    });
    return faceCodes.join("");
};

/**
 * @param {FilterState} filterState
 * @return {FilterConditions}
 */
export const collectFilter = filterState => {
    const stateEntries = Object.entries(filterState);
    /**
     * @type {FilterConditions}
     */
    const filterConditions = stateEntries.map(([groupName, groupData]) => [
        groupName,
        Object.keys(groupData).filter(key => groupData[key]),
    ]);
    return filterConditions.filter(([, valueList]) => valueList.length);
};

/** Multiconditional filter
 * @param {ModelData[]} input
 * @param {FilterConditions} filterConditions
 */
export const multiCondFilter = (input, filterConditions) => {
    return input.filter(el =>
        filterConditions.every(([propName, valueList]) =>
            valueList.includes(el[propName])
        )
    );
};

/** turn a list of animation data to buttons
 * @param {AnimationList} list
 * @param {*} handleSelect
 * @param {string} [groupName]
 */
export const listToAniButtons = (list, handleSelect, groupName = "") => {
    if (!list) return;

    const style = { maxWidth: "13.5rem" };
    return list.map(({ name, code }) => (
        <Button
            variant="contained"
            key={name}
            data-value={code}
            data-name={`${groupName ? `${groupName} ` : ""}${name}`}
            onClick={handleSelect}
            style={style}
        >
            {name}
        </Button>
    ));
};
