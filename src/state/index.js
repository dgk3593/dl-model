import { create } from "zustand";
import { produce } from "immer";

import {
    app,
    activeModel,
    modelCatalog,
    aniSelect,
    rootModal,
    chainMaker,
} from "./config";

// Turn the set method into an immer proxy
const immer = config => (set, get, api) =>
    config(fn => set(produce(fn)), get, api);

const createStore = config => create(immer(config));

export const useAppState = createStore(app);
export const useModelCatalogState = createStore(modelCatalog);
export const useAddWeaponState = createStore(modelCatalog);
export const useAniSelectState = createStore(aniSelect);
export const useModalState = createStore(rootModal);

export const useActiveModel = create(activeModel);
export const useChainMakerState = create(chainMaker);
