import { FACE_WIDTH, getTexturePath } from "./helper";

function BaseBox({ texture, x, y, ...others }) {
    const texturePath = getTexturePath(texture);

    const style = {
        backgroundImage: `url(${texturePath})`,
        backgroundSize: "512px 512px",
        backgroundPosition: `${x}px ${y}px`,
        width: FACE_WIDTH,
        height: FACE_WIDTH / 2,
    };

    return <div style={style} {...others} />;
}

export default BaseBox;
