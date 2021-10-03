import Gallery from "components/Gallery";
import AniButton from "./AniButton";

function AniGallery({ list, onClick }) {
    return <Gallery list={list} component={AniButton} onClick={onClick} />;
}

export default AniGallery;
