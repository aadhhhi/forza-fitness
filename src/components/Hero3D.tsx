import { Canvas } from "@react-three/fiber";
import { Float, TorusKnot, MeshDistortMaterial, Environment } from "@react-three/drei";
import { GoldParticles } from "./GoldParticles";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <GoldParticles count={3000} />
      
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <TorusKnot args={[1, 0.3, 128, 32]}>
          <MeshDistortMaterial
            color="#eab308"
            distort={0.2}
            speed={1}
            roughness={0.2}
            metalness={0.8}
          />
        </TorusKnot>
      </Float>
      <Environment preset="city" />
    </>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 bg-zinc-950">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-zinc-950 z-10" />
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
