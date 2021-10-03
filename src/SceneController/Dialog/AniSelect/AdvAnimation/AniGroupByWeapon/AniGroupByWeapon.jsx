import { useAppData } from "@/data";
import { useAniSelectState } from "@/state";
import WeaponSelector from "../selectors/WeaponSelector";
import AniGallery from "../../components/AniGallery";

import { dataMap } from "./dataMap";
import "./AniGroupByWeapon.css";

function AniGroupByWeapon({ name, onSelect }) {
    const dataName = `ani-${name}`;
    const data = useAppData(state => state[dataName]) ?? {};

    const { setGroupWeaponType } = useAniSelectState(
        state => state.advAni.groupByWeapon
    );
    const setType = type => setGroupWeaponType(name, type);
    const type = useAniSelectState(state => state.advAni.groupByWeapon[name]);
    type ?? setType(Object.keys(data)[0]);

    const listMap = dataMap[name];
    const aniList = listMap ? data[type]?.map(listMap) : data[type];

    return (
        <div className="AniGroup">
            <WeaponSelector value={type} onClick={setType} />

            <AniGallery key={type} list={aniList} onClick={onSelect} />
        </div>
    );
}

export default AniGroupByWeapon;
