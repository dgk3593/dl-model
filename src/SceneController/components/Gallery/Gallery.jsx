import { Box } from "@mui/material";
import { styles } from "./styles";

function Gallery({ list = [], component, onClick, style = {}, ...others }) {
    const Component = component;
    const sx = { ...styles, ...style };

    return (
        <Box className="Gallery" sx={sx} {...others}>
            {list.length
                ? list.map((listItem, i) => (
                      <Component
                          onClick={onClick}
                          key={listItem.id ?? i}
                          {...listItem}
                      />
                  ))
                : "No Data"}
        </Box>
    );
}

export default Gallery;
