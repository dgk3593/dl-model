import { initKeyMap, DEFAULT_MODEL_ID } from "../consts";
import { chainCodeToList } from "../viewerHelpers";
import { getDefaultFace, getViewerType } from "../helpers";
import { getDefaultModelMod, getModelModByName } from "./getModelMod";
import { getDefaultAni } from "./getDefaultAni";

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
    if (type === "string") return str;
    const converter = {
        bg: str2bg,
        xyz: str2xyz,
        float: parseFloat,
        int: parseInt,
        boolean: str2bool,
    };

    return converter[type](str);
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
const setModelParams = async (params, dispatch) => {
    const modelParams = filterParamsByGroup(params, "model");
    const model = Object.fromEntries(modelParams);

    // model.id ??= DEFAULT_MODEL_ID;
    model.id = model.id ?? DEFAULT_MODEL_ID;
    const modelId = model.id;

    ["mouth", "eye"].forEach(part => {
        // model[`${part}Texture`] ??= modelId;
        // model[`${part}Idx`] ??= getDefaultFace(modelId);
        model[`${part}Texture`] = model[`${part}Texture`] ?? modelId;
        model[`${part}Idx`] = model[`${part}Idx`] ?? getDefaultFace(modelId);
    });

    dispatch({ type: "update", key: "model", value: model });
    dispatch({
        type: "update",
        key: "app",
        value: { viewerType: getViewerType(modelId) },
    });

    await setModelMod(model, dispatch);
};

/**
 * set model mod from param init object
 * @param {Object} modelData
 */
const setModelMod = async (modelData, dispatch) => {
    const modelId = modelData.id;

    const defaultMod = await getDefaultModelMod(modelId);
    if (!defaultMod) return;

    const updateValue = {};
    if (modelData.modName) {
        const mod = await getModelModByName(modelId, modelData.modName);

        updateValue.mod = mod.code;
        updateValue.modName = mod.name;
    } else {
        updateValue.mod = defaultMod.code;
        updateValue.modName = defaultMod.name;
    }

    dispatch({
        type: "update",
        key: "model",
        value: updateValue,
    });
};

/**
 * set animation related parameters
 * @param {[keycode: string, value: *][]} params
 * @param {React.Dispatch<ReducerAction>} dispatch
 */
const setAniParams = async (params, dispatch) => {
    const aniParams = filterParamsByGroup(params, "animation");

    const animation = Object.fromEntries(aniParams);

    const modelId =
        params.find(([keycode]) => keycode === "id")?.[1] || DEFAULT_MODEL_ID;
    // newValue.code ??= getDefaultAni(modelId);
    animation.code = animation.code ?? (await getDefaultAni(modelId));
    dispatch({ type: "update", key: "animation", value: animation });

    const aniCode = animation.code;
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
 * update application state base on information from the URL
 * @param {string} path
 * @param {React.Dispatch<ReducerAction>} dispatch
 */
export const setParamsFromPath = async (path, dispatch) => {
    const params = getParamsFromPath(path);

    const definedGroups = new Set(
        params.map(([keycode]) => initKeyMap[keycode].group)
    );

    definedGroups.delete("model");
    definedGroups.delete("animation");

    await setModelParams(params, dispatch);

    const groups = [...definedGroups];
    const groupSetPromise = groups.map(group =>
        setOtherParams(params, dispatch, group)
    );

    await Promise.all([setAniParams(params, dispatch), ...groupSetPromise]);
};

export default setParamsFromPath;
