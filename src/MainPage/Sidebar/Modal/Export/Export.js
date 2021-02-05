import { useContext } from "react";

import { DispatchContext, SettingsContext } from "context/SettingsContext";

import { DialogContent, DialogTitle, DialogTop } from "components/CustomDialog";
import Selector from "components/selectors/Selector";
import FileFormatSelector from "./FileFormatSelector";

import Button from "@material-ui/core/Button";

import "./Export.css";

function Export({ close }) {
    const { export: settings } = useContext(SettingsContext);
    const dispatch = useContext(DispatchContext);

    const updateSettings = value =>
        dispatch({ type: "update", key: "export", value });

    const toggleSettings = name =>
        dispatch({ type: "toggle", key: "export", value: name });

    /**
     * @param {string} format
     */
    const setFormat = format => updateSettings({ format });
    /**
     * @param {string} value
     */
    const setBinary = value => updateSettings({ binary: value === "true" });

    const startExport = () => toggleSettings("enable");

    return (
        <>
            <DialogTop>
                <DialogTitle onClose={close}>Export (Experiment)</DialogTitle>
            </DialogTop>
            <DialogContent dividers>
                <div className="Export-options">
                    <div>Format</div>
                    <FileFormatSelector
                        value={settings.format}
                        onClick={setFormat}
                    />
                    <div>Type</div>
                    <Selector
                        value={`${settings.binary}`}
                        onClick={setBinary}
                        options={["true", "false"]}
                        texts={["Binary", "ASCII"]}
                    />
                </div>
                <hr />
                <div className="Export-btn">
                    <Button variant="contained" onClick={startExport}>
                        Export
                    </Button>
                </div>
            </DialogContent>
        </>
    );
}

export default Export;
