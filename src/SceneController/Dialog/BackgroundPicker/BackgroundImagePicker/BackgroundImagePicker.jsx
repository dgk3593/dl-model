import { useAppData } from "@/data";

import { Box } from "@mui/material";
import ImageGallery from "components/ImageGallery";
import UploadButton from "components/UploadButton";
import UrlBox from "components/UrlBox";

import { file2DataURL } from "@/SceneController/helper/file2dataURL";
import { styles } from "./styles";

function BackgroundImagePicker({ onSelect }) {
    const list = useAppData(data => data["background-image"]);

    const handleClick = event => {
        const { value } = event.target.dataset;
        const bg = `img:${value}`;
        onSelect(bg);
    };

    /**
     * @param {FileList} files
     */
    const handleUpload = async files => {
        const dataURL = await file2DataURL(files[0]);
        const bg = `img:${dataURL}`;
        onSelect(bg);
    };

    const handleUrl = url => {
        if (!url) return;

        const bg = `img:${url}`;
        onSelect(bg);
    };

    return (
        <>
            <Box sx={styles.external}>
                <UploadButton onChange={handleUpload} />
                <UrlBox onApply={handleUrl} />
            </Box>

            <ImageGallery list={list} onClick={handleClick} />
        </>
    );
}

export default BackgroundImagePicker;
