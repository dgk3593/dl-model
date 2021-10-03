import { useAppData } from "@/data";
import { useAniSelectState } from "@/state";
import SimpleAniGallery from "../components/SimpleAniGallery";
import WeaponSelector from "./selectors/WeaponSelector";

function GenericSkill({ onSelect }) {
    const { type, setType } = useAniSelectState(
        state => state.advAni.genericSkill
    );

    const data = useAppData(state => state["ani-genericSkill"]);

    const aniList = data[type].map(ani => ({
        ...ani,
        fullName: `${type} ${ani.name}`,
    }));

    return (
        <div className="GenericSkills">
            <WeaponSelector value={type} onClick={setType} />

            <SimpleAniGallery list={aniList} onClick={onSelect} />
        </div>
    );
}

export default GenericSkill;
