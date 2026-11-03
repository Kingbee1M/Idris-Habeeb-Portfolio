"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry.js";

function Shape() {
  const groupRef = useRef<THREE.Group>(null);

  const vertices = useMemo(() => {
    const points: THREE.Vector3[] = [];

    for (let zero = 0; zero < 3; zero++) {
      const axes = [0, 1, 2].filter((axis) => axis !== zero);

      for (const swap of [false, true]) {
        for (const s1 of [-1, 1]) {
          for (const s2 of [-1, 1]) {
            const coords = [0, 0, 0];
            coords[axes[0]] = (swap ? 2 : 1) * s1;
            coords[axes[1]] = (swap ? 1 : 2) * s2;
            points.push(new THREE.Vector3(...(coords as [number, number, number])));
          }
        }
      }
    }

    return points;
  }, []);

  const geometry = useMemo(() => new ConvexGeometry(vertices), [vertices]);
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry, 1), [geometry]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x += delta * 0.035;
    }
  });

  return (
    <group ref={groupRef} scale={1.35}>
      <mesh geometry={geometry}>
        <meshStandardMaterial color="#080808" roughness={0.65} metalness={0.4} flatShading />
      </mesh>

      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#ff6500" transparent opacity={0.18} />
      </lineSegments>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#ff7900" />
      </lineSegments>

      {vertices.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial color="#ff7900" emissive="#ff5500" emissiveIntensity={2} />
        </mesh>
      ))}
    </group>
  );
}

export default function TruncatedOctahedron() {
  return (
    <div className="truncated-octahedron" aria-label="Interactive rotating truncated octahedron. Drag to rotate and scroll to zoom." role="img">
      <Canvas camera={{ position: [4.5, 4.5, 6.3], fov: 40 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <pointLight position={[-4, -3, 3]} color="#ff6500" intensity={15} distance={10} />
        <Shape />
        <OrbitControls enableZoom enablePan={false} enableDamping dampingFactor={0.05} minDistance={7.5} maxDistance={13.5} />
      </Canvas>
    </div>
  );
}
