/**
 * @typedef {Object} ExportType
 * @property {string} format
 * @property {string} name
 * @property {string[]} options
 */
/**
 * @type {ExportType[]}
 */
const exportOptions = [
    { format: "stl", name: "STL", options: ["binary"] },
    { format: "ply", name: "PLY", options: ["binary"] },
    // { format: "gltf", name: "glTF", options: ["binary"] },
    // { format: "usdz", name: "USDZ", options: [] },
];
export default exportOptions;
