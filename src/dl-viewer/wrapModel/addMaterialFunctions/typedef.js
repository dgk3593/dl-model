/**
 * @typedef {"Basic" | "Toon" | "Lambert" | "Phong" | "Standard" | "Matcap" | "Physical" | "MMDToon"} MaterialType
 *
 * @typedef {THREE.MeshBasicMaterial |
 *           THREE.MeshToonMaterial |
 *           THREE.MeshLambertMaterial |
 *           THREE.MeshPhongMaterial |
 *           THREE.MeshStandardMaterial |
 *           THREE.MeshMatcapMaterial |
 *           THREE.MeshPhysicalMaterial |
 *           import("./MMDToonMaterial").MMDToonMaterial } Material
 *
 * @typedef {object} MaterialParams
 * @property {string} type
 * @property {string} [matcap]
 * @property {ColorCode} [color]
 * @property {ColorCode} [emissive]
 * @property {ColorCode} [specular]
 * @property {number} [emissiveIntensity]
 * @property {number} [metalness]
 * @property {number} [roughness]
 * @property {number} [shininess]
 * @property {number} [opacity]
 * @property {number[] | 'none'} [gradientMap]
 * @property {boolean} [wireframe]
 * @property {boolean} [flatShading]
 * @property {boolean} [transparent]
 * @property {boolean} [showTexture]
 */
