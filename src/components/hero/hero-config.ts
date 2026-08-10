export type HeroVisualMode = "procedural" | "glb";

export type Vector3Tuple = [number, number, number];

/**
 * Keep this on "procedural" until /public/models/hero-rock.glb exists.
 * The GLB component is rendered conditionally, so procedural mode never requests it.
 */
export const HERO_VISUAL_MODE: HeroVisualMode = "procedural";

export const HERO_CONFIG = {
  glb: {
    url: "/models/hero-rock.glb",
  },
  colors: {
    background: "#d7d7d2",
    wall: "#c8c8c2",
    rock: "#696c67",
    key: "#ffffff",
    fill: "#b8bdb7",
    rim: "#9ea39f",
    ambient: "#d9dbd6",
  },
  camera: {
    fov: 31,
    near: 0.1,
    far: 40,
    position: [0.2, 0.03, 5.65] as Vector3Tuple,
    target: [0.42, -0.02, 0] as Vector3Tuple,
  },
  model: {
    startPosition: [1.28, 0.02, 0.02] as Vector3Tuple,
    endPosition: [0.64, 0.12, 0.18] as Vector3Tuple,
    startRotation: [-0.2, -0.34, -0.2] as Vector3Tuple,
    endRotation: [0.18, 1.22, 0.06] as Vector3Tuple,
    startScale: 1.3,
    endScale: 1.06,
  },
  procedural: {
    seed: 1948,
    detail: 6,
    radius: 1,
    noiseFrequency: 2.7,
    noiseAmplitude: 0.2,
    microFrequency: 10.5,
    microAmplitude: 0.082,
    strataFrequency: 18.5,
    strataDepth: 0.052,
    chipFrequency: 18.5,
    chipDepth: 0.044,
  },
  material: {
    color: "#696c67",
    roughness: 0.78,
    metalness: 0.03,
    envMapIntensity: 1.02,
  },
  lights: {
    ambientIntensity: 0.17,
    keyPositionStart: [4.6, 2.35, 5.1] as Vector3Tuple,
    keyPositionEnd: [3.25, 3.4, 4.5] as Vector3Tuple,
    keyIntensityStart: 3.8,
    keyIntensityEnd: 3.8,
    fillPosition: [-3.2, -0.55, 2.8] as Vector3Tuple,
    fillIntensity: 0.3,
    rimPosition: [-4.8, 0.9, -3.6] as Vector3Tuple,
    rimIntensity: 2.05,
  },
  fog: {
    startDensity: 0.078,
    endDensity: 0.046,
  },
  depthOfField: {
    startFocusDistance: 5.32,
    endFocusDistance: 5.74,
    focusRange: 0.92,
    startBokehScale: 0.13,
    endBokehScale: 0.09,
    resolutionScale: 0.55,
  },
} as const;
