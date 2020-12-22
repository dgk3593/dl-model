import { useContext } from "react";

import { DispatchContext, SettingsContext } from "context/SettingsContext";

import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const listStyle = {
    backgroundColor: "rgba(255,255,255,0.5)",
    width: "100%",
    paddingBottom: 0,
    marginBottom: "0.8rem",
};

const typographyProps = {
    color: "inherit",
    variant: "button",
    align: "center",
};

const mainBtns = [
    { value: "model", text: "Choose a Model" },
    { value: "texture", text: "Face Override" },
    { value: "face", text: "Choose Face" },
    { value: "weapon", text: "Add Weapons" },
];

function SettingBtns({ openModal }) {
    const settings = useContext(SettingsContext);
    const dispatch = useContext(DispatchContext);
    const {
        model: { weaponRight, weaponLeft },
        app: { showAniControl, antiAliasing },
        outline: { enable: outlineEnabled },
    } = settings;

    const handleBtnClick = e => {
        openModal(e.currentTarget.dataset.value);
    };

    const removeWeapon = e => {
        const target = e.currentTarget.dataset.value;
        const key = `weapon${target}`;
        const value = { [key]: "" };
        const action = {
            type: "update",
            key: "model",
            value,
        };
        dispatch(action);
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
        const value = event.currentTarget.getAttribute("value");
        const action = {
            type: "update",
            key: "app",
            value: { sidebarContent: value },
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
                    <ListItem button value="chainMaker" onClick={openTools}>
                        <ListItemText
                            primary="Chain Maker (BETA)"
                            primaryTypographyProps={typographyProps}
                        />
                    </ListItem>
                </List>
            </div>
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
                            primary={`${
                                outlineEnabled ? "Hide" : "Show"
                            } Outline`}
                            primaryTypographyProps={typographyProps}
                        />
                    </ListItem>
                    <ListItem button value="advanced" onClick={openTools}>
                        <ListItemText
                            primary="Advanced Settings"
                            primaryTypographyProps={typographyProps}
                        />
                    </ListItem>
                </List>
            </div>
            <div className="SettingBtns-Share">
                <Button
                    variant="contained"
                    data-value="share"
                    onClick={handleBtnClick}
                >
                    Share
                </Button>
            </div>
        </>
    );
}

export default SettingBtns;
