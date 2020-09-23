import React, { useState, useEffect, useContext } from "react";

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
    const [label, setLabel] = useState("Link");
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
            if (currentValue !== defaultValue) {
                link = link.concat(`${keyCode}=${currentValue}/`);
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

    useEffect(() => {
        if (method === 1) return; // QR
        const shareTextField = document.getElementById("shareTextField");
        if (!shareTextField) return;
        shareTextField.focus();
        shareTextField.select();
    }, [shareLink, method]);

    return (
        <div>
            <div className="ShareContent-main">
                {method !== 1 && (
                    <TextField
                        color="secondary"
                        variant="filled"
                        autoFocus
                        fullWidth
                        label={label}
                        InputLabelProps={{ color: "primary" }}
                        id="shareTextField"
                        margin="dense"
                        value={shareLink}
                        InputProps={{ endAdornment: <CopyButton /> }}
                    />
                )}
                {method === 1 && (
                    <>
                        <div className="ShareContent-QR">
                            <QRCode
                                includeMargin
                                size={256}
                                value={shareLink}
                            />
                        </div>
                        <div>Right click to save or copy</div>
                    </>
                )}
            </div>
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
