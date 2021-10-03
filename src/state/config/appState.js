import viewer from "@/viewer";
import { inIframe } from "@/SceneController/helper/inIframe";

let loopState = "";

const isIframe = inIframe();
const defaultShowSettings = isIframe
    ? false
    : !window.location.hash.includes("showSettings=false");

const defaultShowTimeControl = isIframe
    ? false
    : !window.location.hash.includes("showAC=false");

export const appStateConfig = set => ({
    showSettings: defaultShowSettings,
    toggleSettings: () =>
        set(state => void (state.showSettings = !state.showSettings)),

    loadingMsg: "",
    setLoadingMsg: msg => set(state => void (state.loadingMsg = msg)),

    showTimeControl: defaultShowTimeControl,
    toggleTimeControl: () =>
        set(state => void (state.showTimeControl = !state.showTimeControl)),

    sidebar: {
        open: true,
        toggle: () => set(({ sidebar }) => void (sidebar.open = !sidebar.open)),
        chainMaker: false,
        toggleChainMaker: () =>
            set(
                ({ sidebar }) => void (sidebar.chainMaker = !sidebar.chainMaker)
            ),

        settings: {
            tab: "Model",
            setTab: tab =>
                set(({ sidebar }) => void (sidebar.settings.tab = tab)),
        },
        modal: {
            mode: "",
            handleSelect: undefined,
            open: (mode, handleSelect) => {
                loopState = viewer.loop.state;
                viewer.loop.stop();
                set(({ sidebar }) => {
                    const { modal } = sidebar;
                    modal.mode = mode;
                    modal.handleSelect = handleSelect;
                });
            },
            close: () => {
                loopState === "active" && viewer.loop.start();
                set(({ sidebar }) => {
                    const { modal } = sidebar;
                    modal.mode = "";
                    modal.handleSelect = undefined;
                });
            },
        },
    },

    dock: {
        mode: "",
        handleSelect: undefined,
        open: (mode = "", handleSelect) =>
            set(({ dock }) => {
                dock.mode = mode;
                dock.handleSelect = handleSelect;
            }),
        close: () =>
            set(({ dock }) => {
                dock.mode = "";
                dock.handleSelect = undefined;
            }),
    },
});
