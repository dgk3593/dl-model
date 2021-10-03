import Gallery from "../Gallery";
import { Box } from "@mui/material";
import { styles } from "./styles";

/**
 * @param {object} props
 * @param {string} props.src
 * @param {string} props.value
 * @param {string} props.name
 * @param {React.MouseEventHandler<HTMLImageElement>} props.onClick
 */
const ImageWithName = ({ src, value, name, onClick }) => (
    <Box sx={styles.container} data-name={name}>
        <img
            src={src}
            data-value={value}
            onClick={onClick}
            style={styles.image}
        />
    </Box>
);

/**
 * @param { Object } props
 * @param { Array } props.list
 * @param { Function } props.onClick
 */
const ImageGallery = ({ list, onClick }) => (
    <Gallery
        style={styles.gallery}
        onClick={onClick}
        list={list}
        component={ImageWithName}
    />
);

export default ImageGallery;
