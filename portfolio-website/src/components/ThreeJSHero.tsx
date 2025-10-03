import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '../hooks/useMousePosition';

interface AnimatedSphereProps {
  mousePosition: { normalizedX: number; normalizedY: number };
}

const AnimatedSphere = ({ mousePosition }: AnimatedSphereProps) => {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    
    for (let i = 0; i < 5000; i++) {
      const distance = Math.sqrt(Math.random()) * 50;
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      
      let x = distance * Math.sin(theta) * Math.cos(phi);
      let y = distance * Math.sin(theta) * Math.sin(phi);
      let z = distance * Math.cos(theta);
      
      positions.set([x, y, z], i * 3);
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      
      // Rotate based on time and mouse position
      ref.current.rotation.x = time * 0.2 + mousePosition.normalizedY * 0.1;
      ref.current.rotation.y = time * 0.1 + mousePosition.normalizedX * 0.1;
      
      // Pulsing effect
      const scale = 1 + Math.sin(time * 2) * 0.1;
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8B5CF6"
        size={0.5}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const FloatingGeometry = ({ position, mousePosition }: { 
  position: [number, number, number]; 
  mousePosition: { normalizedX: number; normalizedY: number } 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.5;
      
      // Rotation based on mouse and time
      meshRef.current.rotation.x = time * 0.3 + mousePosition.normalizedY * 0.2;
      meshRef.current.rotation.y = time * 0.2 + mousePosition.normalizedX * 0.2;
      meshRef.current.rotation.z = time * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#EC4899"
        transparent
        opacity={0.7}
        wireframe
        emissive="#EC4899"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const Scene = () => {
  const mousePosition = useMousePosition();

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Dynamic point light that follows mouse */}
      <pointLight
        position={[mousePosition.normalizedX * 10, mousePosition.normalizedY * 10, 5]}
        intensity={1}
        color="#8B5CF6"
        distance={20}
        decay={2}
      />
      
      {/* Secondary light */}
      <pointLight
        position={[-mousePosition.normalizedX * 8, -mousePosition.normalizedY * 8, 3]}
        intensity={0.5}
        color="#EC4899"
        distance={15}
        decay={2}
      />

      {/* Animated particle sphere */}
      <AnimatedSphere mousePosition={mousePosition} />
      
      {/* Floating geometric shapes */}
      <FloatingGeometry position={[-4, 2, 0]} mousePosition={mousePosition} />
      <FloatingGeometry position={[4, -1, -2]} mousePosition={mousePosition} />
      <FloatingGeometry position={[0, 3, -4]} mousePosition={mousePosition} />
      <FloatingGeometry position={[-2, -2, 2]} mousePosition={mousePosition} />
      
      {/* Orbit controls for subtle camera movement */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const ThreeJSHero = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeJSHero;