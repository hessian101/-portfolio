import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const CustomCursor = () => {
  const mousePosition = useMousePosition();
  const trailLength = 8;

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full mix-blend-difference pointer-events-none z-50"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
      />
      
      {/* Cursor outline */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full mix-blend-difference pointer-events-none z-50"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      />
      
      {/* Trailing dots */}
      {Array.from({ length: trailLength }).map((_, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-40"
          style={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 1 - (index * 0.15),
            scale: 1 - (index * 0.1),
          }}
          transition={{
            type: "spring",
            damping: 30 - (index * 2),
            stiffness: 300 - (index * 20),
            delay: index * 0.02
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;