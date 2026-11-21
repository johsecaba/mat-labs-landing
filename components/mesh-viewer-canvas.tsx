"use client";

import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useMemo, type MutableRefObject } from "react";
import * as THREE from "three";

export type ViewMode = "mesh" | "pixels" | "surface";

const MODEL = "/models/head.glb";
const COLOR_MAP = "/models/head-color.jpg";

function Head({ mode, onReady }: { mode: ViewMode; onReady: () => void }) {
  const { scene } = useGLTF(MODEL);
  const map = useLoader(THREE.TextureLoader, COLOR_MAP);
  const geometry = useMemo(() => {
    let g: THREE.BufferGeometry | null = null;
    scene.traverse((o) => {
      if (!g && (o as THREE.Mesh).isMesh) g = (o as THREE.Mesh).geometry;
    });
    return g as THREE.BufferGeometry | null;
  }, [scene]);

  useEffect(() => {
    onReady();
  }, [onReady]);

  if (!geometry) return null;
  return (
    <group position={[0, 0, 0]}>
      {mode === "surface" && (
        <mesh geometry={geometry}>
          <meshStandardMaterial map={map} map-colorSpace={THREE.SRGBColorSpace} map-anisotropy={4} roughness={0.7} metalness={0} />
        </mesh>
      )}
      {mode === "mesh" && (
        <>
          <mesh geometry={geometry}>
            <meshBasicMaterial color="#02040a" polygonOffset polygonOffsetFactor={1} polygonOffsetUnits={1} />
          </mesh>
          <mesh geometry={geometry}>
            <meshBasicMaterial color="#3d7bff" wireframe />
          </mesh>
        </>
      )}
      {mode === "pixels" && (
        <points geometry={geometry}>
          <pointsMaterial color="#ffd23f" size={0.035} sizeAttenuation />
        </points>
      )}
    </group>
  );
}

export type ZoomFn = (factor: number) => void;

const MIN_DIST = 7;
const MAX_DIST = 20;

/** Page-friendly input: vertical touch drags scroll the page; zoom is driven by the parent. */
function Interaction({ zoomRef }: { zoomRef: MutableRefObject<ZoomFn | null> }) {
  const camera = useThree((s) => s.camera);
  const el = useThree((s) => s.gl.domElement);
  useEffect(() => {
    // OrbitControls forces touch-action: none when it connects; override after.
    const id = requestAnimationFrame(() => {
      el.style.touchAction = "pan-y";
    });
    zoomRef.current = (factor) => {
      const d = camera.position.length();
      const next = Math.min(MAX_DIST, Math.max(MIN_DIST, d * factor));
      camera.position.multiplyScalar(next / d);
    };
    return () => {
      cancelAnimationFrame(id);
      zoomRef.current = null;
    };
  }, [camera, el, zoomRef]);
  return null;
}

export default function MeshViewerCanvas({
  mode,
  onReady,
  zoomRef,
}: {
  mode: ViewMode;
  onReady: () => void;
  zoomRef: MutableRefObject<ZoomFn | null>;
}) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.2, 14], fov: 30 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 6]} intensity={1.6} />
      <Environment preset="studio" environmentIntensity={0.5} />
      <Head mode={mode} onReady={onReady} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        autoRotate
        autoRotateSpeed={0.9}
        minDistance={MIN_DIST}
        maxDistance={MAX_DIST}
        minPolarAngle={Math.PI * 0.25}
        maxPolarAngle={Math.PI * 0.75}
      />
      <Interaction zoomRef={zoomRef} />
    </Canvas>
  );
}
