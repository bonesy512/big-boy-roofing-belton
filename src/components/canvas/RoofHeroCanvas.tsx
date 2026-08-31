"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// 1. High-Speed Rain Streaks (LineSegments)
function RainStreaks({ count = 650 }: { count?: number }) {
  const lineRef = useRef<THREE.LineSegments>(null);

  // Initialize line endpoints (2 vertices per streak)
  const { positions, velocities, lengths } = useMemo(() => {
    const pos = new Float32Array(count * 2 * 3);
    const vel = new Float32Array(count);
    const len = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 22;
      const y = Math.random() * 14 - 3;
      const z = (Math.random() - 0.5) * 12;
      const streakLength = 0.45 + Math.random() * 0.5;
      const streakVel = 18 + Math.random() * 10;

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
      if (array[idx + 1] < -4.0) {
        const resetX = (Math.random() - 0.5) * 22 + 3.0;
        const resetY = 8.5 + Math.random() * 4.5;
        const resetZ = (Math.random() - 0.5) * 12;

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
        opacity={0.34}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  );
}

// 2. Central Texas Hailstones (Points)
function Hailstones({ count = 160 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18 + 1.5;
      pos[i * 3 + 1] = Math.random() * 12 - 2.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      vel[i] = 13 + Math.random() * 9;
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

      // Threshold wrap
      if (array[idx + 1] < -3.5) {
        array[idx] = (Math.random() - 0.5) * 18 + 3.5;
        array[idx + 1] = 8 + Math.random() * 4;
        array[idx + 2] = (Math.random() - 0.5) * 10;
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
function RoofImpactSplashes({ count = 200 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities, lifeData } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const life = new Float32Array(count * 2);

    for (let i = 0; i < count; i++) {
      const roofX = (Math.random() - 0.5) * 12;
      const roofY = -2.8 + (Math.abs(roofX) * -0.1);
      const roofZ = (Math.random() - 0.5) * 6;

      pos[i * 3] = roofX;
      pos[i * 3 + 1] = roofY;
      pos[i * 3 + 2] = roofZ;

      vel[i * 3] = (Math.random() - 0.45) * 3.5;
      vel[i * 3 + 1] = 2.5 + Math.random() * 3.8;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 2.2;

      const maxL = 0.35 + Math.random() * 0.4;
      life[i * 2] = Math.random() * maxL;
      life[i * 2 + 1] = maxL;
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

      if (lifeData[lIdx] <= 0 || posArr[pIdx + 1] < -3.5) {
        const roofX = (Math.random() - 0.5) * 12;
        const roofY = -2.8 + (Math.abs(roofX) * -0.1);
        const roofZ = (Math.random() - 0.5) * 6;

        posArr[pIdx] = roofX;
        posArr[pIdx + 1] = roofY;
        posArr[pIdx + 2] = roofZ;

        velocities[pIdx] = (Math.random() - 0.45) * 3.6;
        velocities[pIdx + 1] = 2.5 + Math.random() * 3.8;
        velocities[pIdx + 2] = (Math.random() - 0.5) * 2.2;

        const maxL = 0.35 + Math.random() * 0.4;
        lifeData[lIdx] = maxL;
        lifeData[lIdx + 1] = maxL;
      } else {
        velocities[pIdx + 1] -= 9.8 * dt;
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
      new THREE.Vector3(-7.5, -3.5, 0),
      new THREE.Vector3(-3.5, -3.0, 0.4),
      new THREE.Vector3(0, -2.7, 0.6), // Peak ridge
      new THREE.Vector3(3.5, -3.0, 0.4),
      new THREE.Vector3(7.5, -3.5, 0),
    ];
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.45,
    });
    return new THREE.Line(geo, mat);
  }, []);

  return (
    <group position={[0, 0, 0]}>
      {/* Glowing Gable Ridge Barrier */}
      <primitive object={lineObject} />

      {/* Subtle Structural Deflection Plane */}
      <mesh position={[0, -2.85, 0]}>
        <boxGeometry args={[15, 0.05, 4.5]} />
        <meshStandardMaterial
          color="#0b1120"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.3}
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
      lightRef.current.intensity = 1.3 + Math.random() * 0.7;
      if (flashTimer.current > 4.8) {
        flashTimer.current = 0;
      }
    } else {
      lightRef.current.intensity = THREE.MathUtils.lerp(
        lightRef.current.intensity,
        0.42,
        0.1
      );
    }
  });

  return (
    <>
      <ambientLight ref={lightRef} intensity={0.42} color="#93c5fd" />
      <directionalLight position={[5, 10, 5]} intensity={0.85} color="#bae6fd" />
      <pointLight position={[0, -2.5, 2]} intensity={1.1} color="#f59e0b" distance={10} />
    </>
  );
}

export default function RoofHeroCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0.2, 6.8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
        }}
      >
        <StormLighting />
        <RainStreaks count={650} />
        <Hailstones count={160} />
        <RoofImpactSplashes count={200} />
        <ImpenetrableRoofBarrier />
      </Canvas>
    </div>
  );
}
