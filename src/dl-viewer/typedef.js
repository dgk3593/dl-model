/**
 * @typedef {Object} PerspectiveCamParams
 * @property {"Perspective"} [type]
 * @property {number} [fov]
 * @property {number} [aspect]
 * @property {number} [near]
 * @property {number} [far]
 *
 *
 * @typedef {'adventurer'   |
 *           'spAdventurer' |
 *           'boss'         |
 *           'dragon'       |
 *           'enemy'        |
 *           'high boss'    |
 *           'object'       |
 *           'other'        |
 *           'raid boss'    |
 *           'story'        |
 *           'weapon'
 * } DLModelType
 *
 *
 * @typedef {`#${string}` | string} ColorCode
 *
 *
 * @typedef {[number, number]} xyCoordinate
 * @typedef {[number, number, number]} xyzCoordinate
 *
 *
 * @typedef {object} EventDispatcher
 * @property { (type: string, listener: function) => function } addEventListener - add listener that runs every time
 * @property { (type: string, listener: function) => void } removeEventListener - remove event listener
 * @property { (type: string, listener: function) => boolean } hasEventListener - check if a listener is registered
 * @property { (event: object) => void } dispatchEvent - dispatch event
 * @property { (type: string, listener: function, count: number) => void } addCountedEventListener - add listener that runs for [count] times
 * @property {{ [type: string]: function[] }} [_listeners] - store registered listeners
 *
 *
 * @typedef {{ isDLModel: true, [key:string]: * }} DLModel
 */
