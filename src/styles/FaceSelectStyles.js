import { makeStyles } from "@material-ui/core/styles";

const faceBGSize = "512px 512px";
const faceSize = "64px";

const bgPos = i => {
    if (i === 1)
        // face 1
        return "-280px -165px";

    // other faces
    const n = (i - 2) % 4;
    const m = Math.floor(i / 6);
    const offsetX = -(24 + n * 128);
    const offsetY = -(293 + m * 128);
    return `${offsetX}px ${offsetY}px`;
};

const styles = {
    FaceSelect: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "0.5rem",
        margin: "0.5rem",
    },
    faceBox: {
        width: faceSize,
        height: faceSize,
        backgroundSize: faceBGSize,
        borderRadius: "0.5rem",
    },
};
for (let i = 1; i <= 9; i++) {
    const key = `face${i}`;
    styles[key] = {
        backgroundPosition: bgPos(i),
    };
}

const useStyles = makeStyles(styles);

export default useStyles;
