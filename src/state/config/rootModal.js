import { dialogBody } from "@/SceneController/Dialog";

export const rootModalConfig = (set, get) => ({
    Component: undefined,
    props: undefined,
    openModal: (component, props) =>
        set(state => {
            state.props = props;
            state.Component = component;
        }),
    close: () => set(state => (state.Component = undefined)),
    onClose: undefined,
    reset: () =>
        set(state => {
            state.Component = state.props = state.onClose = undefined;
        }),

    getInput: async type => {
        if (!dialogBody[type]) return null;

        const { close, reset } = get();
        const inputPromise = new Promise((resolve, reject) => {
            const onSelect = (...args) => resolve(args);

            set(state => {
                state.onClose = () => {
                    reject();
                    close();
                };
                state.props = { onSelect, onAfterSelect: close };
                state.Component = dialogBody[type];
            });
        });

        try {
            const selection = await inputPromise;
            return selection;
        } catch {
            return null;
        } finally {
            reset();
        }
    },

    inputModel: () => get().getInput("model"),
    inputAni: () => get().getInput("animation"),
    inputColor: async () => {
        const newColor = await get().getInput("color");
        return newColor?.[0];
    },
    inputTarget: () => get().getInput("target"),
    inputEye: () => get().getInput("eye"),
    inputMouth: () => get().getInput("mouth"),
});
