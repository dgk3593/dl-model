// Custom THREE.js module for reducing bundle size and improving performance.
// ============================================================================
// 1. CORE ENGINE & GRAPHICS RENDERER
// ============================================================================
import {
  Object3D,
  Scene,
  WebGLRenderer,
  WebGLRenderTarget,
  Timer,
  EventDispatcher,
} from "three";

// ============================================================================
// 2. CAMERAS, MATHEMATICS, & RAYCASTING
// ============================================================================
import {
  PerspectiveCamera,
  OrthographicCamera,
  CubeCamera,
  Frustum,
  Ray,
  Raycaster,
  Vector2,
  Vector3,
  Quaternion,
  Euler,
  Matrix3,
  Matrix4,
  MathUtils,
} from "three";

// ============================================================================
// 3. LIGHTING, HELPERS, & SHADOW MAPS
// ============================================================================
import {
  Light,
  AmbientLight,
  DirectionalLight,
  PointLight,
  SpotLight,
  HemisphereLight,
  DirectionalLightHelper,
  PointLightHelper,
  SpotLightHelper,
  GridHelper,
  AxesHelper,
  BasicShadowMap,
  PCFShadowMap,
  PCFSoftShadowMap,
  VSMShadowMap,
} from "three";

// ============================================================================
// 4. GEOMETRY, MESHES, & SCENE NODES
// ============================================================================
import {
  BufferGeometry,
  BoxGeometry,
  SphereGeometry,
  PlaneGeometry,
  BufferAttribute,
  Mesh,
  Group,
  Bone,
  Points,
  Line,
} from "three";

// ============================================================================
// 5. MATERIALS & SHADERS
// ============================================================================
import {
  Material,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  MeshToonMaterial,
  MeshStandardMaterial,
  MeshPhysicalMaterial,
  MeshMatcapMaterial,
  ShaderMaterial,
  ShadowMaterial,
  Uniform,
  UniformsGroup,
} from "three";

// ============================================================================
// 6. TEXTURES & ENGINE CONSTANTS (Color, Blending, Depth, Tone Mapping)
// ============================================================================
import {
  Texture,
  DataTexture,
  Loader,
  ImageLoader,
  MaterialLoader,
  TextureLoader,
  CubeTextureLoader,
  Color,
  // Color Spaces & Formats
  SRGBColorSpace,
  LinearSRGBColorSpace,
  NoColorSpace,
  RGBAFormat,
  RedFormat,
  // Filters
  LinearFilter,
  NearestFilter,
  // Tone Mapping
  NoToneMapping,
  LinearToneMapping,
  ReinhardToneMapping,
  CineonToneMapping,
  ACESFilmicToneMapping,
  // Sides & Depth
  FrontSide,
  BackSide,
  DoubleSide,
  NeverDepth,
  AlwaysDepth,
  LessDepth,
  LessEqualDepth,
  EqualDepth,
  GreaterEqualDepth,
  GreaterDepth,
  NotEqualDepth,
  // Blending
  NoBlending,
  NormalBlending,
  AdditiveBlending,
  SubtractiveBlending,
  MultiplyBlending,
  CustomBlending,
  MaterialBlending,
} from "three";

// ============================================================================
// 7. ANIMATION TRACKS & TIMELINES
// ============================================================================
import {
  AnimationMixer,
  AnimationClip,
  AnimationAction,
  AnimationUtils,
  KeyframeTrack,
  VectorKeyframeTrack,
  QuaternionKeyframeTrack,
  LoopOnce,
  LoopPingPong,
  LoopRepeat,
} from "three";

// ============================================================================
// COMBINED EXPORT OBJECT
// ============================================================================
export const THREE = {
  // 1. Core Engine & Graphics Renderer
  Object3D,
  Scene,
  WebGLRenderer,
  WebGLRenderTarget,
  Timer,
  EventDispatcher,

  // 2. Cameras, Mathematics, & Raycasting
  PerspectiveCamera,
  OrthographicCamera,
  CubeCamera,
  Frustum,
  Ray,
  Raycaster,
  Vector2,
  Vector3,
  Quaternion,
  Euler,
  Matrix3,
  Matrix4,
  MathUtils,

  // 3. Lighting, Helpers, & Shadow Maps
  Light,
  AmbientLight,
  DirectionalLight,
  PointLight,
  SpotLight,
  HemisphereLight,
  DirectionalLightHelper,
  PointLightHelper,
  SpotLightHelper,
  GridHelper,
  AxesHelper,
  BasicShadowMap,
  PCFShadowMap,
  PCFSoftShadowMap,
  VSMShadowMap,

  // 4. Geometry, Meshes, & Scene Nodes
  BufferGeometry,
  BoxGeometry,
  SphereGeometry,
  PlaneGeometry,
  BufferAttribute,
  Mesh,
  Group,
  Bone,
  Points,
  Line,

  // 5. Materials & Shaders
  Material,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  MeshToonMaterial,
  MeshStandardMaterial,
  MeshPhysicalMaterial,
  MeshMatcapMaterial,
  ShaderMaterial,
  ShadowMaterial,
  Uniform,
  UniformsGroup,

  // 6. Textures & Engine Constants
  Texture,
  DataTexture,
  Loader,
  ImageLoader,
  MaterialLoader,
  TextureLoader,
  CubeTextureLoader,
  Color,
  SRGBColorSpace,
  LinearSRGBColorSpace,
  NoColorSpace,
  RGBAFormat,
  RedFormat,
  LinearFilter,
  NearestFilter,
  NoToneMapping,
  LinearToneMapping,
  ReinhardToneMapping,
  CineonToneMapping,
  ACESFilmicToneMapping,
  FrontSide,
  BackSide,
  DoubleSide,
  NeverDepth,
  AlwaysDepth,
  LessDepth,
  LessEqualDepth,
  EqualDepth,
  GreaterEqualDepth,
  GreaterDepth,
  NotEqualDepth,
  NoBlending,
  NormalBlending,
  AdditiveBlending,
  SubtractiveBlending,
  MultiplyBlending,
  CustomBlending,
  MaterialBlending,

  // 7. Animation Tracks & Timelines
  AnimationMixer,
  AnimationClip,
  AnimationAction,
  AnimationUtils,
  KeyframeTrack,
  VectorKeyframeTrack,
  QuaternionKeyframeTrack,
  LoopOnce,
  LoopPingPong,
  LoopRepeat,
};
