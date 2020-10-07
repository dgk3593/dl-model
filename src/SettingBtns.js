import React, { useContext } from "react";

import { DispatchContext, SettingsContext } from "./context/SettingsContext";

import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const listStyle = {
    backgroundColor: "rgba(255,255,255,0.5)",
    width: "100%",
    paddingBottom: 0,
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
                {/* Model related */}
                <List dense disablePadding component="nav">
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
                            data-value="Right"
                            onClick={removeWeapon}
                        >
                            <ListItemText
                                primary="Remove Right Weapon"
                                primaryTypographyProps={typographyProps}
                            />
                        </ListItem>
                    )}
                </List>
            </div>
            <br />
            {/* Animation Related */}
            <div style={listStyle}>
                <List dense disablePadding component="nav">
                    <ListItem
                        button
                        divider
                        data-value="animation"
                        onClick={handleBtnClick}
                    >
                        <ListItemText
                            primary="Choose Animation"
                            primaryTypographyProps={typographyProps}
                        />
                    </ListItem>
                    <ListItem button onClick={openChainMaker}>
                        <ListItemText
                            primary="Chain Maker (BETA)"
                            primaryTypographyProps={typographyProps}
                        />
                    </ListItem>
                </List>
            </div>
            <br />
            {/* Other settings */}
            <div style={listStyle}>
                <List dense disablePadding component="nav">
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
                    <ListItem button divider onClick={toggleAniControl}>
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
