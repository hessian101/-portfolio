import { useEffect, useRef } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

interface MouseTrackerProps {
  children: React.ReactNode;
}

const MouseTracker = ({ children }: MouseTrackerProps) => {
  const mousePosition = useMousePosition();
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (spotlightRef.current) {
      spotlightRef.current.style.background = `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15) 0%, transparent 100%)`;
    }
  }, [mousePosition]);

  return (
    <div className="relative">
      {/* Mouse-following spotlight */}
      <div
        ref={spotlightRef}
        className="fixed inset-0 pointer-events-none z-30 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15) 0%, transparent 100%)`,
        }}
      />
      
      {/* Gradient that follows cursor */}
      <div
        className="fixed inset-0 pointer-events-none z-20 transition-all duration-500 ease-out opacity-30"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 100%)`,
        }}
      />
      
      {children}
    </div>
  );
};

export default MouseTracker;