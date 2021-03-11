import { lazy, Suspense, useState, useEffect, useContext } from "react";
import useToggleState from "hooks/useToggleState";

import { SettingsContext } from "context/SettingsContext";

import FileCopy from "@material-ui/icons/FileCopy";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

import { defaultSettings, initKeyMap, initKeys, baseUrl } from "helpers/consts";

import { getDefaultFace } from "helpers/helpers";
import { getDefaultModelMod } from "helpers/async/getModelMod";
import { getDefaultAni } from "helpers/async/getDefaultAni";
import { getDefaultCamera } from "helpers/async/getDefaultCamera";

import "./styles/ShareContent.css";

const QRCode = lazy(() =>
    import(/* webpackChunkName: "QRCode" */ "qrcode.react")
);

function ShareContent({ method }) {
    const [show, setShow] = useState({ AC: true, Settings: true });
    const [transparentBG, toggleTransparentBG] = useToggleState(false);
    const [customCam, toggleCustomCam] = useToggleState(false);
    const [camPos, setCamPos] = useState([0, 0.5, 1.5]);
    const [label, setLabel] = useState("Code");
    const [shareLink, setShareLink] = useState("Generating...");

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

    const handleCamChange = event => {
        const index = parseInt(event.currentTarget.getAttribute("index"));
        const value = event.currentTarget.value;
        const newCamPos = camPos.map((v, i) => (i === index ? value : v));
        setCamPos(newCamPos);
    };

    const copyText = () => {
        /**
         * @type {HTMLInputElement}
         */
        // @ts-ignore
        const shareTextField = document.getElementById("shareTextField");
        shareTextField.select();
        shareTextField.setSelectionRange(0, 99999); // For mobile
        document.execCommand("copy");
        setLabel("Copied");
        setTimeout(() => {
            setLabel("Code");
        }, 2000);
    };

    // const shareLink = getShareLink();
    const embedCode = `<iframe src="${shareLink}" frameborder="0" width="300" height="300" ${
        transparentBG ? "allowtransparency " : ""
    }/></iframe>`;

    useEffect(() => {
        const modelId = currentSettings.model.id;
        const setDefaultCamera = async () => {
            const defaultCam = await getDefaultCamera(modelId);
            setCamPos(defaultCam);
        };
        setDefaultCamera();
    }, [currentSettings.model.id]);

    useEffect(() => {
        setShareLink("Generating...");
        const modelId = currentSettings.model.id;
        const { viewerType } = currentSettings.app;
        const getShareLink = async () => {
            const keyCodes = initKeys[viewerType];
            const createPromise = keyCode => {
                return new Promise(async resolve => {
                    const { group, key } = initKeyMap[keyCode];
                    const value = currentSettings[group][key];
                    const defaultValue = defaultSettings[group][key];

                    switch (keyCode) {
                        case "bg":
                            if (transparentBG) {
                                resolve(`bg=transparent`);
                                break;
                            }
                            resolve(
                                value !== defaultValue
                                    ? `${keyCode}=${value.replace("#", "")}`
                                    : ""
                            );
                            break;
                        case "et":
                        case "mt":
                            resolve(
                                value !== modelId ? `${keyCode}=${value}` : ""
                            );
                            break;
                        case "ei":
                        case "mi":
                            resolve(
                                value !== getDefaultFace(modelId)
                                    ? `${keyCode}=${value}`
                                    : ""
                            );
                            break;
                        case "cc":
                            const defaultAni = await getDefaultAni(modelId);
                            if (value !== defaultAni)
                                resolve(`${keyCode}=${value}`);

                            resolve("");
                            break;
                        case "cam":
                            if (!customCam) resolve("");

                            const defaultCam = await getDefaultCamera(modelId);

                            if (camPos.some((p, i) => p !== defaultCam[i])) {
                                const camParams = camPos.map((p, i) =>
                                    p !== defaultCam[i] ? p : ""
                                );
                                resolve(`cam=${camParams.join(",")}`);
                            }

                            resolve("");
                            break;
                        case "modName":
                            const defaultModName = (
                                await getDefaultModelMod(modelId)
                            )?.name;

                            resolve(
                                value !== defaultModName
                                    ? `modName=${value.replace(" ", "")}`
                                    : ""
                            );
                            break;
                        default:
                            resolve(
                                value && value !== defaultValue
                                    ? `${keyCode}=${value}`
                                    : ""
                            );
                    }
                });
            };

            const hashPromises = keyCodes.map(createPromise);

            const hashParts = await Promise.all(hashPromises);
            const hash = hashParts.filter(Boolean).join("/");
            return `${baseUrl}/${hash}`;
        };
        const generateLink = async () => {
            const link = await getShareLink();
            setShareLink(link);
        };
        generateLink();
    }, [currentSettings, customCam, camPos, show, transparentBG]);

    useEffect(() => {
        if (method !== 1) return; // QR

        /**
         * @type {HTMLInputElement}
         */
        // @ts-ignore
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
                                    checked={transparentBG}
                                    onChange={toggleTransparentBG}
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
            <div className="ShareContent-main">
                <Suspense fallback={<div>Loading</div>}>{display}</Suspense>
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
            <FormControlLabel
                control={
                    <Checkbox
                        checked={customCam}
                        onChange={toggleCustomCam}
                        name="Settings"
                        color="primary"
                    />
                }
                label="Custom Camera Position"
            />
            {customCam && (
                <div className="ShareContent-CamPos">
                    {["x", "y", "z"].map((axis, i) => (
                        <TextField
                            onChange={handleCamChange}
                            label={axis}
                            key={axis}
                            size="small"
                            margin="dense"
                            variant="outlined"
                            inputProps={{
                                type: "number",
                                step: 0.5,
                                index: i,
                            }}
                            value={camPos[i]}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ShareContent;
