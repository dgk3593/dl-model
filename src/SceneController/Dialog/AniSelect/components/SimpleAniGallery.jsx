import SimpleAniButton from "./SimpleAniButton";
import Gallery from "components/Gallery";

function SimpleAniGallery({ list, onClick }) {
    return (
        <Gallery list={list} component={SimpleAniButton} onClick={onClick} />
    );
}

export default SimpleAniGallery;
