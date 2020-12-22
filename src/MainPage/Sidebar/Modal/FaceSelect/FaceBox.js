import { fbxSource } from "App";

function FaceBox(props) {
    const { eyeIdx, mouthIdx, eyeTexture, mouthTexture, classes } = props;
    const eyeImgPath = `${fbxSource}/fbx/${eyeTexture}/${eyeTexture}.png`;
    const mouthImgPath = `${fbxSource}/fbx/${mouthTexture}/${mouthTexture}.png`;

    return (
        <div className={classes["faceBox"]}>
            <div
                className={`${classes[`eye${eyeIdx}`]} ${classes["eyeBox"]}`}
                style={{ backgroundImage: `url(${eyeImgPath})` }}
            />
            <div
                className={`${classes[`mouth${mouthIdx}`]} ${
                    classes["mouthBox"]
                }`}
                style={{ backgroundImage: `url(${mouthImgPath})` }}
            />
        </div>
    );
}

export default FaceBox;
