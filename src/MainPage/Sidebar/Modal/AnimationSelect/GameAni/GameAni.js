import { lazy, Suspense, useState } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import "../styles/AnimationSelect.css";

import otherAnimation from "data/aniOthers";
import questAnimation from "data/aniQuest";
import uniqueFS from "data/aniUniqueFS";
import skills from "data/aniSkills";
import uniqueVictory from "data/aniUniqueVictory";
import uniqueCombo from "data/aniUniqueCombo";

import { listToAniButtons } from "helpers/helpers";

import HomeAni from "./HomeAni";
const WeaponAni = lazy(() => import("./WeaponAni"));
const GenericSkills = lazy(() => import("./GenericSkills"));
const OtherUnique = lazy(() => import("./OtherUnique"));
const UniqueByWeapon = lazy(() => import("./UniqueByWeapon"));

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
            content = listToAniButtons(questAnimation, handleSelect);
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
            content = <GenericSkills handleSelect={handleSelect} />;
            break;
        case 7: // Special Skills
            content = (
                <UniqueByWeapon data={skills} handleSelect={handleSelect} />
            );
            break;
        case 8: // Special characters
            content = <OtherUnique handleSelect={handleSelect} />;
            break;
        case 9: // Others
            content = listToAniButtons(otherAnimation, handleSelect);
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
                <Tab label="Others" />
            </Tabs>
            <div className="AnimationSelect-subCategory">
                <Suspense fallback={<div>Loading</div>}>{content}</Suspense>
            </div>
        </div>
    );
}

export default GameAni;
