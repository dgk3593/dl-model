import { useAppData } from "@/data";
import { useAniSelectState } from "@/state";
import VerticalTabs from "components/VerticalTabs";
import SimpleAniGallery from "./components/SimpleAniGallery";

function ExtraAnimation({ onSelect }) {
    const { category, setCategory } = useAniSelectState(
        state => state.extraAni
    );
    const data = useAppData(state => state["ani-extra"]);
    const tabs = Object.keys(data).map(name => ({ name }));

    return (
        <div className="AniSelect-categories">
            <VerticalTabs tabs={tabs} value={category} onChange={setCategory} />

            <div className="AniSelect-subCategory">
                <SimpleAniGallery list={data[category]} onClick={onSelect} />
            </div>
        </div>
    );
}

export default ExtraAnimation;
