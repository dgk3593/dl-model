import { openDB } from "idb";

const dbPromise = openDB("model-viewer", 3, {
    upgrade(db) {
        if (!db.objectStoreNames.contains("model")) {
            const modelStore = db.createObjectStore("model", {
                keyPath: "id",
            });
            modelStore.createIndex("Name", "name");
        }

        if (!db.objectStoreNames.contains("animation")) {
            const aniStore = db.createObjectStore("animation", {
                keyPath: "fullName",
            });
            aniStore.createIndex("User", "user");
        }
    },
});

/**
 * @param {Array} items - array of objects to add
 * @param {string} store - which store to add to
 */
const putItems = async (items, store) => {
    const db = await dbPromise;
    const tx = db.transaction(store, "readwrite");

    /**
     * @type {Promise[]}
     */
    const promises = items.map(item => tx.store.put(item));

    await Promise.all([...promises, tx.done]);
};

/**
 * @param {string} key - key of object to get
 * @param {string} store - which store to get from
 * @return {Promise< object >} object with matching key
 */
const getByKey = async (key, store) => {
    const db = await dbPromise;
    return await db.get(store, key);
};

/**
 * @param {string} query - what to search for
 * @param {string} store - which store to search
 * @param {string} index - which index to search
 * @return {Promise< object >} first object that match query
 */
const getByIndex = async (query, store, index) => {
    const db = await dbPromise;
    return await db.getFromIndex(store, index, query);
};

/**
 * @param {string} query - what to search for
 * @param {string} store - which store to search
 * @param {string} index - which index to search
 * @return {Promise<Array>} all objects that match query
 */
const getAllByIndex = async (query, store, index) => {
    const db = await dbPromise;
    return await db.getAllFromIndex(store, index, query);
};

/**
 * @param {string} store - which store to get from
 * @param {string} upper - upper bound of range
 * @param {string} lower - lower bound of range
 * @return {Promise<Array>} all objects in range
 */
const getByKeyRange = async (store, upper, lower) => {
    const db = await dbPromise;
    const range = IDBKeyRange.bound(upper, lower);
    return await db.getAll(store, range);
};

/**
 * Create a map from key to value[index] or value if index is not specified
 * @param {string} store - which store to get from
 * @param {string} [index] - which index to get
 * @return {Promise< Map<string, string> >} map from key to value[index] or value
 */
const getMap = async (store, index) => {
    const map = new Map();

    const db = await dbPromise;
    const tx = db.transaction(store, "readonly");

    let cursor = await tx.store.openCursor();
    while (cursor) {
        map.set(cursor.key, index ? cursor.value[index] : cursor.value);
        cursor = await cursor.continue();
    }

    return map;
};

/**
 * get all items where item[index] contains query (case insensitive)
 * @param {string} query - what to search for
 * @param {string} store - which store to search
 * @param {string} index - key of object to match
 * @return {Promise<Array>} all objects that match query
 */
const search = async (query, store, index) => {
    if (!query) return [];

    const result = [];
    const db = await dbPromise;
    const tx = db.transaction(store, "readonly");
    const lowerCaseQuery = query.toLowerCase();

    let cursor = await tx.store.openCursor();
    while (cursor) {
        const lowerCaseValue = cursor.value[index]?.toLowerCase?.();
        if (lowerCaseValue.includes?.(lowerCaseQuery)) {
            result.push(cursor.value);
        }
        cursor = await cursor.continue();
    }

    return result;
};

addEventListener("message", async event => {
    const { type, store, value, index } = event.data;
    switch (type) {
        case "put":
            await putItems(value, store);
            postMessage("");
            break;
        case "get":
            postMessage(await getByKey(value, store));
            break;
        case "getByIndex":
            postMessage(await getByIndex(value, store, index));
            break;
        case "getAllByIndex":
            postMessage(await getAllByIndex(value, store, index));
            break;
        case "getByKeyRange":
            const [upper, lower] = value.split("-");
            postMessage(await getByKeyRange(store, upper, lower));
            break;
        case "getMap":
            postMessage(await getMap(store, index));
            break;
        case "search":
            postMessage(await search(value, store, index));
    }
});
