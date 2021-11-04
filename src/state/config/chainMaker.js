import { ArrayWithEvent } from "@/dl-viewer/utils/ArrayWithEvent";

export const chainMakerConfig = set => ({
    open: false,
    toggle: () => set(state => (state.open = !state.open)),

    target: null,
    setTarget: target =>
        set(state => {
            if (!target) return;
            if (!target.userData.chain) {
                target.userData.chain = new ArrayWithEvent();
            }
            state.target = target;
        }),
});
