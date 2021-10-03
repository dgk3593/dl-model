import { useModelCatalogState } from "@/state";
import { useState, useEffect, useCallback } from "react";
import { useDebounce } from "hook/useDebounce";

import {
    useMediaQuery,
    DialogTitle,
    DialogContent,
    Box,
    IconButton,
} from "@mui/material";

import Breadcrumbs from "components/Breadcrumbs";
import Filter from "components/Filter";
import Searchbox from "components/Searchbox";
import GlowToggle from "components/GlowToggle";
import { FilterAlt } from "@mui/icons-material";
import CatalogBody from "./CatalogBody";

import getFilterConfig from "@/SceneController/helper/getFilterConfig";
import { categories } from "./categories";
import { styles } from "./styles";
import { getContentName } from "./helper";

const defaultFilter = [];

/**
 * @param {object} props
 * @param {Boolean} [props.compact]
 * @param {(id: string, name: string) => void} props.onSelect
 * @param {() => void} [props.onAfterSelect]
 */
function ModelCatalog({ compact, onSelect = () => void 0, onAfterSelect }) {
    const {
        indices,
        setIndex,
        showFilter,
        toggleFilter,
        searchAll,
        toggleSearchAll,
    } = useModelCatalogState();
    const idbAvailable = !!indexedDB;
    const [searchQuery, setSearchQuery] = useState("");
    const debouncedQuery = useDebounce(searchQuery, 500);
    /**
     * @type {[conditions: FilterConditions, setNew: (newConditions: FilterConditions) => void]}
     */
    const [filterConditions, setFilterConditions] = useState(defaultFilter);

    const compactMode =
        compact ||
        useMediaQuery("(max-width:640px)") ||
        useMediaQuery("(max-height:640px)");

    const handleSelect = useCallback(event => {
        const { value, name } = event.currentTarget.dataset;
        onSelect(value, name);
        onAfterSelect?.();
    }, []);

    const contentName = getContentName(indices);
    const filterConfig = getFilterConfig(contentName);

    useEffect(() => setFilterConditions(defaultFilter), [showFilter, indices]);
    useEffect(() => {
        setSearchQuery("");
        searchAll && toggleSearchAll();
    }, [indices]);

    const key = indices.join();

    return (
        <Box className="ModelCatalog" sx={styles.root}>
            <Box sx={styles.top}>
                <DialogTitle sx={styles.title}>Model Select</DialogTitle>

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
                            compact={compactMode}
                        />
                    )}
                </Box>
            </Box>

            <DialogContent sx={styles.content}>
                <CatalogBody
                    compact={compactMode}
                    searchQuery={debouncedQuery}
                    filter={filterConditions}
                    content={contentName}
                    onSelect={handleSelect}
                    searchAll={searchAll}
                />
            </DialogContent>
        </Box>
    );
}

export default ModelCatalog;
