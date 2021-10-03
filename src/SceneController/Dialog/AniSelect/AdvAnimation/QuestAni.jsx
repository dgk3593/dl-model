import { useAppData } from "@/data";
import SimpleAniGallery from "../components/SimpleAniGallery";

function QuestAni({ onSelect }) {
    const data = useAppData(state => state["ani-quest"]);

    return <SimpleAniGallery list={data} onClick={onSelect} />;
}

export default QuestAni;
