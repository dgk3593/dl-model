import { useState } from "react";

import GenderSelector from "./GenderSelector";

import homeAnimation from "./data/animationHome";
import { aniButtonsFromObject } from "./helpers";

import "./styles/HomeAni.css";

function HomeAni({ handleSelect }) {
    const [gender, setGender] = useState("Male");
    const handleClick = event => {
        setGender(event.currentTarget.dataset.value);
    };
    return (
        <div className="HomeAni">
            <h3 className="HomeAni-groupTitle">Common Animation</h3>
            <div className="HomeAni-Btns">
                {aniButtonsFromObject(homeAnimation.common, handleSelect)}
            </div>
            <hr />
            <h3 className="HomeAni-groupTitle">Gender Specific</h3>
            <GenderSelector value={gender} handleClick={handleClick} />
            <div className="HomeAni-Btns">
                {aniButtonsFromObject(
                    homeAnimation[gender],
                    handleSelect,
                    gender
                )}
            </div>
        </div>
    );
}

export default HomeAni;
