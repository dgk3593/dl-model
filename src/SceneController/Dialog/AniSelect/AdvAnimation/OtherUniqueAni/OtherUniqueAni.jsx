import { useAppData } from "@/data";
import { useAniSelectState } from "@/state";

import WeaponSelector from "../selectors/WeaponSelector";
import UniqueAniGroup from "./UniqueAniGroup";

import "./OtherUniqueAni.css";

function OtherUniqueAni({ onSelect }) {
    const data = useAppData(state => state["ani-uniqueOther"]);
    const { type, setType, selected, setSelected } = useAniSelectState(
        state => state.advAni.uniqueOther
    );

    const list = data[type];
    const handleGroupToggle = event => {
        const { user } = event.currentTarget.dataset;
        setSelected(user === selected ? "" : user);
    };

    return (
        <>
            <div className="OtherUniqueAni">
                <WeaponSelector value={type} onClick={setType} />
                <hr />

                <div className="OtherUniqueAni-groups">
                    {list.map(listData => (
                        <UniqueAniGroup
                            expanded={selected === listData.user}
                            {...listData}
                            onClick={handleGroupToggle}
                            onSelect={onSelect}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default OtherUniqueAni;
