import { categories as fullCategories } from "../ModelCatalog/categories";

export const categories = fullCategories.find(
    ({ value }) => value === "chara"
).options;
