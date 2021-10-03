import { categories } from "./categories";

/**
 * @param {Number[]} indices
 */
export const getContentName = indices => {
    let reference = categories;
    const parts = [];

    indices.forEach(index => {
        const selected = reference[index];
        const value = selected?.value;
        if (value === undefined) return;

        parts.push(value);
        reference = selected.options;
    });

    return parts.join("-");
};
