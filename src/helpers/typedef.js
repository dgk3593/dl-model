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
 * @typedef {"Basic" | "Toon" | "Lambert" | "Phong" | "Standard"} MaterialType
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
 *
 * @typedef {Object} AppModelState
 * @property {string} id - id of the model being displayed
 * @property {string} texture - override model texture, default is empty
 * @property {string} eyeTexture - adventurer eyes texture, default is same as id
 * @property {number} eyeIdx - index of model's eyes, default is 2 for adventurer and 1 for dragon
 * @property {string} mouthTexture - adventurer mouth texture, default is same as id
 * @property {number} mouthIdx - index of model's mouth, default is 2 for adventurer and 1 for dragon
 * @property {string} weaponRight - id of weapon held in adventurer's right hand, default is empty
 * @property {string} weaponLeft - id of weapon held in adventurer's left hand, default is empty
 *
 * @typedef {Object} AppAniState
 * @property {string} code - animation code, default is getDefaultAni(modelId)
 * @property {number} timeScale - animation's global time scale, default is 1
 *
 * @typedef {Object} AppMatState
 * @property {MaterialType} type - type of material, default is Basic
 * @property {Boolean} wireframe - whether wireframe is enabled, default is false
 * @property {Boolean} useTexture - whether texture is displayed, default is true
 * @property {Boolean} transparent - whether transparency is enabled, default is false
 * @property {Boolean} flatShading - whether flat shading is enabled, default is false
 * @property {ColorCode} color - material color, default is white
 * @property {ColorCode} emissive - material emissive, default is black
 * @property {number} emissiveIntensity - material emissive's intensity, 0 < value < 1, default is 1
 * @property {number} opacity - material's opacity, 0 < value < 1, default is 1
 * @property {ColorCode} specular - material specular color, default is #111111
 * @property {number} metalness - material's metalness, 0 < value < 1, default is 0
 * @property {number} roughness - material's roughness, 0 < value < 1, default is 1
 * @property {number} shininess - material's shininess, 1 < value < 100, default is 30
 * @property {string} gradientMap - material's gradient map, default is "none"
 *
 * @typedef {Object} AppSceneState
 * @property {number} rotateSpeed - speed of auto rotation, upward spin, default is 0
 * @property {ColorCode} background - viewer's background color, default is #cccccc
 * @property {xyzCoordinate} initCameraPosition - initial camera position, default is null (auto)
 *
 * @typedef {Object} ChainMakerState
 * @property {AnimationChain} chain - animation chain in Chain Maker
 *
 * @typedef {Object} AppOutlineState
 * @property {Boolean} enable - whether outline is enabled, default is true
 * @property {number} size - outline's size, default is 5
 * @property {ColorCode} color - outline's color, default is black
 * @property {number} opacity - outline's opacity, 0 < value < 1, default is 1
 *
 * @typedef {Object} AppCaptureState
 * @property {Boolean} enable - whether animation is being captured
 * @property {string[]} supportedCodecs - list of supported codec
 * @property {string} codec - currently selected codec
 *
 * @typedef {Object} AppAsciiState
 * @property {Boolean} enable - whether ASCII mode is on, default is false
 * @property {string} charSet - character set used to generate ASCII art
 * @property {Boolean} invert - whether color is inverted before converting, default is false
 * @property {ColorCode} color - ASCII text color, default is green
 * @property {ColorCode} bgColor - ASCII background color, default is black
 *
 * @typedef {Object} AppMiscState
 * @property {string} sidebarContent - what's displayed in the sidebar
 * @property {Boolean} showSettings - whether to display sidebar and setting button, default is true
 * @property {Boolean} showAniControl - whether to display animation control, default is true
 * @property {Boolean} antiAliasing - whether Anti Aliasing is enabled, default is false
 * @property {string} viewerType - type of the current viewer component
 *
 * @typedef {Object} ApplicationState
 * @property {AppSceneState} scene - data related to viewer scene
 * @property {LightParam[]} lights - lighting settings
 * @property {AppModelState} model - model related data
 * @property {AppMatState} material - data related to model's material
 * @property {AppOutlineState} outline - model's outline settings
 * @property {AppAniState} animation - animation related data
 * @property {ChainMakerState} chainMaker - Chain Maker data
 * @property {AppCaptureState} capture - animation capture settings
 * @property {AppAsciiState} ascii - ASCII mode settings
 * @property {AppMiscState} app - other app-related settings
 */
