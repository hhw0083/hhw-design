"use client";

import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { HERO_CONFIG } from "./hero-config";
import type { HeroRenderQuality } from "./hero-config";

const smooth = (value: number) => value * value * (3 - 2 * value);
const mix = (a: number, b: number, amount: number) => a + (b - a) * amount;

function hash3(x: number, y: number, z: number, seed: number) {
  const value = Math.sin(
    x * 127.1 + y * 311.7 + z * 74.7 + seed * 0.173,
  ) * 43758.5453123;
  return (value - Math.floor(value)) * 2 - 1;
}

function valueNoise3(x: number, y: number, z: number, seed: number) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const iz = Math.floor(z);
  const fx = smooth(x - ix);
  const fy = smooth(y - iy);
  const fz = smooth(z - iz);

  const x00 = mix(hash3(ix, iy, iz, seed), hash3(ix + 1, iy, iz, seed), fx);
  const x10 = mix(
    hash3(ix, iy + 1, iz, seed),
    hash3(ix + 1, iy + 1, iz, seed),
    fx,
  );
  const x01 = mix(
    hash3(ix, iy, iz + 1, seed),
    hash3(ix + 1, iy, iz + 1, seed),
    fx,
  );
  const x11 = mix(
    hash3(ix, iy + 1, iz + 1, seed),
    hash3(ix + 1, iy + 1, iz + 1, seed),
    fx,
  );

  return mix(mix(x00, x10, fy), mix(x01, x11, fy), fz);
}

function fbm(x: number, y: number, z: number, seed: number) {
  let frequency = 1;
  let amplitude = 0.58;
  let total = 0;
  let normalizer = 0;

  for (let octave = 0; octave < 5; octave += 1) {
    total += valueNoise3(x * frequency, y * frequency, z * frequency, seed + octave * 19) * amplitude;
    normalizer += amplitude;
    frequency *= 2.03;
    amplitude *= 0.49;
  }

  return total / normalizer;
}

function angularLobe(
  normal: THREE.Vector3,
  direction: THREE.Vector3,
  width: number,
  strength: number,
) {
  const distance = 1 - normal.dot(direction);
  return strength * Math.exp(-(distance * distance) / (2 * width * width));
}

function createRockGeometry(detail: number) {
  const config = HERO_CONFIG.procedural;
  const geometry = new THREE.IcosahedronGeometry(
    config.radius,
    detail,
  );
  const positions = geometry.attributes.position as THREE.BufferAttribute;
  const colors = new Float32Array(positions.count * 3);
  const normal = new THREE.Vector3();
  const baseColor = new THREE.Color(HERO_CONFIG.material.color);
  const strataDirection = new THREE.Vector3(0.74, -0.18, 0.65).normalize();
  const chipDirection = new THREE.Vector3(-0.34, 0.82, 0.46).normalize();

  const lobes = [
    {
      direction: new THREE.Vector3(0.84, 0.46, 0.19).normalize(),
      width: 0.2,
      strength: 0.38,
    },
    {
      direction: new THREE.Vector3(-0.72, -0.42, 0.55).normalize(),
      width: 0.27,
      strength: 0.24,
    },
    {
      direction: new THREE.Vector3(0.18, -0.7, -0.68).normalize(),
      width: 0.23,
      strength: 0.16,
    },
    {
      direction: new THREE.Vector3(0.28, 0.14, 0.95).normalize(),
      width: 0.2,
      strength: -0.33,
    },
    {
      direction: new THREE.Vector3(-0.48, 0.78, -0.4).normalize(),
      width: 0.25,
      strength: -0.21,
    },
  ];

  for (let index = 0; index < positions.count; index += 1) {
    normal.fromBufferAttribute(positions, index).normalize();

    const broadNoise = fbm(
      normal.x * config.noiseFrequency,
      normal.y * config.noiseFrequency,
      normal.z * config.noiseFrequency,
      config.seed,
    );
    const microNoise = valueNoise3(
      normal.x * config.microFrequency,
      normal.y * config.microFrequency,
      normal.z * config.microFrequency,
      config.seed + 401,
    );
    const grainNoise = valueNoise3(
      normal.x * 27.5,
      normal.y * 27.5,
      normal.z * 27.5,
      config.seed + 809,
    );
    const strataCoordinate =
      normal.dot(strataDirection) * config.strataFrequency;
    const strataSpacing =
      0.84 +
      fbm(
        normal.x * 1.35 + 4.2,
        normal.y * 1.35 - 1.7,
        normal.z * 1.35 + 2.6,
        config.seed + 211,
      ) *
        0.22;
    const strataWarp =
      fbm(
        normal.x * 3.4 - 2.1,
        normal.y * 3.4 + 5.3,
        normal.z * 3.4 + 1.4,
        config.seed + 613,
      ) * 2.8;
    const strataWave = Math.sin(
      strataCoordinate * strataSpacing +
        strataWarp +
        Math.sin(strataCoordinate * 0.31) * 0.72,
    );
    const strataBreakup = THREE.MathUtils.smoothstep(
      valueNoise3(
        normal.x * 5.1 + 3.7,
        normal.y * 5.1 - 2.4,
        normal.z * 5.1 + 6.2,
        config.seed + 977,
      ),
      -0.34,
      0.54,
    );
    const strataGroove =
      Math.pow(Math.max(0, 1 - Math.abs(strataWave)), 3.5) *
      config.strataDepth *
      (0.28 + strataBreakup * 0.72);
    const chipNoise = Math.max(
      0,
      valueNoise3(
        normal.x * config.chipFrequency + chipDirection.x,
        normal.y * config.chipFrequency + chipDirection.y,
        normal.z * config.chipFrequency + chipDirection.z,
        config.seed + 1307,
      ) - 0.16,
    );
    const lobeDisplacement = lobes.reduce(
      (sum, lobe) =>
        sum +
        angularLobe(normal, lobe.direction, lobe.width, lobe.strength),
      0,
    );

    const ridge =
      Math.abs(
        valueNoise3(
          normal.x * 5.4 + 1.7,
          normal.y * 4.7 - 0.8,
          normal.z * 5.1 + 2.2,
          config.seed + 97,
        ),
      ) - 0.5;
    const radius =
      1 +
      broadNoise * config.noiseAmplitude +
      microNoise * config.microAmplitude +
      ridge * 0.11 -
      strataGroove +
      chipNoise * config.chipDepth +
      lobeDisplacement;

    const taper = 1 - Math.max(0, normal.y) * 0.17;
    let x = normal.x * radius * 1.42 * taper;
    let y = normal.y * radius * 1.08;
    let z = normal.z * radius * 0.79;

    const twist = normal.y * 0.42 + broadNoise * 0.09;
    const cos = Math.cos(twist);
    const sin = Math.sin(twist);
    const twistedX = x * cos - z * sin;
    const twistedZ = x * sin + z * cos;
    x = twistedX + 0.23 * (normal.y * normal.y - 0.28) - 0.08 * normal.y;
    z = twistedZ + 0.1 * normal.x * normal.y;
    y += 0.08 * normal.x - 0.05 * normal.z * normal.z;

    positions.setXYZ(index, x, y, z);

    const shade = THREE.MathUtils.clamp(
      broadNoise * 0.12 +
        microNoise * 0.08 +
        grainNoise * 0.095 -
        strataGroove * 2.2 +
        chipNoise * 0.06 -
        normal.y * 0.018,
      -0.28,
      0.26,
    );
    const vertexColor = baseColor.clone().offsetHSL(
      strataGroove * -0.02,
      chipNoise * -0.025,
      shade,
    );
    colors[index * 3] = vertexColor.r;
    colors[index * 3 + 1] = vertexColor.g;
    colors[index * 3 + 2] = vertexColor.b;
  }

  positions.needsUpdate = true;
  geometry.deleteAttribute("normal");
  geometry.deleteAttribute("uv");
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const mergedGeometry = mergeVertices(geometry, 0.0001);
  mergedGeometry.computeVertexNormals();
  mergedGeometry.computeBoundingSphere();
  mergedGeometry.computeBoundingBox();
  geometry.dispose();

  return mergedGeometry;
}

function createRockMaterial(shaderOctaves: number) {
  const material = new THREE.MeshStandardMaterial({
    color: HERO_CONFIG.material.color,
    flatShading: true,
    roughness: HERO_CONFIG.material.roughness,
    metalness: HERO_CONFIG.material.metalness,
    envMapIntensity: HERO_CONFIG.material.envMapIntensity,
    vertexColors: true,
  });

  material.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace(
        "#include <common>",
        "#include <common>\nvarying vec3 vRockPosition;",
      )
      .replace(
        "#include <begin_vertex>",
        "#include <begin_vertex>\nvRockPosition = position;",
      );

    const proceduralNoise = `
      varying vec3 vRockPosition;

      float rockHash(vec3 point) {
        return fract(sin(dot(point, vec3(127.1, 311.7, 74.7)) + 1948.0) * 43758.5453);
      }

      float rockNoise(vec3 point) {
        vec3 cell = floor(point);
        vec3 local = fract(point);
        local = local * local * (3.0 - 2.0 * local);

        float n000 = rockHash(cell + vec3(0.0, 0.0, 0.0));
        float n100 = rockHash(cell + vec3(1.0, 0.0, 0.0));
        float n010 = rockHash(cell + vec3(0.0, 1.0, 0.0));
        float n110 = rockHash(cell + vec3(1.0, 1.0, 0.0));
        float n001 = rockHash(cell + vec3(0.0, 0.0, 1.0));
        float n101 = rockHash(cell + vec3(1.0, 0.0, 1.0));
        float n011 = rockHash(cell + vec3(0.0, 1.0, 1.0));
        float n111 = rockHash(cell + vec3(1.0, 1.0, 1.0));

        float nx00 = mix(n000, n100, local.x);
        float nx10 = mix(n010, n110, local.x);
        float nx01 = mix(n001, n101, local.x);
        float nx11 = mix(n011, n111, local.x);
        return mix(mix(nx00, nx10, local.y), mix(nx01, nx11, local.y), local.z);
      }

      float rockFbm(vec3 point) {
        float total = 0.0;
        float amplitude = 0.55;
        float normalizer = 0.0;

        for (int octave = 0; octave < ${shaderOctaves}; octave++) {
          total += rockNoise(point) * amplitude;
          normalizer += amplitude;
          point = point * 2.08 + vec3(11.3, 7.1, 4.9);
          amplitude *= 0.48;
        }

        return total / normalizer;
      }

      float rockStrata(vec3 point) {
        vec3 direction = normalize(vec3(0.74, -0.18, 0.65));
        float coordinate = dot(point, direction) * 19.5;
        float spacing = 0.72 + rockFbm(point * 0.92 + vec3(4.2, -1.7, 2.6)) * 0.34;
        float warp = (rockFbm(point * 2.75 + vec3(-2.1, 5.3, 1.4)) - 0.5) * 5.8;
        float drift = sin(coordinate * 0.31 + rockFbm(point * 1.2) * 2.1) * 0.78;
        float wave = sin(coordinate * spacing + warp + drift);
        float breakup = smoothstep(
          0.24,
          0.76,
          rockFbm(point * 1.75 + vec3(3.7, -2.4, 6.2))
        );
        return pow(max(0.0, 1.0 - abs(wave)), 4.0) * mix(0.24, 1.0, breakup);
      }

    `;

    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>\n${proceduralNoise}`,
      )
      .replace(
        "#include <map_fragment>",
        `#include <map_fragment>
         float rockFine = rockFbm(vRockPosition * 17.0);
         float rockBroad = rockFbm(vRockPosition * 4.4);
         float rockMineral = rockNoise(vRockPosition * 54.0 + vec3(2.0, 7.0, 13.0));
         float rockPores = smoothstep(0.66, 0.96, rockNoise(vRockPosition * 38.0));
         float strataLine = rockStrata(vRockPosition);
         float darkCrack = smoothstep(0.36, 0.9, strataLine) * 0.34;
         float brightFleck = smoothstep(0.76, 0.98, rockMineral) * 0.24;
         float rockVariation = (rockFine - 0.5) * 0.5 + (rockBroad - 0.5) * 0.24;
         diffuseColor.rgb *= 0.98 + rockVariation - darkCrack - rockPores * 0.12;
         diffuseColor.rgb += vec3(0.09, 0.095, 0.084) * brightFleck;`,
      )
      .replace(
        "#include <roughnessmap_fragment>",
        `#include <roughnessmap_fragment>
         float rockRoughness = rockFbm(vRockPosition * 20.0);
         float strataRoughness = rockStrata(vRockPosition);
         roughnessFactor = clamp(
           roughnessFactor + (rockRoughness - 0.5) * 0.22 + strataRoughness * 0.14,
           0.58,
           1.0
         );`,
      );
  };
  material.customProgramCacheKey = () =>
    `procedural-rock-material-v6-${shaderOctaves}`;

  return material;
}

export function ProceduralRock({ quality }: { quality: HeroRenderQuality }) {
  const detail = quality === "high" ? HERO_CONFIG.procedural.detail : 5;
  const shaderOctaves = quality === "high" ? 4 : 3;
  const geometry = useMemo(() => createRockGeometry(detail), [detail]);
  const material = useMemo(
    () => createRockMaterial(shaderOctaves),
    [shaderOctaves],
  );

  useEffect(
    () => () => {
      geometry.dispose();
      material.dispose();
    },
    [geometry, material],
  );

  return (
    <mesh
      geometry={geometry}
      material={material}
      castShadow={quality === "high"}
      receiveShadow={quality === "high"}
    />
  );
}
