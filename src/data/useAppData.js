import create from "zustand";

const appDataConfig = set => ({ set });

export const useAppData = create(appDataConfig);
