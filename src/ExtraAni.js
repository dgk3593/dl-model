import React, { useState } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import "./styles/AnimationSelect.css";

import { dance, acrobatics, guns } from "./data/animationList";
import { aniButtonsFromObject } from "./helpers";

function ExtraAni({ handleSelect }) {
    const [category, setCategory] = useState(0);

    const handleChange = (_, value) => {
        setCategory(value);
    };

    let content;
    switch (category) {
        case 0: // Dance animations
            content = aniButtonsFromObject(dance, handleSelect);
            break;
        case 1: // Acrobatics animations
            content = aniButtonsFromObject(acrobatics, handleSelect);
            break;
        case 2: // Guns animations
            content = aniButtonsFromObject(guns, handleSelect);
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
                <Tab label="Dance" />
                <Tab label="Acrobatics" />
                <Tab label="Guns" />
            </Tabs>
            <div className="AnimationSelect-subCategory">{content}</div>
        </div>
    );
}

export default ExtraAni;
