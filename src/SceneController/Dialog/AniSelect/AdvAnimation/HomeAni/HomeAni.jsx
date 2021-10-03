import { useAppData } from "@/data";
import { useAniSelectState } from "@/state";
import SimpleAniButton from "../../components/SimpleAniButton";
import GenderSelector from "../selectors/GenderSelector";

import "./HomeAni.css";

function HomeAni({ onSelect }) {
    const { gender, setGender } = useAniSelectState(state => state.advAni.home);

    const data = useAppData(state => state["ani-home"]);

    return (
        <div className="HomeAni">
            <h3 className="HomeAni-groupTitle">Common Animation</h3>
            <div className="AniSelect-simpleBtns">
                {data.common.map(({ name, code }) => (
                    <SimpleAniButton
                        name={name}
                        code={code}
                        onClick={onSelect}
                        key={name}
                        className="AniSelect-Btn"
                    />
                ))}
            </div>

            <hr />

            <div className="HomeAni-groupTitle">
                <h3>Gender Specific</h3>
                <GenderSelector value={gender} onClick={setGender} />
            </div>

            <div className="AniSelect-simpleBtns">
                {data[gender].map(({ name, code }) => (
                    <SimpleAniButton
                        name={name}
                        code={code}
                        fullName={`${gender} ${name}`}
                        onClick={onSelect}
                        key={name}
                        className="AniSelect-Btn"
                    />
                ))}
            </div>
        </div>
    );
}

export default HomeAni;
