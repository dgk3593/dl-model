import { fetchDataList } from "./fetchDataList";
import { putItems } from "./dbFunction/helper";
import { getIdNameMap } from "./dbFunction";

const dataMap = {};

export const loadPersonalAni = async () => {
    if (Object.keys(dataMap).length) return;

    const key = "ani-personal";
    const data = (await fetchDataList([key]))[key];
    Object.assign(dataMap, data);
};

/**
 * @param {string} id
 */
export const getPersonalAni = id => dataMap[id];

/**
 * @param {string} id
 */
export const getDefaultAni = id =>
    dataMap[id]?.[0] ??
    (id.startsWith("c") ? { name: "Bob", code: "CMN_MWM_03" } : null);

export const processPersonalAni = async () => {
    const id2Name = await getIdNameMap();
    const dbData = Object.entries(dataMap).flatMap(([user, aniList]) => {
        const userName = id2Name.get(user);
        return aniList.map(ani => ({
            ...ani,
            user,
            fullName: `${userName} ${ani.name}`,
        }));
    });
    await putItems(dbData, "animation");
};
