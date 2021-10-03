/**
 * Multiconditional filter
 * @param {Array} input
 * @param {FilterConditions} filterConditions
 */
const multiCondFilter = (input, filterConditions) => {
    return filterConditions.length
        ? input.filter(el =>
              filterConditions.every(([propName, valueList]) =>
                  valueList.includes(el[propName])
              )
          )
        : input;
};

addEventListener("message", event => {
    const { fullList, conditions } = event.data;
    const filtered = multiCondFilter(fullList, conditions);

    postMessage(filtered);
});
