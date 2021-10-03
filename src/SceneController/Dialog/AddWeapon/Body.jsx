import { useState, useEffect, memo } from "react";
import { useAppData } from "@/data";
import Gallery from "components/Gallery";
import WeaponButton from "./WeaponButton";
import LoadSpinner from "components/LoadSpinner";

import { filterData } from "@/SceneController/helper/filterData";
import { searchData } from "@/SceneController/helper/searchData";
import { searchModelByName } from "data/dbFunction";
import viewer from "@/viewer";
import { useActiveModel } from "@/state";

const defaultFilter = [];

/**
 * @param {object} props
 * @param {Boolean} [props.compact] - whether to use compact mode
 * @param {string} props.content
 * @param {string} props.searchQuery
 * @param {FilterConditions} props.filter
 * @param {boolean} props.searchAll
 */
function Body({ content, searchQuery, searchAll, filter = defaultFilter }) {
    const data = useAppData(data => data[content]) ?? [];
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const { activeModel } = useActiveModel();

    useEffect(() => setList(data), [content]);

    useEffect(() => {
        setLoading(true);
        async function getNewList() {
            if (searchAll)
                return searchQuery
                    ? await searchModelByName(searchQuery)
                    : data;

            const searchResult = await searchData(data, searchQuery);
            return await filterData(searchResult, filter);
        }

        setTimeout(async () => {
            const newList = await getNewList();
            setList(newList);
            setLoading(false);
        });
    }, [searchQuery, filter, searchAll]);

    const onSelect = async ({ side, id, name, reverse }) => {
        const boneName = `jWeapon${side[0]}`;
        if (!activeModel?.bones.list.includes(boneName)) return;

        const weapon = await viewer.loadDLModel(id);
        weapon.userData.name = name;
        reverse && (weapon.rotation.y = Math.PI);

        activeModel.attachment[boneName]?.forEach(att => att.dispose());
        activeModel.attach(weapon, boneName);

        weapon.outline.code = activeModel.outline.code;
        weapon.material.code = activeModel.material.code;
    };

    return data.length && !loading ? (
        <Gallery list={list} component={WeaponButton} onClick={onSelect} />
    ) : (
        <LoadSpinner />
    );
}

export default memo(Body);
