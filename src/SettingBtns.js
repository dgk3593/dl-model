import React, { useContext } from "react";

import { DispatchContext, SettingsContext } from "./context/SettingsContext";

import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const listStyle = {
    backgroundColor: "rgba(255,255,255,0.5)",
    width: "100%",
};

const typographyProps = {
    color: "inherit",
    variant: "button",
    align: "center",
};

const mainBtns = [
    { value: "model", text: "Choose a Model" },
    { value: "faceOverride", text: "Face Override" },
    { value: "face", text: "Choose Face" },
    { value: "animation", text: "Choose Animation" },
    { value: "background", text: "Background Settings" },
    { value: "weapon", text: "Add Weapons" },
];

function SettingBtns({ openControl }) {
    const settings = useContext(SettingsContext);
    const dispatch = useContext(DispatchContext);
    const {
        model: { weaponRight, weaponLeft },
        app: { showAniControl, antiAliasing },
    } = settings;

    const handleBtnClick = e => {
        openControl(e.currentTarget.dataset.value);
    };

    const removeWeapon = e => {
        const target = e.currentTarget.dataset.value;
        const value = {};
        value[`weapon${target}`] = "";
        const action = {
            type: "update",
            key: "model",
            value,
        };
        dispatch(action);
    };

    const toggleAniControl = () => {
        const action = {
            type: "update",
            key: "app",
            value: { showAniControl: !showAniControl },
        };
        dispatch(action);
    };

    const toggleAA = () => {
        const action = {
            type: "update",
            key: "app",
            value: { antiAliasing: !antiAliasing },
        };
        dispatch(action);
    };

    const openChainMaker = () => {
        const action = {
            type: "update",
            key: "chainMaker",
            value: { enable: true },
        };
        dispatch(action);
    };

    return (
        <>
            <div style={listStyle}>
                <List dense component="nav">
                    <ListItem button divider onClick={openChainMaker}>
                        <ListItemText
                            primary="Chain Maker (BETA)"
                            primaryTypographyProps={typographyProps}
                        />
                    </ListItem>
                    {mainBtns.map(btn => (
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
                    {weaponLeft && ( // Add buttons to remove weapons if they exist
                        <ListItem
                            button
                            divider
                            data-value="Left"
                            onClick={removeWeapon}
                        >
                            <ListItemText
                                primary="Remove Left Weapon"
                                primaryTypographyProps={typographyProps}
                            />
                        </ListItem>
                    )}
                    {weaponRight && (
                        <ListItem
                            button
                            divider
                            data-value="Right"
                            onClick={removeWeapon}
                        >
                            <ListItemText
                                primary="Remove Right Weapon"
                                primaryTypographyProps={typographyProps}
                            />
                        </ListItem>
                    )}
                    <ListItem button onClick={toggleAniControl}>
                        <ListItemText
                            primary={`${
                                showAniControl ? "Hide" : "Show"
                            } Animation Control`}
                            primaryTypographyProps={typographyProps}
                        />
                    </ListItem>
                    <ListItem button onClick={toggleAA}>
                        <ListItemText
                            primary={`Turn ${
                                antiAliasing ? "Off" : "On"
                            } Anti-Aliasing`}
                            primaryTypographyProps={typographyProps}
                        />
                    </ListItem>
                </List>
            </div>
            <br />
            <Button
                variant="contained"
                data-value="share"
                onClick={handleBtnClick}
            >
                Share
            </Button>
        </>
    );
}

export default SettingBtns;
