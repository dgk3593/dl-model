import { FBX_SOURCE } from "@/dl-viewer/path";
import { getFaceOffset } from "@/dl-viewer";

export const getTexturePath = id => `${FBX_SOURCE}/${id}/${id}.png`;

export const indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const FACE_WIDTH = 64;

export const baseOffset = indexes.map(idx => {
    if (idx === 1) return [-280, -170];

    const n = (idx - 2) % 4;
    const m = Math.floor(idx / 6);
    const offsetX = -(24 + n * 128);
    const offsetY = -(298 + m * 128);
    return [offsetX, offsetY];
});

export const getEyeBgPosition = (texture, index) => {
    const [baseX, baseY] = baseOffset[index - 1];
    const [offsetX, offsetY] = getFaceOffset(texture);
    const dx = offsetX * 128;
    const dy = offsetY * 128;
    const x = baseX - dx;
    const y = baseY + dy;

    return { x, y };
};

export const getMouthBgPosition = (texture, index) => {
    const { x, y: eyeY } = getEyeBgPosition(texture, index);
    const y = eyeY - FACE_WIDTH / 2;

    return { x, y };
};
