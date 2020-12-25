import { useState } from "react";

import GenderSelector from "components/selectors/GenderSelector";

import homeAnimation from "data/animationHome";
import { aniButtonsFromObject } from "helpers/helpers";

import "./styles/HomeAni.css";

function HomeAni({ handleSelect }) {
    const [gender, setGender] = useState("Male");
    return (
        <div className="HomeAni">
            <h3 className="HomeAni-groupTitle">Common Animation</h3>
            <div className="HomeAni-Btns">
                {aniButtonsFromObject(homeAnimation.common, handleSelect)}
            </div>
            <hr />
            <h3 className="HomeAni-groupTitle">Gender Specific</h3>
            <GenderSelector value={gender} onClick={setGender} />
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
