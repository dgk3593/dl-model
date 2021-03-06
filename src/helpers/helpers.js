import Button from "@material-ui/core/Button";

import {
    initKeyMap,
    aniModList,
    incompatibleModels,
    DEFAULT_MODEL_ID,
    DEFAULT_ADV_ANI,
} from "./consts";

import { chainCodeToList } from "./viewerHelpers";
import dragonAni from "data/aniDragon";
import enemyAni from "data/aniEnemies";
import modelMod from "data/modelMod";

/**
 * capitalize first letter of tring
 * @param {string} input
 */
export const capitalize = ([first, ...rest]) =>
    `${first.toUpperCase()}${rest.join("")}`;

/**
 * get the default texture file of a model from id
 * @param {string} id - model id
 */
export const getDefaultTexture = id =>
    id.match(/_[0-9]{2}/) ? id : `${id}_01`;

/**
 * create a new object whose entries with key listed in keys are copied from the input object
 * @param {{ }} object - object to filter
 * @param { string[] } keys - list of keys to filter
 * @return {{ }}
 */
export const filterObject = (object, keys) => {
    const entries = Object.entries(object);
    const filtered = entries.filter(([key, _]) => keys.includes(key));
    return Object.fromEntries(filtered);
};

/**
 * Get the difference between 2 object
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

/**
 * check if an ID is a blade
 * @param {string} modelId - id to check
 */
export const isBlade = modelId => modelId.startsWith("w302");

/**
 * check if an ID is a sheath
 * @param {string} modelId - id to check
 */
export const isSheath = modelId => isBlade(modelId) && modelId.endsWith("02");

/**
 * check if model is compatible with AdvViewer
 * @param {string} modelId
 */
const isCharaWithAni = modelId =>
    modelId.startsWith("c") &&
    !modelId.endsWith("_h") &&
    !incompatibleModels.has(modelId);

/**
 * check if a model is a dragon
 * @param {string} modelId
 */
const isDragon = modelId => modelId.startsWith("d") || modelId === "smith";

/**
 * get the suitable viewer type base on ID
 * @param {string} modelId
 */
export const getViewerType = modelId => {
    if (isDragon(modelId)) return "dragon";

    if (modelId.startsWith("h")) return "ani";

    if (isCharaWithAni(modelId)) return "adv";

    return "basic";
};

/**
 * get the default animation code base on model ID
 * @param {string} modelId
 * @return {string | undefined}
 */
export const getDefaultAni = modelId => {
    if (isDragon(modelId)) return dragonAni[modelId]?.[0].code;

    if (modelId.startsWith("h")) return enemyAni[modelId]?.[0].code;

    if (isCharaWithAni(modelId)) return DEFAULT_ADV_ANI;

    return "";
};

/**
 * @param {string} modelId
 * @return {ModelMod | undefined}
 */
export const getDefaultModelMod = modelId => modelMod[modelId]?.[0];

/**
 * get default eye and mouth index
 * @param {string} modelId
 */
export const getDefaultFace = modelId => (isDragon(modelId) ? 1 : 2);

/**
 * apply callback on each element of list or on list if list is not an array
 * @param {* | Array} list - list of objects to apply callback
 * @param {function} callback - callback to apply
 */
export const callbackOnEach = (list, callback) => {
    if (Array.isArray(list)) {
        list.forEach(child => callback(child));
        return;
    }
    callback(list);
};

/**
 * turn string to the corresponding boolean if it's "true" or "false"
 * @param {string} str
 */
const str2bool = str => Boolean(str === "true");

/**
 * convert string to xyzCoordinate
 * @param {string} str
 * @return {xyzCoordinate}
 */
const str2xyz = str => {
    const [x, y, z] = str.split(",");
    /**
     * @type {array[3]}
     */
    const coordinate = [x, y, z].map(parseFloat);
    return coordinate;
};

/**
 * @param {string} str
 * @return {ColorCode | "transparent"}
 */
// @ts-ignore
const str2bg = str => (str === "transparent" ? str : `#${str}`);

/**
 * convert a string to the specified type
 * @param {string} str
 * @param {string} type
 */
const convertParamValue = (str, type) => {
    const converter = {
        bg: str2bg,
        xyz: str2xyz,
        float: parseFloat,
        int: parseInt,
        boolean: str2bool,
    };

    return type === "string" ? str : converter[type](str);
};

/**
 * turn a string of the form 'keycode=value' to [keycode, value],
 * return empty array if empty input, or invalid keycode/value
 * @param {string} paramText
 * @return {[ [keycode: string, value: *]? ]}
 */
const extractParam = paramText => {
    if (!paramText) return [];

    const [keycode, ...valueParts] = paramText.split("=");
    if (!initKeyMap[keycode] || !valueParts[0]) return [];

    const value = valueParts.join("=");
    const { type } = initKeyMap[keycode];

    return [[keycode, convertParamValue(value, type)]];
};

/**
 * turn a path into an array of keycode and value pair,
 * invalid strings will be filtered out
 * @param {string} path
 * @return {[keycode: string, value: *][]}
 */
const getParamsFromPath = path =>
    path
        .split("/")
        .reduce(
            (output, paramText) => [...output, ...extractParam(paramText)],
            []
        );

/**
 * return a list of key value pairs corresponding to the specified group of the application state
 * @param { [keycode: string, value: *][] } params
 * @param {string} groupName
 * @return { [key: string, value: *][] }
 */
const filterParamsByGroup = (params, groupName) =>
    params.reduce((output, [keycode, value]) => {
        const { group, key } = initKeyMap[keycode];
        if (group !== groupName) return output;

        return [...output, [key, value]];
    }, []);

/**
 * set model related parameters
 * @param {[keycode: string, value: *][]} params
 * @param {React.Dispatch<ReducerAction>} dispatch
 */
const setModelParams = (params, dispatch) => {
    const modelParams = filterParamsByGroup(params, "model");
    const newValue = Object.fromEntries(modelParams);

    // newValue.id ??= DEFAULT_MODEL_ID;
    newValue.id = newValue.id ?? DEFAULT_MODEL_ID;
    const modelId = newValue.id;

    const defaultMod = getDefaultModelMod(modelId);
    if (defaultMod) {
        if (newValue.modName) {
            const mod = getModelModByName(modelId, newValue.modName);

            newValue.mod = mod.code;
            newValue.modName = mod.name;
        } else {
            newValue.mod = defaultMod.code;
            newValue.modName = defaultMod.name;
        }
    }

    ["mouth", "eye"].forEach(part => {
        // newValue[`${part}Texture`] ??= modelId;
        // newValue[`${part}Idx`] ??= getDefaultFace(modelId);
        newValue[`${part}Texture`] = newValue[`${part}Texture`] ?? modelId;
        newValue[`${part}Idx`] =
            newValue[`${part}Idx`] ?? getDefaultFace(modelId);
    });

    dispatch({ type: "update", key: "model", value: newValue });
    dispatch({
        type: "update",
        key: "app",
        value: { viewerType: getViewerType(modelId) },
    });
};

/**
 * set animation related parameters
 * @param {[keycode: string, value: *][]} params
 * @param {React.Dispatch<ReducerAction>} dispatch
 */
const setAniParams = (params, dispatch) => {
    const aniParams = filterParamsByGroup(params, "animation");

    const newValue = Object.fromEntries(aniParams);

    const modelId =
        params.find(([keycode]) => keycode === "id")?.[1] || DEFAULT_MODEL_ID;
    // newValue.code ??= getDefaultAni(modelId);
    newValue.code = newValue.code ?? getDefaultAni(modelId);
    dispatch({ type: "update", key: "animation", value: newValue });

    const aniCode = newValue.code;
    dispatch({
        type: "update",
        key: "chainMaker",
        value: { chain: chainCodeToList(aniCode, "init") },
    });
};

/**
 * set other parameters
 * @param {[keycode: string, value: *][]} params
 * @param {React.Dispatch<ReducerAction>} dispatch
 * @param {string} group - name of the parameter group
 */
const setOtherParams = (params, dispatch, group) => {
    const paramList = filterParamsByGroup(params, group);
    const newValue = Object.fromEntries(paramList);

    dispatch({
        type: "update",
        key: group,
        value: newValue,
    });
};

/**
 * functions to set parameters depends on group of application state
 * @type {{ [groupName: string]: function}}
 */
const paramSetter = {
    model: setModelParams,
    animation: setAniParams,
    default: setOtherParams,
};

/**
 * update application state base on information from the URL
 * @param {string} path
 * @param {React.Dispatch<ReducerAction>} dispatch
 */
export const setParamsFromPath = (path, dispatch) => {
    const params = getParamsFromPath(path);

    const definedGroups = new Set(
        params.map(([keycode]) => initKeyMap[keycode].group)
    );

    //model and animation must always be set
    definedGroups.add("model");
    definedGroups.add("animation");

    definedGroups.forEach(group => {
        const setter = paramSetter[group] || paramSetter["default"];
        setter(params, dispatch, group);
    });
};

/**
 * generate animation chain code from AnimationChain
 * @param {AnimationChain} chain
 */
export const generateChainCode = chain => {
    const aniCode = chain.map(aniToCode);
    return aniCode.join(">");
};

/**
 * convert 1 animation chain item to single animation code
 * @param {AniListItem} ani
 */
const aniToCode = ani => {
    const { aniName, faceChanges } = ani;
    const modCode = generateAniModCode(ani);
    const faceCode = generateFaceCode(faceChanges);
    return `${aniName}${modCode}${faceCode}`;
};

/**
 * generate animation modifier code
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

/**
 * create face change code
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

/**
 * Multiconditional filter
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

/**
 * turn a list of animation data to buttons
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

/**
 * @param {string} id
 * @param {string} modName
 * @return {ModelMod}
 */
const getModelModByName = (id, modName) => {
    const result = modelMod[id]?.find(
        ({ name }) => name.replace(" ", "") === modName
    );

    return result || { name: "", code: "" };
};
