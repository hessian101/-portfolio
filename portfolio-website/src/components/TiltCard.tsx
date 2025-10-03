import React, { useRef, useEffect } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  perspective?: number;
  scale?: number;
  style?: React.CSSProperties;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  intensity = 10,
  perspective = 1000,
  scale = 1.02,
  style = {},
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);
      
      const rotateX = deltaY * intensity;
      const rotateY = deltaX * intensity;
      
      card.style.transform = `
        perspective(${perspective}px) 
        rotateX(${-rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale(${scale})
      `;
    };

    const handleMouseLeave = () => {
      card.style.transform = `
        perspective(${perspective}px) 
        rotateX(0deg) 
        rotateY(0deg) 
        scale(1)
      `;
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity, perspective, scale]);

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-300 ease-out transform-gpu ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default TiltCard;