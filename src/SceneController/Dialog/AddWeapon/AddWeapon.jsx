import { useDebounce } from "hook/useDebounce";
import { useAddWeaponState } from "@/state";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import { categories } from "./categories";

import { DialogTitle, DialogContent, Box, IconButton } from "@mui/material";

import Breadcrumbs from "components/Breadcrumbs";
import Filter from "components/Filter";
import Searchbox from "components/Searchbox";
import GlowToggle from "components/GlowToggle";
import { FilterAlt } from "@mui/icons-material";

import getFilterConfig from "@/SceneController/helper/getFilterConfig";
import { getContentName } from "./helper";
import Body from "./Body";

const defaultFilter = [];

function AddWeapon() {
    const {
        indices,
        setIndex,
        showFilter,
        toggleFilter,
        searchAll,
        toggleSearchAll,
    } = useAddWeaponState();
    const idbAvailable = !!indexedDB;
    const [searchQuery, setSearchQuery] = useState("");
    const debouncedQuery = useDebounce(searchQuery, 500);

    const [filterConditions, setFilterConditions] = useState(defaultFilter);

    const contentName = getContentName(indices);
    const filterConfig = getFilterConfig(contentName);

    useEffect(() => setFilterConditions(defaultFilter), [showFilter, indices]);
    useEffect(() => {
        setSearchQuery("");
        searchAll && toggleSearchAll();
    }, [indices]);

    const key = indices.join();

    return (
        <Box className="AddWeapon" sx={styles.root}>
            <Box sx={styles.top}>
                <DialogTitle sx={styles.title}>Add Weapon</DialogTitle>

                <Breadcrumbs
                    options={categories}
                    selectedIndices={indices}
                    setIndex={setIndex}
                />

                <Box sx={styles.searchFilter}>
                    <Box sx={styles.search}>
                        {idbAvailable && (
                            <GlowToggle
                                type="text"
                                value="All"
                                checked={searchAll}
                                onClick={toggleSearchAll}
                            />
                        )}
                        <Searchbox
                            key={key}
                            query={searchQuery}
                            onChange={setSearchQuery}
                        />
                        {filterConfig && !searchAll && (
                            <IconButton onClick={toggleFilter} size="large">
                                <FilterAlt />
                            </IconButton>
                        )}
                    </Box>

                    {!searchAll && showFilter && filterConfig && (
                        <Filter
                            key={key}
                            config={filterConfig}
                            onChange={setFilterConditions}
                        />
                    )}
                </Box>
            </Box>

            <DialogContent sx={styles.content}>
                <Body
                    searchQuery={debouncedQuery}
                    filter={filterConditions}
                    content={contentName}
                    searchAll={searchAll}
                />
            </DialogContent>
        </Box>
    );
}

export default AddWeapon;
