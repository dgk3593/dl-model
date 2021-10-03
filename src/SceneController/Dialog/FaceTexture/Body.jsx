import { useState, useEffect, memo } from "react";
import { useAppData } from "@/data";
import Gallery from "components/Gallery";
import CharaCard from "components/CharaCard";
import ModelButton from "components/ModelButton";
import LoadSpinner from "components/LoadSpinner";

import { filterData } from "@/SceneController/helper/filterData";
import { searchData } from "@/SceneController/helper/searchData";
import { searchFaceTextureByName } from "@/data/dbFunction";

function Body({ compact, searchQuery, filter, content, onSelect }) {
    const data = useAppData(data => data[`chara-${content}`]) ?? [];
    const initList = data.filter(({ id }) => !id.endsWith("h"));
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => setList(initList), [content]);

    useEffect(() => {
        setLoading(true);
        async function getNewList() {
            const searchResult = searchQuery
                ? await searchFaceTextureByName(searchQuery)
                : initList;
            return await filterData(searchResult, filter);
        }

        setTimeout(async () => {
            const newList = await getNewList();
            setList(newList);
            setLoading(false);
        });
    }, [searchQuery, filter]);

    return data.length && !loading ? (
        <Gallery
            list={list}
            component={compact ? ModelButton : CharaCard}
            onClick={onSelect}
        />
    ) : (
        <LoadSpinner />
    );
}

export default Body;
