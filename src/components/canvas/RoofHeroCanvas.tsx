"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Isometric Gable Truss & Architectural Shingle System
function RoofStructure() {
  const groupRef = useRef<THREE.Group>(null);
  const shinglesRef = useRef<THREE.Group>(null);

  // Generate shingle layers on the pitch slopes
  const shingleRows = useMemo(() => {
    const items = [];
    const rows = 6;
    const cols = 5;

    // Left Pitch (-X)
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = -1.2 + (r * 0.4);
        const y = 1.6 - (r * 0.45);
        const z = -1.6 + c * 0.8;
        items.push({
          pos: [-x, y, z] as [number, number, number],
          rot: [0, 0, Math.PI / 4.8] as [number, number, number],
          scale: [0.7, 0.04, 0.75] as [number, number, number],
          isAmber: (r + c) % 5 === 0,
        });
      }
    }

    // Right Pitch (+X)
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = -1.2 + (r * 0.4);
        const y = 1.6 - (r * 0.45);
        const z = -1.6 + c * 0.8;
        items.push({
          pos: [x, y, z] as [number, number, number],
          rot: [0, 0, -Math.PI / 4.8] as [number, number, number],
          scale: [0.7, 0.04, 0.75] as [number, number, number],
          isAmber: (r * 2 + c) % 6 === 0,
        });
      }
    }

    return items;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating and subtle responsiveness to mouse
      const mouseX = state.pointer.x * 0.35;
      const mouseY = state.pointer.y * 0.2;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        0.5 + mouseX + Math.sin(state.clock.elapsedTime * 0.4) * 0.08,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        0.3 - mouseY + Math.cos(state.clock.elapsedTime * 0.3) * 0.05,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Central Ridge Beam */}
      <mesh position={[0, 1.75, 0]}>
        <boxGeometry args={[0.15, 0.15, 4.4]} />
        <meshStandardMaterial
          color="#f59e0b"
          metalness={0.8}
          roughness={0.2}
          emissive="#f59e0b"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Front Gable Truss Frame */}
      <group position={[0, 0, 1.9]}>
        {/* Left rafter */}
        <mesh position={[-1.1, 0.85, 0]} rotation={[0, 0, -Math.PI / 4.8]}>
          <boxGeometry args={[2.5, 0.12, 0.12]} />
          <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.4} />
        </mesh>
        {/* Right rafter */}
        <mesh position={[1.1, 0.85, 0]} rotation={[0, 0, Math.PI / 4.8]}>
          <boxGeometry args={[2.5, 0.12, 0.12]} />
          <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.4} />
        </mesh>
        {/* Tie Beam (base) */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.9, 0.12, 0.12]} />
          <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.3} />
        </mesh>
        {/* King post center vertical */}
        <mesh position={[0, 0.85, 0]}>
          <boxGeometry args={[0.1, 1.7, 0.1]} />
          <meshStandardMaterial color="#f59e0b" metalness={0.7} roughness={0.3} />
        </mesh>
      </group>

      {/* Back Gable Truss Frame */}
      <group position={[0, 0, -1.9]}>
        <mesh position={[-1.1, 0.85, 0]} rotation={[0, 0, -Math.PI / 4.8]}>
          <boxGeometry args={[2.5, 0.12, 0.12]} />
          <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh position={[1.1, 0.85, 0]} rotation={[0, 0, Math.PI / 4.8]}>
          <boxGeometry args={[2.5, 0.12, 0.12]} />
          <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.9, 0.12, 0.12]} />
          <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>

      {/* Shingle Tiles Array */}
      <group ref={shinglesRef}>
        {shingleRows.map((shingle, i) => (
          <mesh
            key={i}
            position={shingle.pos}
            rotation={shingle.rot}
            scale={shingle.scale}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={shingle.isAmber ? "#f59e0b" : "#1e2433"}
              metalness={shingle.isAmber ? 0.8 : 0.4}
              roughness={shingle.isAmber ? 0.2 : 0.7}
              emissive={shingle.isAmber ? "#d97706" : "#000000"}
              emissiveIntensity={shingle.isAmber ? 0.35 : 0}
            />
          </mesh>
        ))}
      </group>

      {/* Orbiting Construction Data Markers */}
      <mesh position={[1.8, 1.2, 0.5]}>
        <octahedronGeometry args={[0.18, 0]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#fbbf24"
          emissiveIntensity={0.8}
          wireframe
        />
      </mesh>
      <mesh position={[-1.7, 0.6, -0.8]}>
        <octahedronGeometry args={[0.14, 0]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.6}
          wireframe
        />
      </mesh>
    </group>
  );
}

export default function RoofHeroCanvas() {
  return (
    <div className="relative w-full h-[400px] md:h-[520px] lg:h-[580px] pointer-events-auto">
      <Canvas
        camera={{ position: [4.5, 3.2, 4.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          powerPreference: "high-performance",
          antialias: true,
          alpha: true,
        }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 15, 8]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, 8, -5]} intensity={0.8} color="#f59e0b" />
        <pointLight position={[0, 4, 0]} intensity={1.2} color="#fbbf24" distance={10} />

        <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.4}>
          <RoofStructure />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>

      {/* Subtle Overlay Badge */}
      <div className="absolute bottom-3 left-4 md:left-6 z-10 flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-950/80 border border-slate-800 backdrop-blur-md text-[11px] font-mono text-slate-400">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>IKO Architectural Shingle System • Bell County Spec</span>
      </div>
    </div>
  );
}
