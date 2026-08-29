export {};

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
 * @typedef {import("./wrapModel/addAnimation/typedef.js").AniMod} AniMod
 * @typedef {import("./wrapModel/addAnimation/typedef.js").AniAction} AniAction
 * @typedef {import("./wrapModel/addMaterialFunctions/typedef.js").MaterialParams} MaterialParams
 * @typedef {import("./wrapModel/addMaterialFunctions/typedef.js").Material} Material
 * @typedef {import("./wrapModel/addOutlineFunctions/typedef.js").OutlineParams} OutlineParams
 *
 *
 * @typedef {object} DLModelAttachment
 * @property {Array<DLModel>} [list]
 * @property {(callback: (attachment: DLModel) => void) => void} traverse
 *
 *
 * @typedef {object} DLModelAnimationCurrent
 * @property {string} [chainName]
 * @property {string} [chainCode]
 * @property {number} [chainLength]
 * @property {number} [aniIdx]
 * @property {number} [clipDuration]
 * @property {number} [clipTimeScale]
 * @property {object} [action]
 * @property {AniAction[]} [aniAction]
 * @property {number} [aniActionPointer]
 *
 *
 * @typedef {object} DLModelAnimation
 * @property {object} mixer
 * @property {Record<string, object>} chain
 * @property {DLModelAnimationCurrent} current
 * @property {() => string} toString
 * @property {(chainCode: string, params?: { name?: string, autoplay?: boolean }) => Promise<void>} addChain
 * @property {(chainName?: string) => void} play
 * @property {() => void} pause
 * @property {() => void} resume
 * @property {() => void} stop
 * @property {() => void} reset
 * @property {(dt: number) => void} update
 * @property {(aniAction: AniAction) => void} applyAniAction
 * @property {(nFrames?: number, fps?: number) => void} nextFrame
 * @property {(t: number) => void} setTime
 * @property {boolean} isPaused
 * @property {number} aniIdx
 *
 *
 * @typedef {object} DLModelPart
 * @property {object[]} _meshes
 * @property {string[]} list
 * @property {string} default
 * @property {string} current
 * @property {number} index
 * @property {() => void} reset
 *
 *
 * @typedef {object} DLModelParts
 * @property {string[]} list
 * @property {object[]} others
 * @property {() => void} reset
 *
 *
 * @typedef {object} DLModelMaterial
 * @property {string} code
 * @property {MaterialParams} [type]
 * @property {boolean} [flatShading]
 * @property {boolean} [showTexture]
 * @property {string} [matcap]
 * @property {number[] | 'none'} [gradientMap]
 * @property {Material[]} list
 * @property {string[]} propList
 * @property {(code: string) => void} code
 *
 *
 * @typedef {object} DLModel
 * @property {true} isDLModel
 * @property {object} model
 * @property {string} id
 * @property {string} uniqueId
 * @property {DLModelType} type
 * @property {object} viewer
 * @property {object} userData
 * @property {number} _time
 * @property {(dt: number) => void} update
 * @property {(type: string, listener: Function) => Function} addEventListener
 * @property {(type: string, listener: Function) => void} removeEventListener
 * @property {(type: string, listener: Function) => boolean} hasEventListener
 * @property {(event: object) => void} dispatchEvent
 * @property {(type: string, listener: Function, count: number) => void} addCountedEventListener
 * @property {DLModelAttachment} [attachment]
 * @property {DLModelMaterial} [material]
 * @property {DLModelParts} [parts]
 * @property {string} [texture]
 * @property {() => void} [dispose]
 * @property {(object: object, boneName?: string) => void} [attach]
 * @property {(object: object, boneName?: string) => void} [remove]
 * @property {() => void} [detach]
 * @property {(target: { attach?: Function }, boneName?: string) => void} [attachTo]
 * @property {string | number | [number, number, number]} [scale]
 * @property {boolean | string} [visible]
 * @property {OutlineParams} [outline]
 * @property {DLModelAnimation} [animation]
 * @property {object[]} [meshes]
 * @property {object[]} [bones]
 */
