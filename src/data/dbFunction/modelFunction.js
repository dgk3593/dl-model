import { putItems } from "./helper";
import { dbRequest } from ".";
import { searchData } from "@/SceneController/helper/searchData";

/**
 * @param {{[key: string]: ModelData[]}} modelData
 */
export const initModelDB = async modelData => {
    const entries = Object.values(modelData).flat();
    await putItems(entries, "model");

    console.info("Model DB Initialized");
};

/**
 * @param {string} id - id to look up
 * @return {Promise<ModelData>}
 */
export const getModelById = id =>
    dbRequest({
        type: "get",
        store: "model",
        value: id,
    });

/**
 * @param {string} name
 * @return {Promise<ModelData>}
 */
export const getModelByName = name =>
    dbRequest({
        type: "getByIndex",
        store: "model",
        index: "Name",
        value: name,
    });

/**
 * @param {string} name
 * @return {Promise<ModelData[]>}
 */
export const searchModelByName = name =>
    dbRequest({
        type: "search",
        store: "model",
        index: "name",
        value: name,
    });

/**
 * @param {string} name
 * @return {Promise<ModelData[]>}
 */
export const searchFaceTextureByName = async name => {
    const all = await dbRequest({
        type: "getByKeyRange",
        store: "model",
        value: "c100000_00-c199999_99",
    });
    const nonStory = all.filter(({ id }) => !id.endsWith("h"));
    return searchData(nonStory, name);
};

/**
 * @return { Promise< Map<string, string> > } map from id to name
 */
export const getIdNameMap = () =>
    dbRequest({
        type: "getMap",
        store: "model",
        index: "name",
    });
