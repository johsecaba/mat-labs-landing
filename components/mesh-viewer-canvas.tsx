"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useMemo } from "react";
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

export default function MeshViewerCanvas({
  mode,
  onReady,
}: {
  mode: ViewMode;
  onReady: () => void;
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
        enableDamping
        dampingFactor={0.08}
        autoRotate
        autoRotateSpeed={0.9}
        minDistance={7}
        maxDistance={20}
        minPolarAngle={Math.PI * 0.25}
        maxPolarAngle={Math.PI * 0.75}
      />
    </Canvas>
  );
}
