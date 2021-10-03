import { useState, useEffect } from "react";
import { useAniSelectState } from "@/state";
import AniGallery from "../components/AniGallery";
import { getAniByUser } from "data/dbFunction";
import { getPersonalAni } from "data/getPersonalAni";

function PersonalAniGallery({ onSelect }) {
    const idbAvailable = !!indexedDB;

    const { source } = useAniSelectState(state => state.personalAni);
    const [list, setList] = useState([]);

    useEffect(() => {
        setList([]);
        setTimeout(async () => {
            if (!source) return;

            const result =
                getPersonalAni(source) ??
                (idbAvailable ? await getAniByUser(source) : []);

            const newList = result.map(ani => ({
                ...ani,
                user: undefined,
            }));
            setList(newList);
        });
    }, [source]);

    return <AniGallery list={list} onClick={onSelect} />;
}

export default PersonalAniGallery;
