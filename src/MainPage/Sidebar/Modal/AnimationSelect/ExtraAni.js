import { useState } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import "./styles/AnimationSelect.css";

import extraAnimation from "data/animationExtra";
import { aniButtonsFromObject } from "helpers/helpers";

function ExtraAni({ handleSelect }) {
    const [categoryId, setCategoryId] = useState(0);

    const handleChange = (_, value) => {
        setCategoryId(value);
    };

    const categoryList = Object.keys(extraAnimation);

    return (
        <div className="AnimationSelect-categories">
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={categoryId}
                onChange={handleChange}
            >
                {categoryList.map(cat => (
                    <Tab label={cat} key={cat} />
                ))}
            </Tabs>
            <div className="AnimationSelect-subCategory">
                {aniButtonsFromObject(
                    extraAnimation[categoryList[categoryId]],
                    handleSelect
                )}
            </div>
        </div>
    );
}

export default ExtraAni;
