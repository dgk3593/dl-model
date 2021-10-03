import { useState, useEffect, memo } from "react";
import { useAppData } from "@/data";
import Gallery from "components/Gallery";
import CharaCard from "components/CharaCard";
import ModelButton from "components/ModelButton";
import LoadSpinner from "components/LoadSpinner";

import { filterData } from "@/SceneController/helper/filterData";
import { searchData } from "@/SceneController/helper/searchData";
import { searchModelByName } from "data/dbFunction";

const defaultFilter = [];

const buttonTypes = ["w", "b"];

/**
 * @param {string} id
 * @return {Boolean}
 */
const useButton = id => buttonTypes.some(type => id.startsWith(type));

const GalleryComponent = props => {
    return useButton(props.id) ? (
        <ModelButton {...props} />
    ) : (
        <CharaCard {...props} />
    );
};

/**
 * @param {object} props
 * @param {Boolean} [props.compact] - whether to use compact mode
 * @param {string} props.content
 * @param {string} props.searchQuery
 * @param {FilterConditions} props.filter
 * @param {boolean} props.searchAll
 * @param { (code: string) => void} props.onSelect
 */
function CatalogBody({
    compact,
    content,
    searchQuery,
    searchAll,
    filter = defaultFilter,
    onSelect,
}) {
    const data = useAppData(data => data[content]) ?? [];
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

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

    return data.length && !loading ? (
        <Gallery
            list={list}
            component={compact ? ModelButton : GalleryComponent}
            onClick={onSelect}
        />
    ) : (
        <LoadSpinner />
    );
}

export default memo(CatalogBody);
