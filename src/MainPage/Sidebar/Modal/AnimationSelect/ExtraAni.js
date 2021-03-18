import { useState, useEffect } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import "./styles/AnimationSelect.css";

import { listToAniButtons } from "helpers/helpers";

function ExtraAni({ handleSelect }) {
    const [categoryId, setCategoryId] = useState(0);
    const [animations, setAnimations] = useState({});

    useEffect(() => {
        const fetchAnimations = async () => {
            const { default: data } = await import("data/aniExtra");
            setAnimations(data);
        };
        fetchAnimations();
    }, []);

    const handleChange = (_, value) => {
        setCategoryId(value);
    };

    const categoryList = Object.keys(animations);

    return categoryList.length ? (
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
                {listToAniButtons(
                    animations[categoryList[categoryId]],
                    handleSelect
                )}
            </div>
        </div>
    ) : (
        <div className="AnimationSelect-categories">
            <div>
                <p />
            </div>
            <div className="AnimationSelect-subCategory">
                <p>Loading...</p>
            </div>
        </div>
    );
}

export default ExtraAni;
