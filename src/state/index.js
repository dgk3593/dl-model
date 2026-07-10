import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { setAutoFreeze } from "immer";

setAutoFreeze(false);

import {
  app,
  activeModel,
  modelCatalog,
  aniSelect,
  rootModal,
  chainMaker,
} from "./config";

const createStore = config => create(immer(config));

export const useAppState = createStore(app);
export const useModelCatalogState = createStore(modelCatalog);
export const useAddWeaponState = createStore(modelCatalog);
export const useAniSelectState = createStore(aniSelect);
export const useModalState = createStore(rootModal);

export const useActiveModel = create(activeModel);
export const useChainMakerState = create(chainMaker);
