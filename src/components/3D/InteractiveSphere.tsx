import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import { Vector3 } from 'three';
import { motion } from 'framer-motion-3d';

const FloatingText = ({ text, position }: { text: string; position: Vector3 }) => {
  const textRef = useRef();

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = position.y + Math.sin(clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <Text3D
      ref={textRef}
      font="/fonts/helvetiker_regular.typeface.json"
      size={0.5}
      height={0.2}
      curveSegments={12}
      position={position}
    >
      {text}
      <meshNormalMaterial />
    </Text3D>
  );
};

const InteractiveMesh = () => {
  const meshRef = useRef();

  useFrame(({ mouse, viewport }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = mouse.y * 0.2;
      meshRef.current.rotation.y = mouse.x * 0.2;
    }
  });

  return (
    <motion.mesh
      ref={meshRef}
      animate={{
        rotateY: [0, Math.PI * 2],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshNormalMaterial wireframe />
    </motion.mesh>
  );
};

const InteractiveSphere = () => {
  return (
    <div className="h-[60vh] w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Center>
          <InteractiveMesh />
        </Center>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default InteractiveSphere;