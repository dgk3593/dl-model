import { useAniSelectState } from "@/state";
import { categories } from "./categories";

import VerticalTabs from "components/VerticalTabs";
import Stretcher from "components/Stretcher";

import HomeAni from "./HomeAni";
import QuestAni from "./QuestAni";
import WeaponAni from "./WeaponAni";
import GenericSkill from "./GenericSkill";
import AniGroupByWeapon from "./AniGroupByWeapon";
import MiscAni from "./MiscAni";
import OtherUniqueAni from "./OtherUniqueAni";

const components = {
    home: HomeAni,
    quest: QuestAni,
    weapon: WeaponAni,
    genericSkill: GenericSkill,
    uniqueSkill: props => <AniGroupByWeapon {...props} name="uniqueSkill" />,
    uniqueVictory: props => (
        <AniGroupByWeapon {...props} name="uniqueVictory" />
    ),
    uniqueFS: props => <AniGroupByWeapon {...props} name="uniqueFS" />,
    uniqueCombo: props => <AniGroupByWeapon {...props} name="uniqueCombo" />,
    uniqueOther: OtherUniqueAni,
    misc: MiscAni,
};

function AdvAnimation({ onSelect }) {
    const { category, setCategory } = useAniSelectState(state => state.advAni);

    const Component = components[category] ?? Stretcher;

    return (
        <div className="AniSelect-categories">
            <VerticalTabs
                tabs={categories}
                value={category}
                onChange={setCategory}
            />
            <div className="AniSelect-subCategory">
                <Component onSelect={onSelect} />
            </div>
        </div>
    );
}

export default AdvAnimation;
