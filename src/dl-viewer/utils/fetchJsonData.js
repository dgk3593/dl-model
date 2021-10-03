/**
 * @param {string} url
 * @return {Promise}
 */
export const fetchJson = async url => {
    const response = await fetch(url);
    const json = await response.json();

    return json;
};

/**
 * @param {string} url
 * @return {Promise}
 */
export const fetchJsonData = async url => {
    const json = await fetchJson(url);

    return json.data;
};
