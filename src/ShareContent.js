import React, { useState, useEffect, useContext } from "react";
import useToggleState from "./hooks/useToggleState";

import FileCopy from "@material-ui/icons/FileCopy";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import QRCode from "qrcode.react";

import { SettingsContext } from "./context/SettingsContext";
import { defaultSettings, initKey, baseUrl } from "./consts";

import "./styles/ShareContent.css";

function ShareContent({ method }) {
    const [show, setShow] = useState({ AC: true, Settings: true });
    const [transparentBackground, toggleTransparentBackground] = useToggleState(
        false
    );
    const [label, setLabel] = useState("Code");
    const currentSettings = useContext(SettingsContext);

    const CopyButton = () => (
        <IconButton onClick={copyText}>
            <FileCopy />
        </IconButton>
    );

    const handleChange = event => {
        const name = event.currentTarget.name;
        setShow(oldValue => ({ ...oldValue, [name]: !oldValue[name] }));
    };

    const copyText = () => {
        const shareTextField = document.getElementById("shareTextField");
        shareTextField.select();
        shareTextField.setSelectionRange(0, 99999); // For mobile
        document.execCommand("copy");
        setLabel("Copied");
        setTimeout(() => {
            setLabel("Link");
        }, 2000);
    };

    const getShareLink = () => {
        const keyCodes = Object.keys(initKey).filter(
            key => initKey[key].group !== "app"
        );

        let link = baseUrl;

        keyCodes.forEach(keyCode => {
            const { group, key } = initKey[keyCode];
            const currentValue = currentSettings[group][key];
            const defaultValue = defaultSettings[group][key];
            switch (keyCode) {
                case "bg":
                    if (transparentBackground) {
                        link = link.concat(`bg=transparent/`);
                        break;
                    }
                    if (currentValue !== defaultValue) {
                        link = link.concat(
                            `${keyCode}=${currentValue.replace("#", "")}/`
                        );
                    }
                    break;
                case "ft":
                    if (
                        currentSettings["model"]["faceTexture"] !==
                        currentSettings["model"]["id"]
                    ) {
                        link = link.concat(`${keyCode}=${currentValue}/`);
                    }
                    break;
                default:
                    if (currentValue !== defaultValue) {
                        link = link.concat(`${keyCode}=${currentValue}/`);
                    }
            }
        });

        Object.keys(show).forEach(key => {
            if (!show[key]) {
                link = link.concat(`show${key}=false/`);
            }
        });
        return link;
    };

    const shareLink = getShareLink();
    const embedCode = `<iframe src="${shareLink}" frameborder="0" width="300" height="300" ${
        transparentBackground ? 'allowtransparency="true" ' : ""
    }/></iframe>`;

    useEffect(() => {
        if (method !== 1) return; // QR
        const shareTextField = document.getElementById("shareTextField");
        if (!shareTextField) return;
        shareTextField.focus();
        shareTextField.select();
    }, [shareLink, method]);

    let display;
    switch (method) {
        case 0: // Link
            display = (
                <TextField
                    color="secondary"
                    variant="filled"
                    autoFocus
                    fullWidth
                    inputProps={{ readOnly: true }}
                    label={label}
                    InputLabelProps={{ color: "primary" }}
                    id="shareTextField"
                    margin="dense"
                    value={shareLink}
                    InputProps={{ endAdornment: <CopyButton /> }}
                />
            );
            break;
        case 1: // QR
            display = (
                <>
                    <div className="ShareContent-QR">
                        <QRCode includeMargin size={256} value={shareLink} />
                    </div>
                    <div>Right click to save or copy</div>
                </>
            );
            break;
        case 2: // Embed
            display = (
                <>
                    <TextField
                        color="secondary"
                        variant="filled"
                        autoFocus
                        fullWidth
                        inputProps={{ readOnly: true }}
                        label={label}
                        InputLabelProps={{ color: "primary" }}
                        id="shareTextField"
                        margin="dense"
                        value={embedCode}
                        InputProps={{ endAdornment: <CopyButton /> }}
                    />
                    <div>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={transparentBackground}
                                    onChange={toggleTransparentBackground}
                                    color="primary"
                                />
                            }
                            label="Transparent Background"
                        />
                    </div>
                </>
            );
            break;
        default:
    }

    return (
        <div>
            <div className="ShareContent-main">{display}</div>
            <div className="ShareContent-checkboxes">
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={show.AC}
                            onChange={handleChange}
                            name="AC"
                            color="primary"
                        />
                    }
                    label="Show Animation Control"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={show.Settings}
                            onChange={handleChange}
                            name="Settings"
                            color="primary"
                        />
                    }
                    label="Show Settings"
                />
            </div>
        </div>
    );
}

export default ShareContent;
