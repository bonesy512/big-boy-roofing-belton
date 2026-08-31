"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// 1. High-Speed Rain Streaks (LineSegments)
function RainStreaks({ count = 600 }: { count?: number }) {
  const lineRef = useRef<THREE.LineSegments>(null);

  // Initialize line endpoints (2 vertices per streak)
  const { positions, velocities, lengths } = useMemo(() => {
    const pos = new Float32Array(count * 2 * 3);
    const vel = new Float32Array(count);
    const len = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 16;
      const y = Math.random() * 12 - 3;
      const z = (Math.random() - 0.5) * 10;
      const streakLength = 0.4 + Math.random() * 0.45;
      const streakVel = 16 + Math.random() * 10;

      len[i] = streakLength;
      vel[i] = streakVel;

      const idx = i * 6;
      // Start vertex
      pos[idx] = x;
      pos[idx + 1] = y;
      pos[idx + 2] = z;

      // End vertex (slanted by storm wind along X)
      pos[idx + 3] = x - streakLength * 0.35;
      pos[idx + 4] = y - streakLength;
      pos[idx + 5] = z - streakLength * 0.1;
    }

    return { positions: pos, velocities: vel, lengths: len };
  }, [count]);

  useFrame((_, delta) => {
    if (!lineRef.current) return;
    const posAttr = lineRef.current.geometry.attributes.position;
    const array = posAttr.array as Float32Array;

    const dt = Math.min(delta, 0.05);

    for (let i = 0; i < count; i++) {
      const idx = i * 6;
      const speed = velocities[i];
      const streakLen = lengths[i];

      // Update Y (falling fast) and X (slanted wind drift)
      array[idx] -= speed * 0.35 * dt;
      array[idx + 1] -= speed * dt;
      array[idx + 2] -= speed * 0.1 * dt;

      array[idx + 3] = array[idx] - streakLen * 0.35;
      array[idx + 4] = array[idx + 1] - streakLen;
      array[idx + 5] = array[idx + 2] - streakLen * 0.1;

      // Boundary Wrap-around below roof impact threshold
      if (array[idx + 1] < -3.8) {
        const resetX = (Math.random() - 0.5) * 16 + 2.5;
        const resetY = 7.5 + Math.random() * 4;
        const resetZ = (Math.random() - 0.5) * 10;

        array[idx] = resetX;
        array[idx + 1] = resetY;
        array[idx + 2] = resetZ;

        array[idx + 3] = resetX - streakLen * 0.35;
        array[idx + 4] = resetY - streakLen;
        array[idx + 5] = resetZ - streakLen * 0.1;
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#93c5fd"
        transparent
        opacity={0.36}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  );
}

// 2. Central Texas Hailstones (Points)
function Hailstones({ count = 150 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14 + 1;
      pos[i * 3 + 1] = Math.random() * 11 - 2.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      vel[i] = 12 + Math.random() * 8; // High terminal velocity
    }

    return { positions: pos, velocities: vel };
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position;
    const array = posAttr.array as Float32Array;
    const dt = Math.min(delta, 0.05);

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const speed = velocities[i];

      array[idx] -= speed * 0.38 * dt; // Wind push
      array[idx + 1] -= speed * dt; // Heavy gravity fall

      // Roof threshold wrap
      if (array[idx + 1] < -3.2) {
        array[idx] = (Math.random() - 0.5) * 14 + 3;
        array[idx + 1] = 7 + Math.random() * 3.5;
        array[idx + 2] = (Math.random() - 0.5) * 8;
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.14}
        transparent
        opacity={0.88}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// 3. Roofline Impact Splashes (Points)
function RoofImpactSplashes({ count = 180 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities, lifeData } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const life = new Float32Array(count * 2); // [currentLife, maxLife]

    for (let i = 0; i < count; i++) {
      // Spawn along the roof pitch barrier
      const roofX = (Math.random() - 0.5) * 8.5;
      const roofY = -2.7 + (Math.abs(roofX) * -0.12); // Sloped deflection roof line
      const roofZ = (Math.random() - 0.5) * 4;

      pos[i * 3] = roofX;
      pos[i * 3 + 1] = roofY;
      pos[i * 3 + 2] = roofZ;

      // Burst velocity upward and outward
      vel[i * 3] = (Math.random() - 0.45) * 3.2; // Sideways splatter
      vel[i * 3 + 1] = 2.4 + Math.random() * 3.6; // Upward bounce
      vel[i * 3 + 2] = (Math.random() - 0.5) * 2.0;

      const maxL = 0.35 + Math.random() * 0.4;
      life[i * 2] = Math.random() * maxL; // current
      life[i * 2 + 1] = maxL; // max
    }

    return { positions: pos, velocities: vel, lifeData: life };
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position;
    const posArr = posAttr.array as Float32Array;
    const dt = Math.min(delta, 0.05);

    for (let i = 0; i < count; i++) {
      const pIdx = i * 3;
      const lIdx = i * 2;

      lifeData[lIdx] -= dt;

      if (lifeData[lIdx] <= 0 || posArr[pIdx + 1] < -3.3) {
        // Respawn splash particle at roof impact plane
        const roofX = (Math.random() - 0.5) * 8.5;
        const roofY = -2.7 + (Math.abs(roofX) * -0.12);
        const roofZ = (Math.random() - 0.5) * 4;

        posArr[pIdx] = roofX;
        posArr[pIdx + 1] = roofY;
        posArr[pIdx + 2] = roofZ;

        velocities[pIdx] = (Math.random() - 0.45) * 3.5;
        velocities[pIdx + 1] = 2.4 + Math.random() * 3.8;
        velocities[pIdx + 2] = (Math.random() - 0.5) * 2.0;

        const maxL = 0.35 + Math.random() * 0.4;
        lifeData[lIdx] = maxL;
        lifeData[lIdx + 1] = maxL;
      } else {
        // Parabolic gravity trajectory
        velocities[pIdx + 1] -= 9.8 * dt; // Gravity arc
        posArr[pIdx] += velocities[pIdx] * dt;
        posArr[pIdx + 1] += velocities[pIdx + 1] * dt;
        posArr[pIdx + 2] += velocities[pIdx + 2] * dt;
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#bae6fd"
        size={0.10}
        transparent
        opacity={0.82}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// 4. Stylized Impenetrable Roof Barrier Line & Shield
function ImpenetrableRoofBarrier() {
  const lineObject = useMemo(() => {
    const pts = [
      new THREE.Vector3(-4.8, -3.3, 0),
      new THREE.Vector3(-2.4, -2.9, 0.4),
      new THREE.Vector3(0, -2.6, 0.6), // Peak ridge
      new THREE.Vector3(2.4, -2.9, 0.4),
      new THREE.Vector3(4.8, -3.3, 0),
    ];
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.65,
    });
    return new THREE.Line(geo, mat);
  }, []);

  return (
    <group position={[0, 0, 0]}>
      {/* Glowing Gable Shield Ridge Line */}
      <primitive object={lineObject} />

      {/* Subtle Structural Deflection Bar */}
      <mesh position={[0, -2.75, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[9.6, 0.06, 2.8]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

// 5. Dynamic Lighting & Occasional Lightning Ambience
function StormLighting() {
  const lightRef = useRef<THREE.AmbientLight>(null);
  const flashTimer = useRef(0);

  useFrame((state, delta) => {
    if (!lightRef.current) return;
    flashTimer.current += delta;

    // Subtle natural pulse + random micro-lightning flash
    if (flashTimer.current > 4.5 && Math.random() > 0.94) {
      lightRef.current.intensity = 1.4 + Math.random() * 0.8;
      if (flashTimer.current > 4.8) {
        flashTimer.current = 0;
      }
    } else {
      lightRef.current.intensity = THREE.MathUtils.lerp(
        lightRef.current.intensity,
        0.45,
        0.1
      );
    }
  });

  return (
    <>
      <ambientLight ref={lightRef} intensity={0.45} color="#93c5fd" />
      <directionalLight position={[5, 10, 5]} intensity={0.9} color="#bae6fd" />
      <pointLight position={[0, -2.5, 2]} intensity={1.2} color="#f59e0b" distance={8} />
    </>
  );
}

export default function RoofHeroCanvas() {
  return (
    <div className="relative w-full h-[400px] md:h-[520px] lg:h-[580px] overflow-hidden rounded-2xl bg-gradient-to-b from-[#0a0f1d]/90 via-[#070b14]/95 to-[#05070d] border border-slate-800/80 shadow-2xl">
      {/* Amber Distant Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-44 bg-amber-500/10 blur-[110px] rounded-full pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0.4, 6.2], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
        }}
      >
        <StormLighting />
        <RainStreaks count={600} />
        <Hailstones count={150} />
        <RoofImpactSplashes count={180} />
        <ImpenetrableRoofBarrier />
      </Canvas>

      {/* Interactive HUD / Status Chip */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/85 border border-slate-800 backdrop-blur-md text-[11px] font-mono text-slate-300 shadow-md">
        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="text-cyan-300 font-bold">Bell County Storm Simulation</span>
        <span className="text-slate-500">•</span>
        <span className="text-amber-400 font-semibold">IKO Hail Barrier Active</span>
      </div>

      {/* Bottom Live Protection Tag */}
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-950/90 border border-slate-800/90 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-slate-200">
            Class-4 Impact & 130 MPH Wind Deflection
          </span>
        </div>
        <span className="text-[11px] font-mono text-amber-400 font-semibold hidden sm:inline">
          60 FPS Real-time
        </span>
      </div>
    </div>
  );
}
