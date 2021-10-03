addEventListener("message", event => {
    const { fullList = [], query, keys } = event.data;
    const lowerCaseQuery = query.toLowerCase();

    const result = fullList.filter(item =>
        keys.some(key => {
            const lowerCaseValue = item[key]?.toLowerCase?.();
            return lowerCaseValue.includes?.(lowerCaseQuery);
        })
    );

    postMessage(result);
});
