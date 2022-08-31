import { ArrayWithEvent } from "@/dl-viewer/utils/ArrayWithEvent";

// no immer
export const chainMakerConfig = set => ({
    open: false,
    toggle: () => set(state => ({ open: !state.open })),

    target: null,
    setTarget: target => {
        if (!target) return;
        if (!target.userData.chain) {
            target.userData.chain = new ArrayWithEvent();
        }
        set({ target });
    },
});
