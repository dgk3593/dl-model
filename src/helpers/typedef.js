/**
 * @typedef {"1" | "2" | "3" | "4" | "5" | "6"} Rarity
 *
 * @typedef {"Flame" | "Water" | "Wind" | "Light" | "Shadow" | "None"} DLElement
 *
 * @typedef {"Sword" | "Blade" | "Dagger" | "Axe" | "Lance" | "Bow" | "Wand" | "Staff" | "Manacaster"} WeaponType
 *
 * @typedef {Object} ModelData
 * @property {string} id - Model ID
 * @property {string} name - Model's name
 * @property {string} [iconName] - Name of model's icon
 * @property {string} [title] - Model's title
 * @property {Rarity} [rarity] - Model's rarity
 * @property {DLElement} [element] - Model's element
 * @property {WeaponType} [weapon] - Model's weapon type
 *
 * @typedef {Object} FaceMod encode a face modification
 * @property {number} time - time when the modification happens
 * @property {string} [id] - id of the modification
 * @property {string} [eyeIdx] - index of eyes to change to
 * @property {string} [mouthIdx] - index of mouth to change to
 *
 * @typedef {Array<FaceMod>} FaceChangeArray array of face modifiers
 *
 * @typedef {Object} AniModifier - object containing animation name and modifiers
 * @property {number} timeScale - local time scale
 * @property {number} repetitions - number of repetitions
 * @property {FaceChangeArray} faceChanges - facial expression data
 *
 * @typedef {Object} AniListItem
 * @property {string} aniName - name of animation
 * @property {number} timeScale - local time scale
 * @property {number} repetitions - number of repetitions
 * @property {FaceChangeArray} faceChanges - facial expression data
 *
 * @typedef {Object} AniChainItem - element of animation chain for chain maker tool
 * @property {string} name - name of chain item
 * @property {string} id - id of chain item
 * @property {string} aniName - name of animation
 * @property {number} timeScale - local time scale
 * @property {number} repetitions - number of repetitions
 * @property {Array} faceChanges - facial expression data
 *
 * @typedef { Array<AniListItem> } AniList
 *
 * @typedef { Array<AniChainItem> } AnimationChain
 *
 * @typedef {{ [groupName: string]: Array<string> }} FilterGroups
 *
 * @typedef {{ [filterKey: string]: Boolean }} FilterGroupState
 *
 * @typedef {{ [groupName: string]: FilterGroupState }} FilterState
 *
 * @typedef { Array< [propName: string, valueList: string[]] > } FilterConditions
 *
 * @typedef {{ name: string, type: string, default: *, [others: string]: * }} MatParamDetails
 *
 * @typedef { [ x:number, y:number ] } xyCoordinate
 *
 * @typedef { [ x:number, y:number, z:number ] } xyzCoordinate
 *
 * @typedef {{ r:number, g:number, b:number }} RGBTriplet
 *
 * @typedef {`#${string}`} ColorCode
 *
 * @typedef {Object} LightParam
 * @property {string} [id] - Light ID
 * @property {string} type - Type of light
 * @property {ColorCode} color - Light color
 * @property {Boolean} [enable] - true if enabled
 * @property {number} intensity - Light intensity
 * @property {xyzCoordinate} [position] - Light position
 *
 * @typedef {Object} OutlineParams
 * @property {number} size
 * @property {ColorCode} color
 * @property {number} opacity
 * @property {Boolean} enable
 *
 * @typedef {Object} AdvWeaponData
 * @property {string} modelPath
 * @property {string} texturePath
 * @property {Boolean} flipped
 *
 * @typedef {Object} AnimationData
 * @property {string} name
 * @property {string} code
 * @property {string} [icon]
 * @property {string} [subtitle]
 *
 * @typedef { AnimationData[] } AnimationList
 *
 * @typedef {Object} AdvAniData
 * @property {string} icon
 * @property {AnimationList} animations
 */
