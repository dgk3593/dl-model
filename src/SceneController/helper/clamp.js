/**
 * constrain a number to be between min and max
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number | undefined} constrained number or undefined if input is undefined
 */
export const clamp = (value, min = -Infinity, max = Infinity) => {
    if (value === undefined) return undefined;

    let output = value;
    if (output < min) output = min;
    if (output > max) output = max;

    return output;
};
