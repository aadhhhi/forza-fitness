import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useState, useRef } from "react";

function ParticleCloud() {
  const ref = useRef<any>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 }),
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#f59e0b"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-zinc-950 z-10" />
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleCloud />
      </Canvas>
    </div>
  );
}
