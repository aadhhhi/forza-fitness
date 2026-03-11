import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function GoldParticles({ count = 2000 }) {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 100;
      temp[i * 3 + 1] = (Math.random() - 0.5) * 100;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return temp;
  }, [count]);

  const circleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.arc(32, 32, 30, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      // Mouse movement
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, state.mouse.y * 0.1, 0.05);
      pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, state.mouse.x * 0.1, 0.05);
      
      // Scroll movement (simulated)
      const scrollY = window.scrollY;
      pointsRef.current.position.z = THREE.MathUtils.lerp(pointsRef.current.position.z, scrollY * 0.05, 0.05);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        map={circleTexture}
        color="#FFD700"
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        alphaTest={0.1}
      />
    </points>
  );
}
