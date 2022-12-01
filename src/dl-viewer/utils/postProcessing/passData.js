/**
 * @typedef {object} PassData
 * @property {string} name
 * @property {string[]} propList
 */
/**
 * @type {{ [type: string]: PassData }}
 */
export const passData = {
    bloom: {
        name: "Bloom",
        propList: ["enabled", "radius", "strength", "threshold"],
    },
    pixel: {
        name: "Pixelate",
        propList: ["enabled", "size"],
    },
    afterimage: {
        name: "Afterimage",
        propList: ["enabled", "damp"],
    },
    sobel: {
        name: "Sobel",
        propList: ["enabled"],
    },
    halftone: {
        name: "Halftone",
        propList: ["enabled", "greyscale", "radius", "scatter", "shape"],
    },
    dotscreen: {
        name: "Dot Screen",
        propList: ["enabled", "scale"],
    },
    bokeh: {
        name: "Bokeh",
        propList: ["enabled", "focus", "aperture", "aspect"],
    },
    smaa: {
        name: "SMAA",
        propList: ["enabled"],
    },
};

export const passTypes = Object.entries(passData).map(([value, { name }]) => ({
    value,
    label: name,
}));
