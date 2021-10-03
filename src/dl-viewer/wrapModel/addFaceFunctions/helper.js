import { idxOffset } from "./idxOffset";
import { getFaceOffset } from "@/dl-viewer/utils/data";

const getIdxOffset = idx => idxOffset[`face${idx}`];

/** calculate the difference between 2 face indexes
 * @param {number} newIdx
 * @param {number} oldIdx
 * @return {xyCoordinate}
 */
export const calculateIdxOffset = (newIdx, oldIdx) => {
    const offset = { x: 0, y: 0 };
    if (newIdx !== oldIdx) {
        const [oldOffsetX, oldOffsetY] = getIdxOffset(oldIdx);
        const [newOffsetX, newOffsetY] = getIdxOffset(newIdx);

        offset.x = newOffsetX - oldOffsetX;
        offset.y = newOffsetY - oldOffsetY;
    }
    return [offset.x, offset.y];
};

/** calculate the difference between 2 face texture files
 * @param {string} newTexture
 * @param {string} oldTexture
 * @return {xyCoordinate}
 */
export const calculateTextureOffset = (newTexture, oldTexture) => {
    const offset = { x: 0, y: 0 };
    if (newTexture !== oldTexture) {
        const [oldOffsetX, oldOffsetY] = getFaceOffset(oldTexture);
        const [newOffsetX, newOffsetY] = getFaceOffset(newTexture);

        offset.x = newOffsetX - oldOffsetX;
        offset.y = newOffsetY - oldOffsetY;
    }
    return [offset.x, offset.y];
};
