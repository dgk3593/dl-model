import React, { useState } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeAni from "./HomeAni";
import WeaponAni from "./WeaponAni";
import GenericSkills from "./GenericSkills";
import OtherUnique from "./OtherUnique";
import UniqueByWeapon from "./UniqueByWeapon";

import "./styles/AnimationSelect.css";

import { unidentified } from "./data/animationOthers";
import questAnimation from "./data/animationQuest";
import uniqueFS from "./data/animationUniqueFS";
import skills from "./data/animationSkills";
import genericSkills from "./data/animationGenericSkills";
import uniqueVictory from "./data/animationUniqueVictory";
import uniqueCombo from "./data/animationUniqueCombo";

import { aniButtonsFromObject } from "./helpers";

function GameAni({ handleSelect }) {
    const [category, setCategory] = useState(0);

    const handleChange = (_, value) => {
        setCategory(value);
    };

    let content;
    switch (category) {
        case 0: // Home screen animations
            content = <HomeAni handleSelect={handleSelect} />;
            break;
        case 1: // In quest animations
            content = aniButtonsFromObject(questAnimation, handleSelect);
            break;
        case 2: // Weapon specific animations
            content = <WeaponAni handleSelect={handleSelect} />;
            break;
        case 3: // Unique Combo animations
            content = (
                <UniqueByWeapon
                    groupName="Combo"
                    data={uniqueCombo}
                    handleSelect={handleSelect}
                />
            );
            break;
        case 4: // Unique FS
            content = (
                <UniqueByWeapon
                    groupName="Force Strike"
                    data={uniqueFS}
                    handleSelect={handleSelect}
                />
            );
            break;
        case 5: // Unique victory
            content = (
                <UniqueByWeapon
                    data={uniqueVictory}
                    groupName="Victory"
                    handleSelect={handleSelect}
                />
            );
            break;
        case 6: // Generic Skills
            content = (
                <GenericSkills
                    data={genericSkills}
                    handleSelect={handleSelect}
                />
            );
            break;
        case 7: // Special Skills
            content = (
                <UniqueByWeapon data={skills} handleSelect={handleSelect} />
            );
            break;
        case 8: // Special characters
            content = <OtherUnique handleSelect={handleSelect} />;
            break;
        case 9: // Unused
            content = aniButtonsFromObject(unidentified, handleSelect);
            break;
        default:
    }

    return (
        <div className="AnimationSelect-categories">
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={category}
                onChange={handleChange}
            >
                <Tab label="Home Screen" />
                <Tab label="In Quest Common" />
                <Tab label="Weapon Specific" />
                <Tab label="Unique Combo" />
                <Tab label="Unique Force Strike" />
                <Tab label="Unique Victory" />
                <Tab label="Generic Skills" />
                <Tab label="Special Skills" />
                <Tab label="Other Unique" />
                <Tab label="Unused" />
            </Tabs>
            <div className="AnimationSelect-subCategory">{content}</div>
        </div>
    );
}

export default GameAni;
