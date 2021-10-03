import { useAppData } from "@/data";

import ImageGallery from "components/ImageGallery";

function SkyboxPicker({ onSelect }) {
    const list = useAppData(data => data["background-skybox"]);

    const handleClick = event => {
        const { value } = event.target.dataset;
        const bg = `sky:${value}`;
        onSelect(bg);
    };

    return <ImageGallery list={list} onClick={handleClick} />;
}

export default SkyboxPicker;
