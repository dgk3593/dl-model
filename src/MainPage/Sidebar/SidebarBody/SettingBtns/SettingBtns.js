import { useSettings, useDispatch } from "context/SettingsContext";

import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";
import CameraIcon from "@material-ui/icons/Camera";

import ModelSelectBtns from "./ModelSelectBtns";
import ModelModSelect from "./ModelModSelect";

import { listStyle, typographyProps } from "./commonProps";

import "./styles/SettingBtns.css";

const mainBtns = {
    adv: [
        { value: "texture", text: "Face Override" },
        { value: "face", text: "Facial Expression" },
        { value: "weapon", text: "Add Weapons" },
    ],
    dragon: [{ value: "dragonFace", text: "Facial Expression" }],
    ani: [],
    basic: [],
};

function SettingBtns({ openModal }) {
    const settings = useSettings();
    const dispatch = useDispatch();

    const {
        model,
        app: { showAniControl, antiAliasing, viewerType },
        outline: { enable: outlineEnabled },
        ascii: { enable: asciiOn },
    } = settings;

    const handleBtnClick = e => {
        openModal(e.currentTarget.dataset.value);
    };

    const updateSettings = (key, value) => {
        const action = { type: "update", key, value };
        dispatch(action);
    };

    const removeWeapon = e => {
        const target = e.currentTarget.dataset.value;
        const key = `weapon${target}`;
        const value = { [key]: "" };

        updateSettings("model", value);
    };

    const toggleSetting = event => {
        const { key, name } = event.currentTarget.dataset;
        const action = {
            type: "toggle",
            key: key,
            value: name,
        };
        dispatch(action);
    };

    const openTools = event => {
        const { value } = event.currentTarget.dataset;
        updateSettings("app", { sidebarContent: value });
    };

    const getScreenshot = () => (window.getScreenshot = true);

    const removeWeaponBtn = side => {
        const key = `weapon${side}`;
        if (!model[key]) return null;

        return (
            <ListItem button divider data-value={side} onClick={removeWeapon}>
                <ListItemText
                    primary={`Remove ${side} Weapon`}
                    primaryTypographyProps={typographyProps}
                />
            </ListItem>
        );
    };

    const animationBtns = (
        <List dense disablePadding style={listStyle} component="div">
            <ListItem
                button
                divider
                data-value={viewerType === "adv" ? "animation" : "nonHumanAni"}
                onClick={handleBtnClick}
            >
                <ListItemText
                    primary="Choose Animation"
                    primaryTypographyProps={typographyProps}
                />
            </ListItem>
            <ListItem button data-value="chainMaker" onClick={openTools}>
                <ListItemText
                    primary="Chain Maker"
                    primaryTypographyProps={typographyProps}
                />
            </ListItem>
        </List>
    );

    const others = (
        <div className="SettingBtns-others">
            <Button
                variant="contained"
                data-value="share"
                onClick={handleBtnClick}
            >
                Share
            </Button>
            <Button
                variant="contained"
                data-value="export"
                onClick={handleBtnClick}
            >
                Export
            </Button>
            {!asciiOn && (
                <Tooltip title="Take screenshot" placement="top">
                    <Button variant="contained" onClick={getScreenshot}>
                        <CameraIcon />
                    </Button>
                </Tooltip>
            )}
        </div>
    );

    return (
        <>
            <ModelSelectBtns handleClick={handleBtnClick} />
            <ModelModSelect model={model} />
            <List dense disablePadding style={listStyle} component="div">
                {mainBtns[viewerType].map(btn => (
                    <ListItem
                        key={btn.value}
                        button
                        divider
                        data-value={btn.value}
                        onClick={handleBtnClick}
                    >
                        <ListItemText
                            primary={btn.text}
                            primaryTypographyProps={typographyProps}
                        />
                    </ListItem>
                ))}
                {removeWeaponBtn("Left")}
                {removeWeaponBtn("Right")}
            </List>

            {viewerType !== "basic" ? animationBtns : null}

            <List dense disablePadding style={listStyle} component="div">
                <ListItem
                    button
                    divider
                    data-value="background"
                    onClick={handleBtnClick}
                >
                    <ListItemText
                        primary="Background Settings"
                        primaryTypographyProps={typographyProps}
                    />
                </ListItem>
                <ListItem
                    button
                    data-key="app"
                    data-name="antiAliasing"
                    divider
                    onClick={toggleSetting}
                >
                    <ListItemText
                        primary={`Turn ${
                            antiAliasing ? "Off" : "On"
                        } Anti-Aliasing`}
                        primaryTypographyProps={typographyProps}
                    />
                </ListItem>
                <ListItem
                    button
                    data-key="app"
                    data-name="showAniControl"
                    divider
                    onClick={toggleSetting}
                >
                    <ListItemText
                        primary={`${
                            showAniControl ? "Hide" : "Show"
                        } Animation Control`}
                        primaryTypographyProps={typographyProps}
                    />
                </ListItem>
                <ListItem
                    button
                    data-key="outline"
                    data-name="enable"
                    divider
                    onClick={toggleSetting}
                >
                    <ListItemText
                        primary={`${outlineEnabled ? "Hide" : "Show"} Outline`}
                        primaryTypographyProps={typographyProps}
                    />
                </ListItem>
                <ListItem button data-value="advanced" onClick={openTools}>
                    <ListItemText
                        primary="Advanced Settings"
                        primaryTypographyProps={typographyProps}
                    />
                </ListItem>
            </List>

            {others}
            <a
                href="https://ko-fi.com/L4L83VOAP"
                rel="noreferrer"
                target="_blank"
            >
                <img
                    height="36px"
                    src="https://cdn.ko-fi.com/cdn/kofi5.png?v=2"
                    alt="Buy Me a Coffee"
                />
            </a>
        </>
    );
}

export default SettingBtns;
