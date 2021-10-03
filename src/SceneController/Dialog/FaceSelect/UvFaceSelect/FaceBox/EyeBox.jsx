import BaseBox from "./BaseBox";
import { getEyeBgPosition } from "./helper";

function EyeBox({ texture, index, ...others }) {
    const { x, y } = getEyeBgPosition(texture, index);

    return (
        <BaseBox texture={texture} x={x} y={y} className="EyeBox" {...others} />
    );
}

export default EyeBox;
