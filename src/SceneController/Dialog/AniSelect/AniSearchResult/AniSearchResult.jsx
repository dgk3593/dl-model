import { useState, useEffect } from "react";

import SearchAniButton from "./SearchAniButton";
import Stretcher from "components/Stretcher";
import Gallery from "components/Gallery";
import LoadSpinner from "components/LoadSpinner";
import { searchAniByName } from "data/dbFunction";

import "./AniSearchResult.css";

function SearchResult({ query, onSelect }) {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(async () => {
            const result = await searchAniByName(query);
            setList(result);
            setLoading(false);
        });
    }, [query]);

    return (
        <div className="AniSearchResult">
            <Stretcher />
            {loading ? (
                <LoadSpinner />
            ) : (
                <Gallery
                    list={list}
                    component={SearchAniButton}
                    onClick={onSelect}
                />
            )}
        </div>
    );
}

export default SearchResult;
