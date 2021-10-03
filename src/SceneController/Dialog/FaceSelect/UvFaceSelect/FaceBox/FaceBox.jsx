import EyeBox from "./EyeBox";
import MouthBox from "./MouthBox";
import "./FaceBox.css";

function FaceBox({ eyeTexture, eyeIdx, mouthTexture, mouthIdx, ...others }) {
    return (
        <div className="FaceBox" {...others}>
            <EyeBox texture={eyeTexture} index={eyeIdx} />
            <MouthBox texture={mouthTexture} index={mouthIdx} />
        </div>
    );
}

export default FaceBox;
