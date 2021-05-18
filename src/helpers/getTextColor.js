/** convert hex color code to rgb triplet
 * @param {ColorCode} hex
 * @return {RGBTriplet}
 */
const hexToRgb = hex => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
};

/**
 * @param {RGBTriplet} color
 */
const getBrightness = ({ r, g, b }) => (r * 299 + g * 587 + b * 114) / 1000;

/** get the suitable text color for a given background color
 * @param {ColorCode | 'camera'} background
 */
export const getTextColor = background => {
    if (background === "camera") return "#ffffff";

    const rgb = hexToRgb(background);
    return getBrightness(rgb) > 128 ? "#000000" : "#ffffff";
};

export default getTextColor;
