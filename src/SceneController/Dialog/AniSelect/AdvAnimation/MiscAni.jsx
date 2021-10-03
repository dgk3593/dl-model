import { useAppData } from "@/data";
import SimpleAniGallery from "../components/SimpleAniGallery";

function MiscAni({ onSelect }) {
    const data = useAppData(state => state["ani-misc"]);

    return <SimpleAniGallery list={data} onClick={onSelect} />;
}

export default MiscAni;
