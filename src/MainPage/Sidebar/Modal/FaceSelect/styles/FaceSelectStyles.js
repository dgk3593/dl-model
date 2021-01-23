import { makeStyles } from "@material-ui/core/styles";

const faceBGSize = "512px 512px";
const faceSize = 64;

/**
 * @param {xyCoordinate} eyeOffsetFix
 * @param {xyCoordinate} mouthOffsetFix
 */
const useStyles = (eyeOffsetFix, mouthOffsetFix) => {
    const indexes = Array(9)
        .fill()
        .map((_, i) => i + 1);
    const baseOffset = indexes.map(idx => {
        if (idx === 1) return [-280, -170];

        const n = (idx - 2) % 4;
        const m = Math.floor(idx / 6);
        const offsetX = -(24 + n * 128);
        const offsetY = -(298 + m * 128);
        return [offsetX, offsetY];
    });

    const [eyeX, eyeY] = eyeOffsetFix;
    const eyeXFix = eyeX * 128;
    const eyeYFix = eyeY * 128;
    const eyeBgPos = i => {
        const [offsetX, offsetY] = baseOffset[i - 1];
        return `${offsetX - eyeXFix}px ${offsetY + eyeYFix}px`;
    };

    const [mouthX, mouthY] = mouthOffsetFix;
    const mouthXFix = mouthX * 128;
    const mouthYFix = mouthY * 128;
    const mouthBgPos = i => {
        const [offsetX, offsetY] = baseOffset[i - 1];
        return `${offsetX - mouthXFix}px ${
            offsetY + mouthYFix - faceSize / 2
        }px`;
    };

    const styles = {
        root: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: "0.5rem",
            margin: "0.5rem",
        },
        faceBox: {
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
        },
        eyeBox: {
            width: `${faceSize}px`,
            height: `${faceSize / 2}px`,
            backgroundSize: faceBGSize,
            borderRadius: "0.5rem 0.5rem 0 0",
        },
        mouthBox: {
            width: `${faceSize}px`,
            height: `${faceSize / 2}px`,
            backgroundSize: faceBGSize,
            borderRadius: "0 0 0.5rem 0.5rem",
        },
    };
    for (let i = 1; i <= 9; i++) {
        styles[`eye${i}`] = {
            backgroundPosition: eyeBgPos(i),
        };
        styles[`mouth${i}`] = {
            backgroundPosition: mouthBgPos(i),
        };
    }
    // @ts-ignore
    return makeStyles(styles)();
};

export default useStyles;
