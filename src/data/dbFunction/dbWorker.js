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

const putItems = async (items, store) => {
    const db = await dbPromise;
    const tx = db.transaction(store, "readwrite");
    const promises = items.map(item => tx.store.put(item));

    await Promise.all([...promises, tx.done]);
};

const getByKey = async (key, store) => {
    const db = await dbPromise;
    return await db.get(store, key);
};

const getByIndex = async (query, store, index) => {
    const db = await dbPromise;
    return await db.getFromIndex(store, index, query);
};

const getByKeyRange = async (store, upper, lower) => {
    const db = await dbPromise;
    const range = IDBKeyRange.bound(upper, lower);
    return await db.getAll(store, range);
};

const getAllByIndex = async (query, store, index) => {
    const db = await dbPromise;
    return await db.getAllFromIndex(store, index, query);
};

/**
 * @param {string} store
 * @param {string} [index]
 * @return {Promise< Map<string, string> >} map from key to value[index]
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
 * @param {string} query
 * @param {string} store
 * @param {string} index - key of object to match
 * @return {Promise<Array>}
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
