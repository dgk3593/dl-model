import { makeStyles } from "@material-ui/core/styles";

const faceBGSize = "512px 512px";
const faceSize = "64px";

const useStyles = faceOffsetFix => {
    const { x, y } = faceOffsetFix;
    const xFix = x * 128;
    const yFix = y * 128;
    const baseOffset = Array(9)
        .fill()
        .map((_, i) => {
            const faceNumber = i + 1;
            if (faceNumber === 1) return [-280, -165];

            const n = (faceNumber - 2) % 4;
            const m = Math.floor(faceNumber / 6);
            const offsetX = -(24 + n * 128);
            const offsetY = -(293 + m * 128);
            return [offsetX, offsetY];
        });
    const bgPos = i => {
        const [offsetX, offsetY] = baseOffset[i - 1];
        return `${offsetX - xFix}px ${offsetY + yFix}px`;
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
    return makeStyles(styles)();
};

export default useStyles;
