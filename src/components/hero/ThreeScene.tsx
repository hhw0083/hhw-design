"use client";

import { Environment, Lightformer } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  DepthOfField,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction, DepthOfFieldEffect } from "postprocessing";
import { Suspense, useEffect, useRef } from "react";
import type { MutableRefObject } from "react";
import * as THREE from "three";
import { GlbRock } from "./GlbRock";
import { HERO_CONFIG, HERO_VISUAL_MODE } from "./hero-config";
import { ProceduralRock } from "./ProceduralRock";
import styles from "./Hero.module.css";

type ThreeSceneProps = {
  scrollProgress: MutableRefObject<number>;
  reducedMotion: boolean;
};

function HeroObject() {
  if (HERO_VISUAL_MODE === "glb") {
    return <GlbRock url={HERO_CONFIG.glb.url} />;
  }

  return <ProceduralRock />;
}

function SceneContents({
  scrollProgress,
  reducedMotion,
}: ThreeSceneProps) {
  const model = useRef<THREE.Group>(null);
  const keyLight = useRef<THREE.DirectionalLight>(null);
  const fog = useRef<THREE.FogExp2>(null);
  const depthOfField = useRef<DepthOfFieldEffect>(null);
  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt(...HERO_CONFIG.camera.target);
    camera.updateProjectionMatrix();
  }, [camera]);

  useFrame(() => {
    const progress = reducedMotion ? 0.62 : scrollProgress.current;

    if (model.current) {
      model.current.position.set(
        THREE.MathUtils.lerp(
          HERO_CONFIG.model.startPosition[0],
          HERO_CONFIG.model.endPosition[0],
          progress,
        ),
        THREE.MathUtils.lerp(
          HERO_CONFIG.model.startPosition[1],
          HERO_CONFIG.model.endPosition[1],
          progress,
        ),
        THREE.MathUtils.lerp(
          HERO_CONFIG.model.startPosition[2],
          HERO_CONFIG.model.endPosition[2],
          progress,
        ),
      );
      model.current.rotation.set(
        THREE.MathUtils.lerp(
          HERO_CONFIG.model.startRotation[0],
          HERO_CONFIG.model.endRotation[0],
          progress,
        ),
        THREE.MathUtils.lerp(
          HERO_CONFIG.model.startRotation[1],
          HERO_CONFIG.model.endRotation[1],
          progress,
        ),
        THREE.MathUtils.lerp(
          HERO_CONFIG.model.startRotation[2],
          HERO_CONFIG.model.endRotation[2],
          progress,
        ),
      );
      const scale = THREE.MathUtils.lerp(
        HERO_CONFIG.model.startScale,
        HERO_CONFIG.model.endScale,
        progress,
      );
      model.current.scale.setScalar(scale);
    }

    if (keyLight.current) {
      keyLight.current.intensity = THREE.MathUtils.lerp(
        HERO_CONFIG.lights.keyIntensityStart,
        HERO_CONFIG.lights.keyIntensityEnd,
        progress,
      );
      keyLight.current.position.set(
        THREE.MathUtils.lerp(
          HERO_CONFIG.lights.keyPositionStart[0],
          HERO_CONFIG.lights.keyPositionEnd[0],
          progress,
        ),
        THREE.MathUtils.lerp(
          HERO_CONFIG.lights.keyPositionStart[1],
          HERO_CONFIG.lights.keyPositionEnd[1],
          progress,
        ),
        THREE.MathUtils.lerp(
          HERO_CONFIG.lights.keyPositionStart[2],
          HERO_CONFIG.lights.keyPositionEnd[2],
          progress,
        ),
      );
    }

    if (fog.current) {
      fog.current.density = THREE.MathUtils.lerp(
        HERO_CONFIG.fog.startDensity,
        HERO_CONFIG.fog.endDensity,
        progress,
      );
    }

    if (depthOfField.current) {
      depthOfField.current.cocMaterial.focusDistance = THREE.MathUtils.lerp(
        HERO_CONFIG.depthOfField.startFocusDistance,
        HERO_CONFIG.depthOfField.endFocusDistance,
        progress,
      );
      depthOfField.current.bokehScale = THREE.MathUtils.lerp(
        HERO_CONFIG.depthOfField.startBokehScale,
        HERO_CONFIG.depthOfField.endBokehScale,
        progress,
      );
    }
  });

  return (
    <>
      <color attach="background" args={[HERO_CONFIG.colors.background]} />
      <fogExp2
        ref={fog}
        attach="fog"
        args={[HERO_CONFIG.colors.background, HERO_CONFIG.fog.startDensity]}
      />

      <ambientLight
        color={HERO_CONFIG.colors.ambient}
        intensity={HERO_CONFIG.lights.ambientIntensity}
      />
      <directionalLight
        ref={keyLight}
        color={HERO_CONFIG.colors.key}
        intensity={HERO_CONFIG.lights.keyIntensityStart}
        position={HERO_CONFIG.lights.keyPositionStart}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={16}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
        shadow-bias={-0.0004}
      />
      <directionalLight
        color={HERO_CONFIG.colors.rim}
        intensity={HERO_CONFIG.lights.rimIntensity}
        position={HERO_CONFIG.lights.rimPosition}
      />

      <Environment resolution={64} frames={1}>
        <Lightformer
          form="rect"
          intensity={1.35}
          color="#c8cbc6"
          position={[-4, 2, 4]}
          rotation={[0, Math.PI / 3, 0]}
          scale={[3, 5, 1]}
        />
        <Lightformer
          form="rect"
          intensity={0.55}
          color="#8c9492"
          position={[4, -1, -2]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[2, 4, 1]}
        />
      </Environment>

      <mesh position={[0, 0, -2.35]} receiveShadow>
        <planeGeometry args={[18, 12]} />
        <meshStandardMaterial color={HERO_CONFIG.colors.wall} roughness={1} />
      </mesh>

      <group ref={model}>
        <HeroObject />
      </group>

      <EffectComposer multisampling={0} resolutionScale={0.75}>
        <DepthOfField
          ref={depthOfField}
          focusDistance={HERO_CONFIG.depthOfField.startFocusDistance}
          focusRange={HERO_CONFIG.depthOfField.focusRange}
          bokehScale={HERO_CONFIG.depthOfField.startBokehScale}
          resolutionScale={HERO_CONFIG.depthOfField.resolutionScale}
        />
        <Vignette
          blendFunction={BlendFunction.NORMAL}
          eskil={false}
          offset={0.22}
          darkness={0.58}
        />
      </EffectComposer>
    </>
  );
}

export function ThreeScene(props: ThreeSceneProps) {
  return (
    <Canvas
      className={styles.canvas}
      dpr={[1, 1.5]}
      shadows
      camera={{
        fov: HERO_CONFIG.camera.fov,
        near: HERO_CONFIG.camera.near,
        far: HERO_CONFIG.camera.far,
        position: HERO_CONFIG.camera.position,
      }}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
        stencil: false,
      }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.08;
        gl.shadowMap.type = THREE.PCFShadowMap;
      }}
      fallback={
        <div className={styles.webglFallback}>
          <span>WebGL is unavailable on this device.</span>
        </div>
      }
    >
      <Suspense fallback={null}>
        <SceneContents {...props} />
      </Suspense>
    </Canvas>
  );
}
