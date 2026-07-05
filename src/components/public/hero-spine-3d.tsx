"use client";

import { useRef, useMemo, useState, useEffect, Component, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function LogoTexture() {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;

    ctx.clearRect(0, 0, 1024, 512);

    ctx.shadowColor = "#5a9e76";
    ctx.shadowBlur = 40;
    ctx.font = "bold 110px 'Plus Jakarta Sans', 'Inter', Arial, sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";

    const physioWidth = ctx.measureText("Physio").width;
    const gap = 8;
    const vitaWidth = ctx.measureText("Vita").width;
    const totalWidth = physioWidth + gap + vitaWidth;
    const startX = (1024 - totalWidth) / 2;
    const cy = 230;

    ctx.fillStyle = "#a8d5ba";
    ctx.fillText("Physio", startX, cy);

    ctx.fillStyle = "#ddb892";
    ctx.shadowColor = "#c4956a";
    ctx.fillText("Vita", startX + physioWidth + gap, cy);

    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.font = "28px 'Plus Jakarta Sans', 'Inter', Arial, sans-serif";
    ctx.fillStyle = "rgba(168, 213, 186, 0.6)";
    ctx.textAlign = "center";
    ctx.fillText("RECUPERARE  •  MOBILITATE  •  VIAȚĂ", 512, cy + 100);

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.15;
    groupRef.current.position.x = Math.sin(t * 0.25) * 0.1;
    groupRef.current.position.z = Math.sin(t * 0.35) * 0.05;
    groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.15;
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.05;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef}>
        <mesh ref={meshRef} position={[0, 0.2, 0]}>
          <planeGeometry args={[2.2, 1.1]} />
          <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} depthWrite={false} />
        </mesh>
      </group>
    </Float>
  );
}

function FloatingShards() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  const shards = useMemo(
    () => [
      { pos: [0.9, 0.5, 0.3] as [number, number, number], scale: 0.06, color: "#a8d5ba", speed: 0.6, offset: 0 },
      { pos: [-0.8, 0.4, 0.4] as [number, number, number], scale: 0.045, color: "#5a9e76", speed: 0.8, offset: 1.2 },
      { pos: [0.6, -0.5, 0.2] as [number, number, number], scale: 0.055, color: "#c4e4d4", speed: 0.5, offset: 2.4 },
      { pos: [-1.0, -0.3, 0.1] as [number, number, number], scale: 0.04, color: "#ddb892", speed: 0.7, offset: 3.6 },
      { pos: [0.3, 0.7, 0.3] as [number, number, number], scale: 0.05, color: "#a8d5ba", speed: 0.9, offset: 4.8 },
      { pos: [-0.5, -0.6, 0.2] as [number, number, number], scale: 0.055, color: "#5a9e76", speed: 0.55, offset: 0.8 },
      { pos: [1.1, 0.0, 0.15] as [number, number, number], scale: 0.035, color: "#ddb892", speed: 0.65, offset: 2.1 },
      { pos: [-0.2, 0.8, 0.25] as [number, number, number], scale: 0.04, color: "#c4e4d4", speed: 0.75, offset: 5.5 },
    ],
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) groupRef.current.rotation.y = t * 0.04;
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const s = shards[i];
      mesh.position.y = s.pos[1] + Math.sin(t * s.speed + s.offset) * 0.15;
      mesh.position.x = s.pos[0] + Math.sin(t * s.speed * 0.7 + s.offset) * 0.06;
      mesh.rotation.x = t * s.speed * 0.5;
      mesh.rotation.z = t * s.speed * 0.3;
    });
  });

  return (
    <group ref={groupRef}>
      {shards.map((shard, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.3} floatIntensity={0.2}>
          <mesh
            ref={(el) => { meshRefs.current[i] = el; }}
            position={shard.pos}
            scale={shard.scale}
          >
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={shard.color}
              roughness={0.15}
              metalness={0.4}
              emissive={shard.color}
              emissiveIntensity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function HealingRings() {
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  const rings = useMemo(
    () => [
      { radius: 0.65, y: 0.15, color: "#5a9e76", opacity: 0.35, speed: 0.2, tiltX: 0.3, tiltZ: 0 },
      { radius: 0.85, y: 0.1, color: "#a8d5ba", opacity: 0.18, speed: -0.15, tiltX: -0.2, tiltZ: 0.4 },
      { radius: 1.05, y: 0.25, color: "#ddb892", opacity: 0.1, speed: 0.1, tiltX: 0.5, tiltZ: -0.3 },
    ],
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    refs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const ring = rings[i];
      mesh.rotation.x = ring.tiltX + Math.sin(t * ring.speed * 2) * 0.1;
      mesh.rotation.y = t * ring.speed;
      mesh.rotation.z = ring.tiltZ + Math.cos(t * ring.speed) * 0.05;
    });
  });

  return (
    <>
      {rings.map((ring, i) => (
        <mesh key={i} ref={(el) => { refs.current[i] = el; }} position={[0, ring.y, 0]}>
          <torusGeometry args={[ring.radius, 0.008, 16, 128]} />
          <meshBasicMaterial color={ring.color} transparent opacity={ring.opacity} />
        </mesh>
      ))}
    </>
  );
}

function EnergyOrbs() {
  const count = 35;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const orbs = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 0.4 + Math.random() * 0.5;
      const yBase = (Math.random() - 0.5) * 1.6;
      const speed = 0.2 + Math.random() * 0.4;
      const offset = Math.random() * Math.PI * 2;
      const size = 0.01 + Math.random() * 0.015;
      temp.push({ angle, r, yBase, speed, offset, size });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    const dummy = new THREE.Object3D();
    orbs.forEach((orb, i) => {
      const a = orb.angle + t * orb.speed * 0.25;
      const yOff = Math.sin(t * orb.speed + orb.offset) * 0.1;
      dummy.position.set(Math.cos(a) * orb.r, orb.yBase + yOff, Math.sin(a) * orb.r * 0.4);
      const s = orb.size * (0.8 + Math.sin(t * 1.5 + orb.offset) * 0.3);
      dummy.scale.setScalar(Math.max(0.001, s));
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#a8d5ba" transparent opacity={0.7} />
    </instancedMesh>
  );
}

function SpineGlow() {
  const count = 7;
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const mat = mesh.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.35 + Math.sin(t * 1.5 + i * 0.8) * 0.2;
      mesh.scale.setScalar(Math.max(0.01, 1 + Math.sin(t * 2 + i * 0.6) * 0.25));
    });
  });

  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < count; i++) {
      const y = -0.35 + i * 0.12;
      pts.push({ pos: [0, y + 0.3, 0] as [number, number, number], radius: 0.025 - (i < 3 ? (2 - i) * 0.004 : 0) });
    }
    return pts;
  }, []);

  return (
    <>
      {points.map((p, i) => (
        <mesh key={`sg-${i}`} ref={(el) => { meshRefs.current[i] = el; }} position={p.pos}>
          <sphereGeometry args={[p.radius, 16, 16]} />
          <meshBasicMaterial color="#a8d5ba" transparent opacity={0.35} />
        </mesh>
      ))}
      <mesh>
        <tubeGeometry args={[new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0.15, 0), new THREE.Vector3(0, -0.35, 0)]), 8, 0.003, 8, false]} />
        <meshBasicMaterial color="#5a9e76" transparent opacity={0.15} />
      </mesh>
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 4]} intensity={1} color="#faf8f4" />
      <pointLight position={[-2, 2, 3]} intensity={0.5} color="#a8d5ba" />
      <pointLight position={[1, -1, 4]} intensity={0.3} color="#ddb892" />

      <LogoTexture />
      <FloatingShards />
      <SpineGlow />
      <HealingRings />
      <EnergyOrbs />
    </>
  );
}

export function HeroSpine3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <ErrorBoundary>
      <div className="w-full h-full min-h-[400px] -m-6 p-6" style={{ overflow: 'visible' }}>
        <Canvas
          camera={{ position: [0.3, 0, 3.8], fov: 40 }}
          gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
          style={{ background: "transparent", width: '100%', height: '100%' }}
          dpr={[1, 1.5]}
          frameloop="always"
          resize={{ scroll: false }}
        >
          <Scene />
        </Canvas>
      </div>
    </ErrorBoundary>
  );
}