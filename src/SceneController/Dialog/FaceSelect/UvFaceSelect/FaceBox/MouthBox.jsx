import BaseBox from "./BaseBox";
import { getMouthBgPosition } from "./helper";

function MouthBox({ texture, index, ...others }) {
    const { x, y } = getMouthBgPosition(texture, index);

    return (
        <BaseBox texture={texture} x={x} y={y} className="EyeBox" {...others} />
    );
}

export default MouthBox;
