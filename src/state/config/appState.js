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
        set(state => {
            state.showSettings = !state.showSettings;
        }),

    loadingMsg: "",
    setLoadingMsg: msg =>
        set(state => {
            state.loadingMsg = msg;
        }),

    showTimeControl: defaultShowTimeControl,
    toggleTimeControl: () =>
        set(state => {
            state.showTimeControl = !state.showTimeControl;
        }),

    showFrameRate: false,
    toggleFrameRate: () =>
        set(state => {
            state.showFrameRate = !state.showFrameRate;
        }),

    sidebar: {
        open: true,
        toggle: () =>
            set(state => {
                state.sidebar.open = !state.sidebar.open;
            }),

        settings: {
            tab: "Model",
            setTab: tab =>
                set(state => {
                    state.sidebar.settings.tab = tab;
                }),
        },
        modal: {
            mode: "",
            handleSelect: undefined,
            open: (mode, handleSelect) => {
                loopState = viewer.loop.state;
                viewer.loop.stop();
                set(state => {
                    state.sidebar.modal.mode = mode;
                    state.sidebar.modal.handleSelect = handleSelect;
                });
            },
            close: () => {
                loopState === "active" && viewer.loop.start();
                set(state => {
                    state.sidebar.modal.mode = "";
                    state.sidebar.modal.handleSelect = undefined;
                });
            },
        },

        manageMode: "single",
        setManageMode: mode =>
            set(state => {
                state.sidebar.manageMode = mode;
            }),
    },

    chainMaker: {
        target: null,
        setTarget: target =>
            set(state => {
                state.chainMaker.target = target;
            }),
    },

    dock: {
        mode: "",
        handleSelect: undefined,
        open: (mode = "", handleSelect) =>
            set(state => {
                state.dock.mode = mode;
                state.dock.handleSelect = handleSelect;
            }),
        close: () =>
            set(state => {
                state.dock.mode = "";
                state.dock.handleSelect = undefined;
            }),
    },
});
