"use client";

import { Environment, Lightformer } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  DepthOfField,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction, DepthOfFieldEffect } from "postprocessing";
import { Suspense, useEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import * as THREE from "three";
import { GlbRock } from "./GlbRock";
import { HERO_CONFIG, HERO_VISUAL_MODE } from "./hero-config";
import type { HeroRenderQuality } from "./hero-config";
import { ProceduralRock } from "./ProceduralRock";
import styles from "./Hero.module.css";

type ThreeSceneProps = {
  scrollProgress: MutableRefObject<number>;
  pointerProgress: MutableRefObject<{ x: number; y: number }>;
  reducedMotion: boolean;
  isActive: boolean;
  onReady: () => void;
};

type SceneContentsProps = Omit<ThreeSceneProps, "isActive"> & {
  quality: HeroRenderQuality;
};

function SceneReady({ onReady }: Pick<ThreeSceneProps, "onReady">) {
  const { camera, gl, scene } = useThree();

  useEffect(() => {
    let cancelled = false;
    let frame = 0;

    const reveal = async () => {
      try {
        await gl.compileAsync(scene, camera);
      } catch {
        // Some WebGL implementations do not support asynchronous compilation.
      }

      if (cancelled) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        if (!cancelled) {
          onReady();
        }
      });
    };

    void reveal();

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [camera, gl, onReady, scene]);

  return null;
}

function HeroObject({ quality }: { quality: HeroRenderQuality }) {
  if (HERO_VISUAL_MODE === "glb") {
    return <GlbRock url={HERO_CONFIG.glb.url} />;
  }

  return <ProceduralRock quality={quality} />;
}

function SceneContents({
  pointerProgress,
  scrollProgress,
  reducedMotion,
  onReady,
  quality,
}: SceneContentsProps) {
  const model = useRef<THREE.Group>(null);
  const keyLight = useRef<THREE.DirectionalLight>(null);
  const fog = useRef<THREE.FogExp2>(null);
  const depthOfField = useRef<DepthOfFieldEffect>(null);
  const smoothedPointer = useRef(new THREE.Vector2(0, 0));
  const targetPointer = useRef(new THREE.Vector2(0, 0));
  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt(...HERO_CONFIG.camera.target);
    camera.updateProjectionMatrix();
  }, [camera]);

  useFrame((state, delta) => {
    const timelineProgress = reducedMotion ? 0.62 : scrollProgress.current;
    const heroProgress = THREE.MathUtils.clamp(timelineProgress, 0, 1);
    const projectProgress = THREE.MathUtils.clamp(timelineProgress - 1, 0, 1);
    const footerProgress = THREE.MathUtils.clamp(timelineProgress - 3, 0, 1);
    const isFooterPhase = timelineProgress >= 3;
    const lightingProgress = isFooterPhase
      ? 0.78 + footerProgress * 0.22
      : heroProgress;
    const projectEntrance = THREE.MathUtils.smoothstep(
      projectProgress,
      0,
      0.16,
    );
    const projectArc = Math.sin(projectProgress * Math.PI) * 0.28;
    const pointer = pointerProgress.current;
    targetPointer.current.set(
      reducedMotion ? 0 : pointer.x,
      reducedMotion ? 0 : pointer.y,
    );
    smoothedPointer.current.lerp(
      targetPointer.current,
      Math.min(1, delta * 5.5),
    );
    const drift = reducedMotion
      ? 0
      : Math.sin(state.clock.elapsedTime * 0.42) * 0.018;
    const pointerX = smoothedPointer.current.x;
    const pointerY = smoothedPointer.current.y;

    if (model.current) {
      if (isFooterPhase) {
        const footerFloat = Math.sin(footerProgress * Math.PI) * 0.12;
        const footerSpin = reducedMotion
          ? 0
          : state.clock.elapsedTime * 0.08;

        model.current.position.set(
          THREE.MathUtils.lerp(0.92, 0.34, footerProgress),
          THREE.MathUtils.lerp(-1.62, -0.78, footerProgress) + footerFloat,
          THREE.MathUtils.lerp(0.34, 0.12, footerProgress),
        );
        model.current.rotation.set(
          THREE.MathUtils.lerp(0.08, 0.42, footerProgress),
          2.1 + footerProgress * 3.4 + footerSpin,
          THREE.MathUtils.lerp(-0.12, 0.08, footerProgress),
        );
        model.current.scale.setScalar(
          THREE.MathUtils.lerp(1.22, 1.4, footerProgress),
        );
      } else {
        model.current.position.set(
          THREE.MathUtils.lerp(
            HERO_CONFIG.model.startPosition[0],
            HERO_CONFIG.model.endPosition[0],
            heroProgress,
          ) -
            projectProgress * 0.22 +
            pointerX * 0.16,
          THREE.MathUtils.lerp(
            HERO_CONFIG.model.startPosition[1],
            HERO_CONFIG.model.endPosition[1],
            heroProgress,
          ) +
            projectEntrance * 0.82 +
            projectArc -
            projectProgress * 0.08 -
            pointerY * 0.11 +
            drift,
          THREE.MathUtils.lerp(
            HERO_CONFIG.model.startPosition[2],
            HERO_CONFIG.model.endPosition[2],
            heroProgress,
          ) + projectProgress * 0.16,
        );
        model.current.rotation.set(
          THREE.MathUtils.lerp(
            HERO_CONFIG.model.startRotation[0],
            HERO_CONFIG.model.endRotation[0],
            heroProgress,
          ) +
            projectProgress * 0.28 +
            pointerY * 0.08,
          THREE.MathUtils.lerp(
            HERO_CONFIG.model.startRotation[1],
            HERO_CONFIG.model.endRotation[1],
            heroProgress,
          ) +
            projectProgress * 0.9 +
            pointerX * 0.18,
          THREE.MathUtils.lerp(
            HERO_CONFIG.model.startRotation[2],
            HERO_CONFIG.model.endRotation[2],
            heroProgress,
          ) -
            projectProgress * 0.16 +
            pointerX * 0.035,
        );
        const heroScale = THREE.MathUtils.lerp(
          HERO_CONFIG.model.startScale,
          HERO_CONFIG.model.endScale,
          heroProgress,
        );
        model.current.scale.setScalar(heroScale - projectProgress * 0.08);
      }
    }

    if (keyLight.current) {
      keyLight.current.intensity = THREE.MathUtils.lerp(
        HERO_CONFIG.lights.keyIntensityStart,
        HERO_CONFIG.lights.keyIntensityEnd,
        lightingProgress,
      );
      keyLight.current.position.set(
        THREE.MathUtils.lerp(
          HERO_CONFIG.lights.keyPositionStart[0],
          HERO_CONFIG.lights.keyPositionEnd[0],
          lightingProgress,
        ) + pointerX * 0.72,
        THREE.MathUtils.lerp(
          HERO_CONFIG.lights.keyPositionStart[1],
          HERO_CONFIG.lights.keyPositionEnd[1],
          lightingProgress,
        ) - pointerY * 0.42,
        THREE.MathUtils.lerp(
          HERO_CONFIG.lights.keyPositionStart[2],
          HERO_CONFIG.lights.keyPositionEnd[2],
          lightingProgress,
        ),
      );
    }

    if (fog.current) {
      fog.current.density = THREE.MathUtils.lerp(
        HERO_CONFIG.fog.startDensity,
        HERO_CONFIG.fog.endDensity,
        lightingProgress,
      );
    }

    if (depthOfField.current) {
      depthOfField.current.cocMaterial.focusDistance = THREE.MathUtils.lerp(
        HERO_CONFIG.depthOfField.startFocusDistance,
        HERO_CONFIG.depthOfField.endFocusDistance,
        lightingProgress,
      );
      depthOfField.current.bokehScale = THREE.MathUtils.lerp(
        HERO_CONFIG.depthOfField.startBokehScale,
        HERO_CONFIG.depthOfField.endBokehScale,
        lightingProgress,
      );
    }
  });

  return (
    <>
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
        castShadow={quality === "high"}
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
      <directionalLight
        color={HERO_CONFIG.colors.fill}
        intensity={HERO_CONFIG.lights.fillIntensity}
        position={HERO_CONFIG.lights.fillPosition}
      />

      <Environment resolution={64} frames={1}>
        <Lightformer
          form="rect"
          intensity={1.35}
          color="#c8cbc6"
          position={[4, 2, 4]}
          rotation={[0, -Math.PI / 3, 0]}
          scale={[3, 5, 1]}
        />
        <Lightformer
          form="rect"
          intensity={0.55}
          color="#8c9492"
          position={[-4, -1, -2]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[2, 4, 1]}
        />
      </Environment>

      <group ref={model}>
        <HeroObject quality={quality} />
      </group>

      <SceneReady onReady={onReady} />

      {quality !== "mobile" ? (
        <EffectComposer
          multisampling={0}
          resolutionScale={quality === "high" ? 0.72 : 0.58}
        >
          <DepthOfField
            ref={depthOfField}
            focusDistance={HERO_CONFIG.depthOfField.startFocusDistance}
            focusRange={HERO_CONFIG.depthOfField.focusRange}
            bokehScale={HERO_CONFIG.depthOfField.startBokehScale}
            resolutionScale={
              quality === "high"
                ? HERO_CONFIG.depthOfField.resolutionScale
                : 0.42
            }
          />
          <Vignette
            blendFunction={BlendFunction.NORMAL}
            eskil={false}
            offset={0.3}
            darkness={0.34}
          />
        </EffectComposer>
      ) : null}
    </>
  );
}

function detectRenderQuality(): HeroRenderQuality {
  if (typeof window === "undefined") {
    return "balanced";
  }

  const navigatorWithMemory = navigator as Navigator & {
    deviceMemory?: number;
  };
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  const deviceMemory = navigatorWithMemory.deviceMemory;

  if (window.matchMedia("(max-width: 767px)").matches) {
    return "mobile";
  }

  const hasHighEndViewport = window.matchMedia("(min-width: 1536px)").matches;
  const hasHighEndHardware =
    hardwareConcurrency >= 8 && (deviceMemory === undefined || deviceMemory > 4);

  return hasHighEndViewport && hasHighEndHardware ? "high" : "balanced";
}

export function ThreeScene(props: ThreeSceneProps) {
  const [quality, setQuality] = useState<HeroRenderQuality>(detectRenderQuality);
  const { isActive, ...sceneProps } = props;
  const dpr: number | [number, number] =
    quality === "mobile"
      ? 1
      : quality === "balanced"
        ? [1, 1.15]
        : [1, 1.3];

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const highEndQuery = window.matchMedia("(min-width: 1536px)");
    const updateQuality = () => setQuality(detectRenderQuality());

    mobileQuery.addEventListener("change", updateQuality);
    highEndQuery.addEventListener("change", updateQuality);

    return () => {
      mobileQuery.removeEventListener("change", updateQuality);
      highEndQuery.removeEventListener("change", updateQuality);
    };
  }, []);

  return (
    <Canvas
      className={styles.canvas}
      data-render-quality={quality}
      dpr={dpr}
      frameloop={isActive ? "always" : "demand"}
      shadows={quality === "high"}
      camera={{
        fov: HERO_CONFIG.camera.fov,
        near: HERO_CONFIG.camera.near,
        far: HERO_CONFIG.camera.far,
        position: HERO_CONFIG.camera.position,
      }}
      gl={{
        antialias: quality !== "mobile",
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
      }}
      onCreated={({ gl }) => {
        gl.setClearAlpha(0);
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
        <SceneContents {...sceneProps} quality={quality} />
      </Suspense>
    </Canvas>
  );
}
