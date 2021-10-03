export const modelCatalogConfig = set => ({
    indices: [0, 0],
    _indicesCache: {},
    /**
     * @param {number} level
     * @param {number} index
     */
    setIndex: (level, index) => {
        set(state => {
            const { indices, _indicesCache } = state;
            indices[level] = index;
            // get cached indices of lower level
            const cacheKey = indices.slice(0, level + 1).join();
            const cachedIndices = _indicesCache[cacheKey] ?? [];
            // set lower level indices with value from cache or 0 if no value was cached
            const { length } = indices;
            for (let i = 0; level + 1 + i < length; i++) {
                indices[level + 1 + i] = cachedIndices[i] ?? 0;
            }
            // save indices of lower level to cache
            const indicesToCache = indices.slice(level);
            const saveCacheKey = indices.slice(0, level).join();
            saveCacheKey && (_indicesCache[saveCacheKey] = indicesToCache);
        });
    },

    showFilter: false,
    toggleFilter: () =>
        set(state => {
            state.showFilter = !state.showFilter;
        }),

    searchAll: false,
    toggleSearchAll: () =>
        set(state => {
            state.searchAll = !state.searchAll;
        }),
});
