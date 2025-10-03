import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '../hooks/useMousePosition';

interface OptimizedParticleSystemProps {
  mousePosition: { normalizedX: number; normalizedY: number };
}

// Optimized particle system with LOD and performance monitoring
const OptimizedParticleSystem = ({ mousePosition }: OptimizedParticleSystemProps) => {
  const ref = useRef<THREE.Points>(null);
  
  // Adjust particle count based on device capabilities
  const particleCount = useMemo(() => {
    const devicePixelRatio = window.devicePixelRatio || 1;
    const isHighEnd = devicePixelRatio > 1 && window.innerWidth > 1024;
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) return 1000; // Reduced for mobile
    if (isHighEnd) return 5000; // Full quality for high-end devices
    return 3000; // Medium quality for standard devices
  }, []);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const distance = Math.sqrt(Math.random()) * 50;
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      
      const x = distance * Math.sin(theta) * Math.cos(phi);
      const y = distance * Math.sin(theta) * Math.sin(phi);
      const z = distance * Math.cos(theta);
      
      positions.set([x, y, z], i * 3);
    }
    
    return positions;
  }, [particleCount]);

  // Optimized animation loop with throttling
  const frameCount = useRef(0);
  useFrame((state) => {
    if (!ref.current) return;
    
    // Throttle expensive calculations
    frameCount.current++;
    if (frameCount.current % 2 !== 0) return; // Run every other frame
    
    const time = state.clock.getElapsedTime();
    
    // Optimized rotation calculation
    ref.current.rotation.x = time * 0.1 + mousePosition.normalizedY * 0.05;
    ref.current.rotation.y = time * 0.05 + mousePosition.normalizedX * 0.05;
    
    // Reduced scale animation frequency
    const scale = 1 + Math.sin(time) * 0.05;
    ref.current.scale.setScalar(scale);
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#8B5CF6"
        size={window.innerWidth < 768 ? 0.3 : 0.5} // Smaller on mobile
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

// Optimized floating geometry with LOD
const OptimizedFloatingGeometry = ({ 
  position, 
  mousePosition,
  index 
}: { 
  position: [number, number, number]; 
  mousePosition: { normalizedX: number; normalizedY: number };
  index: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const frameCount = useRef(0);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Stagger animation updates to reduce CPU load
    frameCount.current++;
    if (frameCount.current % (index + 2) !== 0) return;
    
    const time = state.clock.getElapsedTime();
    
    // Optimized floating animation
    meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.3;
    
    // Reduced rotation calculation frequency
    meshRef.current.rotation.x = time * 0.2 + mousePosition.normalizedY * 0.1;
    meshRef.current.rotation.y = time * 0.1 + mousePosition.normalizedX * 0.1;
    meshRef.current.rotation.z = time * 0.05;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[0.8, 0]} />
      <meshStandardMaterial
        color="#EC4899"
        transparent
        opacity={0.6}
        wireframe
        emissive="#EC4899"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

// Main optimized scene
const OptimizedScene = () => {
  const mousePosition = useMousePosition();
  
  // Reduced number of floating geometries for performance
  const geometryPositions = useMemo(() => [
    [-3, 1, 0] as [number, number, number],
    [3, -0.5, -1] as [number, number, number],
    [0, 2, -2] as [number, number, number],
  ], []);

  return (
    <>
      {/* Optimized lighting */}
      <ambientLight intensity={0.2} />
      
      {/* Dynamic lights with reduced intensity for performance */}
      <pointLight
        position={[mousePosition.normalizedX * 8, mousePosition.normalizedY * 8, 4]}
        intensity={0.8}
        color="#8B5CF6"
        distance={15}
        decay={2}
      />
      
      <pointLight
        position={[-mousePosition.normalizedX * 6, -mousePosition.normalizedY * 6, 2]}
        intensity={0.4}
        color="#EC4899"
        distance={12}
        decay={2}
      />

      {/* Optimized particle system */}
      <OptimizedParticleSystem mousePosition={mousePosition} />
      
      {/* Reduced floating geometries */}
      {geometryPositions.map((position, index) => (
        <OptimizedFloatingGeometry
          key={index}
          position={position}
          mousePosition={mousePosition}
          index={index}
        />
      ))}
      
      {/* Simplified orbit controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  );
};

const OptimizedThreeJSHero = () => {
  const canvasProps = useMemo(() => ({
    camera: { position: [0, 0, 8] as [number, number, number], fov: 75 },
    gl: { 
      antialias: window.devicePixelRatio < 2, // Disable on high DPI for performance
      alpha: true,
      powerPreference: "high-performance" as const,
      stencil: false,
      depth: false
    },
    dpr: Math.min(window.devicePixelRatio, 2), // Cap DPR for performance
  }), []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        {...canvasProps}
        className="w-full h-full"
      >
        <OptimizedScene />
      </Canvas>
    </div>
  );
};

export default OptimizedThreeJSHero;