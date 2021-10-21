import { useState, useEffect, useCallback } from "react";
import { useDebounce, useToggleState } from "@/SceneController/hook";

import {
    useMediaQuery,
    DialogTitle,
    DialogContent,
    Box,
    IconButton,
} from "@mui/material";

import FacePartSelector from "../FaceSelect/UvFaceSelect/FacePartSelector";
import Breadcrumbs from "components/Breadcrumbs";
import Filter from "components/Filter";
import Searchbox from "components/Searchbox";
import Body from "./Body";
import { FilterAlt } from "@mui/icons-material";

import { categories } from "./categories";
import { styles } from "@/SceneController/Dialog/ModelCatalog/styles";
import { chara as charaFilter } from "@/SceneController/helper/getFilterConfig/filterConfig";

const defaultFilter = [];

const topStyle = {
    ...styles.top,
    "& .Selector": {
        margin: "0.1rem 2rem 0.1rem 0",
    },
};

function FaceTexture({ compact, onSelect, onAfterSelect }) {
    const idbAvailable = !!indexedDB;
    const [index, setIndex] = useState(0);
    const handleIndex = (level, index) => setIndex(index);

    const [searchQuery, setSearchQuery] = useState("");
    const debouncedQuery = useDebounce(searchQuery, 500);
    useEffect(() => {
        setSearchQuery("");
    }, [index]);
    /**
     * @type {[conditions: FilterConditions, setNew: (newConditions: FilterConditions) => void]}
     */
    const [filterConditions, setFilterConditions] = useState(defaultFilter);

    const [part, setPart] = useState("Both");

    const [showFilter, toggleFilter] = useToggleState(true);
    const filterConfig = categories[index].value === "regular" && charaFilter;

    const compactMode =
        compact ||
        useMediaQuery("(max-width:640px)") ||
        useMediaQuery("(max-height:640px)");

    const handleSelect = useCallback(
        event => {
            const { value } = event.currentTarget.dataset;
            if (part !== "Eyes") onSelect(value, "mouth");
            if (part !== "Mouth") onSelect(value, "eye");

            onAfterSelect?.();
        },
        [part]
    );

    return (
        <Box className="FaceTexture" sx={styles.root}>
            <Box sx={topStyle}>
                <DialogTitle sx={styles.title}>Select Texture</DialogTitle>

                <FacePartSelector value={part} onClick={setPart} />

                <Breadcrumbs
                    options={categories}
                    selectedIndices={[index]}
                    setIndex={handleIndex}
                />

                <Box sx={styles.searchFilter}>
                    <Box sx={styles.search}>
                        <Searchbox
                            key={index[0]}
                            query={searchQuery}
                            onChange={setSearchQuery}
                            placeholder={idbAvailable ? "Search All" : "Search"}
                        />
                        {filterConfig && (
                            <IconButton onClick={toggleFilter} size="large">
                                <FilterAlt />
                            </IconButton>
                        )}
                    </Box>

                    {showFilter && filterConfig && (
                        <Filter
                            config={filterConfig}
                            onChange={setFilterConditions}
                            compact={compactMode}
                        />
                    )}
                </Box>
            </Box>

            <DialogContent sx={styles.content}>
                <Body
                    compact={compactMode}
                    searchQuery={debouncedQuery}
                    filter={filterConditions}
                    content={categories[index].value}
                    onSelect={handleSelect}
                />
            </DialogContent>
        </Box>
    );
}

export default FaceTexture;
