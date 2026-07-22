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
    background: "#0b0d0c",
    wall: "#111411",
    rock: "#70726d",
    key: "#e8ebe5",
    rim: "#a8b0ae",
    ambient: "#ccd0ca",
  },
  camera: {
    fov: 33,
    near: 0.1,
    far: 40,
    position: [0.15, 0.02, 5.8] as Vector3Tuple,
    target: [0.34, -0.02, 0] as Vector3Tuple,
  },
  model: {
    startPosition: [0.72, -0.04, 0] as Vector3Tuple,
    endPosition: [0.44, 0.1, 0.16] as Vector3Tuple,
    startRotation: [-0.24, 0.02, -0.24] as Vector3Tuple,
    endRotation: [0.2, 1.36, 0.1] as Vector3Tuple,
    startScale: 1.3,
    endScale: 1.18,
  },
  procedural: {
    seed: 1948,
    detail: 5,
    radius: 1,
    noiseFrequency: 2.7,
    noiseAmplitude: 0.19,
    microFrequency: 9.2,
    microAmplitude: 0.072,
  },
  material: {
    color: "#70726d",
    roughness: 0.74,
    metalness: 0.03,
    envMapIntensity: 0.68,
  },
  lights: {
    ambientIntensity: 0.18,
    keyPositionStart: [-4.6, 4.1, 5.2] as Vector3Tuple,
    keyPositionEnd: [-2.2, 3.1, 4.4] as Vector3Tuple,
    keyIntensityStart: 1.05,
    keyIntensityEnd: 4.1,
    rimPosition: [4.4, 1.2, -3.6] as Vector3Tuple,
    rimIntensity: 2.85,
  },
  fog: {
    startDensity: 0.105,
    endDensity: 0.042,
  },
  depthOfField: {
    startFocusDistance: 5.45,
    endFocusDistance: 5.8,
    focusRange: 0.92,
    startBokehScale: 0.6,
    endBokehScale: 0.08,
    resolutionScale: 0.55,
  },
} as const;
